
SELECT
    id, name, slug, uuid, created

FROM
    org

WHERE
    id=$1
;
