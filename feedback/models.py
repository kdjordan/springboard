"""Models for Feedback-Auth."""
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
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

    @classmethod
    def serialize(self):
        return {
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name
        }
    @classmethod 
    def register(cls, username, password, first_name, last_name, email):
        hashed_pass = bcrypt.generate_password_hash(password)
        pass_decode = hashed_pass.decode('utf-8')
        return cls(username=username, password=pass_decode, first_name=first_name, last_name=last_name, email=email)

    @classmethod 
    def auth(cls, username, password):
        u = User.query.filter_by(username=username).first()
        if u and bcrypt.check_password_hash(u.password, password):
            return u
        else:
            return False
        

    username = db.Column(db.String(20),
                    primary_key=True,
                    unique=True)

    password = db.Column(db.String,
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

    
   