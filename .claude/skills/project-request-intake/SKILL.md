---
name: project-request-intake
description: Design or implement the customer project-request intake flow for Astodigi, from inquiry to qualified lead.
---

# Project request intake

1. Inspect current forms, database schema, email flow, and admin lead handling.
2. Keep the form concise while capturing essential qualification data:
   - Name and contact method.
   - Business/organization and industry (optional where appropriate).
   - Website type or service needed.
   - Goals and required features.
   - Reference URLs or attachments.
   - Budget range and desired timeline (optional, clearly labeled).
3. Validate and sanitize all submitted data on the server.
4. Add spam protection and rate limiting using existing project conventions.
5. Store lead status and timestamps; do not store unnecessary sensitive information.
6. Send a clear confirmation to the requester and notify the Astodigi team using the configured email provider.
7. Provide admin workflow for reviewing, qualifying, requesting clarification, quoting, and closing a lead.
8. Test validation, spam handling, success, failure, and duplicate submission cases.

Do not promise a quote, deadline, or service availability automatically unless the business rules explicitly define it.
