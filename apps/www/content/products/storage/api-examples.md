---
title: Storage API Examples
description: Supabase Storage API usage examples
category: Storage
---

## Upload a file

```js
// Upload an image to the "avatars" bucket
const spaceCat = event.target.files[0];
const { data, error } = await supabase
    .storage
    .from("avatars")
    .upload("space-cat.png", spaceCat);
```

## Download a file

```js
// Download the "space-cat.png" image from the "avatars" bucket
const { data, error } = await supabase
    .storage
    .from("avatars")
    .download("space-cat.png");
```

## List files

```js
// List all the files in the "avatars" bucket
const { data, error } = await supabase
    .storage
    .from("avatars")
    .list();
```

## Move and rename files

```js
// Move and rename files
const { data, error } = await supabase
    .storage
    .from("avatars")
    .move("public/space-cat.png", "private/space-cat.png");
```

## Delete files

```js
// Delete a list of files
const { data, error } = await supabase
    .storage
    .from("avatars")
    .remove(["avatar1.png", "avatar2.png"]);
```
