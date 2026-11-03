# Astodigi — Repository Instructions

## Product context
Astodigi is a public-facing digital products and development studio for individuals, UMKM, startups, brands, PT/CV, and organizations.

Astodigi offers:
- Custom websites and web applications.
- Website and landing-page templates / digital products.
- Ecommerce and business websites.
- Temporary campaign, event, launch, and seasonal microsites.
- Existing website maintenance, redesign, migration, performance, and SEO work.
- Android/iOS and progressive web application projects.
- Standard and advanced interactive experiences, including animation and 3D.

This repository is the public platform: portfolio, project case studies, service pages, blog, template catalog, project request intake, checkout, customer orders, and digital-product delivery.

## Architecture boundaries
- This repository is separate from the private `asto-web` generator repository.
- Do not put the internal generation engine, private source templates, or proprietary generator logic here.
- Integrate with Asto-Web only through explicitly defined APIs, webhooks, exported artifacts, or documented contracts.
- Public project records may show screenshots, descriptions, technology tags, and approved live-demo URLs.
- A template listing is product metadata and preview content; it must not expose paid source files.
- Treat generated customer websites as independent deployments.

## Engineering defaults
- TypeScript-first.
- Prefer the existing framework, package manager, routing, and folder conventions discovered in the repository. The intended public stack is Next.js, Tailwind CSS, and Supabase, but inspect before changing.
- Use server-side access for privileged operations.
- Validate all untrusted input at boundaries.
- Keep secrets server-only. Never expose service-role keys or payment secrets to the browser.
- Apply Supabase Row Level Security for user-owned data.
- Payment status must be verified server-side through a trusted payment webhook; never trust a client redirect as proof of payment.
- Deliver paid files through authenticated or short-lived signed URLs from private storage.
- Keep SEO, accessibility, responsive behavior, performance, and clear conversion paths in scope.

## Product and UX principles
- Portfolio is visual: strong project thumbnails, useful project detail pages, live demo links, and honest case studies.
- Services explain outcomes and scope, not just technology names.
- Project request forms should collect enough information to qualify a lead without overwhelming the user.
- Marketplace product pages must clearly state features, compatibility, license, support/update policy, and what is included.
- Blog content should support discoverability and demonstrate expertise.
- Use Indonesian-friendly UX and currency conventions where appropriate; support English if the existing product requires it.
- Avoid fabricated testimonials, client logos, metrics, or project claims.

## Workflow
1. Inspect the repository, package scripts, existing architecture, and relevant files.
2. Summarize the current state and propose a small implementation plan.
3. Confirm assumptions when requirements affect payment, customer data, access control, or destructive changes.
4. Implement in small, reviewable changes.
5. Add or update tests for meaningful behavior.
6. Run lint, typecheck, tests, and build using the actual scripts available in the repository.
7. Report what changed, checks run, and remaining risks.

## Definition of done
- No unrelated refactors.
- Responsive and accessible UI.
- Loading, empty, error, and success states handled.
- Data access and authorization enforced on the server and database.
- No secrets or private template files exposed.
- Relevant checks pass, or failures are clearly reported.
