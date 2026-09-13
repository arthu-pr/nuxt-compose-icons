---
title: Sizing
description: How the icon size scale works in nuxt-compose-icons — the default scale, configuring your own, defaultSize resolution, and how sizes are typed.
order: -1
---

# 📏 Sizing

Every generated icon has a `size` prop, backed by a configurable scale of named sizes. This
page covers how that scale is defined, resolved, and typed — [Composables](/utilities/use-compose-icon)
covers reading it from your own code.

## The default scale

If you don't set `composeIcons.iconSizes`, this is what you get:

| Key  | Value    |
| ---- | -------- |
| `sm` | `1.5rem` |
| `md` | `2rem`   |
| `lg` | `3rem`   |
| `xl` | `4rem`   |

```vue
<UserBadgeIcon size="lg" />
```

## Configuring your own scale

Set `composeIcons.iconSizes` to replace the scale entirely — it's your whole scale, not a
patch on top of the defaults:

```ts
export default defineNuxtConfig({
  composeIcons: {
    iconSizes: {
      sm: '1rem',
      md: '1.5rem',
      hero: '6rem',
    },
  },
});
```

The example above has **no** `lg`/`xl` — once `iconSizes` is set, only the keys you list exist.
If you want to keep a default key, redeclare it.

:::info
`sm`/`md`/`lg`/`xl` aren't special — they're just the shipped defaults. Name your keys however
fits your design system (`hero`, `compact`, `2xl`, whatever).
:::

See [Configuration](/guide/configuration) for the full option reference.

### Choosing the default key

`composeIcons.defaultSize` picks which key backs the `size` prop when a consumer doesn't pass
one:

1. `defaultSize`, if it names a key that actually exists in your scale
2. otherwise `'md'`, if present
3. otherwise the first configured key

If you set `defaultSize` to a key that doesn't exist, the module warns at build time and falls
back to the same resolution above — it never crashes.

## How a size becomes CSS

For each key in the resolved scale, the module generates:

- a `:root` variable — `--size-{key}: <value>`
- a class — `.compose-icon.size-{key} { --icon-size: var(--size-{key}) }`

The `size` prop picks which class gets applied. Passing a raw CSS value instead of a key (a
number, or anything starting with `var(`, `clamp(`, `min(`, `max(`, or `calc(`) skips the class
entirely and sets `--icon-size` inline instead — useful for a one-off size outside your named
scale:

```vue
<UserBadgeIcon size="lg" />
<!-- picks the `size-lg` class -->

<UserBadgeIcon size="clamp(1rem, 4vw, 3rem)" />
<!-- sets `--icon-size` inline, no class -->
```

## Key ordering

Iterating a resolved scale (e.g. `Object.keys(iconSizes)` from [`useComposeIconTheme`](/utilities/use-compose-icon#usecomposeicontheme))
walks keys **by real size, ascending** — not by the order you declared them — so a size-picker
UI renders smallest to largest without extra sorting on your end. Values the module can't parse
as a plain length (`var(...)`, `clamp(...)`, design tokens) keep their original relative
position instead of being reordered.

## Typing

The `size` prop is typed as plain `string`, not narrowed to your configured keys — `iconSizes`
is arbitrary, project-specific config, so the module's shipped types have no way to know your
key names ahead of time. In practice this means `size` won't autocomplete to `'hero' | 'compact'`
in your editor; everything else about the component stays fully typed.

## Reading sizes at runtime

To access the resolved scale, the default size key, or a CSS var reference from your own code —
for a size-picker UI, or aligning a non-icon element to the same scale — see
[`useComposeIconTheme`](/utilities/use-compose-icon#usecomposeicontheme).
