"""Models for Adoption."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    

# MODELS
class Cupcake(db.Model):
    """Tale definiton for Pet - model"""
    __tablename__ = 'cupcakes'

    def __repr__(self):
        u = self
        return f'<Cupcake id={u.id}, flavor={u.flavor}'

    def serialize(self):
        return {
            'id': self.id,
            'flavor': self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image': self.image
        }

    id = db.Column(db.Integer,
                    primary_key=True,
                    autoincrement=True)

    flavor = db.Column(db.Text,
                    nullable=False,
                    unique=False)

    size = db.Column(db.Text,
                    nullable=False,
                    unique=False)

    rating = db.Column(db.Float,
                    nullable=False,
                    unique=False)
    
    image = db.Column(db.Text,
                    nullable=False,
                    unique=False,
                    server_default='https://tinyurl.com/demo-cupcake')

    
   