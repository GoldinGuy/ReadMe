import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import ReadingListPage from "./views/reading_list_page";
// import MyListPage from "./views/my_list_page";
// styles
import "../src/styles/tailwind.output.css";
import "../src/styles/extended_styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path={["/", "/mylist"]} exact component={ReadingListPage} />
				{/* <Route path={"/mylist"} exact component={MyListPage} /> */}
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
