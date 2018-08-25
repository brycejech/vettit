
DROP TABLE IF EXISTS status CASCADE;

CREATE TABLE status
(
    id     serial       NOT NULL  PRIMARY KEY,
    name   varchar(32)  NOT NULL  UNIQUE
);


-- ADD DEFAULT STATUSES
INSERT INTO status
(name)

VALUES
('Queued'),
('Open'),
('Waiting'),
('Pending Approval'),
('Rejected'),
('Stalled'),
('Resolved');
