<template>
  <div class="theme-preview">
    <span class="theme-preview__label" :style="{ fontSize: sizeVar(currentSize) }">
      {{ currentSize }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useComposeIconTheme } from 'nuxt-compose-icons/composables';

defineProps<{ currentSize: string }>();
const { sizeVar } = useComposeIconTheme();
</script>

<style scoped>
.theme-preview {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-top: 1px solid #2a2a2a;
  margin-top: 0.5rem;

  &__dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    flex-shrink: 0;
  }

  &__label {
    color: #999;
    line-height: 1;
    transition: font-size 0.15s ease;
  }
}
</style>
