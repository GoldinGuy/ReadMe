import React, { useState } from "react";
import SelectSearch, { SelectSearchOption } from "react-select-search";
import BOOKS from "../assets/csv_options.json";
import ReaderImg from "./img_comp";
import { useLocation, useHistory } from "react-router-dom";
import BookSelections from "./book_select_comp";

function shuffle(array: SelectSearchOption[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const SearchComp = ({ setMyList }: { setMyList: Function }) => {
	const books = BOOKS as SelectSearchOption[];
	const history = useHistory();
	const location = useLocation();

	const [selectedBooks, setSelectedBooks] = useState<SelectSearchOption[]>([]);

	const handleGenerateReadingList = async () => {
		// TODO: actually generate reading list
		await setMyList(selectedBooks);
		if (location.pathname !== "/mylist") {
			history.push({
				pathname: "/mylist"
			});
		}
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
				return "outline-none border-none bg-indigo-100 p-5 text-base md:text-lg w-11/12 md:w-6/12 rounded-md mb-2 focus:ring-2 focus:ring-indigo-300";
			case "option":
				return "bg-white pl-0 pb-1 h-20 w-11/12 md:w-6/12 rounded-md hover:bg-yellow-100 m-auto relative mb-1";
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
		<div className="text-center bg-indigo-50">
			<BookSelections
				handleGenerateReadingList={handleGenerateReadingList}
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
