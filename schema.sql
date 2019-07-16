DROP DATABASE IF EXISTS playerDB;
CREATE DATABASE playerDB;
USE playerDB;

CREATE TABLE `players` (
  `id` INTEGER (11) AUTO_INCREMENT NOT NULL,
  `player_name` VARCHAR (255) NOT NULL,
  `player_email` VARCHAR (255) NOT NULL,
  `wins` INTEGER (11) NOT NULL,
  `losses` INTEGER (11) NOT NULL,
  `draws` INTEGER (11) NOT NULL,

  PRIMARY KEY (`id`) 
);