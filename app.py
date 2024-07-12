from flask import Flask, render_template, redirect, url_for
from flask import request

import form

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')


@app.route("/adlg")
def login():
    return render_template('login.html')

@app.route('/lgreq', methods=['POST'])
def lgreq():
    data = request.get_json()
    usn = data.get('usn')
    pwd = data.get('pwd')
    f = open ("../db/tekniliko/")



@app.route("/msg")
def SendMessage():
    form.SaveMessage(
    request.args.get('name'), 
    request.args.get('cname'), 
    request.args.get('email'), 
    request.args.get('nr'), 
    request.args.get('message'))
    return redirect('/')

#-------------------------------Main

if __name__ == '__main__':
    
    
    app.run(host='0.0.0.0', port=5001, debug=True)
        
