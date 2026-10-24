import { setup } from '@nuxt/test-utils/e2e';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { createSSRApp, defineComponent } from 'vue';
import { renderToString } from 'vue/server-renderer';
import {
  useComposeIconTheme,
  type ComposeIconTheme,
} from '../../src/runtime/composables/use-compose-icon-theme';

// A design-system "ui lib" never installs nuxt-compose-icons or runs the module itself — it
// only ships the files a Nuxt app generated into its destDir (see CLAUDE.md's component.destDir
// invariant). `setup()` here boots the real fixture Nuxt app to materialize that output for
// real, with no mocks; the generated file is then imported and server-rendered completely
// outside any Nuxt context (no DOM needed, same as every other e2e test here), proving it's
// actually portable — and that useComposeIconTheme()'s inject(key, {}) fallback degrades
// gracefully instead of crashing when no provide-sizes plugin ever ran (see
// runtime/plugins/provide-sizes.ts).
describe('component.destDir output consumed outside a Nuxt context', async () => {
  const fixtureDir = fileURLToPath(
    new URL('./fixtures/nuxt-compose-icons-ui-lib', import.meta.url),
  );

  await setup({ rootDir: fixtureDir });

  it('a generated component renders standalone with no Nuxt-only import failure', async () => {
    const generated = await import(
      /* @vite-ignore */ `${fixtureDir}/ui-lib/components/ArrowUpIcon.ts`
    );
    const html = await renderToString(createSSRApp(generated.default));

    expect(html).toContain('<svg');
    expect(html).toContain('size-md');
  });

  it('useComposeIconTheme degrades to defaults with no provide-sizes plugin present', async () => {
    let theme!: ComposeIconTheme;
    const probe = defineComponent({
      setup() {
        theme = useComposeIconTheme();
        return () => null;
      },
    });

    await renderToString(createSSRApp(probe));

    expect(theme.iconSizes).toEqual({});
    expect(theme.defaultSizeKey).toBe('md');
    expect(theme.sizeVar('lg')).toBe('var(--size-lg)');
    expect(theme.currentSizeVar).toBe('var(--icon-size)');
  });
});
