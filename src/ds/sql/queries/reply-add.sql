
INSERT INTO reply
    (body, author, comment_id)

VALUES
    ($1, $2, $3)

RETURNING *
;
