"""Blogly application."""

from flask import Flask, request, render_template, redirect, flash, session
from models import db, connect_db, User, Post, Tag, PostTag

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
# db.create_all()

@app.route('/')
def home():
    return redirect('/users')

# HANDLE 404 ################################################################################
@app.errorhandler(404)
def page_not_found(e):
    """Handle all routes with errors"""
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404


# USERS ROUTES #################################################################
@app.route('/users')
def get_all_users():
    users = User.query.all()
    return render_template('allusers.html', title='All Users', heading='Users', users=users)

@app.route('/users/new', methods=['POST', 'GET'])
def add_user():
    if request.method == 'POST':
        # get form data and make into User 
        user = User(first_name=request.form['first_name'], 
                last_name=request.form['last_name'], 
                avatar=request.form['avatar'])
        # insert into DB
        db.session.add(user)
        db.session.commit()
        return redirect('/users')

    if request.method == 'GET':
        return render_template('usermgmt.html', title='Add User', heading='Create a User', type='add')

@app.route('/users/<int:id>')
def get_user(id):
    """Show information about the given user."""
    user = User.query.get(id)
    posts = user.posts
    print(posts)
    return render_template('/userdetails.html', user=user, posts=posts, title='User Details')

@app.route('/users/<int:id>/edit', methods=['POST', 'GET'])
def edit_user(id):
    """Show Edit or Add User form based on method"""
    user = User.query.get(id)

    if request.method == 'GET':
        """Show the edit page for a user."""
        return render_template('usermgmt.html', title='Edit User', heading='Edit a User', type='edit', 
            user=user)

    if request.method == 'POST':
        """Commit user changes to DB."""
        user.first_name = request.form['first_name']
        user.last_name = request.form['last_name']
        user.avatar = request.form['avatar']
        db.session.add(user)
        db.session.commit()
        return redirect('/users')

@app.route('/users/<int:id>/delete')
def delete_user(id):
    """Delete the user."""
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/users')

# POSTS ROUTES ################################################################################

@app.route('/posts')
def show_all_posts():
    """Show all posts"""
    posts = Post.query.all()
    return render_template('allposts.html', posts=posts, heading="All Posts")

@app.route('/posts/<int:id>')
def get_post(id):
    """Show individual post by ID"""
    post = Post.query.get(id)
    tags = PostTag.query.filter(PostTag.post_id == id).all()
    return render_template('postdetail.html', post=post, tags=tags, title='Post Detail')


@app.route('/users/<int:id>/posts/new', methods=['POST', 'GET'])
def add_post(id):
    if request.method == 'GET':
        """Show the add post for a user."""
        return render_template('addpost.html', title='Add Post', heading='Add a Post', user_id=id)

    if request.method == 'POST':
        """Add Post to DB."""
        post = Post(title=request.form['post_title'], 
                content=request.form['post_content'],
                user_id=id)
        db.session.add(post)
        db.session.commit()
        return redirect('/users')

@app.route('/posts/<int:id>/edit', methods=['POST', 'GET'])
def edit_post(id):
    post = Post.query.get(id)
    

    if request.method == 'GET':
        """Show the edit post for a user."""
        return render_template('editpost.html', title='Edit Post', heading='Edit a Post', post=post)

    if request.method == 'POST':
        """Update Post in DB."""
        post.title=request.form['post_title']
        post.content=request.form['post_content']
        db.session.add(post)
        db.session.commit()
        return redirect('/users')

@app.route('/posts/<int:id>/delete')
def delete_post(id):
    """Deletes post from DB."""
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return redirect('/users')

# TAGS ROUTES #################################################################

@app.route('/tags')
def get_all_tags():
    tags = Tag.query.all()
    return render_template('alltags.html', tags=tags, title='All Tags', heading='All Tags')

@app.route('/tags/<int:id>')
def get_tag(id):
    tags = PostTag.query.filter(PostTag.tag_id == id).all()
    tag = Tag.query.get(id)
    return render_template('tagdetails.html', tags=tags, title='Tag Detail', heading='Tag Detail', id=id, tag=tag)

@app.route('/tags/new', methods=['POST', 'GET'])
def add_tag():
    if request.method == 'GET':
        """Show the add tag form."""
        return render_template('addtag.html', title='Create a Tag', heading='Create Tag')

    if request.method == 'POST':
        tag = Tag(tag_name=request.form['tag_name'])
        db.session.add(tag)
        db.session.commit()
        return redirect('/tags')


@app.route('/tags/<int:id>/edit', methods=['POST', 'GET'])
def edit_tag(id):
    tag = Tag.query.get(id)

    if request.method == 'GET':
        """Show the edit tag form."""
        return render_template('edittag.html', title='Edit Tag', heading='Edit a Tag', tag=tag)

    if request.method == 'POST':
        """Update Tag in DB."""
        tag.tag_name=request.form['tag_name']
        db.session.add(tag)
        db.session.commit()
        return redirect('/tags')


@app.route('/tags/<int:id>/delete')
def delete_tag(id):
    """Deletes tag from DB."""
    # tag = Tag.query.get(id)
    tags = PostTag.query.filter(PostTag.tag_id == id).all()
    for tag in tags:     
        db.session.delete(tag)
        db.session.commit()
    return redirect('/tags')