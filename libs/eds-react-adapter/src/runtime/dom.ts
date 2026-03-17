/**
 * Get a specific row from a block.
 */
export const getRow = (block: HTMLElement, index: number): HTMLElement | null => {
  return (block.children[index] as HTMLElement) ?? null;
};

/**
 * Get a specific column from a row.
 */
export const getCol = (row: HTMLElement | null, index: number): HTMLElement | null => {
  if (!row) return null;
  return (row.children[index] as HTMLElement) ?? null;
};

/**
 * Get a cell (row + col) from a block.
 */
export const getCell = (block: HTMLElement, row: number, col: number): HTMLElement | null => {
  return getCol(getRow(block, row), col);
};

/**
 * Get trimmed text content from an element.
 */
export const getText = (el: HTMLElement | null): string => {
  return el?.textContent?.trim() ?? '';
};

/**
 * Get trimmed inner HTML from an element (preserves rich text).
 */
export const getHtml = (el: HTMLElement | null): string => {
  return el?.innerHTML?.trim() ?? '';
};

/**
 * Get the href of the first anchor in an element.
 */
export const getHref = (el: HTMLElement | null): string => {
  return el?.querySelector('a')?.getAttribute('href') ?? '';
};

/**
 * Get the src of the first image in an element.
 */
export const getSrc = (el: HTMLElement | null): string => {
  return el?.querySelector('img')?.getAttribute('src') ?? '';
};

export type CellType = 'text' | 'html' | 'element' | 'href' | 'src';

/**
 * Extract a value from a cell based on its type.
 */
export const extractCellValue = (
  el: HTMLElement | null,
  type: CellType = 'text',
): string | HTMLElement | null => {
  switch (type) {
    case 'html':
      return getHtml(el);
    case 'element':
      return el;
    case 'href':
      return getHref(el);
    case 'src':
      return getSrc(el);
    case 'text':
    default:
      return getText(el);
  }
};
