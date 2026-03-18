import { useState, useEffect } from 'react';
import { defineBlock } from 'eds-react-adapter';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  brand: { href: string; label: string };
  links: NavLink[];
  currentPath: string;
}

function Sidebar({ brand, links, currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  return (
    <>
      <button
        className="sidebar-toggle"
        aria-controls="sidebar"
        aria-expanded={open}
        aria-label={open ? 'Fermer la navigation' : 'Ouvrir la navigation'}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sidebar-toggle-icon" />
      </button>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`sidebar-overlay${open ? ' active' : ''}`}
        onClick={() => setOpen(false)}
      />

      <div
        id="sidebar"
        className="sidebar"
        aria-expanded={open}
      >
        <div className="sidebar-brand">
          <a href={brand.href}>{brand.label}</a>
        </div>

        <nav className="sidebar-sections" aria-label="Navigation principale">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.href === currentPath ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default defineBlock(Sidebar, {
  async decorate() {
    const res = await fetch('/nav.plain.html');
    if (!res.ok) return { brand: { href: '/', label: 'Home' }, links: [], currentPath: window.location.pathname };

    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const brandEl = doc.querySelector('div:first-child a');
    const brand = {
      href: brandEl?.getAttribute('href') ?? '/',
      label: brandEl?.textContent?.trim() ?? 'Home',
    };

    const links: NavLink[] = [...doc.querySelectorAll('div:nth-child(2) ul > li > a')].map((a) => ({
      href: a.getAttribute('href') ?? '#',
      label: a.textContent?.trim() ?? '',
    }));

    return { brand, links, currentPath: window.location.pathname };
  },
});
