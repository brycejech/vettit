
INSERT INTO color
(name, code)

VALUES
($1, $2)

RETURNING *
;
