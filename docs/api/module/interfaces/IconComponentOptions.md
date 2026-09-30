[nuxt-compose-icons](../../modules.md) / [module](../index.md) / IconComponentOptions

# Interface: IconComponentOptions

Defined in: [module.ts:33](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L33)

## Properties

### case?

```ts
optional case?: "pascal" | "kebab";
```

Defined in: [module.ts:58](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L58)

Naming convention for the generated component.

#### Default

```ts
'pascal'
```

***

### destDir?

```ts
optional destDir?: string;
```

Defined in: [module.ts:66](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L66)

Directory where generated components are written.
Defaults to `.nuxt/compose-icons`.

***

### fileFormat?

```ts
optional fileFormat?: "vue" | "ts";
```

Defined in: [module.ts:75](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L75)

Format of the generated component file, either as a Vue SFC (.vue) or as a TypeScript file (.ts)

#### Default

```ts
'ts'
```

***

### hasIndexFile?

```ts
optional hasIndexFile?: boolean;
```

Defined in: [module.ts:83](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L83)

Write an `index.ts` barrel file in `destDir`.

#### Default

```ts
false
```

***

### iconClasses?

```ts
optional iconClasses?: string | string[];
```

Defined in: [module.ts:91](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L91)

Extra CSS classes applied to every generated icon component.

#### Default

```ts
[]
```

***

### prefix?

```ts
optional prefix?: string;
```

Defined in: [module.ts:41](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L41)

Prefix prepended to the generated component name.
e.g. `'My'` → `<MyArrowUpIcon />`

#### Default

```ts
undefined
```

***

### suffix?

```ts
optional suffix?: string;
```

Defined in: [module.ts:50](https://github.com/arthu-pr/nuxt-compose-icons/blob/6188382cdd2d3f40fe0262391cb156afed384d19/packages/nuxt/src/module.ts#L50)

Suffix appended to the generated component name.
e.g. `'Icon'` → `<ArrowUpIcon />`

#### Default

```ts
'Icon'
```
