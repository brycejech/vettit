
DROP TABLE IF EXISTS state CASCADE;

CREATE TABLE state
(
    id     serial       NOT NULL  PRIMARY KEY,
    value  varchar(32)  NOT NULL  UNIQUE
);
