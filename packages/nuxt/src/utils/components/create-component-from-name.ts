import type { AddComponentOptions } from '@nuxt/kit';
import type { Component } from '@nuxt/schema';
import { toKebabCase, toPascalCase } from '../convert-cases';

export { createComponentFromName };

// Apply defaults
const defaultComponent: Component = {
  export: 'default',
  chunkName: 'components/' + '',
  global: true,
  kebabName: '',
  pascalName: '',
  prefetch: true,
  preload: true,
  mode: 'all',
  shortPath: '',
  filePath: '',
  priority: 0,
};

/**
 * Creates a Nuxt component object from the provided options, applying paths and naming conventions.
 *
 * @param {AddComponentOptions} iconComponentOptions
 * @returns {Component} component
 */
function createComponentFromName(iconComponentOptions: AddComponentOptions): Component {
  const { name } = iconComponentOptions;
  const pascalName = toPascalCase(name);
  const kebabName = toKebabCase(name);

  const component: Component = {
    ...defaultComponent,
    ...iconComponentOptions,
    pascalName: pascalName,
    kebabName: kebabName,
    shortPath: `components/${pascalName}`,
    chunkName: `components/${pascalName}`,
  };

  return component;
}
