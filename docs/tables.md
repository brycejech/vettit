### Tables

#### account

| Column     | Type                     | Constraints                        |
| ---------- | ------------------------ | ---------------------------------- |
| id         | serial                   | NOT NULL PRIMARY KEY               |
| name       | varchar(64)              | NOT NULL                           |
| email      | varchar(64)              | NOT NULL UNIQUE                    |
| username   | varchar(64)              | NOT NULL UNIQUE                    |
| password   | char(60)                 | NOT NULL                           |
| uuid       | uuid                     | NOT NULL                           |
| registered | timestamp with time zone | DEFAULT (now() at time zone 'utc') |

#### post

| Column      | Type                     | Constraints                                 |
| ----------- | ------------------------ | ------------------------------------------- |
| id          | serial                   | NOT NULL PRIMARY KEY                        |
| title       | varchar(64)              | NOT NULL                                    |
| slug        | varchar(64)              | NOT NULL                                    |
| body        | text                     | NOT NULL                                    |
| author      | int                      | NOT NULL REFERENCES account(id)             |
| org         | int                      | REFERENCES org(id)                          |
| channel     | int                      | NOT NULL REFERENCES channel(id)             |
| status      | int                      | NOT NULL REFERENCES status(id) DEFAULT 1    |
| state       | int                      | NOT NULL REFERENCES state(id) DEFAULT 1     |
| is_modified | boolean                  | DEFAULT FALSE                               |
| modified_by | int                      | REFERENCES account(id)                      |
| created     | timestamp with time zone | NOT NULL DEFAULT (now() at time zone 'utc') |
| modified    | timestamp with time zone |                                             |

#### post_vote

| Column  | Type                     | Constraints                                 |
| ------- | ------------------------ | ------------------------------------------- |
| post_id | int                      | NOT NULL REFERENCES post(id)                |
| value   | int                      | NOT NULL                                    |
| author  | int                      | NOT NULL REFERENCES account(id)             |
| created | timestamp with time zone | NOT NULL DEFAULT (now() at time zone 'utc') |

#### post_tag

| Column  | Type                     | Constraints                                 |
| ------- | ------------------------ | ------------------------------------------- |
| post_id | int                      | NOT NULL REFERENCES post(id)                |
| tag_id  | int                      | NOT NULL REFERENCES tag(id)                 |
| created | timestamp with time zone | NOT NULL DEFAULT (now() at time zone 'utc') |

#### comment

| Column      | Type                     | Constraints                        |
| ----------- | ------------------------ | ---------------------------------- |
| id          | serial                   | NOT NULL PRIMARY KEY               |
| author      | int                      | NOT NULL REFERENCES account(id)    |
| body        | text                     | NOT NULL                           |
| post_id     | int                      | NOT NULL REFERENCES post(id)       |
| modified_by | int                      | REFERENCES account(id)             |
| created     | timestamp with time zone | DEFAULT (now() at time zone 'utc') |
| modified    | timestamp with time zone |                                    |

#### comment_vote

| Column     | Type                     | Constraints                        |
| ---------- | ------------------------ | ---------------------------------- |
| comment_id | int                      | NOT NULL REFERENCES comment(id)    |
| value      | int                      | NOT NULL                           |
| author     | int                      | NOT NULL REFERENCES account(id)    |
| created    | timestamp with time zone | DEFAULT (now() at time zone 'utc') |

#### reply

| Column     | Type                     | Constraints                        |
| ---------- | ------------------------ | ---------------------------------- |
| id         | serial                   | NOT NULL PRIMARY KEY               |
| body       | text                     | NOT NULL                           |
| comment_id | int                      | NOT NULL REFERENCES comment(id)    |
| author     | int                      | NOT NULL REFERENCES account(id)    |
| created    | timestamp with time zone | DEFAULT (now() at time zone 'utc') |

#### org

| Column  | Type                     | Constraints                                 |
| ------- | ------------------------ | ------------------------------------------- |
| id      | serial                   | PRIMARY KEY                                 |
| name    | varchar(64)              | NOT NULL UNIQUE                             |
| slug    | varchar(64)              | NOT NULL UNIQUE                             |
| uuid    | uuid                     | NOT NULL UNIQUE                             |
| created | timestamp with time zone | NOT NULL DEFAULT (now() at time zone 'utc') |

#### channel

| Column  | Type                     | Constraints                        |
| ------- | ------------------------ | ---------------------------------- |
| id      | serial                   | NOT NULL PRIMARY KEY               |
| name    | varchar(32)              | NOT NULL                           |
| slug    | varchar(32)              | NOT NULL                           |
| color   | int                      | NOT NULL REFERENCES color(id)      |
| org     | int                      | REFERENCES org(id)                 |
| created | timestamp with time zone | DEFAULT (now() at time zone 'utc') |

#### tag

| Column  | Type                     | Constraints                                 |
| ------- | ------------------------ | ------------------------------------------- |
| id      | serial                   | NOT NULL PRIMARY KEY                        |
| name    | varchar(32)              | NOT NULL                                    |
| slug    | varchar(32)              | NOT NULL                                    |
| color   | int                      | NOT NULL REFERENCES color(id)               |
| org     | int                      | REFERENCES org(id)                          |
| created | timestamp with time zone | NOT NULL DEFAULT (now() at time zone 'utc') |

#### color

| Column | Type        | Constraints          |
| ------ | ----------- | -------------------- |
| id     | serial      | NOT NULL PRIMARY KEY |
| name   | varchar(24) | NOT NULL UNIQUE      |
| code   | char(7)     | NOT NULL UNIQUE      |

#### state

| Column | Type        | Constraints          |
| ------ | ----------- | -------------------- |
| id     | serial      | NOT NULL PRIMARY KEY |
| name   | varchar(32) | NOT NULL UNIQUE      |

#### status

| Column | Type        | Constraints          |
| ------ | ----------- | -------------------- |
| id     | serial      | NOT NULL PRIMARY KEY |
| name   | varchar(32) | NOT NULL UNIQUE      |
