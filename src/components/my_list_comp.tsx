import React from "react";
import { SelectSearchOption } from "react-select-search";

const MyListComp = ({ myList }: { myList: SelectSearchOption[] }) => {
	return (
		<div className="bg-indigo-50 h-screen">
			{myList.map((book, index) => {
				return (
					<button className="h-full border-none outline-none focus:outline-none focus:border-0 ">
						<img
							src={book.photo}
							alt="book-cover"
							className="h-full "
							title={book.name}
						/>
					</button>
				);
			})}
		</div>
	);
};
export default MyListComp;
