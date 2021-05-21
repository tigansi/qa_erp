from flask import Flask
from flask import render_template
from flask import request
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return ''


@app.route('/guarda_sessao', methods=['POST'])
def guarda_sessao():
    data = json.loads(request.get_data())
    print(data)
    return ''


if __name__ == '__main__':
    app.run(
        debug=True,
        host="192.168.8.7")
    app.config['TEMPLATES_AUTORELOAD'] = True
