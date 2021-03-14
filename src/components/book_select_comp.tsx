import { SelectSearchOption } from "react-select-search";

const NUM_REQUIRED = 3;

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
		<div className="mb-8 bg-indigo-300 w-screen flex items-center h-24 overflow-x-hidden">
			{selectedBooks.map((book, index) => {
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
					className="rounded-md px-6 h-14 bg-indigo-400 text-md md:text-lg text-gray-50 m-auto font-bold float-right focus:outline-none focus:border-0 mr-5 self-center hover:bg-yellow-300"
				>
					Generate Reading List
				</button>
			) : null}
		</div>
	);
};
export default BookSelections;
