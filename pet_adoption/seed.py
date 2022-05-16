from models import Pet, Species, db
from app import app

db.drop_all()
db.create_all()

u1 = Pet(name='Biggles', notes="Happy little guy", 
    avatar="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    age=5, species=1)

u2 = Pet(name='Doc Barks', notes="Happier little guy", 
    avatar="https://i.pinimg.com/474x/6a/1d/b9/6a1db96bd83d1a5d19575ec32d9ab937.jpg",
    age=2, species=2)

u3 = Pet(name='Captain Pointy', notes="Nice but standoffish", 
    avatar="https://img.buzzfeed.com/buzzfeed-static/static/2016-03/29/23/enhanced/webdr07/enhanced-2872-1459308485-1.jpg?output-quality=auto&output-format=auto&downsize=640:*",
    age=1, species=3)


p1 = Species(name='cat')
p2 = Species(name='dog')
p3 = Species(name='porcupine')

db.session.add(p1)
db.session.add(p2)
db.session.add(p3)

db.session.commit()

db.session.add(u1)
db.session.add(u2)
db.session.add(u3)
db.session.commit()
