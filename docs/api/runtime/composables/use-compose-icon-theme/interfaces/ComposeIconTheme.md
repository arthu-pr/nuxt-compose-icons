[nuxt-compose-icons](../../../../modules.md) / [runtime/composables/use-compose-icon-theme](../index.md) / ComposeIconTheme

# Interface: ComposeIconTheme

Defined in: [runtime/composables/use-compose-icon-theme.ts:6](https://github.com/arthu-pr/nuxt-compose-icons/blob/843421aff84e79e48016735f7f19a8698fd96c96/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L6)

## Properties

### currentSizeVar

```ts
currentSizeVar: string;
```

Defined in: [runtime/composables/use-compose-icon-theme.ts:14](https://github.com/arthu-pr/nuxt-compose-icons/blob/843421aff84e79e48016735f7f19a8698fd96c96/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L14)

CSS var for the size currently applied to the nearest icon in the cascade

***

### defaultSizeKey

```ts
defaultSizeKey: string;
```

Defined in: [runtime/composables/use-compose-icon-theme.ts:10](https://github.com/arthu-pr/nuxt-compose-icons/blob/843421aff84e79e48016735f7f19a8698fd96c96/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L10)

The key used when no `size` prop is passed — same resolution generated components use

***

### iconSizes

```ts
iconSizes: Record<string, string>;
```

Defined in: [runtime/composables/use-compose-icon-theme.ts:8](https://github.com/arthu-pr/nuxt-compose-icons/blob/843421aff84e79e48016735f7f19a8698fd96c96/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L8)

All configured size keys and their resolved CSS values

***

### sizeVar

```ts
sizeVar: (size) => string;
```

Defined in: [runtime/composables/use-compose-icon-theme.ts:12](https://github.com/arthu-pr/nuxt-compose-icons/blob/843421aff84e79e48016735f7f19a8698fd96c96/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L12)

Returns the CSS var reference for a given size key, e.g. `sizeVar('lg')` → `'var(--size-lg)'`

#### Parameters

##### size

`string`

#### Returns

`string`
