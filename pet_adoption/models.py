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
        return f'<Pet id={u.id}, name={u.name}'

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
                    unique=False,
                    server_default='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZWDdK92HYaKt1xBZCIoef1lG8sE2dcO0C12CjRNGOefBTNS09GDhQLeL3njGBhTAy4U&usqp=CAU')

    age = db.Column(db.Integer,
                    nullable=False,
                    unique=False)
    
    available = db.Column(db.Boolean,
                        nullable=False,
                        default=True)

    species = db.Column(db.Integer, db.ForeignKey('species.id'), nullable=False)



class Species(db.Model):
    """Tale definiton for posts - model"""
    __tablename__ = 'species'

    def __repr__(self):
        p = self
        return f'Species id={p.id} name={p.name}'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(), nullable= False, unique=True)
   

