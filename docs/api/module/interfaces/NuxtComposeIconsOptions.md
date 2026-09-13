[nuxt-compose-icons](../../modules.md) / [module](../index.md) / NuxtComposeIconsOptions

# Interface: NuxtComposeIconsOptions

Defined in: [module.ts:94](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L94)

## Properties

### cacheDir?

```ts
optional cacheDir?: string;
```

Defined in: [module.ts:185](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L185)

Directory used to persist the SVG processing cache across builds.
Resolved relative to the project root.
Defaults to `node_modules/.cache/nuxt-compose-icons`. Safe to gitignore.

***

### component?

```ts
optional component?: IconComponentOptions;
```

Defined in: [module.ts:111](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L111)

Component generation options: naming, output directory, file format.

***

### debug?

```ts
optional debug?: boolean;
```

Defined in: [module.ts:176](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L176)

Show additional debug logs during setup.

#### Default

```ts
false
```

***

### defaultSize?

```ts
optional defaultSize?: string;
```

Defined in: [module.ts:135](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L135)

The size key used when no `size` prop is passed to a generated component or
`useComposeIcon`. Falls back to `'md'` if present, then to the first configured key.
Mainly useful with a custom `iconSizes` scale that has no `md` key.

***

### dryRun?

```ts
optional dryRun?: boolean;
```

Defined in: [module.ts:160](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L160)

Log component names without writing files. Useful to preview what will be generated.

#### Default

```ts
false
```

***

### iconSizes?

```ts
optional iconSizes?: ComposeIconSize;
```

Defined in: [module.ts:126](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L126)

Icon sizes used to generate `--size-*` CSS variables and size classes.
When provided, **fully replaces** the built-in defaults — this is your whole scale, not a
patch on top of it. Omit entirely to use the defaults below unchanged.

defaults: {
 sm: '1.5rem',
 md: '2rem',
 lg: '3rem',
 xl: '4rem'
}

***

### includeComposables?

```ts
optional includeComposables?: boolean;
```

Defined in: [module.ts:148](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L148)

Auto-import `useComposeIcon` and `useComposeIconTheme`.
Disable if you only use the generated components and don't need these directly.

#### Default

```ts
true
```

***

### pathToIcons?

```ts
optional pathToIcons?: string;
```

Defined in: [module.ts:104](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L104)

The path to the .svg icons directory

***

### reRunOnBuild?

```ts
optional reRunOnBuild?: boolean;
```

Defined in: [module.ts:168](https://github.com/arthu-pr/nuxt-compose-icons/blob/1e9fd2af539e72dd9b760e58cdde9c48c8927ed7/packages/nuxt/src/module.ts#L168)

Whether to re-run icon generation on every build. (bypassing the built-in cache)

#### Default

```ts
false
```
