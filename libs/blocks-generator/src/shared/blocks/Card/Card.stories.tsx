import type { Meta, StoryObj } from '@storybook/react';
import { BlockPreview } from 'eds-storybook-addon/BlockPreview';
import decorate from './Card';
import './Card.css';

const cell = (imgSeed: number | null, title: string, desc: string, link?: { text: string; href: string }) => [
  imgSeed !== null
    ? `<picture><img src="https://picsum.photos/400/300?random=${imgSeed}" alt="${title}" /></picture>`
    : '',
  `<h3>${title}</h3>`,
  `<p>${desc}</p>`,
  link ? `<a href="${link.href}">${link.text}</a>` : '',
].join('');

const meta: Meta<{ rows: string[][] }> = {
  title: 'Blocks/Card',
  parameters: { layout: 'centered' },
  render: ({ rows }) => <BlockPreview blockName="card" rows={rows} decorate={decorate} />,
};

export default meta;
type Story = StoryObj<{ rows: string[][] }>;

export const Default: Story = {
  args: {
    rows: [[cell(42, 'Royal Oak', 'The iconic octagonal bezel, petit tapisserie dial and integrated bracelet — a revolution since 1972.', { text: 'Discover', href: '/royal-oak' })]],
  },
};

export const WithoutImage: Story = {
  args: {
    rows: [[cell(null, 'Royal Oak Offshore', 'Bolder, bigger, built for adventure. The Offshore takes the Royal Oak spirit further than ever.', { text: 'Explore', href: '/offshore' })]],
  },
};

export const LongDescription: Story = {
  args: {
    rows: [[cell(7, 'Royal Oak Concept', 'A laboratory for bold ideas. The Concept collection pushes the boundaries of haute horlogerie, combining avant-garde aesthetics with exceptional technical innovation and masterful craftsmanship that has defined Audemars Piguet for over 150 years.')]],
  },
};
