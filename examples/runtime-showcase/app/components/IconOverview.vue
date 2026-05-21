<template>
  <ComposeIconOverview :icons="icons" size="lg" has-icon-name />
</template>

<script setup lang="ts">
// import ComposeIconOverview from 'nuxt-compose-icons/runtime/components/ComposeIconOverview.vue';
import { useComposeIconRegistry } from 'nuxt-compose-icons/registry';
const { icons } = useComposeIconRegistry();
</script>
