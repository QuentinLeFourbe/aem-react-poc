import type { ComponentType } from 'react';
import { renderBlock } from './renderBlock.js';
import { getCell, extractCellValue } from './dom.js';
import type { CellType } from './dom.js';

/**
 * Schema for a single cell mapping.
 */
export interface CellSchema {
  /** Prop name to map this cell value to. */
  name: string;
  /** Row index. Defaults to auto-increment (position in the cells array). */
  row?: number;
  /** Column index. Defaults to 0. */
  col?: number;
  /** How to extract the value. Defaults to 'text'. */
  type?: CellType;
}

/**
 * Declarative block definition using cell mappings.
 */
interface CellsBlockConfig {
  cells: CellSchema[];
  decorate?: never;
}

/**
 * Custom block definition using a manual decorate function.
 * Supports both sync and async decorate functions.
 */
interface CustomBlockConfig<P> {
  cells?: never;
  decorate: (block: HTMLElement) => P | Promise<P>;
}

type BlockConfig<P> = CellsBlockConfig | CustomBlockConfig<P>;

/**
 * Extract props from a block element using cell schema definitions.
 */
function extractProps(
  block: HTMLElement,
  cells: CellSchema[],
): Record<string, unknown> {
  const props: Record<string, unknown> = {};
  let autoRow = 0;

  for (const cell of cells) {
    const row = cell.row ?? autoRow;
    const col = cell.col ?? 0;
    const type = cell.type ?? 'text';

    props[cell.name] = extractCellValue(getCell(block, row, col), type);

    // Auto-increment row only when row was not explicitly set
    if (cell.row === undefined) {
      autoRow++;
    } else {
      autoRow = row + 1;
    }
  }

  return props;
}

/**
 * Define an AEM Edge Delivery Services block powered by React.
 *
 * Returns the `decorate(block)` function expected by AEM.
 *
 * @example
 * ```tsx
 * import { defineBlock } from 'eds-react-adapter';
 *
 * function Card({ title, description }: CardProps) {
 *   return <div><h3>{title}</h3><p>{description}</p></div>;
 * }
 *
 * export default defineBlock(Card, {
 *   cells: [
 *     { name: 'title' },
 *     { name: 'description', type: 'html' },
 *   ],
 * });
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function defineBlock<P extends Record<string, any>>(
  Component: ComponentType<P>,
  config: BlockConfig<P>,
): (block: HTMLElement) => Promise<void> {
  return async (block: HTMLElement) => {
    const props = config.decorate
      ? await config.decorate(block)
      : extractProps(block, config.cells!);

    renderBlock(block, Component, props as P);
  };
}
