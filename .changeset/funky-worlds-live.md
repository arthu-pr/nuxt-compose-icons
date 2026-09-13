---
'nuxt-compose-icons': minor
---

## 💥 Breaking

`iconSizes` now fully replaces the built-in `sm`/`md`/`lg`/`xl` defaults when set, instead of merging on top of them — providing any sizes means that's your whole scale, not a patch on the defaults.

## ✨ Features

New `defaultSize` option to control which key is used when no `size` prop is passed, useful once your scale has no `md` key.

## 🐛 Fix

`useComposeIconTheme()` no longer crashes when called outside a real Nuxt app (e.g. Storybook, a plain Vue app) with the module's plugin never having run — it previously threw instead of gracefully falling back to `{}`.
