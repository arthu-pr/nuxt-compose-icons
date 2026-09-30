[nuxt-compose-icons](../../../../modules.md) / [runtime/utils/icon-sizing](../index.md) / resolveDefaultSizeKey

# Function: resolveDefaultSizeKey()

```ts
function resolveDefaultSizeKey(iconSizes, defaultSize?): string;
```

Defined in: [runtime/utils/icon-sizing.ts:75](https://github.com/arthu-pr/nuxt-compose-icons/blob/843421aff84e79e48016735f7f19a8698fd96c96/packages/nuxt/src/runtime/utils/icon-sizing.ts#L75)

Resolves the default size key: `defaultSize` if it names a real key, else `'md'` if present,
else the first configured key — arbitrary (the smallest once sorted) but never crashes.
Shared by build-time codegen and the runtime fallback so both agree on the same default.

## Parameters

### iconSizes

`Record`\<`string`, `string`\>

### defaultSize?

`string`

## Returns

`string`
