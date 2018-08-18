
DROP TABLE IF EXISTS comment CASCADE;

CREATE TABLE comment
(
    id           serial     NOT NULL  PRIMARY KEY,
    author       int        NOT NULL  REFERENCES account(id),
    body         text       NOT NULL,
    post_id      int        NOT NULL  REFERENCES post(id),
    parent_id    int                  REFERENCES comment(id),
    modified_by  int                  REFERENCES account(id),

    created      timestamp with time zone DEFAULT (now() at time zone 'utc'),
    modified     timestamp with time zone
);
