[nuxt-compose-icons](../../modules.md) / [module](../index.md) / NuxtComposeIconsOptions

# Interface: NuxtComposeIconsOptions

Defined in: [module.ts:91](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L91)

## Properties

### cacheDir?

```ts
optional cacheDir?: string;
```

Defined in: [module.ts:180](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L180)

Directory used to persist the SVG processing cache across builds.
Defaults to `{rootDir}/.cache/nuxt-compose-icons`. Safe to gitignore.

---

### component?

```ts
optional component?: IconComponentOptions;
```

Defined in: [module.ts:108](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L108)

Component generation options: naming, output directory, file format.

---

### debug?

```ts
optional debug?: boolean;
```

Defined in: [module.ts:172](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L172)

Show additional debug logs during setup.

#### Default

```ts
false;
```

---

### dryRun?

```ts
optional dryRun?: boolean;
```

Defined in: [module.ts:156](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L156)

Log component names without writing files. Useful to preview what will be generated.

#### Default

```ts
false;
```

---

### iconComponentList?

```ts
optional iconComponentList?: object;
```

Defined in: [module.ts:188](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L188)

Register existing Vue components as icons directly.
Planned feature — not yet implemented.

#### Index Signature

```ts
[key: string]: Component
```

---

### iconSizes?

```ts
optional iconSizes?: ComposeIconSize;
```

Defined in: [module.ts:122](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L122)

Icon sizes used to generate `--size-*` CSS variables and size classes.

defaults :{
xs: '0.5rem',
sm: '0.875rem',
md: '1rem',
lg: '1.5rem',
xl: '2.5rem'
}

---

### includeComposables?

```ts
optional includeComposables?: boolean;
```

Defined in: [module.ts:144](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L144)

Auto-import `useComposeIcon` and `useComposeIconRegistry` composables.
Disable if you only use the generated components and don't need dynamic lookup.

#### Default

```ts
true;
```

---

### includeOverview?

```ts
optional includeOverview?: boolean;
```

Defined in: [module.ts:135](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L135)

Register the built-in `<ComposeIconOverview />` component.
Useful during development to browse all available icons.

#### Default

```ts
false;
```

---

### pathToIcons?

```ts
optional pathToIcons?: string;
```

Defined in: [module.ts:101](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L101)

The path to the .svg icons directory

---

### reRunOnBuild?

```ts
optional reRunOnBuild?: boolean;
```

Defined in: [module.ts:164](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L164)

Whether to re-run icon generation on every build.

#### Default

```ts
true;
```
