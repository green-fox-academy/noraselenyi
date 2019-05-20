CREATE DATABASE todo;

USE todo;
SHOW TABLES;
describe todo;   

CREATE TABLE todo(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    thing VARCHAR(20),
    until DATETIME NOT NULL,
    duration INT,
    repeated BOOLEAN NOT NULL
);


INSERT INTO todo (thing, until, duration, repeated) VALUES 
('cleaning', now(), 60, true),
('yoga', now(), 90, true),
('shopping', now(), 15, false),
('coding', now(), 300, true),
('exhibition', now(), 120, false),
('cooking', now(), 60, true);


CREATE TABLE in_progress(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    thing VARCHAR(20),
    until DATETIME NOT NULL,
    duration INT,
    repeated BOOLEAN NOT NULL
);

CREATE TABLE done(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    thing VARCHAR(20),
    until DATETIME NOT NULL,
    duration INT,
    repeated BOOLEAN NOT NULL
);

SELECT thing FROM todo WHERE repeated = 1;


DELETE FROM todo WHERE repeated = 1;

INSERT INTO in_progress (thing, until, duration, repeated) VALUES 
('cleaning', now(), 60, true),
('yoga', now(), 90, true),
('coding', now(), 300, true),
('cooking', now(), 60, true);
