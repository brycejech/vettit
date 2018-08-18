
DROP TABLE IF EXISTS account CASCADE;

CREATE TABLE account
(
    id          serial       NOT NULL   PRIMARY KEY,
    username    varchar(64)  NOT NULL   UNIQUE,
    email       varchar(64)  NOT NULL   UNIQUE,
    name        varchar(64)  NOT NULL,
    password    char(60)     NOT NULL,
    org         int                     REFERENCES org(id),
    uuid        uuid         NOT NULL,

    registered  timestamp with time zone DEFAULT (now() at time zone 'utc')
);
