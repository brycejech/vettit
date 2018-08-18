
DROP TABLE IF EXISTS color CASCADE;

CREATE TABLE color
(
    id    serial       NOT NULL  PRIMARY KEY,
    name  varchar(24)  NOT NULL  UNIQUE,
    hex   char(6)      NOT NULL  UNIQUE
);
