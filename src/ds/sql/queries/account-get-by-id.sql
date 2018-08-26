
SELECT
    id,
    name,
    email,
    username,
    password,
    uuid,
    registered

FROM
    account

WHERE
    id=$1
;
