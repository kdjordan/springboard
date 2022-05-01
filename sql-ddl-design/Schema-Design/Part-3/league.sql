DROP DATABASE IF EXISTS league;  

CREATE DATABASE league;  

\c league  

CREATE TABLE seasons (id SERIAL PRIMARY KEY, start_date DATE, end_date DATE);

CREATE TABLE teams (id SERIAL PRIMARY KEY, name TEXT, season_id INT REFERENCES seasons);

CREATE TABLE players (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT, team_id INT REFERENCES teams);

CREATE TABLE referees (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT);

CREATE TABLE matches (id SERIAL PRIMARY KEY, team1_id INT REFERENCES teams, team2_id INT REFERENCES teams, winner_id INT REFERENCES teams);

CREATE TABLE matches_referees (id SERIAL PRIMARY KEY, match_id INT REFERENCES matches, ref_id INT REFERENCES referees);

CREATE TABLE goals (id SERIAL PRIMARY KEY, player_id INT REFERENCES players, match_id INT REFERENCES matches);


INSERT INTO seasons (start_date, end_date) VALUES ('2021-04-01', '2021-07-01');
INSERT INTO seasons (start_date, end_date) VALUES ('2021-07-01', '2021-10-01');

INSERT INTO teams (name, season_id) VALUES ('Footie 4 All',1);
INSERT INTO teams (name, season_id) VALUES ('Feets of Soccer',1);
INSERT INTO teams (name, season_id) VALUES ('Footloose',2);
INSERT INTO teams (name, season_id) VALUES ('Pitched Pursuits',2);

INSERT INTO players (first_name, last_name, team_id) VALUES ('Mark', 'Leftfoot', 1);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Carrie', 'Goodfoot', 1);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Gary', 'Bigfoot', 1);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Alicia', 'Sweetfoot', 1);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Nolan', 'Leftfeet', 2);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Stacy', 'Goodfeet', 2);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Peter', 'Bigfeet', 2);
INSERT INTO players (first_name, last_name, team_id) VALUES ('Amanda', 'Sweetfeet', 2);

INSERT INTO referees (first_name, last_name) VALUES ('Sir Marcus','Eagleye');
INSERT INTO referees (first_name, last_name) VALUES ('Patricia','Eagleye');
INSERT INTO referees (first_name, last_name) VALUES ('Todd','Myopothy');
INSERT INTO referees (first_name, last_name) VALUES ('Sherman','Badsight');

INSERT INTO matches (team1_id, team2_id, winner_id) VALUES (1,2,2);
INSERT INTO matches (team1_id, team2_id, winner_id) VALUES (2,1,1);

INSERT INTO matches_referees (match_id, ref_id) VALUES (1, 1);
INSERT INTO matches_referees (match_id, ref_id) VALUES (1, 2);
INSERT INTO matches_referees (match_id, ref_id) VALUES (2, 3);
INSERT INTO matches_referees (match_id, ref_id) VALUES (2, 4);

INSERT INTO goals (player_id, match_id) VALUES (1, 1);
INSERT INTO goals (player_id, match_id) VALUES (3, 1);
INSERT INTO goals (player_id, match_id) VALUES (5, 1);
INSERT INTO goals (player_id, match_id) VALUES (6, 1);
INSERT INTO goals (player_id, match_id) VALUES (8, 1);

SELECT * FROM teams;
SELECT * FROM players;

SELECT CONCAT(first_name, ' ', last_name), t.name
FROM players as p 
JOIN teams as t 
ON p.team_id = t.id;

