import { createHash } from 'node:crypto';
import { promises as fsp } from 'node:fs';
import * as path from 'node:path';

interface CacheEntry {
  contentHash: string;
  componentCode: string;
}

interface CacheFile {
  version: string;
  optionsHash: string;
  entries: Record<string, CacheEntry>;
}

const CACHE_VERSION = '1';

export class SvgProcessingCache {
  private cacheFilePath: string;
  private data: CacheFile;
  private dirty = false;
  private rootDir: string;
  private buildDir: string;

  constructor(rootDir: string, buildDir: string, optionsHash: string, cacheDir?: string) {
    this.rootDir = rootDir;
    this.buildDir = buildDir;
    const dir = cacheDir ?? path.join(this.buildDir, 'nuxt-compose-icons');
    this.cacheFilePath = path.join(dir, 'cache.json');
    this.data = { version: CACHE_VERSION, optionsHash, entries: {} };
  }

  static hashOptions(options: Record<string, unknown>): string {
    return createHash('md5').update(JSON.stringify(options)).digest('hex').slice(0, 8);
  }

  static hashContent(content: string): string {
    return createHash('md5').update(content).digest('hex');
  }

  async load(): Promise<void> {
    try {
      const raw = await fsp.readFile(this.cacheFilePath, 'utf-8');
      const parsed: CacheFile = JSON.parse(raw);
      if (parsed.version === CACHE_VERSION && parsed.optionsHash === this.data.optionsHash) {
        this.data = parsed;
      }
    } catch {
      // No cache or stale — start fresh
    }
  }

  get(filePath: string, contentHash: string): string | null {
    const rel = path.relative(this.rootDir, filePath);
    const entry = this.data.entries[rel];
    if (entry?.contentHash === contentHash) {
      return entry.componentCode;
    }
    return null;
  }

  set(filePath: string, contentHash: string, componentCode: string): void {
    const rel = path.relative(this.rootDir, filePath);
    this.data.entries[rel] = { contentHash, componentCode };
    this.dirty = true;
  }

  async save(): Promise<void> {
    if (!this.dirty) return;
    const dir = path.dirname(this.cacheFilePath);
    await fsp.mkdir(dir, { recursive: true });
    await fsp.writeFile(this.cacheFilePath, JSON.stringify(this.data), 'utf-8');
  }
}
