<template>
  <!-- <YContainer> -->
  <GettingStarted />
  <YContainer>
    <ClocheIcon size="sm" color="#c1272d" />
    <ClientOnly>
      <IconTheming />
      <IconOverview stroke-width="3" :size="'sm'" color="#c1272d" />
    </ClientOnly>
  </YContainer>
  <!-- </YContainer> -->
</template>

<script setup lang="ts">
import { YContainer } from '@use-compose/ui';
import GettingStarted from '~/components/GettingStarted.vue';

// import { useComposeIcon } from 'nuxt-compose-icons';
</script>

<style>
.presentation {
  background-color: black;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-columns: auto;
}
</style>
