SELECT
EXISTS(SELECT 1 FROM account WHERE email=$1)
AS "exists";
