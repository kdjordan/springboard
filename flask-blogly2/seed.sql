-- DROP DATABASE IF EXISTS blogly2;

-- CREATE DATABASE blogly2;

-- \c blogly2

-- CREATE TABLE users
-- (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(20),
--   last_name VARCHAR(20),

-- );

-- CREATE TABLE posts
-- (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(50) NOT NULL,
--   content TEXT NOT NULL,
--   created_at DATETIME NOT NULL,
--   user_id INT REFERENCES users
-- );



-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Kevin', 'Jordan', 'https://i.pravatar.cc/150?img=66');
-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Random', 'User', 'https://i.pravatar.cc/150?img=6');
-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Friendo', 'McRandom', 'https://i.pravatar.cc/150?img=3');
-- INSERT INTO users (first_name, last_name, avatar) VALUES ('Doctor', 'DrinksAlot', 'https://i.pravatar.cc/150?img=9');
  
-- INSERT INTO posts (title, content, created_at, user_id) VALUES ('A Post Bout Nothing', 
-- 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
-- '2021-09-12');