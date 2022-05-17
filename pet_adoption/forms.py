from flask_wtf import FlaskForm
from wtforms import StringField, URLField, IntegerField, SelectField, validators, TextAreaField


class AddPetForm(FlaskForm):
    name = StringField('Pet Name')
    avatar = URLField('Profile Pic')
    age = IntegerField('Pet Age', [validators.NumberRange(min=1,max=30)])
    species = SelectField('Type of Pet', choices=[(1, 'cat'), (2, 'dog'), (3, 'opossum')])
    notes = TextAreaField('Notes', render_kw={"rows": 10, "cols": 28})