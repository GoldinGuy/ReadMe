import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClipboard,
	faDownload,
	faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useHistory } from "react-router-dom";
import QUOTES from "../utils/quotes";
import { boldQuery, downloadReadingList } from "../utils/gen";

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel
} from "react-accessible-accordion";

interface RecBook {
	title: string;
	author: string;
	image_url: string;
	url: string;
	tags: string;
	popular_shelves: string;
	description: string;
}

const MyListPage = () => {
	const location = useLocation();
	const history = useHistory();
	const LIST = location.state?.list ?? [];

	if (LIST.length <= 0) {
		history.push({
			pathname: "/"
		});
	}

	const makeReadingListString = async () => {
		var readingListString = "";
		await LIST.map((book: RecBook, idx: number) => {
			readingListString = readingListString.concat(
				idx + 1 + `) ${book.title} | ${book.author}\n`
			);
			return readingListString;
		});
		return readingListString;
	};

	return (
		<div className="bg-greener-50 text-center py-10 w-screen overflow-x-hidden ">
			<div className="pb-10 text-center md:text-lg w-screen sm:w-10/12 lg:w-9/12 overflow-hidden break-words   items-center m-auto justify-evenly hidden sm:flex">
				<button
					onClick={async () => {
						var copyText = await makeReadingListString();
						let input = document.createElement("input");
						input.setAttribute("type", "text");
						input.value = copyText;
						document.body.appendChild(input);
						input.select();
						document.execCommand("copy");
						document.body.removeChild(input);
					}}
					className="rounded-md h-8 bg-greener-400 text-md md:text-md text-greener hover:text-greener-dark font-bold focus:outline-none focus:border-0 self-center pr-8"
					title="Copy"
				>
					<FontAwesomeIcon icon={faClipboard} size={"lg"} />
					<span className="block">Copy</span>
				</button>
				<i className="text-center font-semibold text-grayest">
					{QUOTES[Math.floor(Math.random() * QUOTES.length)]}
				</i>
				{/* Your Reading List Has Been Generated! */}
				<button
					className="pl-8 rounded-md h-8 bg-greener-400 text-md md:text-md text-greener hover:text-greener-dark font-bold focus:outline-none focus:border-0 self-center"
					title="Download"
					onClick={async () => {
						var readingListString = await makeReadingListString();
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
			<Accordion allowZeroExpanded={true} preExpanded={["0"]}>
				{LIST?.map((book: RecBook, idx: number) => {
					return (
						<AccordionItem
							className="bg-white hover:bg-greener-lightest w-11/12 sm:w-9/12 lg:w-7/12 m-auto relative mb-1 rounded-md"
							uuid={idx.toString()}
						>
							<AccordionItemHeading>
								<AccordionItemButton
									className="pl-0 h-20  focus:outline-none focus:border-0 flex justify-between items-center text-grayest"
									key={idx + "-header-btn"}
								>
									<img
										key={book.tags[0] + "-img-" + book.title}
										alt="book-cover"
										className="h-20 w-14 rounded-md "
										src={book.image_url}
									/>
									<span className="px-6" key={idx + "-span"}>
										<span className="flex-col">
											<span
												className="text-base md:text-lg "
												key={book.tags[0] + "-title-" + book.title}
											>
												{book.title}
											</span>
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
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel
								className="p-8 focus:outline-none focus:border-0 text-grayest"
								key={idx + "-item-panel"}
							>
								{book.description.length > 1
									? boldQuery(book.description, book.title)
									: "No description provided."}
							</AccordionItemPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
};
export default MyListPage;
