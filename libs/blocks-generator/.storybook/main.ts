import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'eds-storybook-addon'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config): Promise<InlineConfig> {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        dedupe: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/material'],
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          'react',
          'react-dom',
          '@emotion/react',
          '@emotion/styled',
          '@ap/design-system',
        ],
      },
    };
  },
};

export default config;
