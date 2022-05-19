"""Models for Feedback-Auth."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    

# MODELS
class User(db.Model):
    """Tale definiton for User - model"""
    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f'<User id={u.username}, email={u.email}'

    def serialize(self):
        return {
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name
        }

    username = db.Column(db.String(20),
                    primary_key=True)

    password = db.Column(db.String(20),
                    nullable=False,
                    unique=False)

    email = db.Column(db.String(50),
                    nullable=False,
                    unique=True)

    first_name = db.Column(db.String(50),
                    nullable=False,
                    unique=False)
    
    last_name = db.Column(db.String(50),
                    nullable=False,
                    unique=False)

    
   