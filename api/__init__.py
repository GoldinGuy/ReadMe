from .app import main
from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)

app.register_blueprint(main)
print("App registered")

api = Api(app)
CORS(app)


class status(Resource):
    def get(self):
        try:
            return {'data': 'Api live'}
        except:
            return {'data': 'An error occurred when fetching Api'}


api.add_resource(status, '/')

if __name__ == '__main__':
    app.run()
