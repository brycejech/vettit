
SELECT
    id, name, slug, uuid, created

FROM
    org

WHERE
    uuid=$1
;
