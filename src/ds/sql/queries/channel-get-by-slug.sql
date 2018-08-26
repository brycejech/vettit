
SELECT
    c.id,
	c.name,
	c.slug,
	o.name as color_name,
	o.code as color_code,
	c.org,
	c.created

FROM
    channel c

    JOIN
        color o
    ON
        o.id = c.id

WHERE
    c.slug=$1
;
