SELECT
EXISTS(SELECT 1 FROM account WHERE username=$1)
AS "exists";
