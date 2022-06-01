"""Cupcake application."""

from flask import Flask, render_template, redirect, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
# db.create_all()

@app.route('/')
def home():
    """Show all Cupcakes on home page"""
    return render_template("index.html")

# CUPCAKES ROUTES #################################################################

@app.route('/api/cupcakes')
def get_all_cupcakes():
    """Get all cupcakes on GET respond from GET"""
    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakes=all_cupcakes)

@app.route('/api/cupcakes/<int:id>')
def get_cupcake(id):
    """Get cupcakes by ID respond from GET"""
    cupcake = Cupcake.query.get_or_404(id)
    return jsonify(cupcake=cupcake.serialize())

@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    """Create cupcakes by POST request via JSON Body params"""
    new_cupcake = Cupcake(flavor=request.json['flavor'],
                            size=request.json['size'],
                            rating=request.json['rating'],
                            image=request.json.get('image'))
    db.session.add(new_cupcake)
    db.session.commit()
    response_json = jsonify(cupcake=new_cupcake.serialize())
    return (response_json, 201)

@app.route('/api/cupcakes/<int:id>', methods=['PATCH'])
def patch_cupcake(id):
    """PATCH cupcakes by ID via JSON Body params"""
    cupcake = Cupcake.query.get_or_404(id)
    cupcake.flavor = request.json.get('flavor', cupcake.flavor)
    cupcake.size = request.json.get('size', cupcake.size)
    cupcake.rating = request.json.get('rating', cupcake.rating)
    cupcake.image = request.json.get('image', cupcake.image)

    db.session.commit()
    response_json = jsonify(cupcake=cupcake.serialize())
    return (response_json, 200)


@app.route('/api/cupcakes/<int:id>', methods=['DELETE'])
def delete_cupcake(id):
    """Delete cupcakes by id using DELETE request"""
    cupcake = Cupcake.query.get_or_404(id)
    db.session.delete(cupcake)
    db.session.commit()
    return ({'message':'DELETED'}, 200)


# HANDLE 404 ################################################################################
@app.errorhandler(404)
def page_not_found(e):
    """Handle all routes with errors"""
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404