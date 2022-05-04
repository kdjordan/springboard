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
    
    return render_template('allusers.html', title='All Users', heading='Users', users=users, url='')

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
        
        return render_template('allusers.html', user=user)
    if request.method == 'GET':
        return render_template('usermgmt.html', title='Add User', heading='Create a User', type='add')


@app.route('/users/<int:id>')
def get_user(id):
    """Show information about the given user."""
    user = User.query.get(1)
    return render_template('/userdetails.html', user=user)

@app.route('/users/<int:id>/edit', methods=['POST', 'GET'])
def edit_user(id):
    user = User.query.get(id)
    if request.method == 'GET':
        """Show the edit page for a user."""
        return render_template('usermgmt.html', title='Edit User', heading='Edit a User', type='edit', 
            user=user)
    if request.method == 'POST':
        """Commit user changes to DB."""
        user.first_name = request.form['first_name']
        user.last_name = request.form['last_name']
        user.avatar = request.form['avatar']
        db.session.add(user)
        db.session.commit()
        return redirect('/users')

@app.route('/users/<int:id>/delete')
def delete_user(id):
    """Delete the user."""
    print('deleting ', id)

    return redirect('/users')




