"""Models for Adoption."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    

# MODELS
class Pet(db.Model):
    __tablename__ = 'pets'

    def __repr__(self):
        u = self
        return f'<Pet id={u.id}, name={u.first_name}, species={u.last_name}, Avatar={u.avatar}'

    id = db.Column(db.Integer,
                    primary_key=True,
                    autoincrement=True)

    name = db.Column(db.String(20),
                    nullable=False,
                    unique=False)

    notes = db.Column(db.Text,
                    nullable=False,
                    unique=False)
    
    avatar = db.Column(db.String,
                    nullable=False,
                    unique=False)

    age = db.Column(db.Integer,
                    nullable=False,
                    unique=False)

    species = db.Column(db.Integer, db.ForeignKey('species.id'), nullable=False)



class Species(db.Model):
    """Tale definiton for posts - model"""
    __tablename__ = 'species'

    def __repr__(self):
        p = self
        return f'Species id={p.id}'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(), nullable= False, unique=True)
   

