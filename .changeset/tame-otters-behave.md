---
'nuxt-compose-icons': patch
---

## 🔒 Security

Bumps `svgo` to `4.1.0`, fixing a `removeScripts` sanitization bypass (executable links via a namespace/control-character bypass, [GHSA-w27v-7q3p-w38r](https://github.com/advisories/GHSA-w27v-7q3p-w38r)) and an incomplete-sanitization issue for executable HTML inside `foreignObject` elements — both in the module's own SVG-sanitization step.
