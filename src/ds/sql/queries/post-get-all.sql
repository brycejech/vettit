
SELECT
	p.id,
	p.title,
    p.slug,
    p.body,
    p.org,

    c.name    AS channel,
    p.channel AS channel_id,
    co.name   AS channel_color,
    co.code   AS channel_color_code,
    co.id     AS channel_color_id,

    st.name   AS status,
    p.status  AS status_id,

    s.name    AS state,
    p.state   AS state_id,

    a1.name   AS author,
    p.author  AS author_id,
    a1.uuid   AS author_uuid,

    p.created,
    p.is_modified,
	a2.name AS modified_by,
    p.modified_by AS modified_by_id,
    p.modified,

    -- Can't COALESCE here.
    -- json_agg() will return '[null]' if no records, db seems to consider '[null]' as 'truthy'
	CASE WHEN tags.post_id IS NULL THEN '[]'::json ELSE json_agg(tags) END AS tags

FROM
	post p

    INNER JOIN channel c
        ON c.id = p.channel

    INNER JOIN color co
        ON co.id = c.color

    INNER JOIN status st
        ON st.id = p.status

    INNER JOIN state s
        ON s.id = p.state

	LEFT JOIN LATERAL
			(
				SELECT
					pt.post_id,
					t.name       AS tag_name,
					pt.tag_id,
					c.name       AS color,
					t.color      AS color_id,
                    c.code       AS color_code,
					pt.created   AS date_tagged

				FROM
					post_tag pt

					JOIN tag t
						ON t.id = pt.tag_id

					JOIN color c
						ON t.color = c.id

				WHERE
					pt.post_id = p.id

			) tags ON tags.post_id = p.id

    INNER JOIN account a1
        ON a1.id = p.author

	LEFT OUTER JOIN account a2
		ON a2.id = p.modified_by

GROUP BY
    p.id,
    c.name,
    st.name,
    s.name,
    co.name,
    co.id,
	a1.name,
    a1.uuid,
	a2.name,
	tags.post_id
