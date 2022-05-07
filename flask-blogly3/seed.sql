-- DROP DATABASE IF EXISTS blogly3;

-- CREATE DATABASE blogly3;

-- \c blogly3

-- CREATE TABLE users
-- (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(20),
--   last_name VARCHAR(20),
--   avatar VARCHAR(40)
--   );

-- CREATE TABLE posts
-- (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(50) NOT NULL,
--   content TEXT NOT NULL,
--   created_at DATETIME NOT NULL,
--   user_id INTEGER REFERENCES users
-- );

-- CREATE TABLE tags(
--     id SERIAL PRIMARY KEY,
--     tag_name VARCHAR(20) NOT NULL,
--     post_id INTEGER REFERENCES posts,

-- );

-- CREATE TABLE post_tag(
--     id SERIAL PRIMARY KEY,
--     tag_id INTEGER REFERENCES tags,
--     post_id INTEGER REFERENCES posts,
-- );



-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Kevin', 'Jordan', 'https://i.pravatar.cc/150?img=66');
-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Random', 'User', 'https://i.pravatar.cc/150?img=6');
-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Friendo', 'McRandom', 'https://i.pravatar.cc/150?img=3');
-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Doctor', 'DrinksAlot', 'https://i.pravatar.cc/150?img=9');
  
-- INSERT INTO posts (title, content, created_at, user_id) VALUES ('A Post Bout Nothing', 
-- 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
-- '2021-09-12');

-- INSERT INTO tags(name) VALUES ('coding')
-- INSERT INTO tags(name) VALUES ('hobbies')
-- INSERT INTO tags(name) VALUES ('travel')
-- INSERT INTO tags(name) VALUES ('sports')

-- INSERT INTO post_tag(post_id, tag_id) VALUES (1, 1)
-- INSERT INTO post_tag(post_id, tag_id) VALUES (1, 2)
-- INSERT INTO post_tag(post_id, tag_id) VALUES (1, 3)
-- INSERT INTO post_tag(post_id, tag_id) VALUES (1, 4)

