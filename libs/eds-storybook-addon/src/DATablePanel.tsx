import React, { useState, useEffect } from 'react';
import { useArgs, useStorybookState } from '@storybook/manager-api';
import { RowEditor } from './RowEditor';

// Outer wrapper: reads storyId + args, passes them to the inner component.
// The inner component gets a fresh mount (key={storyId}) on every story change,
// so useState initializes from the new story's args without any effect-based reset.
export function DATablePanel() {
  const [args, updateArgs] = useArgs();
  const { storyId } = useStorybookState();
  const initialRows = (args?.rows as string[][] | undefined) ?? [['']];

  return (
    <DATablePanelContent
      key={storyId}
      initialRows={initialRows}
      updateArgs={updateArgs}
    />
  );
}

interface ContentProps {
  initialRows: string[][];
  updateArgs: (args: Record<string, unknown>) => void;
}

// Inner component: owns the state. Mounted fresh on every story switch (key={storyId}).
// updateArgs is only called after a debounce, never on the initial render
// (the `skip` ref prevents the first effect from firing unnecessarily).
function DATablePanelContent({ initialRows, updateArgs }: ContentProps) {
  const [rows, setRows] = useState<string[][]>(initialRows);
  const skip = React.useRef(true);

  useEffect(() => {
    if (skip.current) { skip.current = false; return; }
    const timer = setTimeout(() => updateArgs({ rows }), 300);
    return () => clearTimeout(timer);
  // updateArgs identity can change; intentionally excluded to avoid spurious syncs.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const addRow = () => setRows((r) => [...r, ['']]);
  const removeRow = (i: number) => setRows((r) => (r.length <= 1 ? r : r.filter((_, idx) => idx !== i)));
  const addCol = (ri: number) => setRows((r) => r.map((row, i) => (i === ri ? [...row, ''] : row)));
  const removeCol = (ri: number, ci: number) =>
    setRows((r) => r.map((row, i) => (i === ri ? row.filter((_, j) => j !== ci) : row)));
  const updateCell = (ri: number, ci: number, val: string) =>
    setRows((r) => r.map((row, i) => (i === ri ? row.map((cell, j) => (j === ci ? val : cell)) : row)));

  return (
    <div style={{ padding: '12px 16px', fontFamily: 'system-ui, sans-serif', fontSize: 13, height: '100%', overflowY: 'auto', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <strong style={{ fontSize: 13, color: '#343a40' }}>📋 DA Table</strong>
        <span style={{ fontSize: 11, color: '#6c757d' }}>{rows.length} row{rows.length > 1 ? 's' : ''}</span>
      </div>

      {rows.map((cells, rowIdx) => (
        <RowEditor
          key={rowIdx}
          rowIndex={rowIdx}
          cells={cells}
          onUpdateCell={(ci, val) => updateCell(rowIdx, ci, val)}
          onAddCol={() => addCol(rowIdx)}
          onRemoveCol={(ci) => removeCol(rowIdx, ci)}
          onRemoveRow={() => removeRow(rowIdx)}
        />
      ))}

      <button
        onClick={addRow}
        style={{
          marginTop: 12,
          width: '100%',
          padding: '8px',
          background: 'none',
          border: '2px dashed #adb5bd',
          borderRadius: 6,
          cursor: 'pointer',
          color: '#6c757d',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        + Ajouter une ligne
      </button>
    </div>
  );
}
