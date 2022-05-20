"""Cupcake application."""

from flask import Flask, render_template, redirect, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Feedback
from forms import AddUserForm, LoginForm, AddFeedbackForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///feedback_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def home():
    """Show all Cupcakes on home page"""
    return redirect('/register')

@app.route('/secret')
def secret():
    """Show secret page for logged in accounts"""
    if session.get('username'):
        username = session.get('username')
        return redirect(f'/users/{username}')
    else: 
        return redirect('/')

# USERS ROUTES #################################################################

@app.route('/register', methods=['POST', 'GET'])
def register():
    """Show Register User Form on home page"""
    form = AddUserForm()
    if form.validate_on_submit():
        """Create USER by POST request via form data params"""
        user = User.register(
            form.username.data,
            form.password.data,
            form.first_name.data,
            form.last_name.data,
            form.email.data
        )
        db.session.add(user)
        db.session.commit()
        session['username'] = user.username
        return redirect('/secret')
    else:
        return render_template('register.html', form=form)

@app.route('/login', methods=['POST', 'GET'])
def login():
    """Show Login Form"""
    form = LoginForm()
    if form.validate_on_submit():
        """Check user credientials by using auth @classmethod"""
        u = User.auth(form.username.data, form.password.data)
        print('user is ', u)
        if u:
            session['username'] = u.username
        return redirect(f'/users/{u.username}')
    else:
        return render_template('login.html', form=form)

@app.route('/users/<username>')
def user_details(username):
    """Show logged in users their details - if not redirect to register"""
    if is_logged_in(username):
        user = User.query.get_or_404(username)
        feedback = Feedback.query.filter_by(username=username).all()
        return render_template('/userdetail.html', user=user, feedback=feedback)
    else: 
        return redirect('/')

@app.route('/logout')
def logout():
    """Logout User by clearing session data"""
    session.clear()
    return redirect('/')

@app.route('/users/<username>/delete', methods=['POST'])
def delete_user_account(username):
    """Delete user account and all feedback from user"""
    user = User.query.get_or_404(username)
    Feedback.query.filter_by(username=username).delete()
    db.session.delete(user)
    db.session.commit()
    session.clear()
    return redirect('/')




# FEEDBACK ROUTES ############################################################################

@app.route('/feedback/<int:id>/update', methods=['GET', 'POST'])
def edit_feedback(id):
    """Show feedback from for GET and process feedback form on POST"""
    form = AddFeedbackForm()
    fb = Feedback.query.get_or_404(id)
    username = session.get('username')
    if is_logged_in(username):
        if form.validate_on_submit():
            """Create Feedback by POST request via form data params"""
            fb.title = form.title.data
            fb.content = form.content.data
            db.session.add(fb)
            db.session.commit()
            return redirect(f'/users/{username}')
        else:
            form.title.data = fb.title
            form.content.data = fb.content
            return render_template('editfeedback.html', form=form, id=id)
    else:
        return redirect('/')


@app.route('/users/<username>/feedback/add', methods=['GET', 'POST'])
def add_feedback(username):
    """Show feedback from for GET and process feedback form on POST"""
    form = AddFeedbackForm()
    if form.validate_on_submit():
        """Create Feedback by POST request via form data params"""
        if is_logged_in(username):
            feedback = Feedback(
                title = form.title.data,
                content = form.content.data,
                username = username
            )
            db.session.add(feedback)
            db.session.commit()
            return redirect(f'/users/{username}')
        else:
            return redirect('/')
    else:
        return render_template('feedback.html', form=form, username=username)


@app.route('/feedback/<int:id>/delete')
def delete_feedback(id):
    """Delete feedback by id using DELETE request"""
    username = session.get('username')
    if is_logged_in(username):
        feedback = Feedback.query.get_or_404(id)
        db.session.delete(feedback)
        db.session.commit()
        return redirect(f'/users/{username}')
    else:
        return redirect('/')


# HANDLE 404 ################################################################################
@app.errorhandler(404)
def page_not_found(e):
    """Handle all routes with errors"""
    # note that we set the 404 status explicitly
    return redirect('/')


# UTILITIES ################################################################################

def is_logged_in(username):
    user = User.query.get(username)
    if user is None:
        return False
    elif session.get('username') == user.username:
        return True
    else:
        return False