import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import { defineComponent } from 'vue';
import { useComposeIconTheme } from '../../src/runtime/composables/use-compose-icon-theme';

// Runs inside a real Nuxt app (see fixtures/basic/nuxt.config.ts) so the module's
// `provide-sizes` plugin actually executes and bridges runtimeConfig into this composable
// via provide/inject — a plain unit test calling the composable in isolation would never
// exercise that plugin at all. See src/runtime/plugins/provide-sizes.ts for why a Symbol-keyed
// plugin `provide` previously never reached it (it always injected {} regardless of config).

function mountTheme() {
  return mountSuspended(
    defineComponent({
      setup() {
        return useComposeIconTheme();
      },
      render: () => null,
    }),
  );
}

describe('useComposeIconTheme (nuxt)', () => {
  it('injects the configured icon sizes from the module plugin', async () => {
    const wrapper = await mountTheme();

    expect(wrapper.vm.iconSizes).toEqual({
      xs: '0.5rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
    });
  });

  it('resolves defaultSizeKey from the configured defaultSize option', async () => {
    const wrapper = await mountTheme();

    expect(wrapper.vm.defaultSizeKey).toBe('lg');
  });

  it('exposes sizeVar and currentSizeVar as CSS var references', async () => {
    const wrapper = await mountTheme();

    expect(wrapper.vm.sizeVar('lg')).toBe('var(--size-lg)');
    expect(wrapper.vm.currentSizeVar).toBe('var(--icon-size)');
  });
});
