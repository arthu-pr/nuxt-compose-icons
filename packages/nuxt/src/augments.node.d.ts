import type { NuxtComposeIconsOptions } from './module';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    composeIcons?: NuxtComposeIconsOptions;
  }

  interface NuxtOptions {
    composeIcons?: NuxtComposeIconsOptions;
  }

  interface PublicRuntimeConfig {
    composeIcons?: {
      sizes: Record<string, string>;
    };
  }
}
