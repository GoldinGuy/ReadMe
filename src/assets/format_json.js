// import { book_list } from "../book_list.json";
var fs = require("fs");
// var ndjsonToJsonText = require("ndjson-to-json-text");
// var ndjson = fs.readFileSync("./found_books_filtered.ndjson", "utf8");
var csv = fs.readFileSync("./books.csv", "utf8");

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

// var json = ndjson.toString().trim().split("\n").map(JSON.parse);

// for (let book of json) {
// 	var newBook = {};
// 	newBook["title"] = book[0];
// 	newBook["author"] = book[1]["author"];
// 	newBook["title"] = book[1];

// 	book_list.push(newBook);
// }

for (let obj of csvJson) {
	console.log(obj);
	book_list.push({
		name: obj["original_title,"] ?? "",
		value: obj["best_book_id,"] ?? "",
		photo: obj["small_image_url"] ?? "",
		type: obj["authors,"] ?? ""
	});
}

// fs.writeFileSync(
// 	"books.json",
// 	JSON.stringify(json, null, 4),
// 	function (err, file) {
// 		if (err) throw err;
// 		console.log("Saved!");
// 	}
// );

fs.writeFileSync(
	"csv_options.json",
	JSON.stringify(book_list, null, 4),
	function (err, file) {
		if (err) throw err;
		console.log("Saved!");
	}
);
