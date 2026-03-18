import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BlockPreview } from 'eds-storybook-addon/BlockPreview';
import decorate from './Users';
import './Users.css';

/**
 * DA table structure for Users:
 * No cells needed — fetches automatically from JSONPlaceholder.
 */
const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

const meta: Meta<{ rows: string[][] }> = {
  title: 'Blocks/Users',
  parameters: { layout: 'padded' },
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: ({ rows }) => <BlockPreview blockName="users" rows={rows} decorate={decorate} />,
};

export default meta;
type Story = StoryObj<{ rows: string[][] }>;

export const Default: Story = { args: { rows: [] } };
