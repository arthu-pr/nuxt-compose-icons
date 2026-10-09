import type { Nuxt } from '@nuxt/schema';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import * as path from 'node:path';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import iconModule, { type NuxtComposeIconsOptions } from './module';

const { logger, addComponent, templateState } = vi.hoisted(() => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), success: vi.fn() },
  addComponent: vi.fn(),
  templateState: { buildDir: '' },
}));

vi.mock('@nuxt/kit', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@nuxt/kit')>();
  return {
    ...actual,
    defineNuxtModule: (definition: unknown) => definition,
    useLogger: () => logger,
    addComponent,
    addImports: vi.fn(),
    addPlugin: vi.fn(),
    addTemplate: (template: { filename: string }) => ({
      dst: path.join(templateState.buildDir, template.filename),
    }),
  };
});

vi.mock('./utils/filesystem/helpers', async (importOriginal) => {
  const actual = await importOriginal<typeof import('./utils/filesystem/helpers')>();
  // The production helper interprets Windows drive letters as URL schemes.
  // Keep this collision regression independent of that unrelated path bug,
  // while still creating real directories and writing real generated files.
  return {
    ...actual,
    createDir: async (directory: string) => {
      await mkdir(directory, { recursive: true });
      return directory;
    },
    writeFile: async (file: string, content: string) => {
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, content, 'utf-8');
    },
  };
});

const setup = (
  iconModule as unknown as {
    setup: (options: NuxtComposeIconsOptions, nuxt: Nuxt) => Promise<void>;
  }
).setup;

describe('component name collisions', () => {
  let rootDir: string;

  beforeEach(async () => {
    vi.clearAllMocks();
    rootDir = await mkdtemp(path.join(tmpdir(), 'compose-icons-collisions-'));
    templateState.buildDir = path.join(rootDir, '.nuxt');
  });

  afterEach(async () => {
    await rm(rootDir, { recursive: true, force: true });
  });

  async function generate(files: string[], destDir?: string) {
    for (const file of files) {
      const target = path.join(rootDir, 'icons', file);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>');
    }
    await setup(
      {
        pathToIcons: 'icons',
        component: { suffix: 'Icon', fileFormat: 'ts', destDir },
        reRunOnBuild: true,
      },
      {
        options: {
          rootDir,
          buildDir: templateState.buildDir,
          css: [],
          runtimeConfig: { public: {} },
        },
      } as unknown as Nuxt,
    );
  }

  describe.each([undefined, 'components/icons'])('output directory %s', (destDir) => {
    test.each([
      { files: ['arrow-up.svg', 'arrow_up.svg'], name: 'ArrowUpIcon' },
      { files: ['fleche.svg', 'flèche.svg'], name: 'FlecheIcon' },
      { files: ['a/home.svg', 'b/home.svg'], name: 'HomeIcon' },
    ])('warns with both sources for $name', async ({ files, name }) => {
      await generate(files, destDir);

      expect(logger.warn).toHaveBeenCalledOnce();
      const warning = logger.warn.mock.calls[0][0];
      for (const file of files) expect(warning).toContain(path.join(rootDir, 'icons', file));
      expect(warning).toContain(`"${name}"`);
      expect(warning).toContain('Rename one of these SVG files');
      expect(addComponent).toHaveBeenCalledTimes(2);
    });

    test('does not warn for unique names', async () => {
      await generate(['home.svg', 'arrow-up.svg'], destDir);

      expect(logger.warn).not.toHaveBeenCalled();
      expect(addComponent).toHaveBeenCalledTimes(2);
    });
  });
});
