import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { HeaderComp, SearchComp, MyListComp } from "../components";

const ReadingListPage = () => {
	const [myList, setMyList] = useState([]);

	const location = useLocation();
	// const history = useHistory();

	// useEffect(() => {
	// 	if (location.pathname !== "/mylist" && myList.length > 0) {
	// 		history.push({
	// 			pathname: "/mylist"
	// 		});
	// 	}
	// }, [myList, history, location.pathname]);

	return (
		<div className="bg-grayer h-screen overflow-x-hidden overflow-y-scroll">
			<HeaderComp />
			{location.pathname === "/mylist" ? (
				<MyListComp />
			) : (
				<SearchComp setMyList={setMyList} />
			)}
		</div>
	);
};
export default ReadingListPage;
