
SELECT
    id, name, slug, org, color, created

FROM tag

WHERE id=$1
;
