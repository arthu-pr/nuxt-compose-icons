import { $fetch, setup } from '@nuxt/test-utils/e2e';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('advanced config', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/nuxt-compose-icons-test', import.meta.url)),
  });

  it('renders the index page', async () => {
    const html = await $fetch('/');
    expect(html).toContain('<div>basic</div>');
  });

  it('generates components with CSS custom properties', async () => {
    const html = await $fetch('/');
    expect(html).toContain('fill="var(--icon-fill');
    expect(html).toContain('stroke="var(--icon-stroke');
  });

  it('applies custom iconSizes class', async () => {
    const html = await $fetch('/');
    // default size prop renders compose-icon + size-md classes
    expect(html).toContain('class="compose-icon size-md"');
  });
});
