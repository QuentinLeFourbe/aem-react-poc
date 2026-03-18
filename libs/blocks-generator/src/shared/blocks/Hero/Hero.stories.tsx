import type { Meta, StoryObj } from '@storybook/react';
import { BlockPreview } from 'eds-storybook-addon/BlockPreview';
import decorate from './Hero';
import './Hero.css';

const meta: Meta<{ rows: string[][] }> = {
  title: 'Blocks/Hero',
  parameters: { layout: 'fullscreen' },
  render: ({ rows }) => <BlockPreview blockName="hero" rows={rows} decorate={decorate} />,
};

export default meta;
type Story = StoryObj<{ rows: string[][] }>;

export const Default: Story = {
  args: {
    rows: [
      ['<picture><img src="https://picsum.photos/1920/1080?random=1" alt="Hero" loading="eager" width="1920" height="1080" /></picture>'],
      ['<h1>Build faster,<br/>ship smarter</h1>'],
      ['<p>Une expérience moderne propulsée par AEM Edge Delivery Services et React.</p>'],
      ['<p><a href="#">Découvrir</a></p><p><a href="#">En savoir plus</a></p>'],
    ],
  },
};

export const NoImage: Story = {
  args: {
    rows: [
      [''],
      ['<h1>Sans image de fond</h1>'],
      ['<p>Le fond fallback est la couleur sombre définie en CSS.</p>'],
      ['<p><a href="#">CTA unique</a></p>'],
    ],
  },
};
