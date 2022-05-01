-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE flights
(
  id SERIAL PRIMARY KEY,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline TEXT NOT NULL,
  from_city TEXT NOT NULL,
  from_country TEXT NOT NULL,
  to_city TEXT NOT NULL,
  to_country TEXT NOT NULL
);

CREATE TABLE passenger 
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  seat TEXT NOT NULL,
  flight_id INT REFERENCES flights,
  passenger_id INT REFERENCES passenger
);



  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 'Washington DC', 'United States', 'Seattle', 'United States');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 'Dubai', 'UAE', 'Beijing', 'China');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 'New York', 'United States', 'Charlotte', 'United States');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States');
  INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES ('2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');


  INSERT INTO passenger (first_name, last_name) VALUES ('Jennifer', 'Finch');
  INSERT INTO passenger (first_name, last_name) VALUES ('Thadeus', 'Gathercoal');
  INSERT INTO passenger (first_name, last_name) VALUES ('Sonja', 'Pauley');
  INSERT INTO passenger (first_name, last_name) VALUES ('Jennifer', 'Finch');
  INSERT INTO passenger (first_name, last_name) VALUES ('Waneta', 'Skeleton');
  INSERT INTO passenger (first_name, last_name) VALUES ('Thadeus', 'Gathercoal');
  INSERT INTO passenger (first_name, last_name) VALUES ('Berkie', 'Wycliff');
  INSERT INTO passenger (first_name, last_name) VALUES ('Alvin', 'Leathes');
  INSERT INTO passenger (first_name, last_name) VALUES ('Berkie', 'Wycliff');
  INSERT INTO passenger (first_name, last_name) VALUES ('Cory', 'Squibbes');


  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('33B', 1, 1);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('8A', 2, 2);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('12F', 3, 3);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('20A', 4, 4);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('23D', 5, 5);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('18C', 6, 6);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('9E', 7, 7);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('1A', 8, 8);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('32B', 7, 9);
  INSERT INTO tickets (seat, passenger_id, flight_id) VALUES ('10D', 9, 10);
