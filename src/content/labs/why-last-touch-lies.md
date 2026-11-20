---
title: Why last-touch attribution credits the wrong channel
description: A walk through one real-shaped lead path, and how a single direct visit erased three campaigns from the report.
date: 2026-11-12
tags: [attribution, teardown]
---

Placeholder post to show the layout. Replace with real Labs content.

Here is a lead path that is completely ordinary:

| # | Source | Medium | Campaign |
|---|--------|--------|----------|
| 1 | google | cpc | brand-search |
| 2 | linkedin | paid-social | q1-webinar |
| 3 | newsletter | email | march-digest |
| 4 | (direct) | (none) | |

The person typed the URL on the fourth visit and filled in a demo request. In a last-touch model, the
lead source is `Direct`. The three campaigns that did the work get nothing.

## Where the touches go

Most setups store UTMs in a cookie or hidden field, then overwrite them on the next visit that has
UTMs. A direct visit often does not overwrite, but a paid click does. So the value that reaches the CRM
depends on the order of visits, not on which ones mattered.

```js
// A common pattern that loses history
if (params.utm_source) {
  setCookie('utm_source', params.utm_source); // previous value is gone
}
```

## What to check

- Does your form store first touch, last touch, or both?
- Do hidden fields populate on iframe-embedded forms?
- Does the CRM overwrite lead source on later submissions?

> If you only fix one thing, store first touch and last touch separately. It costs nothing and makes
> every later conversation about attribution easier.
