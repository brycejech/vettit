
SELECT
    p.id,
    p.title,
    p.slug,
    p.body,
    a.name   as author_name,
    a.id     as author_id,
    a.uuid   as author_uuid,
    c.name   as channel,
    c.id     as channel_id,
    st.name  as status,
    st.id    as status_id,
    s.name   as state,
    s.id     as state_id,
    p.org,
    p.is_modified,
    p.modified_by,
    p.created,
    p.modified

FROM
    post p

    JOIN account a
        ON a.id=p.author

    JOIN state s
        ON s.id=p.state

    JOIN status st
        ON st.id=p.status

    JOIN channel c
        ON c.id=p.channel

WHERE
    p.id=$1
;
