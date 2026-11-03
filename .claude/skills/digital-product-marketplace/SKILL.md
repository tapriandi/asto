---
name: digital-product-marketplace
description: Build or review Astodigi's digital template catalog, product detail, checkout, licensing, and secure delivery workflow.
---

# Digital product marketplace

1. Inspect product, template, order, payment, storage, and customer schemas before changes.
2. Keep catalog metadata separate from downloadable source artifacts.
3. Product pages should explain:
   - What is included.
   - Framework and compatibility.
   - Features and limitations.
   - Preview/demo.
   - License and permitted use.
   - Support and update policy.
   - Refund policy, when defined by the owner.
4. Checkout must create a pending order server-side.
5. Confirm payment only through verified provider webhooks; make webhook handling idempotent.
6. Keep paid artifacts in private storage. Generate short-lived, authorized download links.
7. Record delivery status and provide a safe retry path for failed email delivery.
8. Test unpaid, paid, failed, duplicate webhook, expired link, unauthorized download, and resend scenarios.

Never expose private repository URLs, internal generator packages, signing secrets, or public permanent links to paid files. Do not invent legal license or refund terms.
