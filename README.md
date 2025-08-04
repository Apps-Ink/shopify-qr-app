# Shopify App Template - Remix

Shopify has an [app template for a Remix-based app](https://shopify.dev/docs/apps/build/build?framework=remix) but as of time of writing this (mid 2025) that template is obsolete and the app doesn't work out of the box. This repo fixes that and works with latest Remix (v2).

Mods are benign overall:
- Moved JS imports for any server code modules inside server side functions, such as `loader` and `action`. This includes import of prisma client, as well as loading the Shopify object for admin authentication.
- Upgraded Polaris to the latest version (13.9.5) - this gets rid of some warnings and minor bugs, such as the image not visible in an EmptyState component.
- Refactored some JSX components into separate files - not needed, but a bit nicer.
