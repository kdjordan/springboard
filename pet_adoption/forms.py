from flask_wtf import FlaskForm
from wtforms import StringField, URLField, IntegerField, SelectField, validators, TextAreaField


class AddPetForm(FlaskForm):
    name = StringField('Pet Name')
    species = StringField('Species')
    image = URLField('Profile Pic')
    age = IntegerField('Pet Age', [validators.NumberRange(min=1,max=30)])
    pet_type = SelectField('Type of Pet', choices=['cat', 'dog', 'opossum'])
    notes = TextAreaField('Notes', render_kw={"rows": 10, "cols": 28})