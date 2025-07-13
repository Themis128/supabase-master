---
title: Storage Permissions Examples
description: Supabase Storage SQL policy examples
category: Storage
---

## Public access to a bucket

Allow public CRUD access to a bucket:

```sql
create policy "Public Access" 
on storage.objects for all 
using ( bucket_id = 'avatars' );
```

## Public access to a folder

Allow public CRUD access to a folder in a bucket:

```sql
create policy "Public access to a folder" 
on storage.objects for all 
using (
  bucket_id = 'avatars' 
  and (storage.foldername(name))[1] = 'public' 
);
```

## Authenticated access to a bucket

Allow any authenticated user access to a folder:

```sql
create policy "Logged in access" 
on storage.objects 
for all using (
  bucket_id = 'avatars' 
  and auth.role() = 'authenticated'
  and (storage.foldername(name))[1] = 'authenticated'
);
```

## Individual access to a file

Allow a specific user based on the user's UID access to a file named
'only_uid.jpg':

```sql
create policy "Individual access" 
on storage.objects for all 
using (
  bucket_id = 'avatars' 
  and name = 'folder/only_uid.jpg' 
  and (select auth.uid()) = 'd8c7bce9-cfeb-497b-bd61-e66ce2cbdaa2'
);
```
