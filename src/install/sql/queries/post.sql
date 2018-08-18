
DROP TABLE IF EXISTS post CASCADE;

CREATE TABLE post
(
    id           serial     NOT NULL  PRIMARY KEY,
    author       int        NOT NULL  REFERENCES account(id),
    org          int                  REFERENCES org(id),
    channel      int        NOT NULL  REFERENCES channel(id),
    status       int        NOT NULL  REFERENCES status(id),
    state        int        NOT NULL  REFERENCES state(id) DEFAULT 0,
    modified_by  int                  REFERENCES account(id),

    created      timestamp with time zone DEFAULT (now() at time zone 'utc'),
    modified     timestamp with time zone
);
