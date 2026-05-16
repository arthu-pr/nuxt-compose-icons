[nuxt-compose-icons](../../modules.md) / [module](../index.md) / IconComponentOptions

# Interface: IconComponentOptions

Defined in: [module.ts:30](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L30)

## Properties

### case?

```ts
optional case?: "pascal" | "kebab";
```

Defined in: [module.ts:55](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L55)

Naming convention for the generated component.

#### Default

```ts
'pascal';
```

---

### destDir?

```ts
optional destDir?: string;
```

Defined in: [module.ts:63](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L63)

Directory where generated components are written.
Defaults to `.nuxt/compose-icons`.

---

### fileFormat?

```ts
optional fileFormat?: "vue" | "ts";
```

Defined in: [module.ts:72](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L72)

Format of the generated component file, either as a Vue SFC (.vue) or as a TypeScript file (.ts)

#### Default

```ts
'ts';
```

---

### hasIndexFile?

```ts
optional hasIndexFile?: boolean;
```

Defined in: [module.ts:80](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L80)

Write an `index.ts` barrel file in `destDir`.

#### Default

```ts
false;
```

---

### iconClasses?

```ts
optional iconClasses?: string | string[];
```

Defined in: [module.ts:88](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L88)

Extra CSS classes applied to every generated icon component.

#### Default

```ts
[];
```

---

### prefix?

```ts
optional prefix?: string;
```

Defined in: [module.ts:38](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L38)

Prefix prepended to the generated component name.
e.g. `'My'` → `<MyArrowUpIcon />`

#### Default

```ts
undefined;
```

---

### suffix?

```ts
optional suffix?: string;
```

Defined in: [module.ts:47](https://github.com/use-compose/nuxt-compose-icons/blob/42c8ba8932cbfc6640bb3c07349983c1ff13085f/packages/nuxt/src/module.ts#L47)

Suffix appended to the generated component name.
e.g. `'Icon'` → `<ArrowUpIcon />`

#### Default

```ts
'Icon';
```
