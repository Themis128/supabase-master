---
title: Database API Examples
description: Supabase Database API usage examples
category: Database
---

## Create a record

```js
// Create a record
// Insert new record into a table called `rooms`
const { data, error } = await supabase
    .from("rooms")
    .insert({
        name: "Supabase Fan Club",
        public: true,
    });
```

## Read a record

```js
// Read a record
// Retrieve all of the `rooms`, and get all the messages for each room.
const { data, error } = await supabase
    .from("rooms").select(`
    name,
    messages ( text )
  `)
    .eq("public", true);
```
