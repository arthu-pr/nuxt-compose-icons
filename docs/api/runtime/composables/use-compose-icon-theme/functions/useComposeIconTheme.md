[nuxt-compose-icons](../../../../modules.md) / [runtime/composables/use-compose-icon-theme](../index.md) / useComposeIconTheme

# Function: useComposeIconTheme()

```ts
function useComposeIconTheme(): ComposeIconTheme;
```

Defined in: [runtime/composables/use-compose-icon-theme.ts:23](https://github.com/arthu-pr/nuxt-compose-icons/blob/9e5625692fa6620a845208e4a7950c169c786b90/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L23)

Reads the module's configured icon sizes via plain provide/inject rather than
useRuntimeConfig, which needs 'nuxt/app' and fails to resolve outside a real Nuxt build —
breaking every non-Nuxt consumer (VitePress, Storybook, a plain Vue app) of the generated
components. Falls back to {} if the module's plugin never ran.

## Returns

[`ComposeIconTheme`](../interfaces/ComposeIconTheme.md)
