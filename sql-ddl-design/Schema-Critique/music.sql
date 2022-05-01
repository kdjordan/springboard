-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album TEXT NOT NULL
);

CREATE TABLE songs_artists
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  song_id INT REFERENCES songs
);

CREATE TABLE songs_producers
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  song_id INT REFERENCES songs
);

INSERT INTO songs
  (title, duration_in_seconds, release_date, album)
VALUES
  ('MMMBop', 238, '04-15-1997', 'Middle of Nowhere'),
  ('Bohemian Rhapsody', 355, '10-31-1975','A Night at the Opera'),
  ('One Sweet Day', 282, '11-14-1995', 'Daydream'),
  ('Shallow', 216, '09-27-2018','A Star Is Born'),
  ('How You Remind Me', 223, '08-21-2001', 'Silver Side Up'),
  ('New York State of Mind', 276, '10-20-2009', 'The Blueprint 3'),
  ('Dark Horse', 215, '12-17-2013', 'Prism'),
  ('Moves Like Jagger', 201, '06-21-2011', 'Hands All Over'),
  ('Complicated', 244, '05-14-2002','Let Go'),
  ('Say My Name', 240, '11-07-1999', 'The Writing''s on the Wall');
  
  INSERT INTO songs_artists (name, song_id) VALUES ('Hanson', 1);
  INSERT INTO songs_producers (name, song_id) VALUES ('Dust Brothers', 1);
  INSERT INTO songs_producers (name, song_id) VALUES ('Stephen Lironi', 1);

  INSERT INTO songs_artists (name, song_id) VALUES ('Queen', 2);
  INSERT INTO songs_producers (name, song_id) VALUES ('Roy Thomas Baker', 2);

  INSERT INTO songs_artists (name, song_id) VALUES ('Mariah Cary', 3);
  INSERT INTO songs_artists (name, song_id) VALUES ('Boyz II Men', 3);
  INSERT INTO songs_producers (name, song_id) VALUES ('Walter Afanasieff', 3);

  INSERT INTO songs_artists (name, song_id) VALUES ('Lady Gaga', 4);
  INSERT INTO songs_artists (name, song_id) VALUES ('Bradley Cooper', 4);
  INSERT INTO songs_producers (name, song_id) VALUES ('Benjamin Rice', 4);

  INSERT INTO songs_artists (name, song_id) VALUES ('Nickelback', 5);
  INSERT INTO songs_producers (name, song_id) VALUES ('Rick Parashar', 5);

  INSERT INTO songs_artists (name, song_id) VALUES ('Jay Z', 6);
  INSERT INTO songs_artists (name, song_id) VALUES ('Alicia Keys', 6);
  INSERT INTO songs_producers (name, song_id) VALUES ('Al Shux', 6);


  INSERT INTO songs_artists (name, song_id) VALUES ('Katy Perry', 7);
  INSERT INTO songs_artists (name, song_id) VALUES ('Juicy J', 7);
  INSERT INTO songs_producers (name, song_id) VALUES ('Max Martin', 7);
  INSERT INTO songs_producers (name, song_id) VALUES ('Cirkut', 7);

  INSERT INTO songs_artists (name, song_id) VALUES ('Maroon 5', 8);
  INSERT INTO songs_artists (name, song_id) VALUES ('Christina Aguilera', 8);
  INSERT INTO songs_producers (name, song_id) VALUES ('Shellback', 8);
  INSERT INTO songs_producers (name, song_id) VALUES ('Benny Blanco', 8);

  INSERT INTO songs_artists (name, song_id) VALUES ('Avril Lavigne', 9);
  INSERT INTO songs_producers (name, song_id) VALUES ('The Matrix', 9);

  INSERT INTO songs_artists (name, song_id) VALUES ('Destiny''s Child', 10);
  INSERT INTO songs_producers (name, song_id) VALUES ('Darkchild', 10);
  


  

