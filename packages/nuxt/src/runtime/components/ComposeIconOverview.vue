<template>
  <div class="runtime-showcase">
    <input v-model="q" type="text" placeholder="Search icons…" class="runtime-showcase__search" />
    <div class="runtime-showcase__grid">
      <div v-for="icon in filtered" :key="icon.pascalName" class="runtime-showcase__item">
        <Component :is="icon.component" v-bind="iconProps" />
        <template v-if="hasIconName">
          <span class="runtime-showcase__pascal">&lt;{{ icon.pascalName }} /&gt;</span>
          <span class="runtime-showcase__kebab">{{ icon.kebabName }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { computed, ref } from 'vue';
import type { ComposeIconProps } from '../types/compose-icons-props';

interface IconEntry {
  name: string;
  pascalName: string;
  kebabName: string;
  component: Component;
}

const props = withDefaults(
  defineProps<ComposeIconProps & { hasIconName?: boolean; icons: IconEntry[] }>(),
  { hasIconName: false },
);

const q = ref('');
const filtered = computed(() => {
  const term = q.value.trim().toLowerCase();
  if (!term) return props.icons;
  return props.icons.filter(
    (icon) =>
      icon.name.toLowerCase().includes(term) ||
      icon.kebabName.includes(term) ||
      icon.pascalName.toLowerCase().includes(term),
  );
});

const iconProps = computed(() => {
  const entries = Object.entries(props).filter(([k]) => k !== 'hasIconName' && k !== 'icons');
  return Object.fromEntries(entries) as ComposeIconProps;
});
</script>

<style scoped>
.runtime-showcase {
  &__search {
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    background: transparent;
    border: 1px solid #333;
    border-radius: 6px;
    color: inherit;
    box-sizing: border-box;

    &::placeholder {
      color: #555;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    gap: 1rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    text-align: center;
    min-width: 0;

    &:hover {
      background: #222;
    }
  }

  &__pascal {
    font-size: 0.6rem;
    color: #888;
    word-break: break-all;
    line-height: 1.3;
  }

  &__kebab {
    font-size: 0.6rem;
    color: #555;
    word-break: break-all;
    line-height: 1.3;
  }
}
</style>
