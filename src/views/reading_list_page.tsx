import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderComp, SearchComp, MyListComp } from "../components";

const ReadingListPage = () => {
	const [myList, setMyList] = useState([]);

	const location = useLocation();

	return (
		<div className="bg-indigo-50 h-screen">
			<HeaderComp />
			{location.pathname === "/mylist" ? (
				<MyListComp myList={myList} />
			) : (
				<SearchComp setMyList={setMyList} />
			)}
		</div>
	);
};
export default ReadingListPage;
