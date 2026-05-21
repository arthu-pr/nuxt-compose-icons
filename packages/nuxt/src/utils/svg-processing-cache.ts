import { createHash } from 'node:crypto';
import { promises as fsp } from 'node:fs';
import * as path from 'node:path';

interface CacheEntry {
  contentHash: string;
  componentCode: string;
}

interface CacheFile {
  optionsHash: string;
  entries: Record<string, CacheEntry>;
}

export class SvgProcessingCache {
  private cacheFilePath: string;
  private data: CacheFile;
  private dirty = false;

  constructor(
    cacheDir: string,
    optionsHash: string,
    private rootDir: string,
  ) {
    this.cacheFilePath = path.join(cacheDir, 'cache.json');
    this.data = { optionsHash, entries: {} };
  }

  static hash(value: unknown): string {
    return createHash('md5').update(JSON.stringify(value)).digest('hex').slice(0, 8);
  }

  async load(): Promise<void> {
    try {
      const raw = await fsp.readFile(this.cacheFilePath, 'utf-8');
      const parsed: CacheFile = JSON.parse(raw);
      if (parsed.optionsHash === this.data.optionsHash) {
        this.data = parsed;
      }
    } catch {
      // No cache or stale — start fresh
    }
  }

  get(filePath: string, contentHash: string): string | null {
    const entry = this.data.entries[path.relative(this.rootDir, filePath)];
    return entry?.contentHash === contentHash ? entry.componentCode : null;
  }

  set(filePath: string, contentHash: string, componentCode: string): void {
    this.data.entries[path.relative(this.rootDir, filePath)] = { contentHash, componentCode };
    this.dirty = true;
  }

  async save(): Promise<void> {
    if (!this.dirty) return;
    await fsp.mkdir(path.dirname(this.cacheFilePath), { recursive: true });
    await fsp.writeFile(this.cacheFilePath, JSON.stringify(this.data), 'utf-8');
  }
}
