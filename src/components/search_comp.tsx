import React, { useEffect, useState } from "react";
import SelectSearch, { SelectSearchOption } from "react-select-search";
import BOOKS from "../assets/csv_options.json";
import ReaderImg from "./img_comp";

const SearchComp = () => {
	const books = BOOKS as SelectSearchOption[];
	// const [books, setBooks] = useState<SelectSearchOption[]>([]);

	// useEffect(() => {
	// 	if (books.length === 0) {
	// 		import("../assets/csv_options.json").then(BOOKS => {
	// 			setBooks(BOOKS as SelectSearchOption[]);
	// 		});
	// 	}
	// });

	const [selectedBooks, setSelectedBooks] = useState<SelectSearchOption[]>([]);

	const getBooks = async (query: string): Promise<SelectSearchOption[]> => {
		return books.length > 0 ? books.slice(0, 15) : [];
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
					<span className="flex flex-col pl-14 sm:pl-0">
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
				return "outline-none border-none bg-indigo-100 p-5 text-base md:text-lg w-11/12 md:w-6/12 rounded-md mb-2 focus:ring-2 focus:ring-indigo-300"; //  text-indigo-700
			case "option":
				return "bg-gray-50 pl-0 pb-1 h-20 w-11/12 md:w-6/12 rounded-md hover:bg-yellow-300 m-auto relative mb-1";
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
		// console.log(value);
		var newValue = books.find(book => book.value === value);
		if (newValue !== undefined && !selectedBooks.includes(newValue)) {
			setSelectedBooks([...selectedBooks, newValue]);
			console.log(selectedBooks);
		}
	};

	return (
		<div className="text-center bg-indigo-50">
			<BookSelections
				setSelectedBooks={setSelectedBooks}
				selectedBooks={selectedBooks}
			/>
			<SelectSearch
				options={books.slice(0, 15)}
				search={true}
				getOptions={getBooks}
				autoFocus={true}
				filterOptions={filterOptions}
				autoComplete={"on"}
				onChange={onChange}
				// multiple={true}
				placeholder="Enter 3-5 books you've read and enjoyed"
				className={getClassNames}
				renderOption={renderBook}
			/>

			<div className="m-auto mt-10 md:mt-20 md:mb-16">
				<ReaderImg />
			</div>
		</div>
	);
};
export default SearchComp;

const BookSelections = ({
	selectedBooks,
	setSelectedBooks
}: {
	selectedBooks: SelectSearchOption[];
	setSelectedBooks: Function;
}) => {
	const removeSelectedBook = (book: SelectSearchOption) => {
		setSelectedBooks(
			selectedBooks.filter(selected => {
				return book !== selected;
			})
		);
	};

	return (
		<div className="mb-8 bg-indigo-300 w-screen flex items-center h-24">
			{selectedBooks.map((book, index) => {
				return (
					<button
						className="h-full border-none outline-none focus:outline-none focus:border-0 "
						onClick={() => removeSelectedBook(book)}
					>
						<img
							src={book.photo}
							alt="book-cover"
							className="h-full "
							title={book.name}
						/>
					</button>
				);
			})}
			{selectedBooks.length >= 2 ? (
				<button className="rounded-md px-6 h-14 bg-yellow-400 text-md md:text-lg text-gray-50 m-auto font-bold float-right focus:outline-none focus:border-0 mr-5 self-center">
					Generate Reading List
				</button>
			) : null}
		</div>
	);
};
export { BookSelections };
