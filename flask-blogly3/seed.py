from models import User, Post, db, Tag, PostTag
from app import app

db.drop_all()
db.create_all()

u1 = User(first_name='Kevin', last_name='Jordan', avatar='https://i.pravatar.cc/150?img=66')
u2 = User(first_name='Random', last_name='User', avatar='https://i.pravatar.cc/150?img=6')
u3 = User(first_name='Boaty', last_name='McBoatFace', avatar='https://i.pravatar.cc/150?img=11')
u4 = User(first_name='Doctor', last_name='Feelgood', avatar='https://i.pravatar.cc/150?img=14')

p1 = Post(title='A Post Bout Nothing', 
content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
user_id=1)
p2 = Post(title='Another Post Bout Nothing', 
content='222Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
user_id=1)
p3 = Post(title='A Fresh Post', 
content='333Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
user_id=2)

t1 = Tag(tag_name='coding')
t2 = Tag(tag_name='sports')
t3 = Tag(tag_name='hobbies')
t4 = Tag(tag_name='travel')

pt1 = PostTag(post_id=1,tag_id=1)
pt2 = PostTag(post_id=1,tag_id=2)
pt3 = PostTag(post_id=2,tag_id=3)
pt4 = PostTag(post_id=3,tag_id=4)


db.session.add(u1)
db.session.add(u2)
db.session.add(u3)
db.session.add(u4)
db.session.commit()

db.session.add(p1)
db.session.add(p2)
db.session.add(p3)
db.session.commit()

db.session.add(t1)
db.session.add(t2)
db.session.add(t3)
db.session.add(t4)
db.session.commit()

db.session.add(pt1)
db.session.add(pt2)
db.session.add(pt3)
db.session.add(pt4)
db.session.commit()