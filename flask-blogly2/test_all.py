from unittest import TestCase
from app import app
from models import db,  User, Post


app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly2_test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

db.drop_all();
db.create_all();


class FlaskTests(TestCase):
    def setUp(self):
        User.query.delete()

        user = User(first_name="TestKevin", last_name="TestJordan", avatar="Testavatar")
        post = Post(title='A Post Bout Nothing', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id=1)
        db.session.add(user)
        db.session.commit()
        db.session.commit(post)

        db.session.commit()

        self.user_id = user.id
        self.post_id = post.id
        
    def tearDown(self):
        db.session.rollback()

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
    

    