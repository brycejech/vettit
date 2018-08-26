
SELECT
    id, title, slug, body, author, org, channel, status, state, is_modified, modified_by, created, modified

FROM
    post

WHERE
    slug=$1
;
