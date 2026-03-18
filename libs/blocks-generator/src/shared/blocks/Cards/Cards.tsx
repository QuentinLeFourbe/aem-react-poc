import { defineBlock } from 'eds-react-adapter';
import './Cards.css';

interface CardItem {
  image: string;
  title: string;
  description: string;
}

interface CardsProps {
  items: CardItem[];
}

function CardTile({ image, title, description }: CardItem) {
  return (
    <div className="cards-item">
      {image && (
        <div className="cards-item-image" dangerouslySetInnerHTML={{ __html: image }} />
      )}
      <div className="cards-item-body">
        <h3>{title}</h3>
        {description && (
          <div className="cards-item-description" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
}

export function Cards({ items }: CardsProps) {
  return (
    <ul className="cards-grid">
      {items.map((item, i) => (
        <li key={i}>
          <CardTile {...item} />
        </li>
      ))}
    </ul>
  );
}

export default defineBlock(Cards, {
  decorate: (block): CardsProps => {
    // Each row = one card
    const rows = [...block.querySelectorAll(':scope > div')];

    const items = rows.map((row) => {
      const cell = row.querySelector(':scope > div') as HTMLElement | null;

      // Clone to safely remove elements without affecting the original
      const clone = cell?.cloneNode(true) as HTMLElement | null;

      const pictureSrc = cell?.querySelector('picture')?.outerHTML ?? '';
      clone?.querySelector('picture')?.remove();

      const title = clone?.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim() ?? '';
      clone?.querySelector('h1,h2,h3,h4,h5,h6')?.remove();

      const description = clone?.innerHTML?.trim() ?? '';

      return { image: pictureSrc, title, description };
    });

    return { items };
  },
});
