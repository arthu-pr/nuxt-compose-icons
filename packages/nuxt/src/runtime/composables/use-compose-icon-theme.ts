import { useRuntimeConfig } from 'nuxt/app';

/**
 * Returns helpers to reference icon size CSS variables by key.
 * Size keys and values come from the module config via runtimeConfig.
 *
 * @example
 * const { sizes, sizeVar, currentSizeVar } = useComposeIconTheme()
 *
 * Object.keys(sizes)  // ['sm', 'md', 'lg', 'hero'] — from your config
 * sizeVar('lg')       // 'var(--size-lg)' — align any element to a named size
 * currentSizeVar      // 'var(--icon-size)' — whatever the nearest icon has in the cascade
 */
export function useComposeIconTheme() {
  const config = useRuntimeConfig();
  const sizes = (config.public.composeIcons?.sizes ?? {}) as Record<string, string>;

  return {
    /** All configured size keys and their resolved values */
    sizes,
    /** Returns the CSS var reference for a given size key */
    sizeVar: (size: string) => `var(--size-${size})`,
    /** CSS var for the size currently applied to the nearest icon in the cascade */
    currentSizeVar: 'var(--icon-size)' as const,
  };
}
