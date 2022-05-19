from flask_wtf import FlaskForm
from wtforms import StringField, URLField, IntegerField, SelectField, validators, TextAreaField, RadioField


class AddPetForm(FlaskForm):
    name = StringField('Pet Name')
    avatar = URLField('Profile Pic')
    age = IntegerField('Pet Age', [validators.NumberRange(min=1,max=30)])
    species = SelectField('Type of Pet', choices=[(1, 'cat'), (2, 'dog'), (3, 'opossum')])
    notes = TextAreaField('Notes', render_kw={"rows": 10, "cols": 28})

class EditPetForm(FlaskForm):
    avatar = URLField('Profile Pic')
    notes = TextAreaField('Notes', render_kw={"rows": 10, "cols": 28})
    available = RadioField('Avaialable', choices=[('True','True'), ('False', 'False')])