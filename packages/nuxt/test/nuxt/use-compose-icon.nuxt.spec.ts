import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import { defineComponent } from 'vue';
import { useComposeIcon } from '../../src/runtime/composables/use-compose-icon';
import type { ComposeIconProps } from '../../src/runtime/types';

// Runs inside a real Nuxt app (see fixtures/basic/nuxt.config.ts): useComposeIcon calls
// useComposeIconTheme internally for its default size, which only resolves anything beyond
// the hardcoded 'md' fallback once the module's provide-sizes plugin has actually run.

function mountIcon(props: ComposeIconProps = {}) {
  return mountSuspended(
    defineComponent({
      props: {
        color: { type: String, default: undefined },
        stroke: { type: String, default: undefined },
        strokeWidth: { type: [String, Number], default: undefined },
        fill: { type: String, default: undefined },
        size: { type: String, default: undefined },
      },
      setup(props: ComposeIconProps) {
        return useComposeIcon(props);
      },
      render: () => null,
    }),
    { props },
  );
}

describe('useComposeIcon (nuxt)', () => {
  it('falls back to the configured defaultSize when no size prop is passed', async () => {
    const wrapper = await mountIcon();

    expect(wrapper.vm.iconClasses).toEqual(['size-lg']);
    expect(wrapper.vm.iconStyles).not.toHaveProperty('--icon-size');
  });

  it('maps a configured size key to its size class, not an inline style', async () => {
    const wrapper = await mountIcon({ size: 'sm' });

    expect(wrapper.vm.iconClasses).toEqual(['size-sm']);
    expect(wrapper.vm.iconStyles).not.toHaveProperty('--icon-size');
  });

  it('treats a raw CSS size as an inline style instead of a class', async () => {
    const wrapper = await mountIcon({ size: '24px' });

    expect(wrapper.vm.iconClasses).toEqual(['']);
    expect(wrapper.vm.iconStyles).toMatchObject({ '--icon-size': '24px' });
  });

  it('prefers stroke over color for --icon-stroke when both are passed', async () => {
    const wrapper = await mountIcon({ stroke: 'blue', color: 'red' });

    expect(wrapper.vm.iconStyles).toMatchObject({ '--icon-stroke': 'blue' });
  });

  it('falls back to color for --icon-stroke when stroke is not passed', async () => {
    const wrapper = await mountIcon({ color: 'red' });

    expect(wrapper.vm.iconStyles).toMatchObject({ '--icon-stroke': 'red' });
  });

  it('sets --icon-fill and --icon-stroke-width only when the matching props are passed', async () => {
    const wrapper = await mountIcon({ fill: 'currentColor', strokeWidth: 2 });

    expect(wrapper.vm.iconStyles).toMatchObject({
      '--icon-fill': 'currentColor',
      '--icon-stroke-width': 2,
    });
    expect(wrapper.vm.iconStyles).not.toHaveProperty('--icon-stroke');
  });

  it('buildSvgAttributes merges an existing class with the resolved size class', async () => {
    const wrapper = await mountIcon({ size: 'sm' });

    const attrs = wrapper.vm.buildSvgAttributes({ class: 'existing-class' });

    expect(attrs.class).toEqual(['existing-class', 'size-sm']);
    expect(attrs.style).toEqual(wrapper.vm.iconStyles);
  });
});
