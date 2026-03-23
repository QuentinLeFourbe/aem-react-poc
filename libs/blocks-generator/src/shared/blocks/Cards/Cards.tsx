import { useRef } from 'react';
import { defineBlock } from 'eds-react-adapter';
import { extractPicture, EDSPicture, type PictureData } from '../../utils/picture.tsx';
import './Cards.css';

interface CardItem {
  image: PictureData | null;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

interface CardsProps {
  items: CardItem[];
}

function CardTile({
  image, title, description, ctaLabel, ctaUrl,
}: CardItem) {
  return (
    <div className="cards-item">
      {image && (
        <div className="cards-item-image">
          <EDSPicture data={image} />
        </div>
      )}
      <div className="cards-item-body">
        <h3>{title}</h3>
        {description && <p className="cards-item-description">{description}</p>}
        {ctaLabel && ctaUrl && (
          <a href={ctaUrl} className="cards-item-cta">{ctaLabel}</a>
        )}
      </div>
    </div>
  );
}

export function Cards({ items }: CardsProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstItem = track.querySelector<HTMLElement>('li');
    if (!firstItem) return;
    const gap = 24;
    track.scrollBy({ left: dir * (firstItem.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className="cards-carousel">
      <button type="button" className="cards-nav cards-nav-prev" aria-label="Précédent" onClick={() => scroll(-1)}>
        ‹
      </button>
      <ul className="cards-track" ref={trackRef}>
        {items.map((item, i) => (
          <li key={i} className="cards-track-item">
            <CardTile {...item} />
          </li>
        ))}
      </ul>
      <button type="button" className="cards-nav cards-nav-next" aria-label="Suivant" onClick={() => scroll(1)}>
        ›
      </button>
    </div>
  );
}

export default defineBlock(Cards, {
  decorate: (block): CardsProps => {
    const rows = [...block.querySelectorAll(':scope > div')];

    const items = rows.map((row) => {
      const cell = row.querySelector(':scope > div') as Element | null;
      const clone = cell?.cloneNode(true) as Element | null;

      const image = extractPicture(cell);
      clone?.querySelector('picture')?.remove();

      const title = clone?.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim() ?? '';
      clone?.querySelector('h1,h2,h3,h4,h5,h6')?.remove();

      const ctaLink = clone?.querySelector<HTMLAnchorElement>('p:last-of-type > a') ?? null;
      const ctaLabel = ctaLink?.textContent?.trim() ?? '';
      const ctaUrl = ctaLink?.getAttribute('href') ?? '';
      ctaLink?.closest('p')?.remove();

      const description = clone?.textContent?.trim() ?? '';

      return {
        image, title, description, ctaLabel, ctaUrl,
      };
    });

    return { items };
  },
});
