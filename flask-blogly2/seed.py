from models import User, Post, db
from app import app

db.drop_all()
db.create_all()

u1 = User(first_name='Kevin', last_name='Jordan', avatar='https://i.pravatar.cc/150?img=66')
u2 = User(first_name='Random', last_name='User', avatar='https://i.pravatar.cc/150?img=6')
u3 = User(first_name='Boaty', last_name='McBoatFace', avatar='https://i.pravatar.cc/150?img=11')
u4 = User(first_name='Doctor', last_name='Feelgood', avatar='https://i.pravatar.cc/150?img=14')

p1 = Post(title='A Post Bout Nothing', 
content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
created_at='2021-09-12', user_id=1)
p2 = Post(title='Another Post Bout Nothing', 
content='222Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
created_at='2021-10-30', user_id=1)
p3 = Post(title='A Fresh Post', 
content='333Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
created_at='2020-04-20', user_id=2)


db.session.add(u1)
db.session.add(u2)
db.session.add(u3)
db.session.add(u4)

db.session.commit()

db.session.add(p1)
db.session.add(p2)
db.session.add(p3)

db.session.commit()