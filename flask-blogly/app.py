"""Blogly application."""

from flask import Flask, request, render_template, redirect, flash, session
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
db.create_all()

@app.route('/')
def home():
    return redirect('/users')

@app.route('/users')
def get_all_users():
    users = User.query.all()
    
    return render_template('allusers.html', title='All Users', heading='Users', users=users)

@app.route('/users/new', methods=['POST', 'GET'])
def add_user():
    if request.method == 'POST':
        # get form data and make into User 
        user = User(first_name=request.form['first_name'], 
                last_name=request.form['last_name'], 
                avatar=request.form['avatar'])
        # insert into DB
        db.session.add(user)
        db.session.commit()
        return render_template('base.html')
    if request.method == 'GET':
        return render_template('adduser.html', title='Add User', heading='Create a User')


@app.route('/users/<:id>')
def get_user(id):
    print('gettig id ', id)
    return redirect('/users')

@app.route('/users/<:id>/edit')
def edit_user(id):
    print('editing ', id)
    return redirect('/users')

@app.route('/users/<:id>/delete')
def delete_user(id):
    print('deleting ' id)
    return redirect('/users')




