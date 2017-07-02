CREATE DATABASE if not exists burgers_db;
 
USE burgers_db;
 
CREATE TABLE burgers (
	id INTEGER(11) auto_increment NOT NULL, 
    burger_name VARCHAR(30) NOT NULL, 
    devoured BOOLEAN NOT NULL DEFAULT 0, 
    date timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

