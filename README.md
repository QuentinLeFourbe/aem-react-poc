# AEM React POC

A proof-of-concept for building **AEM Edge Delivery Services** blocks with **React 19**, using a pnpm monorepo.

React is loaded once via an [import map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) in `head.html` (served from [esm.sh](https://esm.sh)) — no bundled React in each block, shared across the whole page.

## Environments

- Preview: https://main--aem-react-poc--quentinlefourbe.aem.page/
- Live: https://main--aem-react-poc--quentinlefourbe.aem.live/

## Repository Structure

```
aem-react-poc/
├── blocks/                    # AEM blocks (generated + handcrafted)
│   ├── shared/
│   │   ├── runtime.js         # Loads the eds-react-adapter at runtime
│   │   └── jsx-runtime.js     # JSX runtime shim for ESM blocks
│   ├── cards/
│   ├── hero/
│   └── ...
├── libs/
│   ├── eds-react-adapter/     # Core adapter: defineBlock(), renderBlock(), Vite plugin
│   ├── blocks-generator/      # Vite app: React source → compiled ESM blocks
│   │   └── src/shared/blocks/ # React block components (.tsx)
│   └── eds-storybook-addon/   # Storybook addon: DA Table panel + BlockPreview
├── scripts/                   # AEM scripts (aem.js, scripts.js, delayed.js)
├── styles/                    # Global CSS
├── head.html                  # Import map (React 19 via esm.sh) + script entrypoints
└── pnpm-workspace.yaml        # pnpm workspace (packages: libs/*)
```

## How It Works

### React via Import Map

`head.html` defines a browser-native import map so that `react`, `react-dom`, `react/jsx-runtime`, and `@tanstack/react-query` resolve to [esm.sh](https://esm.sh) URLs. All blocks share the **same React instance** — no duplication, no version conflicts:

```html
<script type="importmap">
{
  "imports": {
    "react":                   "https://esm.sh/react@19",
    "react-dom":               "https://esm.sh/react-dom@19",
    "react-dom/client":        "https://esm.sh/react-dom@19/client",
    "react/jsx-runtime":       "https://esm.sh/react@19/jsx-runtime",
    "@tanstack/react-query":   "https://esm.sh/@tanstack/react-query@5?external=react,react-dom"
  }
}
</script>
```

### Block Pipeline

1. Write a React component in `libs/blocks-generator/src/shared/blocks/`
2. `pnpm run dev` compiles it to an ESM module in `blocks/<blockname>/`
3. AEM EDS loads `blocks/<blockname>/<blockname>.js`, calls `decorate(block)`
4. `defineBlock()` (from `eds-react-adapter`) parses the DA table DOM, extracts props, and mounts the React component via `createRoot`

All blocks share a single **TanStack Query** `QueryClient` (set up in `renderBlock.ts`), so data fetched in one block can be reused across the page.

## Getting Started

### Install

```sh
pnpm install
```

### Development

Build blocks in watch mode (output to `blocks/`):

```sh
pnpm run dev
```

Launch Storybook to develop and preview blocks in isolation:

```sh
pnpm run storybook
```

### Production Build

```sh
pnpm run build:blocks
```

### Linting & Formatting

```sh
pnpm run lint
pnpm run lint:fix
pnpm run format
```

## Packages

### `libs/eds-react-adapter`

The core library. Provides:

- **`defineBlock(Component, config)`** — wraps a React component into the `decorate(block)` function expected by AEM. Supports declarative cell mapping or a custom `decorate` function.
- **`renderBlock(block, Component, props)`** — mounts a React component on a block element, wrapped in a shared `QueryClientProvider`.
- **Vite plugin (`eds-react-adapter/vite`)** — auto-discovers block folders and bundles each one as an ESM module.

See [`libs/eds-react-adapter/README.md`](libs/eds-react-adapter/README.md) for full API documentation.

### `libs/blocks-generator`

A Vite project that holds all React block source files (`src/shared/blocks/`). Running `pnpm run dev` or `pnpm run build:blocks` from the root compiles them to `blocks/`.

### `libs/eds-storybook-addon`

A custom Storybook addon that simulates the AEM/Document Authoring pipeline inside Storybook:

- **DA Table panel** — an interactive panel in the Storybook UI to edit block content as a table (rows × cells), mirroring how authors fill in Document Authoring tables. Changes are debounced and synced to story args.
- **`BlockPreview`** — a React component that converts the table data into the AEM block HTML structure and calls `decorate()`, giving a pixel-accurate preview of how the block will render on a real EDS page.

## Local AEM Development

1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
2. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
3. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
4. In a separate terminal, run `pnpm run dev` to keep blocks compiled and up to date
