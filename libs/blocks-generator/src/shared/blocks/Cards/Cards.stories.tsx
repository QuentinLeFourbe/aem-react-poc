import type { Meta, StoryObj } from '@storybook/react';
import { BlockPreview } from 'eds-storybook-addon/BlockPreview';
import decorate from './Cards';
import './Cards.css';

const card = (n: number, title: string, desc: string) =>
  `<picture><img src="https://picsum.photos/400/300?random=${n}" alt="${title}" /></picture><h3>${title}</h3><p>${desc}</p>`;

const meta: Meta<{ rows: string[][] }> = {
  title: 'Blocks/Cards',
  parameters: { layout: 'padded' },
  render: ({ rows }) => <BlockPreview blockName="cards" rows={rows} decorate={decorate} />,
};

export default meta;
type Story = StoryObj<{ rows: string[][] }>;

export const Default: Story = {
  args: {
    rows: [
      [card(10, 'Première card', 'Une description courte.')],
      [card(11, 'Deuxième card', 'Un peu plus de contenu.')],
      [card(12, 'Troisième card', 'La troisième card.')],
    ],
  },
};
