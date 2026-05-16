---
outline: [2, 3]
order: 1
---

# useComposeIconRegistry

A composable that provides access to the full list of generated icon components at runtime. Useful for building icon pickers, search UIs, or any feature that needs to enumerate available icons dynamically.

Auto-imported by default (`includeComposables: true`). Can be disabled via:

```ts
composeIcons: {
  includeComposables: false,
}
```

---

## Usage

```vue
<script setup lang="ts">
const { icons, filteredIcons, searchIcons, getIconsByName } = useComposeIconRegistry();

// reactive filtered list — updates automatically when q changes
const q = ref('');
const filtered = filteredIcons(q);

// one-shot search — returns an array directly
const results = searchIcons('arrow');

// exact or partial lookup by name
const match = getIconsByName('ArrowUpIcon');
</script>
```

---

## Returns

| Name             | Type                                            | Description                                                         |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------- |
| `icons`          | `IconRegistryEntry[]`                           | The full list of all registered icon components                     |
| `filteredIcons`  | `(query: MaybeRefOrGetter<string>) => Computed` | Returns a reactive `computed` that filters icons as `query` changes |
| `searchIcons`    | `(query: string) => IconRegistryEntry[]`        | One-shot search — returns matching icons for a given string         |
| `getIconsByName` | `(name: string) => IconRegistryEntry[]`         | Looks up icons by exact name first, falls back to partial match     |

---

## `IconRegistryEntry`

Each entry in the registry has the following shape:

```ts
interface IconRegistryEntry {
  name: string; // original file-based name, e.g. "arrow-up"
  pascalName: string; // e.g. "ArrowUpIcon"
  kebabName: string; // e.g. "arrow-up-icon"
  filePath: string; // absolute path to the generated component file
}
```

---

## Example — icon picker

```vue
<script setup lang="ts">
const { filteredIcons } = useComposeIconRegistry();
const query = ref('');
const icons = filteredIcons(query);
</script>

<template>
  <input v-model="query" placeholder="Search icons…" />
  <div class="icon-grid">
    <div v-for="icon in icons" :key="icon.pascalName">
      <Component :is="icon.pascalName" size="md" />
      <span>{{ icon.name }}</span>
    </div>
  </div>
</template>
```

See [`<ComposeIconOverview />`](/utilities/compose-icon-overview) for the built-in equivalent of this pattern.
