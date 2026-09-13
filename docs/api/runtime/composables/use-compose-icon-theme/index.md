[nuxt-compose-icons](../../../modules.md) / runtime/composables/use-compose-icon-theme

# runtime/composables/use-compose-icon-theme

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ComposeIconTheme](interfaces/ComposeIconTheme.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [useComposeIconTheme](functions/useComposeIconTheme.md) | Reads the module's configured icon sizes via plain provide/inject rather than useRuntimeConfig, which needs 'nuxt/app' and fails to resolve outside a real Nuxt build — breaking every non-Nuxt consumer (VitePress, Storybook, a plain Vue app) of the generated components. Falls back to {} if the module's plugin never ran. |
