from flask_wtf import FlaskForm
from wtforms import StringField, FloatField

class AddPetForm(FlaskForm):
    name = StringField('Pet Name')
    age = StringField('Pet Age')
    type = StringField('Type of Pet')