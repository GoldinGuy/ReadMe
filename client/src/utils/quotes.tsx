const INSPIRING_QUOTES = [
	[
		"“Once you learn to read, you will be forever free.” ",
		<br />,
		"— Frederick Douglass"
	],
	[
		"“The more that you read, the more things you will know. The more you learn, the more places you’ll go.”",
		<br />,
		"— Dr. Seuss"
	],
	[
		"“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.” ",
		<br />,
		"— Groucho Marx"
	],
	[
		"“There are many little ways to enlarge your world. Love of books is the best of all.” ",
		<br />,
		"— Jacqueline Kennedy"
	],
	["“Today a reader, tomorrow a leader.” ", <br />, "— Margaret Fuller"],
	[
		"“There is more treasure in books than in all the pirate’s loot on Treasure Island.” ",
		<br />,
		"— Walt Disney"
	],
	[
		"“There are worse crimes than burning books. One of them is not reading them.” ",
		<br />,
		"— Ray Bradbury"
	],
	[
		"“Reading without reflecting is like eating without digesting.” ",
		<br />,
		"— Edmund Burke"
	],
	[
		"“The reading of all good books is like conversation with the finest (people) of the past centuries.” ",
		<br />,
		"— Descartes"
	],
	[
		"“Reading is to the mind what exercise is to the body.” ",
		<br />,
		"— Richard Steele"
	],
	["“Reading is a discount ticket to everywhere.” ", <br />, "— Mary Schmich"],
	["“Books are a uniquely portable magic.” ", <br />, "— Stephen King"],
	[
		"“No entertainment is so cheap as reading, nor any pleasure so lasting.” ",
		<br />,
		"— Lady Montagu"
	],
	[
		"“To learn to read is to light a fire” ",
		<br />,
		"— Victor Hugo, Les Miserables"
	],
	[
		"“You can find magic wherever you look. Sit back and relax all you need is a book!” ",
		<br />,
		"— Dr. Seuss"
	],
	[
		"“Books train your mind to imagination to think big” ",
		<br />,
		"— Taylor Swift"
	],
	[
		"“Reading is to the mind what exercise is to the body” ",
		<br />,
		"— Joseph Addison"
	],
	[
		"“The whole world opened up to me when I learned to read” ",
		<br />,
		"— Mary McCleod Bethune"
	],
	[
		"“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” ",
		<br />,
		"— George R.R. Martin"
	],
	[
		"“Until I feared I would lose it, I never loved to read. One does not love breathing.” ",
		<br />,
		"— Harper Lee"
	],
	[
		"“Never trust anyone who has not brought a book with them.” ",
		<br />,
		"— Lemony Snicket"
	],
	[
		"“You can never get a cup of tea large enough or a book long enough to suit me.” ",
		<br />,
		"— C.S. Lewis"
	],
	[
		"“‘Classic’ - a book which people praise and don’t read.” ",
		<br />,
		"— Mark Twain"
	],
	[
		"“I can survive well enough on my own — if given the proper reading material.” ",
		<br />,
		"— Sarah J. Maas"
	],
	[
		"“One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.” ",
		<br />,
		"— Carl Sagan"
	],
	[
		"“Once you learn to read, you will be forever free.” ",
		<br />,
		"— Frederick Douglas"
	],
	[
		"“Show me a family of readers, and I will show you the people who move the world.” ",
		<br />,
		"— Napoléon Bonaparte"
	],
	[
		"“If you don’t like to read, you haven’t found the right book.” ",
		<br />,
		"— J.K. Rowling"
	],
	[
		"“Despite the enormous quantity of books, how few people read! And if one reads profitably, one would realize how much stupid stuff the vulgar herd is content to swallow every day.” ",
		<br />,
		"— Voltaire"
	],
	[
		"“Outside of a dog, a book is a man’s best friend. Inside of a dog, it’s too dark to read.” ",
		<br />,
		"— Groucho Marx"
	],
	[
		"“I always read. You know how sharks have to keep swimming or they die? I’m like that. If I stop reading, I die.” ",
		<br />,
		"— Patrick Rothfuss"
	],
	[
		"“There is no Frigate like a Book To take us Lands away” ",
		<br />,
		"— Emily Dickinson"
	],
	[
		"“I intend to put up with nothing that I can put down.” ",
		<br />,
		"— Edgar Allan Poe"
	],
	[
		"“I took a speed-reading course and read War and Peace in twenty minutes. It involves Russia.” ",
		<br />,
		"— Woody Allen"
	],
	[
		"“I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! — When I have a house of my own, I shall be miserable if I have not an excellent library.” ",
		<br />,
		"— Jane Austen"
	],
	[
		"“Reading for me, is spending time with a friend.” ",
		<br />,
		"— Gary Paulsen"
	],
	[
		"“Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for.” ",
		<br />,
		"— Socrates"
	],
	[
		"“Fools have a habit of believing that everything written by a famous author is admirable. For my part I read only to please myself and like only what suits my taste.” ",
		<br />,
		"— Voltaire"
	],
	[
		"“Reading is a basic tool in the living of a good life.” ",
		<br />,
		"— Mortimer J. Adler"
	],
	[
		"“How many a man has dated a new era in his life from the reading of a book.” ",
		<br />,
		"— Henry David Thoreau"
	],
	[
		"“From the reading of ‘good books’ there comes a richness of life that can be obtained in no other way.” ",
		<br />,
		"— Gordon B. Hinckley"
	],
	[
		"“A children’s story that can only be enjoyed by children is not a good children’s story in the slightest.” ",
		<br />,
		"— C.S. Lewis"
	],
	[
		"“It is a great thing to start life with a small number of really good books which are your very own.” ",
		<br />,
		"— Sir Arthur Conan Doyle"
	],
	[
		"“What kind of life can you have in a house without books?” ",
		<br />,
		"— Sherman Alexie"
	],
	[
		"“Never put off till tomorrow the book you can read today.” ",
		<br />,
		"— Holbrook Jackson"
	],
	[
		"“What better occupation, really, than to spend the evening at the fireside with a book, with the wind beating on the windows and the lamp burning bright.” ",
		<br />,
		"— Gustave Flaubert"
	],
	[
		"“Reading should not be presented to children as a chore, a duty. It should be offered as a gift.” ",
		<br />,
		"— Kate DiCamillo"
	],
	[
		"“A capacity, and taste, for reading gives access to whatever has already been discovered by others.” ",
		<br />,
		"— Abraham Lincoln"
	],
	[
		"“Reading is an exercise in empathy; an exercise in walking in someone else’s shoes for a while.” ",
		<br />,
		"— Malorie Blackman"
	],
	[
		"“Reading is to the mind what exercise is to the body.” ",
		<br />,
		"— Joseph Addiso"
	],
	[
		"“Books are mirrors: You only see in them what you already have inside you.” ",
		<br />,
		"— Carlos Ruiz Zafón"
	],
	[
		"“Think before you speak. Read before you think.” ",
		<br />,
		"— Fran Lebowitz"
	],
	[
		"“Let’s be reasonable and add an eighth day to the week that is devoted exclusively to reading.” ",
		<br />,
		"— Lena Dunham"
	],
	[
		"“I can feel infinitely alive curled up on the sofa reading a book.” ",
		<br />,
		"— Benedict Cumberbatch"
	],
	["“We read to know we are not alone.” ", <br />, "— C.S. Lewis"],
	[
		"“At a time when book banning is back in vogue, libraries remind us that truth isn’t about who yells the loudest, but who has the right information.” ",
		<br />,
		"— Barack Obama"
	],
	[
		"“Reading one book is like eating one potato chip.” ",
		<br />,
		"— Diane Duane"
	],
	[
		"“I like books that aren’t just lovely but that have memories in themselves. Just like playing a song, picking up a book again that has memories can take you back to another place or another time.” ",
		<br />,
		"— Emma Watson"
	],
	[
		"“The person who deserves most pity is a lonesome one on a rainy day who doesn’t know how to read.” ",
		<br />,
		"— Benjamin Franklin"
	],
	[
		"“She read books as one would breathe air, to fill up and live.” ",
		<br />,
		"— Annie Dillard"
	],
	[
		"“I kept always two books in my pocket, one to read, one to write in.” ",
		<br />,
		"— Robert Louis Stevenson"
	],
	[
		"“Books are the plane, and the train, and the road. They are the destination and the journey. They are home.” ",
		<br />,
		"— Anna Quindlen"
	],
	[
		"“Reading is important. If you know how to read, then the whole world opens up to you.” ",
		<br />,
		"— Barack Obama"
	],
	[
		"“Reading is still the main way that I both learn new things and test my understanding.” ",
		<br />,
		"— Bill Gates"
	],
	[
		"“I do believe something very magical can happen when you read a good book.” ",
		<br />,
		"— J.K. Rowling"
	],
	[
		"“Books are the ultimate Dumpees: put them down, and they'll wait for you forever; pay attention to them, and they always love you back.” ",
		<br />,
		"— John Green"
	],
	[
		"“I always felt if I can get to a library, I'll be okay.” ",
		<br />,
		"— Maya Angelou"
	],
	[
		"“I get crazy in a bookstore. It makes my heart beat hard because I want to buy everything.” ",
		<br />,
		"— Reese Witherspoon"
	]
];
export default INSPIRING_QUOTES;
