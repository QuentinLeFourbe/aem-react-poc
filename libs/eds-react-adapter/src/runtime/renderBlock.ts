import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import type { ComponentType } from 'react';

/**
 * Mount a React component onto an AEM block element.
 */
export function renderBlock<P extends Record<string, unknown>>(
  block: HTMLElement,
  Component: ComponentType<P>,
  props: P,
) {
  block.textContent = '';
  const root = createRoot(block);
  root.render(createElement(Component, props));
}
