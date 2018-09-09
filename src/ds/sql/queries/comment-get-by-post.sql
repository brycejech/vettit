
SELECT
    c.id,
    c.body,
    c.post_id,
    c.created,
    c.modified,
    c.modified_by,

    c.author  AS author_id,
    a.name    AS author,
    a.uuid    AS author_uuid

FROM
    comment c

    INNER JOIN account a
        ON c.author = a.id

WHERE
    c.post_id = $1

ORDER BY c.created ASC
;
