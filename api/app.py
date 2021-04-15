import logging as logger
from flask import Blueprint, jsonify, request
import pandas as pd
import numpy as np

main = Blueprint('main', __name__)
logger.debug("App starting")

readme_recs_m = np.load('assets/readme_m.npy')
logger.debug("Recs model loaded")

books = pd.read_pickle('assets/books.pkl')
logger.debug("Books df loaded")

indices = pd.Series(books.index, index=books['title']).drop_duplicates()


def make_book_recs(user_map, num, user_matrix):
    book_recs = []
    for i in range(len(user_map)):
        if user_matrix[i] == 0:
            book_recs.append((i, user_map[i]))
        else:
            book_recs.append((i, float('-inf')))
    book_recs = sorted(book_recs, key=lambda a: a[1], reverse=True)

    top_recs = []
    for i in range(num):
        _id = book_recs[i][0]
        book = books.iloc[_id].to_dict()  # ['title']
        top_recs.append(book)
    return top_recs


def create_new_user(liked_books):
    # map user to vector
    user_matrix = np.zeros((10000), dtype=np.int)
    for book in liked_books:
        user_matrix[indices[book]-1] = 3  # equivalent of 5 stars
    user_concept = np.matmul(user_matrix, readme_recs_m)
    user_map = np.matmul(user_concept, readme_recs_m.T)
    return user_map, user_matrix


@main.route('/fetch_recs', methods=['POST'])
# on request from React app, attempt to generate reading suggestions
def fetch_recs():
    logger.debug("Starting service")
    try:
        req = request.get_json(force=True)
        user_map, user_matrix = create_new_user(req['liked_books'])
        book_recs = make_book_recs(user_map, req['count'], user_matrix)
        return jsonify(book_recs), 200
    except Exception as e:
        logger.warning("Encountered exception: ", e)
        return "Error", 400
