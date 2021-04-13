import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faExternalLinkAlt,
	faShare
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

interface RecBook {
	title: string;
	author: string;
	image_url: string;
	url: string;
	tags: string;
	popular_shelves: string;
}

const MyListComp = () => {
	const location = useLocation();
	const LIST = location.state.list;

	console.log("LIST" + JSON.stringify(LIST));

	return (
		<div className="bg-greener-50 text-center py-10 w-screen overflow-x-hidden">
			<div className="pb-10 md:text-lg w-screen">
				<button
					className="rounded-md px-6 h-8 bg-greener-400 text-md md:text-md text-gray-50 m-auto font-bold focus:outline-none focus:border-0 mr-5 self-center"
					title="Share"
				>
					<FontAwesomeIcon icon={faShare} />
				</button>
				Your Reading List Has Been Generated!
				<button
					className="ml-4 rounded-md px-6 h-8 bg-greener-400 text-md md:text-md text-gray-50 m-auto font-bold focus:outline-none focus:border-0 mr-5 self-center"
					title="Download"
				>
					<FontAwesomeIcon icon={faDownload} />
				</button>
			</div>
			{LIST.map((book: RecBook, idx: number) => {
				return (
					<button className="bg-white pl-0 h-20 w-11/12 md:w-6/12 rounded-md hover:bg-yellow-100 m-auto relative mb-1 focus:outline-none focus:border-0 grid ">
						<span className="align-middle self-center">
							<span className="flex flex-col pl-14 sm:pl-0 self-center">
								<img
									key={book.tags[0] + "-img-" + book.title}
									alt="book-cover"
									className="h-20 w-14 float-left top-0 left-0 rounded-md absolute"
									src={book.image_url}
								/>
								<a
									href={book.url}
									target="_blank"
									rel="noreferrer"
									className="text-base md:text-lg "
									key={book.tags[0] + "-title-" + book.title}
								>
									{book.title}
								</a>
								<span
									className="text-sm"
									key={book.title + "-author-" + book.title}
								>
									{book.author}
								</span>
							</span>
						</span>

						<a
							className="float-right absolute right-0 top-6 mr-3 "
							href={`https://www.amazon.com/books/s?k=${encodeURIComponent(
								book.title
							)}+book`}
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</a>
					</button>
				);
			})}
		</div>
	);
};
export default MyListComp;
