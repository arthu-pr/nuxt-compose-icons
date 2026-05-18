<template>
  <div class="page">
    <aside class="controls">
      <label class="controls__field">
        <span>Size</span>
        <select v-model="size">
          <option v-for="s in sizes" :key="s" :value="s">{{ s }}</option>
        </select>
      </label>

      <label class="controls__field">
        <span class="controls__label">
          Fill
          <input v-model="fillEnabled" type="checkbox" />
        </span>
        <input v-model="fillColor" type="color" :disabled="!fillEnabled" />
      </label>

      <label class="controls__field">
        <span class="controls__label">
          Stroke
          <input v-model="strokeEnabled" type="checkbox" />
        </span>
        <input v-model="strokeColor" type="color" :disabled="!strokeEnabled" />
      </label>

      <label class="controls__field">
        <span class="controls__label">
          Stroke width
          <input v-model="strokeWidthEnabled" type="checkbox" />
        </span>
        <input
          v-model="strokeWidthValue"
          type="range"
          min="0.5"
          max="4"
          step="0.5"
          :disabled="!strokeWidthEnabled"
        />
        <span class="controls__value">{{ strokeWidthEnabled ? strokeWidthValue : '—' }}</span>
      </label>

      <ThemePreview :current-size="size" />

      <div class="controls__meta">
        <span>{{ icons.length }} icons</span>
      </div>
    </aside>

    <main class="overview">
      <ComposeIconOverview
        :icons="icons"
        :size="size"
        :fill="fill"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        has-icon-name
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useComposeIconTheme } from 'nuxt-compose-icons/composables';
import { useComposeIconRegistry } from 'nuxt-compose-icons/registry';
import { computed, ref } from 'vue';

const { icons } = useComposeIconRegistry();

const { sizes: iconSizes } = useComposeIconTheme();
const sizes = Object.keys(iconSizes);

const size = ref('lg');

const fillEnabled = ref(false);
const fillColor = ref('#ffffff');
const fill = computed(() => (fillEnabled.value ? fillColor.value : undefined));

const strokeEnabled = ref(false);
const strokeColor = ref('#ffffff');
const stroke = computed(() => (strokeEnabled.value ? strokeColor.value : undefined));

const strokeWidthEnabled = ref(false);
const strokeWidthValue = ref(1.5);
const strokeWidth = computed(() => (strokeWidthEnabled.value ? strokeWidthValue.value : undefined));
</script>

<style>
body {
  background-color: #1c1b1b;
  color: #f1f1f1;
  font-family: system-ui, sans-serif;
  margin: 0;
}
</style>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100svh;
}

.controls {
  padding: 1.5rem;
  border-right: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: sticky;
  top: 0;
  height: 100svh;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.75rem;
    color: #999;

    select,
    input[type='range'] {
      width: 100%;
      accent-color: #c1272d;
    }

    input[type='color'] {
      width: 2rem;
      height: 2rem;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }

    input[type='range']:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__value {
    font-size: 0.7rem;
    color: #666;
  }

  &__meta {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.7rem;
    color: #555;
  }
}

.overview {
  padding: 2rem;
  overflow-y: auto;
}
</style>
