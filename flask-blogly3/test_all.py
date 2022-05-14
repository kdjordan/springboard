from unittest import TestCase
from app import app
from models import db,  User, Post, Tag


app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly3_test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

class FlaskTests(TestCase):
    def setUp(self):
        db.create_all();
        user = User(first_name="TestKevin", last_name="TestJordan", avatar="Testavatar")
        post = Post(title='A Post Bout Nothing', content='Lorem ipsum dolor sit amet...', user_id=1)
        tag = Tag(tag_name="New Tag")

        db.session.add(user)
        db.session.add(post)
        db.session.add(tag)
        
        db.session.commit()
        
        self.user_id = user.id
        self.post_id = post.id
        self.tag_id = tag.id
        
    def tearDown(self):
        db.session.rollback()
        db.drop_all()
    

    def test_list_users(self):
        """Test users present when added on init"""
        with app.test_client() as client:
            res = client.get('/', follow_redirects=True)
            html = res.get_data(as_text=True)

            self.assertEquals(res.status_code, 200)
            self.assertIn('TestKevin', html)

    def test_show_details(self):
        """Test show user details"""
        with app.test_client() as client:
            res = client.get(f'/users/{self.user_id}')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('TestKevin TestJordan', html)

    def test_adduser_form(self):
        """Test showimg add user form on GET request"""
        with app.test_client() as client:
            res = client.get('/users/new')
            html = res.get_data(as_text=True)

            self.assertEqual(res.status_code, 200)
            self.assertIn('Create a User', html)

    def test_add_user(self):
        """Test adding new user via form and being shown on all users list"""
        with app.test_client() as client:
            newuser = {'first_name': 'F-User2', 'last_name': 'L-User2', 'avatar': 'A-User2'}
            res = client.post('/users/new', data=newuser, follow_redirects=True)
            html = res.get_data(as_text=True)

            self.assertEquals(res.status_code, 200)
            self.assertIn('F-User2 L-User2', html)
            
    def test_add_postform(self):
        """Test adding new post via form and being shown on all posts list"""
        with app.test_client() as client:
            newpost = {'post_title':'Test Post', 'post_content':'Test Lorem ipsum dolor sit amet...', 'user_id':1}
            res = client.post('/users/1/posts/new', data=newpost, follow_redirects=True)
            html = res.get_data(as_text=True)
            self.assertEquals(res.status_code, 200)
            self.assertIn('TestKevin', html)


    def test_editpost(self):
        """Test editing post"""
        with app.test_client() as client:
            data = {'post_title': "Test Post", 'post_content': 'TEst post conetent...', 'user_id': 1}
            res = client.post('/posts/1/edit', data=data, follow_redirects=True)
            html = res.get_data(as_text=True)
            self.assertIn('TestKevin', html)

    def test_addtag(self):
        """Test editing post"""
        with app.test_client() as client:
            data = {'tag_name': "Test Tag"}
            res = client.post('/tags/new', data=data, follow_redirects=True)
            html = res.get_data(as_text=True)
            self.assertIn('Test Tag', html)

    def test_deletetag(self):
        """Test editing post"""
        with app.test_client() as client:
            res = client.get('/tags/{self.tag_id}', follow_redirects=True)
            html = res.get_data(as_text=True)
            self.assertNotIn('New Tag', html)




    