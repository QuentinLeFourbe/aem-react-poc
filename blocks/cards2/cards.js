import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /*
   * Change: The block now treats the entire table as ONE card.
   * Row 1: Title
   * Row 2: Description
   */
  const titleRow = block.children[0];
  const descRow = block.children[1];

  const card = document.createElement('div');
  card.className = 'card-content';

  if (titleRow) {
    const title = document.createElement('h3');
    title.innerHTML = titleRow.innerHTML;
    card.append(title);
  }

  if (descRow) {
    const desc = document.createElement('div');
    desc.className = 'card-description';
    desc.innerHTML = descRow.innerHTML;
    card.append(desc);
  }

  block.textContent = '';
  block.append(card);
}
