import { defineConfig } from 'vite';
import { edsReactPlugin } from 'eds-react-adapter/vite';

export default defineConfig({
  plugins: [
    edsReactPlugin({
      blocksDir: './src/shared/blocks',
      outDir: '../../blocks',
    }),
  ],
});
