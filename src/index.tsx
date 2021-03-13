import React from "react";
import ReactDOM from "react-dom";
import ReadingListPage from "./views/reading_list_page";
import "../src/styles/tailwind.output.css";
import "../src/styles/extended_styles.css";

ReactDOM.render(
	<React.StrictMode>
		<ReadingListPage />
	</React.StrictMode>,
	document.getElementById("root")
);
