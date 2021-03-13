import React from "react";
import { useLocation } from "react-router-dom";
import { SelectSearchOption } from "react-select-search";
import { HeaderComp, SearchComp, MyListComp } from "../components";

const ReadingListPage = () => {
	const MYLIST = [
		{
			name: "The Hunger Games",
			value: "The Hunger Games",
			photo: "https://images.gr-assets.com/books/1447303603s/2767052.jpg",
			type: "Suzanne Collins"
		},
		{
			name: "Harry Potter and the Philosopher's Stone",
			value: "Harry Potter and the Philosopher's Stone",
			photo: "https://images.gr-assets.com/books/1474154022s/3.jpg",
			type: "J.K. Rowling, Mary GrandPré"
		},
		{
			name: "Twilight",
			value: "Twilight",
			photo: "https://images.gr-assets.com/books/1361039443s/41865.jpg",
			type: "Stephenie Meyer"
		},
		{
			name: "To Kill a Mockingbird",
			value: "To Kill a Mockingbird",
			photo: "https://images.gr-assets.com/books/1361975680s/2657.jpg",
			type: "Harper Lee"
		},
		{
			name: "The Great Gatsby",
			value: "The Great Gatsby",
			photo: "https://images.gr-assets.com/books/1490528560s/4671.jpg",
			type: "F. Scott Fitzgerald"
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
