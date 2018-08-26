
DROP TABLE IF EXISTS post CASCADE;

CREATE TABLE post
(
    id           serial     NOT NULL  PRIMARY KEY,
    author       int        NOT NULL  REFERENCES account(id),
    org          int                  REFERENCES org(id),
    channel      int        NOT NULL  REFERENCES channel(id),
    status       int        NOT NULL  REFERENCES status(id)   DEFAULT 1,
    state        int        NOT NULL  REFERENCES state(id)    DEFAULT 1,
    modified_by  int                  REFERENCES account(id),

    created      timestamp with time zone NOT NULL DEFAULT (now() at time zone 'utc'),
    modified     timestamp with time zone
);
