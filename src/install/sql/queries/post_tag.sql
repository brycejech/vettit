
DROP TABLE IF EXISTS post_tag;

CREATE TABLE post_tag
(
    post_id int NOT NULL REFERENCES post(id),
    tag_id  int NOT NULL REFERENCES tag(id),
    
    created timestamp with time zone NOT NULL DEFAULT (now() at time zone 'utc')
)
;
