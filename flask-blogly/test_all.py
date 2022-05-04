from unittest import TestCase
from app import app
from models import db,  User


app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

db.drop_all();
db.create_all();


class FlaskTests(TestCase):
    def setUp(self):
        User.query.delete()

    def setUp(self):
        User.query.rollback()



    # """Test our inital redirect for intial paint"""
    # def test_index_redirect(self):
    #     with app.test_client() as client:
    #         res = client.get('/', follow_redirects=True)
    #         html = res.get_data(as_text=True)
    #         self.assertEqual(res.status_code, 200)
    #         self.assertIn('Users', html)

    # def test_add_user(self):
    #     with app.test_client() as client:
    #         res = client.post('users/new', 
    #             data={'first_name':'ftest', 'last_name':'ltest', 'avatar':'atest.jpg'},
    #             follow_redirects=True)
    #         html = res.get_data(as_text=True)
    #         self.assertIn('ftest', html)
            
    # def test_delete_user(self):
    #     with app.test_client as client:
    #         users = app.User.query.all()
    #         print(users)
    #         # res = client.post('/users/')
    #         self.assertEqual(1,1)

    