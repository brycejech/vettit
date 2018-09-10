
SELECT
    c.id,
    c.body,
    c.post_id,
    c.created,
    c.modified,
    c.modified_by,

    c.author  AS author_id,
    a.name    AS author,
    a.uuid    AS author_uuid,

	CASE WHEN replies.comment_id IS NULL THEN '[]'::json ELSE json_agg(replies) END AS replies

FROM
    comment c

    INNER JOIN account a
        ON c.author = a.id

    LEFT JOIN LATERAL
        (
            SELECT
                r.id,
                r.body,
                r.comment_id,
                r.created,
                r.author AS author_id,
				a2.name  AS author,
				a2.uuid  AS author_uuid

            FROM
                reply r

				INNER JOIN account a2
					ON a2.id = r.author

            WHERE r.comment_id = c.id

			ORDER BY r.created ASC

        ) replies on replies.comment_id = c.id

WHERE
    c.id = $1

GROUP BY
	c.id,
	a.name,
	a.uuid,
	replies.comment_id

ORDER BY c.created ASC
;
