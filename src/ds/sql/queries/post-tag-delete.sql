
DELETE FROM
    post_tag

WHERE
    post_id=$1 AND tag_id=$2
;
