
INSERT INTO channel
(name, slug, color)

VALUES
($1, $2, $3)

RETURNING *
;
