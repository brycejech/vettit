

DROP TABLE IF EXISTS channel CASCADE;

CREATE TABLE channel
(
    id       serial       NOT NULL   PRIMARY KEY,
    name     varchar(32)  NOT NULL,
    slug     varchar(32)  NOT NULL,
    color    int          NOT NULL   REFERENCES color(id),
    org      int                     REFERENCES org(id),

    created  timestamp with time zone DEFAULT (now() at time zone 'utc')
);
