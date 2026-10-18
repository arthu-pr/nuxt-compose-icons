import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';
import MyModule, { type NuxtComposeIconsOptions } from '../../../../src/module';
import type { ComposeIconSize } from '../../../../src/runtime/types';

const iconSizes: ComposeIconSize = {
  xs: '0.5rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
};

const composeIconsOptions: NuxtComposeIconsOptions = {
  pathToIcons: fileURLToPath(new URL('./assets/icons', import.meta.url)),
  iconSizes,
  defaultSize: 'lg',
};

export default defineNuxtConfig({
  modules: [MyModule],
  composeIcons: composeIconsOptions,
});
