
DROP TABLE IF EXISTS reply CASCADE;

CREATE TABLE reply
(
    id          serial  NOT NULL PRIMARY KEY,
    body        text    NOT NULL,
    comment_id  int     NOT NULL REFERENCES comment(id),
    author      int     NOT NULL REFERENCES account(id),

    created  timestamp with time zone DEFAULT (now() at time zone 'utc')    
);
