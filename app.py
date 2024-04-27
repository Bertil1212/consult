from flask import Flask, render_template, redirect, url_for
from flask import request


app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route('/consult')
def consult():
    return "Right consult"


#-------------------------------Main

if __name__ == '__main__':
    
    app.run(host='0.0.0.0', port=5001, debug=True)
    
