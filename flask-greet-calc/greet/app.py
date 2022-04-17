from flask import Flask
app = Flask(__name__)


@app.route('/welcome')
def welcome():
    return f"<h3>Welcome</h3>"


@app.route('/welcome/home')
def welcome_home():
    return f"<h3>Welcome Home !</h3>"


@app.route('/welcome/back')
def welcome_back():
    return f"<h3>Welcome Back !</h3>"