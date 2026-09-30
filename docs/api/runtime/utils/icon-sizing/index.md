[nuxt-compose-icons](../../../modules.md) / runtime/utils/icon-sizing

# runtime/utils/icon-sizing

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DefaultSizes](type-aliases/DefaultSizes.md) | Default icon sizes if none have been provided to the module |

## Variables

| Variable | Description |
| ------ | ------ |
| [iconSizeDefault](variables/iconSizeDefault.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [getIconSizeClass](functions/getIconSizeClass.md) | Resolve Icon size class based on the provided size prop |
| [isRawCssSize](functions/isRawCssSize.md) | - |
| [resolveDefaultSizeKey](functions/resolveDefaultSizeKey.md) | Resolves the default size key: `defaultSize` if it names a real key, else `'md'` if present, else the first configured key — arbitrary (the smallest once sorted) but never crashes. Shared by build-time codegen and the runtime fallback so both agree on the same default. |
| [resolveFinalSizes](functions/resolveFinalSizes.md) | Resolves the project's final size scale, shared by codegen's `size` prop default, the generated CSS, and the runtime fallback so all three agree on the same map. |
