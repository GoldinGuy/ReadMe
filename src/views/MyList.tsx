import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDownload,
	faExternalLinkAlt,
	faShare
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import QUOTES from "../utils/quotes";
import { downloadReadingList } from "../utils/gen";

interface RecBook {
	title: string;
	author: string;
	image_url: string;
	url: string;
	tags: string;
	popular_shelves: string;
}

const MyListPage = () => {
	const location = useLocation();
	const LIST = location.state.list;

	return (
		<div className="bg-greener-50 text-center py-10 w-screen overflow-x-hidden ">
			<div className="pb-10 text-center md:text-lg w-screen sm:w-10/12 lg:w-9/12 overflow-hidden break-words flex  items-center m-auto justify-between">
				<button
					className="rounded-md h-8 bg-greener-400 text-md md:text-md text-greener hover:text-greener-dark font-bold focus:outline-none focus:border-0 self-center pr-8"
					title="Share"
				>
					<FontAwesomeIcon icon={faShare} size={"lg"} />
					<span className="block">Share</span>
				</button>
				<i className="text-center font-semibold text-grayest">
					{QUOTES[Math.floor(Math.random() * QUOTES.length)]}
				</i>
				{/* Your Reading List Has Been Generated! */}
				<button
					className="pl-8 rounded-md h-8 bg-greener-400 text-md md:text-md text-greener hover:text-greener-dark font-bold focus:outline-none focus:border-0 self-center"
					title="Download"
					onClick={async () => {
						var readingListString = "";
						await LIST.map((book: RecBook, idx: number) => {
							readingListString = readingListString.concat(
								idx + 1 + `) ${book.title} By: ${book.author}\n`
							);
							return readingListString;
						});
						downloadReadingList(
							readingListString,
							"text/plain",
							"myReadingList.txt"
						);
					}}
				>
					<FontAwesomeIcon icon={faDownload} size={"lg"} />
					<span className="block">Download</span>
				</button>
			</div>
			{LIST.map((book: RecBook, idx: number) => {
				return (
					<button
						className="bg-white pl-0 h-20 w-11/12 sm:w-9/12 lg:w-7/12 rounded-md hover:bg-greener-lightest m-auto relative mb-1 focus:outline-none focus:border-0 flex justify-between items-center text-grayest"
						key={idx + "-btn"}
					>
						<img
							key={book.tags[0] + "-img-" + book.title}
							alt="book-cover"
							className="h-20 w-14 rounded-md "
							src={book.image_url}
						/>
						<span className="px-6" key={idx + "-span"}>
							<span className="flex-col">
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
									className="block text-sm"
									key={book.title + "-author-" + book.title}
								>
									{book.author}
								</span>
							</span>
						</span>

						<a
							className="mr-3 text-grayest"
							href={book.url}
							/* 	TODO: Amazon href={`https://www.amazon.com/books/s?k=${encodeURIComponent(
								book.title
							)}+book`} */
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} size={"lg"} />
						</a>
					</button>
				);
			})}
		</div>
	);
};
export default MyListPage;
