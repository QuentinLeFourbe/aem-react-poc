import type { Plugin, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export interface EdsReactPluginOptions {
  /** Directory containing React block folders. Default: './src/blocks' */
  blocksDir?: string;
  /** Output directory for compiled AEM blocks. Default: '../../blocks' */
  outDir?: string;
}

/**
 * Discover block entry points in blocksDir.
 * For each subfolder (e.g. Card/), looks for Card.tsx, index.tsx, or decorate.tsx.
 */
function discoverBlocks(blocksDir: string): Record<string, string> {
  const input: Record<string, string> = {};

  if (!fs.existsSync(blocksDir)) return input;

  for (const dir of fs.readdirSync(blocksDir)) {
    const fullPath = path.join(blocksDir, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const candidates = [
      path.join(fullPath, `${dir}.tsx`),
      path.join(fullPath, `${dir}.ts`),
      path.join(fullPath, 'index.tsx'),
      path.join(fullPath, 'index.ts'),
    ];

    const entry = candidates.find((f) => fs.existsSync(f));
    if (entry) {
      input[dir.toLowerCase()] = entry;
    }
  }

  return input;
}

/**
 * Vite plugin for AEM Edge Delivery Services + React.
 *
 * Auto-discovers block components and outputs them in the AEM-expected
 * folder structure: `blockname/blockname.js` + `blockname/blockname.css`.
 *
 * @example
 * ```ts
 * import { defineConfig } from 'vite';
 * import { edsReactPlugin } from 'eds-react-adapter/vite';
 *
 * export default defineConfig({
 *   plugins: [edsReactPlugin()],
 * });
 * ```
 */
export function edsReactPlugin(options: EdsReactPluginOptions = {}): Plugin[] {
  const blocksDir = path.resolve(options.blocksDir ?? './src/blocks');
  const outDir = options.outDir ?? '../../blocks';

  const configPlugin: Plugin = {
    name: 'eds-react-adapter',
    config(): UserConfig {
      const input = discoverBlocks(blocksDir);

      if (Object.keys(input).length === 0) {
        console.warn('[eds-react-adapter] No blocks found in', blocksDir);
      }

      return {
        define: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
        build: {
          outDir,
          emptyOutDir: false,
          cssCodeSplit: true,
          lib: {
            entry: input,
            formats: ['es'],
          },
          rollupOptions: {
            output: {
              entryFileNames: (chunk) => `${chunk.name}/${chunk.name}.js`,
              assetFileNames: (asset) => {
                if (asset.name?.endsWith('.css')) {
                  const baseName = path.basename(asset.name, '.css').toLowerCase();
                  return `${baseName}/${baseName}.css`;
                }
                return 'assets/[name]-[hash][extname]';
              },
            },
          },
        },
      };
    },
  };

  return [configPlugin, ...react()];
}
