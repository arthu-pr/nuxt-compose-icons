import { $fetch, setup } from '@nuxt/test-utils/e2e';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('simple config', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-compose-icons-simple', import.meta.url)),
  });

  it('renders the index page', async () => {
    const html = await $fetch('/');
    expect(html).toContain('<div>simple</div>');
  });

  it('generates component with CSS custom properties', async () => {
    const html = await $fetch('/');
    expect(html).toContain('stroke="var(--icon-stroke');
  });
});
