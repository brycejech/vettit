
DROP TABLE IF EXISTS state CASCADE;

CREATE TABLE state
(
    id     serial       NOT NULL  PRIMARY KEY,
    name   varchar(32)  NOT NULL  UNIQUE
);


-- ADD DEFAULT STATES
INSERT INTO state
(name)

VALUES
('Open'),
('Locked'),
('Closed'),
('Hidden');
