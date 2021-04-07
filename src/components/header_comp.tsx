import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/img/512.png";
// import img from "../assets/img/girl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const HeaderComp = () => {
	return (
		<>
			<div>
				<header className="z-30 w-full px-2 py-4 sm:px-4 bg-white shadow-sm">
					<div className="container flex items-center justify-between mx-auto">
						<Link to="/" className="flex items-center">
							{/* <img src={logo} alt="logo" className="h-10" draggable="false" /> */}
							<FontAwesomeIcon
								icon={faBook}
								className="h-9 text-greener-dark"
								size="lg"
							/>
							<strong className="text-greener-dark pl-3 text-lg">
								ReadingList
							</strong>
						</Link>
						<div className="flex items-center space-x-1">
							<div className="hidden md:inline-flex">
								<Link
									to="/mylist"
									href="#"
									className="text-grayest btn btn-sm btn-link mr-4"
								>
									My List
								</Link>
								<Link
									to="/"
									href="#"
									className="text-grayest btn btn-sm btn-link "
								>
									View Code
								</Link>
								<a
									href="https://github.com/GoldinGuy/"
									target="_blank"
									rel="noreferrer"
									className="text-greener btn btn-sm btn-link font-bold ml-4"
								>
									@GoldinGuy
								</a>
							</div>
						</div>
					</div>
				</header>
			</div>
		</>
	);
};
export default HeaderComp;
