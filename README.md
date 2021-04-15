# ReadMe Book Recommendation System

Building a book recommendation system has been a pet project idea of mine for a while. While my understanding of many of these data science concepts remains somewhat superficial, I have cobbled together something that works from several awesome resources. And hey, the front end looks nice!

![image](https://user-images.githubusercontent.com/47064842/114794952-82faee80-9d5b-11eb-9221-2cac37f014a0.png)

## How It Works

The ReadMe Recommendation System uses a combination of collaborative and content-based filtering to determine which books to suggest. Collaborative filtering, which is powered by around 14 million user ratings from Amazon and GoodReads, works by correlating books similar users enjoy. Content-based filtering uses metadata about the books themselves. There are a million other projects taking similar approaches — you can read about some of those in depth in the citations list. This project just has more newer, cleaner data and a nice front-end.

The collaborative-filtering recommendations are created using an [SVD](https://en.wikipedia.org/wiki/Singular_value_decomposition) matrix, which was the [Netflix-Prize](https://pantelis.github.io/cs301/docs/common/lectures/recommenders/netflix/) winning algorithm.

### Data Collection

This project uses 10000 books from [GoodBooks10k](https://github.com/zygmuntz/goodbooks-10k) and [Amazon](https://nijianmo.github.io/amazon/index.html), as well as a combined 14 million ratings. The data was downloaded and then cleaned in the `preprocessing` stage. Each of the following notebooks contain much slightly altered code from several of the sources in the `citations` section.

### Preprocessing

Preprocessing can be viewed in the [Preprocessing Jupyter Notebook](). In this file, GoodReads & Amazon data was imported, cleaned, and pickled. This includes cleaning html and removeing undesired characters in metadata, generating mappings of book titles and ids, comparing and merging the datasets, saving a cleaned dataframe to a pickle file, and fixing broken links.

### Networking

Networking can be viewed in the [Networking Jupyter Notebook](). In this file, two matrixes were generated: an [SVD](https://en.wikipedia.org/wiki/Singular_value_decomposition) collaborative-filtering ratings-based matrix, and a content-based feature matrix. These matrixes were then trained & fitted on the book data processed in the previous step and combined into a single dual hybrid system. The models were saved for use by the API.

### Recommendations

Sample recommendations can be viewed in the [Recommendations Jupyter Notebook](). In this file is a sample recommendations function using the model created in the previous step that generates recommendations for an input book.

```py
def make_book_recs(book_title, books, indices, weights, similarities):
```

The function accepts a book, the books dataframe pickled in the preprocessing step, a mapping of book_titles and book_ids, and the model from the networking stage after being entered into a cosine function to determine the similarity rankings between books. This function is taken directly from the `Books2Rec` project, because (as I also mention in the citations section), it's awesome and I used much of it as essentially a tutorial for ReadMe.

### Web App

The front-end for this project was built with [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/). The interface was created using [TailwindCSS](https://tailwindcss.com/). The user simply inputs any number of books they've read and enjoyed recently, and then click _Generate List_. This makes a **POST** request to the ReadMe api in the following format:

```ts
const NUM_TO_RETURN = 25;
await fetch("https://API_URL/fetch_recs", {
	method: "POST",
	headers: {
		Content_Type: "application/json"
	},
	body: JSON.stringify({
		liked_books: ["BOOK_TITLE", "BOOK2_TITLE"],
		count: NUM_TO_RETURN
	})
}).then(data => console.log(data));
```

The user is then displayed a page of hopefully interesting books to read w/ accordian-style descriptions! For example, this sample user inputted that they enjoyed [To Kill A Mockingbird](https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird) and generated a list of similar American classics:

![image](https://user-images.githubusercontent.com/47064842/114797398-1a167500-9d61-11eb-9eec-fbf713076144.png)

The page also allows the user to either download or share their reading list, and contains a random literay-relevant quote from a celebrity or author.

### API

The API for this application is built with [Flask](https://flask.palletsprojects.com/en/1.1.x/) and hosted on [Heroku](https://www.heroku.com/).

It accepts post requests in the format discussed above, converts the list of books to a "new user" SVD matrix and then makes recommendations by finding the X most similar (and popular) books in that matrix, where X is an arbitrary number of return values set by the POST request.

The API returns JSON in the following format:

```json
{
	"author": "Kristin Hannah",
	"description": "Despite their differences, sisters Vianne and Isabelle have always been close. Younger, bolder Isabelle lives in Paris while Vianne is content with life in the French countryside with her husband Antoine and their daughter. But when the Second World War strikes, Antoine is sent off to fight and Vianne finds herself isolated so Isabelle is sent by their father to help her. As the war progresses, the sisters' relationship and strength are tested. With life changing in unbelievably horrific ways, Vianne and Isabelle will find themselves facing frightening situations and responding in ways they never thought possible as bravery and resistance take different forms in each of their actions.",
	"image_url": "https://images.gr-assets.com/books/1451446316m/21853621.jpg",
	"popular_shelves": " historical-fiction",
	"tags": " historical-fiction",
	"title": "The Nightingale",
	"url": "https://www.goodreads.com/book/show/21853621-the-nightingale"
}
```

## Development setup

### Client

Simply clone the repository, then run

```
npm install
```

Then to test the app, enter the `client` directory and run

```
npm start
```

### API

To build the Flask app, navigate to the `api` directory and run the following commands:

```
    export FLASK_APP=__init__.py
    flask run
```

This will start the server running on `localhost:5000`

## Contributing

1. Fork ReadMe [here](https://github.com/GoldinGuy/ReadMe/fork)
2. Create a feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## References & Citations

The below sources listed in order of relevance I either took inspiration from, based my work off of, or blatantly copied to create a functioning recommendation system. Huge thanks to the authors of these projects! The most graditude goes to [@dorukkilitcioglu](https://dorukkilitcioglu.com/), [@panghalamit](https://panghalamit.github.io/), and [@nickgreenquist](https://nickgreenquist.github.io/) for their work on Books2Rec, which was essentially a tutorial for this project. Some of these references I linked because I simply thought what they were working on was cool. In case it wasn't clear, this is _not_ an original idea. But it was a fun project, and I enjoyed working on it.

- [Lit2Vec](https://github.com/Santosh-Gupta/Lit2Vec)
- [Books2Rec](https://github.com/dorukkilitcioglu/books2rec)
- [GoodReadsGraph](https://github.com/franckjay/GoodReadsGraph)
- [GoodBooks Recommender](https://github.com/OmarZaghlol/GoodBooks-Recommender)
- [Python Book Recommendation System](https://github.com/Reinalynn/Building-a-Book-Recommendation-System-using-Python)
- [GoodReads Recs Using Collab Filtering](https://github.com/mick-zhang/GoodReads-Recommendation-using-Collaborative-Filtering)
- [Book Recommender Unsupervised Learning](https://github.com/ebehlmann/book-recommender)
- [Book Recommender System using Restricted Boltzmann Machines](https://adityashrm21.github.io/Book-Recommender-System-RBM/)
- [Book Recommendations Using Keras Medium](https://towardsdatascience.com/building-a-book-recommendation-system-using-keras-1fba34180699)
- [Book Recs Using Keras Tutorial Series](https://heartbeat.fritz.ai/build-train-and-deploy-a-book-recommender-system-using-keras-tensorflow-js-b96944b936a7)
- [Book Recommendation System](https://github.com/VeerendraPappala/BOOK-RECOMMENDATION-SYSTEM)
- [Book Recommendation Engine](https://github.com/shamafarabi/Book_Recommendation_Engine)
- [ML Hive Book Recs](https://github.com/Rahulrt7/ML-Hive)

## Meta

This project was developed by [@GoldinGuy](https://github.com/GoldinGuy)

Distributed under the GNU AGPLv3 license. See [LICENSE](https://github.com/GoldinGuy/ReadMe/blob/master/LICENSE) for more information.
