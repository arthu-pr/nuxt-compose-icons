[nuxt-compose-icons](../../../../modules.md) / [runtime/composables/use-compose-icon-theme](../index.md) / useComposeIconTheme

# Function: useComposeIconTheme()

```ts
function useComposeIconTheme(): ComposeIconTheme;
```

Defined in: [runtime/composables/use-compose-icon-theme.ts:23](https://github.com/arthu-pr/nuxt-compose-icons/blob/e460ac61f1d19cf56e8e9f6ab05705aecc8f91d2/packages/nuxt/src/runtime/composables/use-compose-icon-theme.ts#L23)

Reads the module's configured icon sizes via plain provide/inject rather than
useRuntimeConfig, which needs 'nuxt/app' and fails to resolve outside a real Nuxt build —
breaking every non-Nuxt consumer (VitePress, Storybook, a plain Vue app) of the generated
components. Falls back to {} if the module's plugin never ran.

## Returns

[`ComposeIconTheme`](../interfaces/ComposeIconTheme.md)
