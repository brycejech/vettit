
DROP TABLE IF EXISTS tag CASCADE;

CREATE TABLE tag
(
    id       serial       NOT NULL   PRIMARY KEY,
    name     varchar(32)  NOT NULL,
    author   int          NOT NULL   REFERENCES account(id),
    org      int                     REFERENCES org(id),
    color    int          NOT NULL   REFERENCES color(id),

    created  timestamp with time zone DEFAULT (now() at time zone 'utc')
);
