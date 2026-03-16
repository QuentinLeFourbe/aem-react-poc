const LIB_ORIGIN = 'https://www.aem.live';

function getMetadata(name, doc = document) {
  const attr = name && name.includes(':') ? 'property' : 'name';
  const meta = doc.head.querySelector(`meta[${attr}="${name}"]`);
  return meta && meta.content;
}

export async function init() {
  const { loadSidekickLibrary } = await import('https://main--aem-boilerplate--adobe.aem.live/tools/sidekick/library/library.js');
  loadSidekickLibrary(getMetadata('helix-sidekick-library') || {});
}
