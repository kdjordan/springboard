"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    

# MODELS
class User(db.Model):
    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f'<User id={u.id}, First name={u.first_name}, Last Name={u.last_name}, Avatar={u.avatar}'

    id = db.Column(db.Integer,
                    primary_key=True,
                    autoincrement=True)

    first_name = db.Column(db.String(20),
                    nullable=False,
                    unique=False)

    last_name = db.Column(db.String(20),
                    nullable=False,
                    unique=False)
    
    avatar = db.Column(db.String(),
                    nullable=False,
                    unique=False)

    # posts = db.relationship('Post')



class Post(db.Model):
    """Tale definiton for posts - model"""
    __tablename__ = 'posts'

    def __repr__(self):
        p = self
        return f'Post id={p.id}'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(50), nullable=False, unique=False)
    content = db.Column(db.Text, nullable=True, unique=True)
    created_at = db.Column(db.DateTime, nullable=False, unique=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    # user = db.relationship('User')
    user = db.relationship('User', backref="posts")

