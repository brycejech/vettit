
SELECT
    id, name, slug, uuid, created

FROM
    org

WHERE
    slug=$1
;
