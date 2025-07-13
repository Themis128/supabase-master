---
title: Database Extensions Examples
description: Supabase Database extensions and SQL usage examples
category: Database
---

## Geographical

**Spatial and Geographic objects for PostgreSQL**

```sql
SELECT superhero.name
FROM city, superhero
WHERE ST_Contains(city.geom, superhero.geom)
AND city.name = 'Gotham';
```

_PostGIS is a spatial database extender for PostgreSQL object-relational
database. It adds support for geographic objects allowing location queries to be
run in SQL._

## Cryptographic

**Cryptographic functions for PostgreSQL.**

```sql
-- This can be run in the SQL editor
psql
CREATE EXTENSION pgcrypto;
SELECT crypt('mypass', gen_salt('bf', 4));
crypt
--------------------------------------------------------------
$2a$04$1bfMQDOR6aLyD4q3KVb8/ujG7ZAkyie4d/s3ABwuZNbzkFFgXtC76

-- We can now execute the statement below to store the string safely in the database:
INSERT INTO users (user_id,enc_pass) VALUES (1,'$2a$04$1bfMQDOR6aLyD4q3KVb8/ujG7ZAkyie4d/s3ABwuZNbzkFFgXtC76');
```

_The pgcrypto module is a cryptographic extension that provides a number of
hashing and cryptographic functions._

## Monitoring

**Tracking execution statistics of all SQL statements**

```sql
SELECT order_details.qty,
    order_details.item_id,
    order_details.item_price
FROM order_details,
  customers
WHERE customers.id = order_details.customer_id
AND customers.email = 'john@supabase.io'

-- You can now view pg_stat_statements

SELECT * 
FROM pg_stat_statements;

userid              | 16384
dbid                | 16388
query               | select * from users where email = ?;
calls               | 2
total_time          | 0.000268
rows                | 2
shared_blks_hit     | 16
shared_blks_read    | 0
shared_blks_dirtied | 0
shared_blks_written | 0
local_blks_hit      | 0
local_blks_read     | 0
local_blks_dirtied  | 0
local_blks_written  | 0
...
```

_The pg_stat_statements module provides a means for tracking execution
statistics of all SQL statements executed by a server._
