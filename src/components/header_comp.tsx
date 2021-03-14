import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/512.png";
import img from "../assets/img/girl.png";

const HeaderComp = () => {
	return (
		<>
			<div>
				<header className="z-30 w-full px-2 py-4 sm:px-4 bg-indigo-400">
					<div className="container flex items-center justify-between mx-auto">
						<Link to="/" className="flex items-center">
							<img src={logo} alt="logo" className="h-10" draggable="false" />
							<strong className="text-gray-100 pl-4 text-lg">
								ReadingList
							</strong>
						</Link>
						<div className="flex items-center space-x-1">
							<div className="hidden space-x-1 md:inline-flex">
								<Link
									to="/mylist"
									href="#"
									className="text-gray-200 btn btn-sm btn-link"
								>
									My List
								</Link>
								<Link
									to="/"
									href="#"
									className="text-gray-200 btn btn-sm btn-link"
								>
									View Code
								</Link>
								<a
									href="https://github.com/GoldinGuy/"
									target="_blank"
									rel="noreferrer"
									className="text-yellow-400 btn btn-sm btn-link font-bold"
								>
									@GoldinGuy
								</a>
							</div>
						</div>
					</div>
				</header>
				{/* Remove the div below */}
				{/* <div className="bg-amber-50 text-center">
					<img
						src={img}
						alt="logo"
						className="m-auto  max-h-80"
						draggable="false"
					/>
				</div> */}
			</div>
		</>
	);
};
export default HeaderComp;
