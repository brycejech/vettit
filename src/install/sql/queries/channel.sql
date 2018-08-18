

DROP TABLE IF EXISTS channel CASCADE;

CREATE TABLE channel
(
    id       serial       NOT NULL   PRIMARY KEY,
    name     varchar(32)  NOT NULL,
    author   int          NOT NULL   REFERENCES account(id),
    org      int                     REFERENCES org(id),
    color    int          NOT NULL   REFERENCES color(id),

    created  timestamp with time zone DEFAULT (now() at time zone 'utc')
);
