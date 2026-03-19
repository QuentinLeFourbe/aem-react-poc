import { APCard, APButton, APThemeProvider } from '@ap/design-system';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { defineBlock } from 'eds-react-adapter';
import './Card.css';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}

function Card({ imageSrc, imageAlt, title, description, linkHref, linkText }: CardProps) {
  return (
    <APThemeProvider theme="light">
      <APCard>
        {imageSrc && (
          <CardMedia component="img" image={imageSrc} alt={imageAlt} height={200} />
        )}
        <CardHeader title={title} />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        {linkText && (
          <CardActions>
            <APButton variant="primary" size="medium" href={linkHref || undefined}>
              {linkText}
            </APButton>
          </CardActions>
        )}
      </APCard>
    </APThemeProvider>
  );
}

export default defineBlock(Card, {
  decorate: (block) => {
    const cell = block.querySelector(':scope > div > div') as HTMLElement | null;

    const img = cell?.querySelector('picture img') ?? cell?.querySelector('img');
    const imageSrc = img?.getAttribute('src') ?? '';
    const imageAlt = img?.getAttribute('alt') ?? '';

    const title = cell?.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim() ?? '';

    const link = cell?.querySelector('a');
    const linkHref = link?.getAttribute('href') ?? '';
    const linkText = link?.textContent?.trim() ?? '';

    const clone = cell?.cloneNode(true) as HTMLElement | null;
    clone?.querySelector('picture')?.remove();
    clone?.querySelector('h1,h2,h3,h4,h5,h6')?.remove();
    clone?.querySelector('a')?.remove();
    const description = clone?.textContent?.trim() ?? '';

    return { imageSrc, imageAlt, title, description, linkHref, linkText };
  },
});
