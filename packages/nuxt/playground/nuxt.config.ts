import { fileURLToPath } from 'node:url';
import { type ComposeIconSize } from '../src/runtime/types';

const iconSizes: ComposeIconSize = {
  sm: '14px',
  md: '18px',
  lg: '24px',
  hero: '48px',
  lolilol: '100px',
};

export default defineNuxtConfig({
  modules: [fileURLToPath(new URL('../src/module', import.meta.url))],
  // Module options
  composeIcons: {
    pathToIcons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
    iconSizes,
    component: {
      suffix: 'Icon',
      case: 'pascal',
      destDir: './components/nuxt-compose-icons',
      iconClasses: ['rt-icon'],
    },
    includeOverview: true,
    // debug: true,
    // dryRun: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-12-14',
  // css: ['@use-compose/ui/style.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
