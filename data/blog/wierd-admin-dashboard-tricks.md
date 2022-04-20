---
title: Wierd Admin Dashboard Tricks
date: '2022-04-20'
tags: ['webdev', 'web', 'webapp', 'security']
draft: false
summary: Sometimes, I have very strange ideas on how to secure things.
images: []
layout: PostLayout
canonicalUrl: admin-dashboard-security-strange
authors: ['thrzl']
---

```nginx
127.0.0.1 /admin 404
127.0.0.1 /cowabungathisisnotadmin 200
```

You see, I sometimes have terrible, terrible ideas. Sometimes they're so terrible that they're actually good.

What if you named your admin dashboard path something ridiculous? Something like `/amogus` or `/ontheroadtoriches`. If you were attacking a web app, would you really look for the path `/thisisnotmyadmindashboard` (be honest)? What about `/badminton`? Even just something like `/radmin` can throw off lots of attackers. This is due to a simple fact: **it doesn't make the slightest amonut of sense.**

Something else is that you could perhaps split the admin signin page and the actual dashboard path. On one webapp (not saying which, back off 👀) the url to the signin page looks something like this:
`/hyperloop/bifrost`
Now, `/hyperloop` doesn't exist. Bifrost redirects OAuth back into itself and doesn't return any data. Signing in to the web app really just looks like something is very broken. You next might go to `/admin`, which returns a 404 error if you don't sign in to this hidden path first. Combined with something like the admin dashboard link fraud thingy, even if your credentials get thieved, there's not too much an attacker could do from there.

> Haha! I got their credentials at last!
> `/admin 404`
> 😐
