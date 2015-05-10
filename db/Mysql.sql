USE stackr;
DROP DATABASE stackr;
CREATE DATABASE stackr;
USE stackr;

CREATE TABLE users
(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)

) ENGINE=InnoDB;

CREATE TABLE stacks
(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATETIME NOT NULL,

    PRIMARY KEY (id),

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE

) ENGINE=InnoDB;

CREATE TABLE cards
(
    id INT NOT NULL AUTO_INCREMENT,
    stack_id INT NOT NULL,
    front VARCHAR(255) NOT NULL,
    back VARCHAR(255) NOT NULL,

    PRIMARY KEY (id),

    FOREIGN KEY (stack_id)
        REFERENCES stacks(id)
        ON DELETE CASCADE

) ENGINE=InnoDB;

CREATE TABLE users_cards
(
    user_id INT NOT NULL,
    card_id INT NOT NULL,
    correct INT NOT NULL,
    date DATETIME NOT NULL,

    PRIMARY KEY (user_id, card_id),

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (card_id)
        REFERENCES cards(id)
        ON DELETE CASCADE

) ENGINE=InnoDB;
