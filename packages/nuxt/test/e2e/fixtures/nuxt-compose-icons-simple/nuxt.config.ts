import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';
import MyModule from '../../../../src/module';

export default defineNuxtConfig({
  devServer: {
    host: 'localhost',
    port: 3590,
  },
  modules: [MyModule],
  composeIcons: {
    pathToIcons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
  },
});
