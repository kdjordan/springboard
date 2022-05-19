from app import app
from models import db, User


db.drop_all()
db.create_all()

