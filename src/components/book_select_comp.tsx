import { SelectSearchOption } from "react-select-search";

const NUM_REQUIRED = 1; // 3

const BookSelections = ({
	selectedBooks,
	setSelectedBooks,
	handleGenerateReadingList
}: {
	selectedBooks: SelectSearchOption[];
	setSelectedBooks: Function;
	handleGenerateReadingList: Function;
}) => {
	const removeSelectedBook = (book: SelectSearchOption) => {
		setSelectedBooks(
			selectedBooks.filter(selected => {
				return book !== selected;
			})
		);
	};

	return (
		<div className="mb-8 bg-greener-light w-screen flex items-center h-24 overflow-x-hidden shadow-md">
			{selectedBooks.map((book, idx) => {
				return (
					<button
						className="h-full border-none outline-none focus:outline-none focus:border-0 "
						onClick={() => removeSelectedBook(book)}
					>
						<img
							src={book.photo}
							alt="book-cover"
							className="h-full "
							title={book.name}
						/>
					</button>
				);
			})}
			{selectedBooks.length >= NUM_REQUIRED ? (
				<button
					onClick={() => handleGenerateReadingList()}
					className="rounded-md px-1.5 sm:px-6 h-14 bg-greener-dark text-md md:text-lg text-gray-50 m-auto font-bold float-right focus:outline-none focus:border-0 mr-1 md:mr-10 self-center hover:bg-greener"
				>
					Generate List
				</button>
			) : null}
		</div>
	);
};
export default BookSelections;
