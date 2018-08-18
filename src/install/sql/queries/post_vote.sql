
DROP TABLE IF EXISTS post_vote CASCADE;

CREATE TABLE post_vote
(
    post_id  int  NOT NULL   REFERENCES post(id),
    value    int  NOT NULL,
    author   int  NOT NULL   REFERENCES account(id),

    created  timestamp with time zone DEFAULT (now() at time zone 'utc')
);
