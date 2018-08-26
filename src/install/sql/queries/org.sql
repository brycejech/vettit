
DROP TABLE IF EXISTS org CASCADE;

CREATE TABLE org
(
    id       serial       NOT NULL  PRIMARY KEY,
    name     varchar(64)  NOT NULL  UNIQUE,
    slug     varchar(64)  NOT NULL  UNIQUE,
    uuid     uuid         NOT NULL  UNIQUE,

    created  timestamp with time zone NOT NULL DEFAULT (now() at time zone 'utc')
);
