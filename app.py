import flask



from flask import Flask, render_template, redirect, url_for, request
import requests

app = Flask(__name__)


@app.route("/consult")
def home():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5501, debug=True)
