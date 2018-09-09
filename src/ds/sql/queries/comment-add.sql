
INSERT INTO comment
    (body, author, post_id)

VALUES
    ($1, $2, $3)

RETURNING *
;
