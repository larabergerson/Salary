DROP DATABASE IF EXISTS playerDB;
CREATE DATABASE playerDB;
USE playerDB;

<<<<<<< HEAD
CREATE TABLE  scoreboard (
id INTEGER (10) AUTO_INCREMENT NOT NULL, 
players_name VARCHAR  (11) NOT NULL,
correct_answers INTEGER (11) NOT NULL,
incorrect_answers INTEGER (11) NOT NULL
);

-- CREATE TABLE `players` (
--   `id` INTEGER (11) AUTO_INCREMENT NOT NULL,
--   `player_name` VARCHAR (255) NOT NULL,
--   `player_email` VARCHAR (255) NOT NULL,
--   `player_password` VARCHAR (6) NOT NULL,
--   `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  

--   PRIMARY KEY (`id`) 
-- );

-- CREATE TABLE  `playersData` (
-- `id` INTEGER (11) AUTO_INCREMENT NOT NULL, 
-- `players_id` INTEGER (11) NOT NULL,
-- `wins` INTEGER (11) NOT NULL,
-- `losses` INTEGER (11) NOT NULL,
-- `draws` INTEGER (11) NOT NULL,

-- PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `game`(
--   `id` INTEGER (11) AUTO_INCREMENT NOT NULL, 
--   `player1_id` INTEGER (11) NOT NULL,
--   `player2_id`INTEGER (11) NOT NULL,
--   `turn` VARCHAR (2) NOT NULL,
--   `winner_id`INTEGER (2),

--   PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `moves`(
--   `id` INTEGER (11) AUTO_INCREMENT NOT NULL,
--   `game_id` INTEGER (11) NOT NULL,
--   `player_id` INTEGER (11) NOT NULL,
--   `row` VARCHAR (3) NOT NULL,
--   `coloumn` INTEGER (3) NOT NULL,
--   `mark` VARCHAR (2) NOT NULL,

 
--   PRIMARY KEY (`id`)
-- );
=======
CREATE TABLE `scoreboard` (
  `id` INTEGER (11) AUTO_INCREMENT NOT NULL,
  `corrects` INTEGER (200) NOT NULL,
  `incorrects` INTEGER (200) NOT NULL,
 
 PRIMARY KEY (`id`)
);
>>>>>>> master
