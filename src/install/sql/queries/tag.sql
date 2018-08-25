
DROP TABLE IF EXISTS tag CASCADE;

CREATE TABLE tag
(
    id       serial       NOT NULL   PRIMARY KEY,
    name     varchar(32)  NOT NULL,
    org      int                     REFERENCES org(id),
    color    int          NOT NULL   REFERENCES color(id),

    created  timestamp with time zone NOT NULL DEFAULT (now() at time zone 'utc')
);
