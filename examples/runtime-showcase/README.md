# nuxt-compose-icons — Runtime Showcase

A live, interactive example of [`nuxt-compose-icons`](https://nuxt-compose-icons.dev) — every icon under `app/assets/icons` becomes a real, auto-imported Vue component at build time, no runtime lookup involved.

This is also the fork target for the README's "Try it in StackBlitz" badge, and the project behind [showcase.nuxt-compose-icons.dev](https://showcase.nuxt-compose-icons.dev).

## What you're looking at

The sidebar controls theme every icon in the grid at once, live:

- **Size** — drag through the configured scale (`sm`/`md`/`lg`/`xl` here, fully custom — see `nuxt.config.ts`'s `iconSizes`). The legend below the slider shows each key's actual value.
- **Fill** / **Stroke** / **Stroke width** — override the icon's own colors and line weight via CSS custom properties, each toggleable independently.
- **Hover color** — demonstrates `:hover` theming (see the [Interactivity docs](https://nuxt-compose-icons.dev/utilities/interactivity)) without any JS event handlers, just a scoped CSS rule bound to the picked color.

## Running it locally

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build
pnpm generate  # static build (what actually ships to the deployed showcase)
pnpm preview   # preview a production build locally
```

## Using your own icons

Drop SVGs into `app/assets/icons` and they're picked up automatically — see `nuxt.config.ts` for the full `composeIcons` configuration (naming convention, `destDir`, the size scale). The generated components live in `app/components/icons` (`component.destDir`), committed like any other component — that's deliberate, not a leftover: see the main [README's "Own your components"](https://github.com/arthu-pr/nuxt-compose-icons#own-your-components) section for why.

## Learn more

- [Full documentation](https://nuxt-compose-icons.dev)
- [Configuration reference](https://nuxt-compose-icons.dev/guide/configuration)
- [Sizing](https://nuxt-compose-icons.dev/utilities/sizing) and [Theming](https://nuxt-compose-icons.dev/utilities/theming) guides
