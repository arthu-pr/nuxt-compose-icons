---
outline: [2, 3]
order: 3
---

# Configuration

All options are passed under the `composeIcons` key in your `nuxt.config.ts`.

## Minimal setup

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-compose-icons'],
  composeIcons: {
    pathToIcons: './assets/icons',
  },
});
```

That's it. Every `.svg` in `./assets/icons` becomes a typed, auto-imported Vue component — `arrow-up.svg` → `<ArrowUpIcon />`.

---

## Options

| Option                   | Type                     | Default                  | Description                                                 |
| ------------------------ | ------------------------ | ------------------------ | ----------------------------------------------------------- |
| `pathToIcons`            | `string`                 | —                        | **Required.** Path to your `.svg` directory.                |
| `component.suffix`       | `string`                 | `'Icon'`                 | Appended to the component name.                             |
| `component.prefix`       | `string`                 | `undefined`              | Prepended to the component name.                            |
| `component.case`         | `'pascal' \| 'kebab'`    | `'pascal'`               | Naming convention for generated components.                 |
| `component.destDir`      | `string`                 | `.nuxt/compose-icons`    | Where generated components are written.                     |
| `component.fileFormat`   | `'ts' \| 'vue'`          | `'ts'`                   | Output format. `.ts` recommended.                           |
| `component.hasIndexFile` | `boolean`                | `false`                  | Write an `index.ts` barrel file in `destDir`.               |
| `iconSizes`              | `Record<string, string>` | `{ xs, sm, md, lg, xl }` | CSS size variables and classes.                             |
| `includeOverview`        | `boolean`                | `false`                  | Registers `<ComposeIconOverview />`.                        |
| `includeComposables`     | `boolean`                | `true`                   | Auto-imports `useComposeIcon` and `useComposeIconRegistry`. |
| `iconClasses`            | `string \| string[]`     | `[]`                     | Extra CSS classes on every icon.                            |

---

### `pathToIcons`

- **Type:** `string`
- **Required**
- Path to the directory containing your `.svg` files. The module scans it recursively.

### `component`

Groups all options related to how components are generated and where they are written.

#### `component.suffix`

- **Type:** `string`
- **Default:** `'Icon'`
- Appended to the component name. `arrow-up.svg` + `suffix: 'Icon'` → `<ArrowUpIcon />`.

#### `component.prefix`

- **Type:** `string`
- **Default:** `undefined`
- Prepended to the component name. `prefix: 'My'` → `<MyArrowUpIcon />`.

#### `component.case`

- **Type:** `'pascal' | 'kebab'`
- **Default:** `'pascal'`
- Naming convention. `'pascal'` → `<ArrowUpIcon />`, `'kebab'` → `<arrow-up-icon />`.

#### `component.destDir`

- **Type:** `string`
- **Default:** `.nuxt/compose-icons`
- Where generated components are written. Set to a path inside your app directory to commit them to your codebase.

#### `component.fileFormat`

- **Type:** `'ts' | 'vue'`
- **Default:** `'ts'`
- Output format for generated component files. `.ts` is recommended — `.vue` can cause issues with Nitro/Rollup during SSR builds.

#### `component.hasIndexFile`

- **Type:** `boolean`
- **Default:** `false`
- Write an `index.ts` barrel file in `destDir` that re-exports all generated components.

### `iconSizes`

- **Type:** `Record<string, string>`
- **Default:**

```ts
{ xs: '0.5rem', sm: '0.875rem', md: '1rem', lg: '1.5rem', xl: '2.5rem' }
```

Generates `--size-*` CSS variables and matching size classes. A CSS file is automatically injected into the build.

### `includeOverview`

- **Type:** `boolean`
- **Default:** `false`
- Registers the built-in [`<ComposeIconOverview />`](/utilities/compose-icon-overview) component — a searchable grid of all your icons. Useful in development.

### `includeComposables`

- **Type:** `boolean`
- **Default:** `true`
- Auto-imports `useComposeIcon` and `useComposeIconRegistry`. Set to `false` if you only use the generated components and don't need dynamic icon lookup.

### `iconClasses`

- **Type:** `string | string[]`
- **Default:** `[]`
- Extra CSS classes added to every generated icon component. The `compose-icon` base class is always included automatically.

---

## Advanced options

These rarely need to be changed.

| Option         | Type      | Default                     | Description                                                  |
| -------------- | --------- | --------------------------- | ------------------------------------------------------------ |
| `dryRun`       | `boolean` | `false`                     | Log what would be generated without writing any files        |
| `reRunOnBuild` | `boolean` | `true`                      | Re-generate icons on every build                             |
| `debug`        | `boolean` | `false`                     | Show per-component generation logs during setup              |
| `cacheDir`     | `string`  | `.cache/nuxt-compose-icons` | SVG processing cache — speeds up rebuilds, safe to gitignore |

---

### `dryRun`

- **Type:** `boolean`
- **Default:** `false`
- Log component names without writing any files. Useful to preview what will be generated.

### `reRunOnBuild`

- **Type:** `boolean`
- **Default:** `true`
- Re-generate icon components on every build. Set to `false` if components are committed and you want to skip generation.

### `debug`

- **Type:** `boolean`
- **Default:** `false`
- Show per-component generation logs during setup.

### `cacheDir`

- **Type:** `string`
- **Default:** `.cache/nuxt-compose-icons`
- Directory used to persist the SVG processing cache across builds. Safe to gitignore.

```ts
// nuxt.config.ts — example with advanced options
 composeIcons: {
   pathToIcons: './assets/icons',
   component: {
     fileFormat: 'ts',
     hasIndexFile: true,
   },
   reRunOnBuild: false,
   debug: true,
   cacheDir: './.icon-cache',
 }
```

---

## 🚧 `iconComponentList`

> Not yet implemented — tracked on the [Roadmap](https://github.com/users/arthu-pr/projects/7/views/1).

Will allow registering existing Vue components as icons directly, without SVG files.

---

## CSS integration

The module injects two CSS files at build time:

- `compose-icon-sizes.css` — generated from given `iconSizes` config, exposes `--icon-size-{key}` variables
- `compose-icon.css` — base styles shared across all icon components

Both can be overridden with your own CSS variables or theming layer.
