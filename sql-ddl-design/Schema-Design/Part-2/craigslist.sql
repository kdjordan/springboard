DROP DATABASE IF EXISTS craigslist;  

CREATE DATABASE craigslist;  

\c craigslist  

CREATE TABLE users (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT, pref_region INT UNIQUE);  

CREATE TABLE posts (id SERIAL PRIMARY KEY, title TEXT, body TEXT, location TEXT, user_id INT, region INT);  

CREATE TABLE regions (id SERIAL PRIMARY KEY, reg_name TEXT);  

CREATE TABLE categories (id SERIAL PRIMARY KEY, cat_name TEXT);  

CREATE TABLE posts_cats (id SERIAL PRIMARY KEY, post_id INTEGER REFERENCES posts, cat_id INTEGER REFERENCES categories);  

INSERT INTO users (first_name, last_name, pref_region) VALUES ('Gary', 'Brainguy', 1);
INSERT INTO users (first_name, last_name, pref_region) VALUES ('Mark', 'Heartguy', 2);
INSERT INTO users (first_name, last_name, pref_region) VALUES ('Stacy', 'Anesthesialady', 3);

INSERT INTO posts (title, body, location, user_id, region) VALUES ('My first post', 'This is my first post for Oregon : for sale', 'Eugene', 1, 1);
INSERT INTO posts (title, body, location, user_id, region) VALUES ('My Second post', 'This is my second post for Utah : lost and found.','Park City', 1, 3);
INSERT INTO posts (title, body, location, user_id, region) VALUES ('My trolling post', 'This is me wanting help in Cali.', 'Lake Tahoe', 2, 2);
INSERT INTO posts (title, body, location, user_id, region) VALUES ('A sample post', 'This is for BC : for sale', 'Vancouver', 3, 4);

INSERT INTO regions (reg_name) VALUES ('Oregon');
INSERT INTO regions (reg_name) VALUES ('California');
INSERT INTO regions (reg_name) VALUES ('Utah');
INSERT INTO regions (reg_name) VALUES ('British Columbia');

INSERT INTO categories (cat_name) VALUES ('help wanted');
INSERT INTO categories (cat_name) VALUES ('lost and found');
INSERT INTO categories (cat_name) VALUES ('for sale');

INSERT INTO  posts_cats (post_id, cat_id) VALUES (1, 2);
INSERT INTO  posts_cats (post_id, cat_id) VALUES (1, 3);
INSERT INTO  posts_cats (post_id, cat_id) VALUES (2, 3);

SELECT CONCAT(u.first_name, ' ', u.last_name), p.title, p.body, p.location, r.reg_name
FROM users as u 
JOIN posts as p 
ON p.user_id = u.id
JOIN regions as r 
ON r.id = p.region;