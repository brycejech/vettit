
DROP TABLE IF EXISTS status CASCADE;

CREATE TABLE status
(
    id     serial       NOT NULL  PRIMARY KEY,
    value  varchar(32)  NOT NULL  UNIQUE
);
