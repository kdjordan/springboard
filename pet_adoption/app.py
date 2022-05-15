"""Blogly application."""

from flask import Flask, request, render_template, redirect, flash, session
# from models import db, connect_db, Pet, Post, Tag, PostTag
from forms import AddPetForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adoption'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "alkhjbdkajsbdf"

# connect_db(app)
# db.create_all()

@app.route('/')
def home():
    return render_template("allpets.html")



# PETS ROUTES #################################################################
@app.route('/add')
def add_pet():
    form = AddPetForm()
    return render_template('addpet.html', form=form)

@app.route('/<int:id>')
def show_pet(id):
    return render_template('petdetail.html', id=id)

    
# HANDLE 404 ################################################################################
@app.errorhandler(404)
def page_not_found(e):
    """Handle all routes with errors"""
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404