import { useEffect, useRef } from 'react';

interface BlockPreviewProps {
  blockName: string;
  rows: string[][];
  decorate: (block: HTMLElement) => void | Promise<void>;
}

/**
 * Simulates the full EDS pipeline in Storybook:
 * DA table (rows) → EDS block HTML → decorate() → React mounted
 */
export function BlockPreview({ blockName, rows, decorate }: BlockPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = rows
      .map((row) => `<div>${row.map((cell) => `<div>${cell}</div>`).join('')}</div>`)
      .join('');
    decorate(ref.current);
  // Re-run whenever rows change (DA table edits in the panel)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  return <div ref={ref} className={`${blockName} block`} />;
}
