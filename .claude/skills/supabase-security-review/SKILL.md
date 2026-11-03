---
name: supabase-security-review
description: Review or implement Supabase schema, RLS, authentication, storage policies, and secure server-side data access for Astodigi.
---

# Supabase security review

1. Inspect existing schema, migrations, RLS policies, auth setup, and storage buckets.
2. Identify data classification and intended roles: anonymous visitor, customer, and administrator.
3. For every table, document who can select, insert, update, and delete.
4. Enable RLS on tables exposed through the API.
5. Use ownership checks based on authenticated identity; never trust user IDs supplied by the browser.
6. Keep service-role credentials in server-only environments.
7. Restrict storage policies. Paid product files must not be in public buckets.
8. Validate server actions and API inputs with the project's validation library.
9. Add tests or reproducible checks for anonymous, owner, other-customer, and admin access.
10. Report policy gaps and migration risks before applying destructive changes.

Do not weaken RLS to make a feature work. Explain the narrowest safe policy instead.
