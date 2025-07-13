---
title: Auth API Examples
description: Supabase Auth API usage examples
category: Auth
---

## Sign up

```js
// Sign up with email
const { user, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
});
```

## Sign in

```js
// Sign in with email
const { user, error } = await supabase.auth.signIn({
    email: "example@email.com",
    password: "example-password",
});
```

## Magic Links

```js
// Sign in with magic links
const { user, error } = await supabase.auth.signIn({
    email: "example@email.com",
});
```

## OAuth logins

```js
// Sign in with GitHub
// And request extra permissions!
const { user, error } = await supabase.auth.signIn({
    provider: "github",
}, {
    scopes: "repo gist notifications",
});
```
