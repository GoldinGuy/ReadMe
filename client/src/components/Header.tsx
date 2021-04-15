import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const HeaderComp = () => {
	return (
		<>
			<div>
				<header className="z-30 w-full px-2 py-4 sm:px-4 bg-white shadow-sm">
					<div className="container flex items-center justify-between mx-auto">
						<Link to="/" className="flex items-center">
							<FontAwesomeIcon
								icon={faBook}
								className="h-9 text-greener-dark"
								size="lg"
							/>
							<strong className="text-greener-dark pl-3 text-lg">ReadMe</strong>
						</Link>
						<div className="flex items-center md:inline-flex">
							<Link to="/" className="text-grayest btn btn-sm btn-link mx-2">
								New Reading List
							</Link>
							<Link
								to="/github"
								className="text-grayest btn btn-sm btn-link mx-2"
							>
								How It Works
							</Link>
							{/* <a
								href="https://github.com/GoldinGuy/"
								target="_blank"
								rel="noreferrer"
								className="text-greener btn btn-sm btn-link font-bold mx-2"
							>
								@GoldinGuy
							</a> */}
							<a
								target="_blank"
								rel="noreferrer"
								className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-greener to-greener-dark hover:from-greener-lightest hover:to-greener-lighter"
								href="https://github.com/GoldinGuy/ReadMe"
							>
								Star ReadMe On GitHub 🌟
							</a>
						</div>
					</div>
				</header>
			</div>
		</>
	);
};
export default HeaderComp;
