import React, { useState } from 'react';

type HelperType = 'image' | 'h1' | 'h2' | 'h3' | 'p' | 'link' | null;

function btnStyle(bg: string): React.CSSProperties {
  return {
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    padding: '3px 10px',
    cursor: 'pointer',
    fontSize: 12,
  };
}

interface HelperFormProps {
  type: HelperType;
  onInsert: (html: string) => void;
  onClose: () => void;
}

function HelperForm({ type, onInsert, onClose }: HelperFormProps) {
  const [f, setF] = useState<Record<string, string>>({});
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '4px 6px',
    marginBottom: 4,
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: 4,
    fontSize: 12,
  };

  const input = (key: string, placeholder: string) => (
    <input key={key} placeholder={placeholder} onChange={set(key)} style={inputStyle} />
  );

  const buildHtml = (): string => {
    if (type === 'image') return `<picture><img src="${f.src ?? ''}" alt="${f.alt ?? ''}" loading="lazy" /></picture>`;
    if (type === 'h1') return `<h1>${f.text ?? ''}</h1>`;
    if (type === 'h2') return `<h2>${f.text ?? ''}</h2>`;
    if (type === 'h3') return `<h3>${f.text ?? ''}</h3>`;
    if (type === 'p') return `<p>${f.text ?? ''}</p>`;
    if (type === 'link') return `<p><a href="${f.href ?? '#'}">${f.label ?? ''}</a></p>`;
    return '';
  };

  return (
    <div style={{ background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: 6, padding: 8, marginTop: 4 }}>
      {type === 'image' && <>{input('src', "URL de l'image")}{input('alt', 'Texte alternatif')}</>}
      {(type === 'h1' || type === 'h2' || type === 'h3' || type === 'p') && input('text', 'Texte...')}
      {type === 'link' && <>{input('href', 'URL du lien')}{input('label', 'Label du lien')}</>}
      <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
        <button onClick={() => { onInsert(buildHtml()); onClose(); }} style={btnStyle('#0d6efd')}>Insérer</button>
        <button onClick={onClose} style={btnStyle('#6c757d')}>Annuler</button>
      </div>
    </div>
  );
}

interface CellEditorProps {
  value: string;
  onChange: (val: string) => void;
  onRemove?: () => void;
  showRemove: boolean;
}

export function CellEditor({ value, onChange, onRemove, showRemove }: CellEditorProps) {
  // Local state makes the textarea immune to parent re-renders.
  // The parent uses key={storyId} to remount on story change, so `value`
  // from the new story is picked up correctly via useState(value).
  const [local, setLocal] = useState(value);
  const [active, setActive] = useState<HelperType>(null);

  const helpers: { label: string; type: HelperType }[] = [
    { label: '🖼 Image', type: 'image' },
    { label: 'H1', type: 'h1' },
    { label: 'H2', type: 'h2' },
    { label: 'H3', type: 'h3' },
    { label: 'P', type: 'p' },
    { label: '🔗 Lien', type: 'link' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocal(e.target.value);
    onChange(e.target.value);
  };

  const append = (html: string) => {
    const next = local ? `${local}\n${html}` : html;
    setLocal(next);
    onChange(next);
  };

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 4 }}>
        {helpers.map((h) => (
          <button
            key={h.type}
            onClick={() => setActive(active === h.type ? null : h.type)}
            style={{ ...btnStyle(active === h.type ? '#0d6efd' : '#6c757d'), padding: '2px 8px' }}
          >
            {h.label}
          </button>
        ))}
        {showRemove && (
          <button onClick={onRemove} style={{ ...btnStyle('#dc3545'), marginLeft: 'auto' }}>🗑</button>
        )}
      </div>

      {active && (
        <HelperForm type={active} onInsert={append} onClose={() => setActive(null)} />
      )}

      <textarea
        value={local}
        onChange={handleChange}
        rows={3}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'monospace',
          fontSize: 12,
          padding: '6px 8px',
          border: '1px solid #ccc',
          borderRadius: 4,
          resize: 'vertical',
        }}
        placeholder="HTML de la cellule..."
      />
    </div>
  );
}
