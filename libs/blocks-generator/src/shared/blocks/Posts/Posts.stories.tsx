import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BlockPreview } from 'eds-storybook-addon/BlockPreview';
import decorate from './Posts';
import './Posts.css';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

const meta: Meta<{ rows: string[][] }> = {
  title: 'Blocks/Posts',
  parameters: { layout: 'padded' },
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: ({ rows }) => <BlockPreview blockName="posts" rows={rows} decorate={decorate} />,
};

export default meta;
type Story = StoryObj<{ rows: string[][] }>;

export const Default: Story = { args: { rows: [['6']] } };
export const LargeList: Story = { args: { rows: [['20']] } };
