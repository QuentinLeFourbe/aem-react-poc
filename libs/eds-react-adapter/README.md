# eds-react-adapter

Plug-and-play adapter to build **AEM Edge Delivery Services** blocks with **React**.

Write React components, get AEM-compatible `blockname/blockname.js` + `blockname.css` output — zero boilerplate.

## Quick Start

### 1. Install

```bash
pnpm add eds-react-adapter react react-dom
```

### 2. Configure Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { edsReactPlugin } from 'eds-react-adapter/vite';

export default defineConfig({
  plugins: [
    edsReactPlugin({
      blocksDir: './src/blocks',  // where your React blocks live
      outDir: '../../blocks',     // AEM blocks output directory
    }),
  ],
});
```

### 3. Create a block

```
src/blocks/
  └── Card/
      ├── Card.tsx
      └── Card.css
```

```tsx
// src/blocks/Card/Card.tsx
import { defineBlock } from 'eds-react-adapter';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default defineBlock(Card, {
  cells: [
    { name: 'title' },
    { name: 'description', type: 'html' },
  ],
});
```

### 4. Build

```bash
vite build              # one-shot
vite build --watch      # watch mode
```

Output:
```
blocks/
  └── card/
      ├── card.js
      └── card.css
```

## API

### `defineBlock(Component, config)`

Creates the `decorate(block)` function expected by AEM from a React component.

#### Declarative mode (cells)

Each entry in `cells` maps a row/column from the AEM block table to a component prop.

```tsx
export default defineBlock(MyComponent, {
  cells: [
    { name: 'title' },                          // row 0, col 0, text
    { name: 'description', type: 'html' },       // row 1, col 0, rich HTML
    { name: 'image', row: 0, col: 1, type: 'element' },  // explicit position
    { name: 'link', type: 'href' },              // extracts href from first <a>
  ],
});
```

**Cell schema options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | `string` | *required* | Prop name |
| `row` | `number` | auto-increment | Row index in the block table |
| `col` | `number` | `0` | Column index |
| `type` | `CellType` | `'text'` | Extraction method |

**Cell types:**

| Type | Extracts | Use case |
|------|----------|----------|
| `text` | `textContent` | Titles, labels |
| `html` | `innerHTML` | Rich text, formatted descriptions |
| `element` | Raw `HTMLElement` | Images, complex content |
| `href` | First `<a>` href | Links, CTAs |
| `src` | First `<img>` src | Image URLs |

#### Custom mode (decorate)

For complex blocks where declarative mapping isn't enough:

```tsx
export default defineBlock(ProductList, {
  decorate: (block) => ({
    items: [...block.querySelectorAll(':scope > div')].map(row => ({
      name: row.children[0]?.textContent || '',
      price: parseFloat(row.children[1]?.textContent || '0'),
    })),
  }),
});
```

### `edsReactPlugin(options?)`

Vite plugin that auto-discovers and builds React blocks.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `blocksDir` | `string` | `'./src/blocks'` | Source directory for React block folders |
| `outDir` | `string` | `'../../blocks'` | Output directory (relative to project root) |

**Auto-discovery:** For each subfolder in `blocksDir`, the plugin looks for entry points in this order: `BlockName.tsx` → `BlockName.ts` → `index.tsx` → `index.ts`.

### DOM utilities

Also exported for advanced use cases:

```ts
import { getRow, getCol, getCell, getText, getHtml, getHref, getSrc } from 'eds-react-adapter';
```

## How it works

1. AEM EDS loads `blockname/blockname.js` and calls `decorate(block)`
2. `defineBlock` generates that function: it parses the block's DOM table, extracts props based on your `cells` schema, and mounts the React component via `createRoot`
3. The Vite plugin handles auto-discovery, bundling, and naming conventions
