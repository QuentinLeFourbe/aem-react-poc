import React from 'react';
import { CellEditor } from './CellEditor';

interface RowEditorProps {
  rowIndex: number;
  cells: string[];
  onUpdateCell: (colIdx: number, val: string) => void;
  onAddCol: () => void;
  onRemoveCol: (colIdx: number) => void;
  onRemoveRow: () => void;
}

export function RowEditor({
  rowIndex, cells, onUpdateCell, onAddCol, onRemoveCol, onRemoveRow,
}: RowEditorProps) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #e9ecef' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <span style={{ minWidth: 48, fontSize: 11, fontWeight: 600, color: '#6c757d', fontFamily: 'sans-serif', paddingTop: 6 }}>
          Row {rowIndex + 1}
        </span>
        <button
          onClick={onRemoveRow}
          title="Supprimer la ligne"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: '#dc3545', padding: '2px 4px' }}
        >
          ✕
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        {cells.map((cell, colIdx) => (
          <CellEditor
            key={colIdx}
            value={cell}
            onChange={(val) => onUpdateCell(colIdx, val)}
            onRemove={() => onRemoveCol(colIdx)}
            showRemove={cells.length > 1}
          />
        ))}

        <button
          onClick={onAddCol}
          title="Ajouter une colonne"
          style={{
            alignSelf: 'flex-start',
            marginTop: 28,
            background: '#e9ecef',
            border: '1px dashed #adb5bd',
            borderRadius: 4,
            padding: '4px 8px',
            cursor: 'pointer',
            fontSize: 16,
            color: '#495057',
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
