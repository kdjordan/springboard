"""Adoption application."""

from flask import Flask, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet, Species
from forms import AddPetForm, EditPetForm
from distutils.util import strtobool

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adoption_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
# db.create_all()

@app.route('/')
def home():
    """Show all pets listing on home page"""
    pets = Pet.query.all()
    return render_template("allpets.html", pets=pets)



# PETS ROUTES #################################################################
@app.route('/add', methods=['POST', 'GET'])
def add_pet():
    """Add Pet into DB route for POST and show pet signup form for GET"""
    form = AddPetForm()
    if form.validate_on_submit():
        
        name = form.name.data
        notes = form.notes.data
        avatar = form.avatar.data
        age = form.age.data
        species = form.species.data
        #create pet object
        pet = Pet(name=name, notes=notes, avatar=avatar, age=age, species=species)
        #add pet into DB
        db.session.add(pet)
        db.session.commit()
        return redirect('/')
    else:
        return render_template('addpet.html', form=form)


@app.route('/<int:id>', methods=['POST', 'GET'])
def edit_pet(id):
    """Route handler for showing edit form on GET or handling the edit on POST"""
    pet = Pet.query.get(id)
    form = EditPetForm()

    if form.validate_on_submit():
        pet.notes = form.notes.data
        pet.avatar = form.avatar.data
        pet.available = strtobool(form.available.data)
        db.session.add(pet)
        db.session.commit()
        return redirect('/')

    else:
        form.available.default = pet.available
        form.process()
        species = Species.query.get(pet.id)
        form.notes.data = pet.notes
        form.avatar.data = pet.avatar
        
        return render_template('editpet.html', form=form, pet=pet, species=species)

    
# HANDLE 404 ################################################################################
@app.errorhandler(404)
def page_not_found(e):
    """Handle all routes with errors"""
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404