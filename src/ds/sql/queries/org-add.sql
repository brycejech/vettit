
INSERT INTO org
(name, slug, uuid)

VALUES
($1, $2, $3)

RETURNING *
;
