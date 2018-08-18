
DROP TABLE IF EXISTS comment_vote CASCADE;

CREATE TABLE comment_vote
(
    comment_id  int  NOT NULL   REFERENCES comment(id),
    value       int  NOT NULL,
    author      int  NOT NULL   REFERENCES account(id),

    created     timestamp with time zone DEFAULT (now() at time zone 'utc')
);
