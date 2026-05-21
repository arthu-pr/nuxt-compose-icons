// Stub so TypeScript resolves '#compose-icons/registry' when developing the module.
// At runtime this alias is provided by the Nuxt template + alias set in module.ts.
declare module '#compose-icons/registry' {
  import type { Component } from 'vue';
  export interface IconRegistryEntry {
    name: string;
    pascalName: string;
    kebabName: string;
    importPath: string;
    component: Component;
  }
  export const iconRegistry: IconRegistryEntry[];
}
