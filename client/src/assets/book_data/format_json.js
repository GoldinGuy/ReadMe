// var book_list = require("./book_list.json");
var fs = require("fs");
// var ndjsonToJsonText = require("ndjson-to-json-text");
// var ndjson = fs.readFileSync("./found_books_filtered.ndjson", "utf8");
var csv = fs.readFileSync("./books.csv", "utf8");
// var csvOps = require("./csv_options.json");

const csvToJson = (str, headerList, quotechar = '"', delimiter = ",") => {
	const cutlast = (_, i, a) => i < a.length - 1;
	// const regex = /(?:[\t ]?)+("+)?(.*?)\1(?:[\t ]?)+(?:,|$)/gm; // no variable chars
	const regex = new RegExp(
		`(?:[\\t ]?)+(${quotechar}+)?(.*?)\\1(?:[\\t ]?)+(?:${delimiter}|$)`,
		"gm"
	);
	const lines = str.split("\n");
	const headers =
		headerList || lines.splice(0, 1)[0].match(regex).filter(cutlast);

	const list = [];

	for (const line of lines) {
		const val = {};
		for (const [i, m] of [...line.matchAll(regex)].filter(cutlast).entries()) {
			// Attempt to convert to Number if possible, also use null if blank
			val[headers[i]] = m[2].length > 0 ? Number(m[2]) || m[2] : null;
		}
		list.push(val);
	}

	return list;
};

var csvJson = csvToJson(csv);

var book_list = [];

for (let csv_obj of csvJson) {
	book_list.push({
		name: csv_obj["title,"],
		value: csv_obj["best_book_id,"] ?? "",
		photo: csv_obj["small_image_url"] ?? "",
		type:
			`${csv_obj["authors,"]},`.substring(
				0,
				(`${csv_obj["authors,"]},` ?? "").indexOf(",")
			) ?? ""
	});
}

// var json = ndjson.toString().trim().split("\n").map(JSON.parse);

// for (let book of json) {
// 	var newBook = {};
// 	newBook["title"] = book[0];
// 	newBook["author"] = book[1]["author"];
// 	newBook["title"] = book[1];

// 	book_list.push(newBook);
// }

// for (let i in bookJson) {
// console.log(bookJson[i]);
// for (let csv_obj of csvJson) {
// 	let csvName =
// 		((csv_obj["original_title,"] ?? "").length > 0
// 			? csv_obj["original_title,"]
// 			: csv_obj["title,"]) ?? "";
// 	if (
// 		json_obj[0].toLowerCase().includes(csvName) &&
// 		(csv_obj["authors,"] ?? "").includes(json_obj[1]["author"].toLowerCase())
// 	) {
// 		book_list.push({
// 			name: json_obj[0],
// 			value: csv_obj["best_book_id,"] ?? "",
// 			photo: csv_obj["small_image_url"] ?? "",
// 			type: csv_obj["authors,"] ?? ""
// 		});
// 		console.log(json_obj[0]);
// 	}
// }
// }

// var book_names = [];

// for (let obj of book_list) {
// 	if (!book_names.includes(obj["name"])) {
// 		let book = {
// 			name: obj["name"],
// 			value: obj["value"],
// 			photo: "",
// 			type: obj["type"]
// 		};
// 		// console.log(book);
// 		for (let goodObj of csvOps) {
// 			let objname = book.name.toLowerCase();
// 			if (objname.indexOf("(") !== -1) {
// 				objname = objname.substring(0, objname.indexOf("("));
// 			}
// 			if (objname.trim() === goodObj["name"].toString().toLowerCase().trim()) {
// 				book["photo"] = goodObj["photo"];
// 				book["type"] = goodObj["type"];
// 				book["value"] = goodObj["value"];
// 				break;
// 			}
// 		}
// 		if (book["photo"].length === 0) {
// 			book["photo"] =
// 				"https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png";
// 		}

// 		books.push(book);
// 		book_names.push(book.name);
// 	}
// }

// fs.writeFileSync(
// 	"new_books.json",
// 	JSON.stringify(books, null, 4),
// 	function (err, file) {
// 		if (err) throw err;
// 		console.log("Saved!");
// 	}
// );

fs.writeFileSync(
	"final_books.json",
	JSON.stringify(book_list, null, 4),
	function (err, file) {
		if (err) throw err;
		console.log("Saved!");
	}
);
