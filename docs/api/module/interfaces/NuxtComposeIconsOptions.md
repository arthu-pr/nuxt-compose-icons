[nuxt-compose-icons](../../modules.md) / [module](../index.md) / NuxtComposeIconsOptions

# Interface: NuxtComposeIconsOptions

Defined in: [module.ts:94](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L94)

## Properties

### cacheDir?

```ts
optional cacheDir?: string;
```

Defined in: [module.ts:184](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L184)

Directory used to persist the SVG processing cache across builds.
Resolved relative to the project root.
Defaults to `node_modules/.cache/nuxt-compose-icons`. Safe to gitignore.

***

### component?

```ts
optional component?: IconComponentOptions;
```

Defined in: [module.ts:111](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L111)

Component generation options: naming, output directory, file format.

***

### debug?

```ts
optional debug?: boolean;
```

Defined in: [module.ts:175](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L175)

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

Defined in: [module.ts:134](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L134)

The size key used when no `size` prop is passed to a generated component or
`useComposeIcon`. Falls back to `'md'` if present, then to the first configured key.
Mainly useful with a custom `iconSizes` scale that has no `md` key.

***

### dryRun?

```ts
optional dryRun?: boolean;
```

Defined in: [module.ts:159](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L159)

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

Defined in: [module.ts:125](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L125)

Icon sizes used to generate `--size-*` CSS variables and size classes.
When provided, **fully replaces** the built-in defaults with your own whole scale

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

Defined in: [module.ts:147](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L147)

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

Defined in: [module.ts:104](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L104)

The path to the .svg icons directory

***

### reRunOnBuild?

```ts
optional reRunOnBuild?: boolean;
```

Defined in: [module.ts:167](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/module.ts#L167)

Whether to re-run icon generation on every build. (bypassing the built-in cache)

#### Default

```ts
false
```
