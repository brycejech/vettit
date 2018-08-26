
SELECT
    id, name, slug, org, color, created

FROM tag

WHERE slug=$1
;
