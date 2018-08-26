
INSERT INTO post
(title, slug, body, author, channel)

VALUES
($1, $2, $3, $4, $5)

RETURNING *
;
