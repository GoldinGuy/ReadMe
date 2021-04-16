import React, { useState } from "react";
import SelectSearch, { SelectSearchOption } from "react-select-search";
import BOOKS from "../assets/book_data/final_books.json";
import { BookPanel, ReadImg } from "../components";
import { useHistory } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const ReadSelectionPage = () => {
	const history = useHistory();
	const books = BOOKS as SelectSearchOption[];
	const [selectedBooks, setSelectedBooks] = useState<SelectSearchOption[]>([]);
	const [loading, setLoading] = useState(false);

	const handleGenerateReadingList = async () => {
		setLoading(true);
		const liked_books: string[] = [];
		selectedBooks.forEach(book => {
			liked_books.push(book.name);
		});
		// http://127.0.0.1:5000/
		await fetch("https://readme-api.herokuapp.com/fetch_recs", {
			method: "POST",
			headers: {
				Content_Type: "application/json"
			},
			body: JSON.stringify({
				liked_books: liked_books,
				count: 25
			})
		})
			.then(response => {
				if (response.ok) {
					console.log(JSON.stringify(response.url));
					return response.json();
				}
			})
			.then(async data => {
				setLoading(false);
				// console.log(data);
				history.push({
					pathname: "/mylist",
					state: { list: data }
				});
			});
	};

	const getBooks = async (query: string): Promise<SelectSearchOption[]> => {
		return books.length > 0 ? books.slice(0, 15) : []; //shuffle(books)
	};

	const renderBook = (
		props: any,
		option: any,
		snapshot: any,
		className: string
	) => {
		return (
			<button
				{...props}
				className={className}
				type="button"
				key={option.name + "-but"}
			>
				<span className="align-middle" key={option.name + "-span"}>
					<span
						className="flex flex-col pl-14 sm:pl-4"
						key={option.name + "-span2"}
					>
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
				return "outline-none border-none bg-white p-5 text-greener-darker text-base  md:text-lg w-11/12 sm:w-9/12 lg:w-7/12 rounded-md mb-2 focus:ring-1 focus:ring-greener shadow-md";
			case "option":
				return "bg-white pl-0 pb-1 h-20 w-11/12 sm:w-9/12 lg:w-7/12 xl:w-6/12 rounded-md hover:bg-greener-lightest m-auto relative mb-1";
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
					if (book.name?.length > 0) {
						return (
							(book.name.toLowerCase().includes(query.toLowerCase()) ||
								book.type?.toLowerCase().includes(query.toLowerCase())) &&
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
			// console.log(selectedBooks);
		}
	};

	return (
		<div className="bg-grayer text-center m-auto">
			<BookPanel
				handleGenerateReadingList={handleGenerateReadingList}
				setSelectedBooks={setSelectedBooks}
				selectedBooks={selectedBooks}
			/>
			{!loading && (
				<>
					<div className="text-center">
						<h2 className="text-3xl text-grayest font-bold">
							Find books you'll enjoy!
						</h2>
						<p className="text-xl text-grayest mx-8 sm:mx-28 md:mx-40 my-6">
							Simply enter a few books you've read and enjoyed recently, and
							we'll analyze over <strong>10000 books</strong> and{" "}
							<strong>14 million ratings</strong> to determine some sweet
							selections
						</p>
					</div>
					<SelectSearch
						options={books.slice(0, 15) ?? []}
						search={true}
						getOptions={getBooks}
						autoFocus={true}
						filterOptions={filterOptions}
						autoComplete={"on"}
						onChange={onChange}
						placeholder={
							selectedBooks.length === 0
								? "Enter the title or author of a book to begin"
								: "Enter the title or author of another book for better predictions"
						}
						className={getClassNames}
						renderOption={renderBook}
					/>
				</>
			)}
			<div className="m-auto mt-10 ">
				<ReadImg />
			</div>
			<div className="m-auto mt-10 ">
				<PropagateLoader color={"#52b788"} loading={loading} size={25} />
			</div>
		</div>
	);
};
export default ReadSelectionPage;
