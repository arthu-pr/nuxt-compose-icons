import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';
import MyModule from '../../../../src/module';

export default defineNuxtConfig({
  ssr: true,
  modules: [MyModule],
  composeIcons: {
    pathToIcons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
  },
});
