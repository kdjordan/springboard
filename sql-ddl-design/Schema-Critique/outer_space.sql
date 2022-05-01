-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy TEXT NOT NULL
);

CREATE TABLE moons (
  id SERIAL PRIMARY KEY,
  planet_id INT REFERENCES planets,
  name TEXT
);

INSERT INTO planets
  (name, orbital_period_in_years, orbits_around, galaxy)
VALUES
  ('Earth', 1.00, 'The Sun', 'Milky Way'),
  ('Mars', 1.88, 'The Sun', 'Milky Way'),
  ('Venus', 0.62, 'The Sun', 'Milky Way'),
  ('Neptune', 164.8, 'The Sun', 'Milky Way'),
  ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way'),
  ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way');

  INSERT INTO moons (planet_id, name) VALUES (1, 'The Moon');
  INSERT INTO moons (planet_id, name) VALUES (2, 'Phobos');
  INSERT INTO moons (planet_id, name) VALUES (2, 'Deimos');
  INSERT INTO moons (planet_id, name) VALUES (3, NULL);
  INSERT INTO moons (planet_id, name) VALUES (4, 'Naiad');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Thalassa');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Despina');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Galatea');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Larissa');
  INSERT INTO moons (planet_id, name) VALUES (4, 'S/2004 N 1');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Proteus');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Triton');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Nereid');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Halimede');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Halimede');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Sao');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Laomedeia');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Psamathe');
  INSERT INTO moons (planet_id, name) VALUES (4, 'Neso');
  INSERT INTO moons (planet_id, name) VALUES (5, NULL);
  INSERT INTO moons (planet_id, name) VALUES (6, NULL);
 