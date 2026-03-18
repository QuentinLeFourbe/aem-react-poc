import { defineBlock } from 'eds-react-adapter';
import './Card.css';

interface CardProps {
  image: HTMLElement | null;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  console.log({ image, title, description });
  return (
    <div className="card">
      {image && (
        <div className="card-image" dangerouslySetInnerHTML={{ __html: image.outerHTML }} />
      )}
      <h3>{title}</h3>
      <div className="card-description" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default defineBlock(Card, {
  decorate: (block) => {
    // Single cell: image + heading + description all in one cell
    const cell = block.querySelector(':scope > div > div') as HTMLElement | null;

    const image = cell?.querySelector('picture') ?? null;
    const title = cell?.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim() ?? '';

    // Description = everything that's not the picture or heading
    const descEl = cell?.cloneNode(true) as HTMLElement | null;
    descEl?.querySelector('picture')?.remove();
    descEl?.querySelector('h1,h2,h3,h4,h5,h6')?.remove();
    const description = descEl?.innerHTML?.trim() ?? '';

    return { image, title, description };
  },
});
