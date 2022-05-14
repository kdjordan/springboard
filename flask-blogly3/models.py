"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy
import datetime 

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

    posts = db.relationship("Post", backref="user", cascade="all, delete-orphan")



class Post(db.Model):
    """Tale definiton for posts - model"""
    __tablename__ = 'posts'

    def __repr__(self):
        p = self
        return f'Post id={p.id}'

    @property
    def friendly_date(self):
        """Return nicely-formatted date."""

        return self.created_at.strftime("%a %b %-d  %Y, %-I:%M %p")


    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(50), nullable=False, unique=False)
    content = db.Column(db.Text, nullable=True, unique=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    
    # tags = db.relationship('Tag', secondary='posts_tags', backref="posts")

class Tag(db.Model):
    """Tale definiton for tags - model"""
    __tablename__ = 'tags'

    def __repr__(self):
        p = self
        return f'Tag id={p.id} {p.tag_name}'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tag_name = db.Column(db.String(25), nullable=False, unique=True)

    posts = db.relationship('Post', secondary="posts_tags", backref="tags")    

class PostTag(db.Model):
    """Tale definiton for tags-posts join model"""
    __tablename__ = 'posts_tags'

    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), primary_key=True)
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), primary_key=True)

    # tags = db.relationship('Tag', secondary='posts_tags', backref="posts")
    # posts = db.relationship('Post', backref="posts")
    # tags = db.relationship('Tag', backref="tags", cascade="all")

