import { useEffect, useState } from "react";
import SelectSearch, { SelectSearchOption } from "react-select-search";
import BOOKS from "../assets/csv_options.json";

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

	const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

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
				<span className="align-middle ">
					<span className="flex flex-col">
						<img
							key={option.name + "-img"}
							alt="book-cover"
							className="h-20 w-14 float-left top-0 left-0 rounded-md absolute"
							src={option.photo}
						/>
						<span className="text-lg" key={option.name + "-title"}>
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
				return "outline-none border-none bg-indigo-100 p-5 text-lg w-6/12 rounded-md mb-2"; //  text-indigo-700
			case "option":
				return "bg-gray-50 pl-0 pb-1 h-20 w-6/12 rounded-md hover:bg-yellow-300 m-auto relative mb-1";
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
							!selectedBooks.includes(book.name)
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
		if (!selectedBooks.includes(value)) {
			setSelectedBooks([...selectedBooks, value]);
			console.log(selectedBooks);
		}
	};

	return (
		<div className="text-center bg-indigo-50 mt-10">
			{selectedBooks}
			<SelectSearch
				options={books}
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
		</div>
	);
};
export default SearchComp;
