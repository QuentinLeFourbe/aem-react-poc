import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import type { ComponentType } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient.js';

/**
 * Mount a React component onto an AEM block element.
 * Wraps the component in a QueryClientProvider so all blocks share the same cache.
 */
export function renderBlock<P extends Record<string, unknown>>(
  block: HTMLElement,
  Component: ComponentType<P>,
  props: P,
) {
  block.textContent = '';
  const root = createRoot(block);
  root.render(
    createElement(QueryClientProvider, { client: queryClient },
      createElement(Component, props),
    ),
  );
}
