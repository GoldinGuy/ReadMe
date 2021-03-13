import React from "react";
import { useLocation } from "react-router-dom";
import { SelectSearchOption } from "react-select-search";
import { HeaderComp, SearchComp, MyListComp } from "../components";

const ReadingListPage = () => {
	const MYLIST = [
		{
			name: "The Hunger Games",
			value: 2767052,
			photo: "https://images.gr-assets.com/books/1447303603s/2767052.jpg",
			type: "Suzanne Collins"
		},
		{
			name: "Harry Potter and the Philosopher's Stone",
			value: 3,
			photo: "https://images.gr-assets.com/books/1474154022s/3.jpg",
			type: "J.K. Rowling, Mary GrandPré"
		},
		{
			name: "Twilight",
			value: 41865,
			photo: "https://images.gr-assets.com/books/1361039443s/41865.jpg",
			type: "Stephenie Meyer"
		},
		{
			name: "To Kill a Mockingbird",
			value: 2657,
			photo: "https://images.gr-assets.com/books/1361975680s/2657.jpg",
			type: "Harper Lee"
		},
		{
			name: "The Great Gatsby",
			value: 4671,
			photo: "https://images.gr-assets.com/books/1490528560s/4671.jpg",
			type: "F. Scott Fitzgerald"
		},
		{
			name: "The Fault in Our Stars",
			value: 11870085,
			photo: "https://images.gr-assets.com/books/1360206420s/11870085.jpg",
			type: "John Green"
		},
		{
			name: "The Hobbit or There and Back Again",
			value: 5907,
			photo: "https://images.gr-assets.com/books/1372847500s/5907.jpg",
			type: "J.R.R. Tolkien"
		},
		{
			name: "The Catcher in the Rye",
			value: 5107,
			photo: "https://images.gr-assets.com/books/1398034300s/5107.jpg",
			type: "J.D. Salinger"
		},
		{
			name: "Angels & Demons",
			value: 960,
			photo: "https://images.gr-assets.com/books/1303390735s/960.jpg",
			type: "Dan Brown"
		}
	] as SelectSearchOption[];

	const location = useLocation();

	return (
		<div className="bg-indigo-50 h-screen">
			<HeaderComp />
			{location.pathname === "/mylist" ? (
				<MyListComp myList={MYLIST} />
			) : (
				<SearchComp />
			)}
		</div>
	);
};
export default ReadingListPage;
