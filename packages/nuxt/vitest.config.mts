import { defineVitestProject } from '@nuxt/test-utils/config';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: [
            'src/**/*.unit.spec.ts',
            'src/**/*.pipeline.spec.ts',
            'test/unit/**/*.{test,spec}.ts',
          ],
          environment: 'node',
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['test/nuxt/**/*.{test,spec}.ts', '*.nuxt.{test,spec}.ts'],
          environmentOptions: {
            nuxt: {
              rootDir: fileURLToPath(new URL('./test/nuxt/fixtures/basic', import.meta.url)),
            },
          },
        },
      }),
      {
        test: {
          name: 'e2e',
          include: ['test/e2e/**/*.e2e.{test,spec}.ts'],
          environment: 'node',
        },
      },
    ],
    coverage: {
      reportsDirectory: './test/coverage',
      reporter: ['html'],
    },
  },
});
