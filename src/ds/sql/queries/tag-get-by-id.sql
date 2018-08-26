
SELECT
    t.id,
    t.name,
    t.slug,
    c.name as color_name,
    c.code as color_code,
    t.org,
    t.created

FROM tag t

    JOIN
        color c
    ON
        c.id=t.id

WHERE t.id=$1
;
