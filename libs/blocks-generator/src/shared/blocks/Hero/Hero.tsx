import { defineBlock } from 'eds-react-adapter';
import './Hero.css';

interface HeroProps {
  image: string;
  heading: string;
  description: string;
  ctas: string;
}

function Hero({
  image, heading, description, ctas,
}: HeroProps) {
  return (
    <section className="hero-section">
      {image && (
        // eslint-disable-next-line react/no-danger
        <div className="hero-bg" dangerouslySetInnerHTML={{ __html: image }} />
      )}
      <div className="hero-overlay" />
      <div className="hero-content">
        {heading && (
          // eslint-disable-next-line react/no-danger
          <div className="hero-heading" dangerouslySetInnerHTML={{ __html: heading }} />
        )}
        {description && (
          // eslint-disable-next-line react/no-danger
          <div className="hero-description" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {ctas && (
          // eslint-disable-next-line react/no-danger
          <div className="hero-ctas" dangerouslySetInnerHTML={{ __html: ctas }} />
        )}
      </div>
    </section>
  );
}

export default defineBlock(Hero, {
  cells: [
    { name: 'image', type: 'html' },
    { name: 'heading', type: 'html' },
    { name: 'description', type: 'html' },
    { name: 'ctas', type: 'html' },
  ],
});
