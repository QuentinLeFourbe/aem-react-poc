import { defineBlock } from 'eds-react-adapter';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  console.log({ title, description });
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-description" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default defineBlock(Card, {
  cells: [{ name: 'title' }, { name: 'description', type: 'html' }],
});
