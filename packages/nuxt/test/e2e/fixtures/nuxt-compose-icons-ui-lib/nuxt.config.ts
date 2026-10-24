import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';
import MyModule from '../../../../src/module';

// This Nuxt app's only job is to generate components into ui-lib/components — the
// "library" owns its own icon assets and never installs nuxt-compose-icons itself.
// See the sibling standalone-mount spec, which consumes that output with no Nuxt at all.
export default defineNuxtConfig({
  modules: [MyModule],
  composeIcons: {
    pathToIcons: fileURLToPath(new URL('./ui-lib/assets/icons', import.meta.url)),
    component: {
      destDir: fileURLToPath(new URL('./ui-lib/components', import.meta.url)),
    },
  },
});
