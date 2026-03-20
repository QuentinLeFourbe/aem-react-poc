import { moveInstrumentation } from './ue-utils.js';

/**
 * Observe blocks that restructure their DOM after decoration and move
 * UE instrumentation attributes to the new elements.
 */
const setupObservers = () => {
  const mutatingBlocks = document.querySelectorAll('div.card');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type !== 'childList' || mutation.target.tagName !== 'DIV') return;

      const type = mutation.target.getAttribute('data-aue-component');
      if (type !== 'card') return;

      const addedPicture = [...mutation.addedNodes].find((n) => n.tagName === 'PICTURE');
      const removedPicture = [...mutation.removedNodes].find((n) => n.tagName === 'PICTURE');
      if (addedPicture && removedPicture) {
        const oldImg = removedPicture.querySelector('img');
        const newImg = addedPicture.querySelector('img');
        if (oldImg && newImg) moveInstrumentation(oldImg, newImg);
      }
    });
  });

  mutatingBlocks.forEach((block) => observer.observe(block, { childList: true, subtree: true }));
};

/**
 * Handle UE events for image src updates.
 */
const setupUEEventHandlers = () => {
  document.body.addEventListener('aue:content-patch', ({ detail: { patch, request } }) => {
    let element = document.querySelector(`[data-aue-resource="${request.target.resource}"]`);
    if (element && element.getAttribute('data-aue-prop') !== patch.name) {
      element = element.querySelector(`[data-aue-prop='${patch.name}']`);
    }
    if (element?.getAttribute('data-aue-type') !== 'media') return;

    const picture = element.tagName === 'IMG' ? element.closest('picture') : element;
    picture?.querySelectorAll('source').forEach((source) => source.remove());
    picture?.querySelector('img')?.removeAttribute('srcset');
  });
};

export default () => {
  setupObservers();
  setupUEEventHandlers();
};
