---
'nuxt-compose-icons': minor
---

`iconSizes` now fully replaces the built-in `sm`/`md`/`lg`/`xl` defaults when set, instead of merging on top of them — providing any sizes means that's your whole scale, not a patch on the defaults. Add the new `defaultSize` option to control which key is used when no `size` prop is passed, useful once your scale has no `md` key.
