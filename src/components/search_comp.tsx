import React, { useState } from "react";
import SelectSearch, { SelectSearchOption } from "react-select-search";
import ReaderImg from "./img_comp";
import BookSelections from "./book_select_comp";
// import * as tf from "@tensorflow/tfjs";
// import book_idx from "../assets/weights/book_idx.json";
// import idx_book from "../assets/weights/idx_book.json";
// import weights from "../assets/weights/book_weights.json";
import BOOKS from "../assets/new_books.json";
import { multiply } from "mathjs";

// function shuffle(array: SelectSearchOption[]) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// 	return array;
// }

// function argSort(array) {
// 	let decor = (v, i) => [v, i]; // set index to value
// 	let undecor = a => a[1]; // leave only index
// 	let argsort = arr => arr.map(decor).sort().map(undecor);
// 	return argsort(array);
// }

// function generateReadingList(liked_books: SelectSearchOption[]) {
// 	var reading_list_ids: number[] = [];
// 	var reading_list: string[] = [];
// 	// generate list of ids similar to liked books
// 	for (let book of liked_books) {
// 		// console.log(weights[book_idx[book.name]]);
// 		var dists = multiply(weights, weights[book_idx[book.name]]);
// 		var sorted_dists = argSort(dists);
// 		var closest = sorted_dists.slice(
// 			sorted_dists.length - 10,
// 			sorted_dists.length
// 		);
// 		reading_list_ids.push(...closest);
// 	}
// 	reading_list_ids = reading_list_ids.sort().reverse();
// 	// remove dups
// 	reading_list_ids = reading_list_ids.filter((v, i, a) => a.indexOf(v) === i);
// 	for (let b of reading_list_ids) {
// 		if (!liked_books.includes(idx_book[b])) {
// 			reading_list.push(idx_book[b]);
// 		}
// 	}
// 	return reading_list.slice(reading_list.length - 6, reading_list.length);
// }

const SearchComp = ({ setMyList }: { setMyList: Function }) => {
	const books = BOOKS as SelectSearchOption[];

	const [selectedBooks, setSelectedBooks] = useState<SelectSearchOption[]>([]);

	const handleGenerateReadingList = async () => {
		// tf.loadLayersModel("../assets/models/book_recs.json").then(model => {
		// 	// @ts-ignore
		// 	window.model = model;
		// });
		// var readingList: SelectSearchOption[] = [];
		// for (let book of generateReadingList(selectedBooks)) {
		// 	books.forEach(obj => {
		// 		if (book === obj.name) {
		// 			readingList.push(obj);
		// 			return;
		// 		}
		// 	});
		// }
		// await setMyList(readingList);
	};

	const getBooks = async (query: string): Promise<SelectSearchOption[]> => {
		return books.length > 0 ? books.slice(0, 15) : []; //shuffle(books)
	};

	const renderBook = (props, option, snapshot, className: string) => {
		return (
			<button
				{...props}
				className={className}
				type="button"
				key={option.name + "-but"}
			>
				<span className="align-middle">
					<span className="flex flex-col pl-14 sm:pl-4">
						<img
							key={option.name + "-img"}
							alt="book-cover"
							className="h-20 w-14 float-left top-0 left-0 rounded-md absolute"
							src={option.photo}
						/>
						<span
							className="text-base md:text-lg "
							key={option.name + "-title"}
						>
							{option.name}
						</span>
						<span className="text-sm" key={option.name + "-author"}>
							{option.type}
						</span>
					</span>
				</span>
			</button>
		);
	};

	const getClassNames = (key: string): string => {
		switch (key) {
			case "input":
				return "outline-none border-none bg-white p-5 text-greener-darker text-base md:text-lg w-11/12 md:w-7/12 rounded-md mb-2 focus:ring-1 focus:ring-greener shadow-md";
			case "option":
				return "bg-white pl-0 pb-1 h-20 w-11/12 md:w-6/12 rounded-md hover:bg-greener-lighter m-auto relative mb-1";
			case "options":
				return "";
			case "container":
				return "box-border";
			default:
				return "";
		}
	};

	const filterOptions = (options: SelectSearchOption[]) => (
		query: string
	): SelectSearchOption[] => {
		if (options.length > 0) {
			return books
				.filter(book => {
					if (book.name.length > 0) {
						return (
							book.name.toLowerCase().includes(query.toLowerCase()) &&
							!selectedBooks.includes(book)
						);
					}
					return false;
				})
				.slice(0, 15);
		} else {
			return options;
		}
	};

	const onChange = (value: any) => {
		var newValue = books.find(book => book.value === value);
		if (newValue !== undefined && !selectedBooks.includes(newValue)) {
			setSelectedBooks([...selectedBooks, newValue]);
			console.log(selectedBooks);
		}
	};

	return (
		<div className="bg-grayer text-center">
			<BookSelections
				handleGenerateReadingList={handleGenerateReadingList}
				setSelectedBooks={setSelectedBooks}
				selectedBooks={selectedBooks}
			/>
			<div className="text-center">
				<h2 className="text-3xl text-grayest font-bold">
					Find books you'll enjoy!
				</h2>
				<p className="text-xl text-grayest mx-40 my-6">
					Simply enter a few books you've read and enjoyed recently, and we'll
					analyze over <strong>10000 books</strong> and{" "}
					<strong>6 million ratings</strong> to determine some sweet selections
				</p>
				{/* <FontAwesomeIcon icon={faSearch} /> */}
			</div>
			<SelectSearch
				options={books.slice(0, 15)}
				search={true}
				getOptions={getBooks}
				autoFocus={true}
				filterOptions={filterOptions}
				autoComplete={"on"}
				onChange={onChange}
				// multiple={true}
				placeholder="Enter the title or author of a book to start"
				className={getClassNames}
				renderOption={renderBook}
			/>

			{/* <div className="m-auto mt-10 md:mt-20 md:mb-16">
				<ReaderImg />
			</div> */}
		</div>
	);
};
export default SearchComp;
