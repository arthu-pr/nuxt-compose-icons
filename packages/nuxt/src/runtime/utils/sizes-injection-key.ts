import type { InjectionKey } from 'vue';
import type { PublicIconSizes } from '../types/icon-sizes';

/**
 * Carries configured icon sizes and defaultSize across the Vue app boundary via plain
 * provide/inject rather than useRuntimeConfig, which needs 'nuxt/app' and fails to resolve
 * outside a real Nuxt build — breaking every non-Nuxt consumer of generated components.
 *
 * Exeample: use in a monorepo (see https://nuxt-compose-icons.dev/guide/monorepo)
 */
export const iconSizesKey: InjectionKey<PublicIconSizes> = Symbol('nuxt-compose-icons:sizes');
