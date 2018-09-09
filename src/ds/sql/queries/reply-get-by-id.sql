
SELECT
    r.id,
    r.body,
    r.comment_id,
    a.name AS author,
    a.uuid AS author_uuid,
    r.author AS author_id,
    r.created

FROM
    reply r

    INNER JOIN account a
        ON a.id = r.author

WHERE
    r.id = $1
;
