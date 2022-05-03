"""Blogly application."""

from flask import Flask, request, render_template, redirect, flash, session
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
# db.create_all()

@app.route('/')
def home():
    return render_template('adduser.html', title='Add User', heading='Create a User')

@app.route('/add_user', methods=['POST'])
def add_user():
    # get form data and make into User 
    user = User(first_name=request.form['first_name'], last_name=request.form['last_name'])
    # insert into DB
    db.session.add(user)
    db.session.commit()
    return render_template('base.html')



