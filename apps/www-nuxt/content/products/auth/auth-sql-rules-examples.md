---
title: Auth SQL Rules Examples
description: Supabase Auth SQL rules and RLS policy examples
category: Auth
---

## Allow read access

**Public profiles are viewable by everyone**

Create a policy that allows public access to a table:

```sql
-- 1. Create table
create table profiles (
  id serial primary key,
  name text
);

-- 2. Enable RLS
alter table profiles enable row level security;

-- 3. Create Policy
create policy "Public profiles are viewable by everyone." 
on profiles for select 
using ( true );
```

## Restrict updates

**Users can update their own profiles**

Create a policy that only allows a user to update rows that match their unique
ID:

```sql
-- 1. Create table
create table profiles (
  id serial primary key,
  name text
);

-- 2. Enable RLS
alter table profiles enable row level security;

-- 3. Create Policy
create policy "Users can update their own profiles." 
on profiles for update 
using ( (select auth.uid()) = id );
```

## Advanced rules

**Team members can update team details**

Create a policy that allows for team members to update only rows which match
their team ID:

```sql
create table teams (
  id bigint primary key generated always as identity,
  name text
);

create table members (
  team_id bigint references teams,
  user_id uuid references auth.users
);

alter table teams enable row level security;

create policy "Team members can update team details if they belong to the team"
  on teams
  for update using (
    (select auth.uid()) in (
      select user_id from members
      where team_id = id
    )
  );
```
