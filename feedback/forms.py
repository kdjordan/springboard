from flask_wtf import FlaskForm
from wtforms import StringField, validators, PasswordField, EmailField, TextAreaField
from wtforms.validators import Length, Email, DataRequired



class AddUserForm(FlaskForm):
    username = StringField('Username', [validators.Length(min=6, max=20), validators.DataRequired()])
    first_name = StringField('First Name',[validators.Length(min=2, max=20), validators.DataRequired()])
    last_name = StringField('Last Name', [validators.Length(min=2, max=20), validators.DataRequired()])
    email = EmailField('Email address', [validators.DataRequired(), validators.Email(), validators.Length(max=50)])
    password = PasswordField('Password', [validators.Length(min=6, max=20), validators.DataRequired()])
   
class LoginForm(FlaskForm):
    username = StringField('Username', [validators.Length(min=6, max=20), validators.DataRequired()])
    password = PasswordField('Password', [validators.Length(min=6, max=20), validators.DataRequired()])

class AddFeedbackForm(FlaskForm):
    title = StringField('Title', [validators.Length(min=1, max=20), validators.DataRequired()])
    content = TextAreaField('Content', render_kw={"rows": 10, "cols": 28})