import { defineBlock } from 'eds-react-adapter';
import { extractPicture, EDSPicture, type PictureData } from '../../utils/picture.tsx';
import './Hero.css';

interface HeroProps {
  image: PictureData | null;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function Hero({
  image, heading, description, ctaLabel, ctaUrl,
}: HeroProps) {
  return (
    <section className="hero-section">
      {image && (
        <div className="hero-bg">
          <EDSPicture data={image} />
        </div>
      )}
      <div className="hero-overlay" />
      <div className="hero-content">
        {heading && <h2 className="hero-heading">{heading}</h2>}
        {description && <p className="hero-description">{description}</p>}
        {ctaLabel && ctaUrl && (
          <div className="hero-ctas">
            <a href={ctaUrl} className="button primary">{ctaLabel}</a>
          </div>
        )}
      </div>
    </section>
  );
}

export default defineBlock(Hero, {
  decorate: (block) => {
    // Key-value structure: each row is [key-label | value]
    const getValueCell = (row: number): Element | null => block.children[row]?.children[1] ?? null;

    return {
      image: extractPicture(getValueCell(0)),
      heading: getValueCell(1)?.textContent?.trim() ?? '',
      description: getValueCell(2)?.textContent?.trim() ?? '',
      ctaLabel: getValueCell(3)?.textContent?.trim() ?? '',
      ctaUrl: getValueCell(4)?.querySelector('a')?.getAttribute('href')
        ?? getValueCell(4)?.textContent?.trim()
        ?? '',
    };
  },
});
