### Tables

#### user

| Column     | Type                    | Constraints                       |
| ---------- | ----------------------- | --------------------------------- |
| id         | serial                  | NOT NULL  PRIMARY KEY             |
| username   | varchar(64)             | NOT NULL UNIQUE                   |
| email      | varchar(64)             | NOT NULL UNIQUE                   |
| name       | varchar(64)             | NOT NULL                          |
| password   | char(60)                | NOT NULL                          |
| org        | int                     | REFERENCES org(id)                |
| uuid       | uuid                    | NOT NULL                          |
| registered | timestamp with timezone | DEFAULT (now() at timezone 'utc') |

#### post

| Column      | Type                    | Constraints                             |
| ----------- | ----------------------- | --------------------------------------- |
| id          | serial                  | NOT NULL PRIMARY KEY                    |
| author      | int                     | NOT NULL REFERENCES user(id)            |
| org         | int                     | REFERENCES org(id)                      |
| channel     | int                     | NOT NULL REFERENCES channel(id)         |
| status      | int                     | NOT NULL REFERENCES status(id)          |
| state       | int                     | NOT NULL REFERENCES state(id) DEFAULT 0 |
| modified_by | int                     | REFERENCES user(id)                     |
| created     | timestamp with timezone | DEFAULT (now() at timezone 'utc')       |
| modified    | timestamp with timezone |                                         |

#### post_vote

| Column  | Type                    | Constraints                       |
| ------- | ----------------------- | --------------------------------- |
| post_id | int                     | NOT NULL REFERENCES post(id)      |
| value   | int                     | NOT NULL                          |
| author  | int                     | NOT NULL REFERENCES user(id)      |
| created | timestamp with timezone | DEFAULT (now() at timezone 'utc') |

#### comment

| Column      | Type                    | Constraints                       |
| ----------- | ----------------------- | --------------------------------- |
| id          | serial                  | NOT NULL PRIMARY KEY              |
| author      | int                     | NOT NULL REFERENCES user(id)      |
| body        | text                    | NOT NULL                          |
| post_id     | int                     | NOT NULL REFERENCES post(id)      |
| parent_id   | int                     | REFERENCES comment(id)            |
| modified_by | int                     | REFERENCES user(id)               |
| created     | timestamp with timezone | DEFAULT (now() at timezone 'utc') |
| modified    | timestamp with timezone |                                   |

#### comment_vote

| Column     | Type                    | Constraints                       |
| ---------- | ----------------------- | --------------------------------- |
| comment_id | int                     | NOT NULL REFERENCES comment(id)   |
| value      | int                     | NOT NULL                          |
| author     | int                     | NOT NULL REFERENCES user(id)      |
| created    | timestamp with timezone | DEFAULT (now() at timezone 'utc') |

#### org

| Column  | Type                    | Constraints                       |
| ------- | ----------------------- | --------------------------------- |
| id      | serial                  | PRIMARY KEY                       |
| name    | varchar(64)             | NOT NULL UNIQUE                   |
| uuid    | uuid                    | NOT NULL UNIQUE                   |
| created | timestamp with timezone | DEFAULT (now() at timezone 'utc') |

#### channel

| Column  | Type                    | Constraints                       |
| ------- | ----------------------- | --------------------------------- |
| id      | serial                  | NOT NULL PRIMARY KEY              |
| name    | varchar(32)             | NOT NULL                          |
| author  | int                     | NOT NULL REFERENCES user(id)      |
| org     | int                     | REFERENCES org(id)                |
| color   | int                     | NOT NULL REFERENCES color(id)     |
| created | timestamp with timezone | DEFAULT (now() at timezone 'utc') |

#### tag

| Column  | Type                    | Constraints                       |
| ------- | ----------------------- | --------------------------------- |
| id      | serial                  | NOT NULL PRIMARY KEY              |
| name    | varchar(32)             | NOT NULL                          |
| author  | int                     | NOT NULL REFERENCES user(id)      |
| org     | int                     | REFERENCES org(id)                |
| color   | int                     | NOT NULL REFERENCES color(id)     |
| created | timestamp with timezone | DEFAULT (now() at timezone 'utc') |

#### color

| Column | Type        | Constraints          |
| ------ | ----------- | -------------------- |
| id     | serial      | NOT NULL PRIMARY KEY |
| name   | varchar(24) | NOT NULL UNIQUE      |
| hex    | char(6)     | NOT NULL UNIQUE      |

#### state

| Column | Type        | Constraints          |
| ------ | ----------- | -------------------- |
| id     | serial      | NOT NULL PRIMARY KEY |
| value  | varchar(32) | NOT NULL UNIQUE      |

#### status

| Column | Type        | Constraints          |
| ------ | ----------- | -------------------- |
| id     | serial      | NOT NULL PRIMARY KEY |
| value  | varchar(32) | NOT NULL UNIQUE      |
