import { defineBlock } from 'eds-react-adapter';
import { extractPicture, EDSPicture, type PictureData } from '../../utils/picture.tsx';
import './Cards.css';

interface CardItem {
  image: PictureData | null;
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
        <div className="cards-item-image">
          <EDSPicture data={image} />
        </div>
      )}
      <div className="cards-item-body">
        <h3>{title}</h3>
        {description && <p className="cards-item-description">{description}</p>}
      </div>
    </div>
  );
}

export function Cards({ items }: CardsProps) {
  return (
    <ul className="cards-grid">
      {items.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>
          <CardTile {...item} />
        </li>
      ))}
    </ul>
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

      const description = clone?.textContent?.trim() ?? '';

      return { image, title, description };
    });

    return { items };
  },
});
