interface PictureSource {
  type: string;
  srcSet: string;
  media?: string;
}

export interface PictureData {
  src: string;
  alt: string;
  sources: PictureSource[];
}

/**
 * Extracts structured data from an EDS <picture> element.
 * Preserves responsive sources (WebP, breakpoints) without dangerouslySetInnerHTML.
 */
export function extractPicture(container: Element | null): PictureData | null {
  const img = container?.querySelector('img');
  if (!img) return null;

  const sources = Array.from(container?.querySelectorAll('source') ?? []).map((s) => ({
    type: s.getAttribute('type') ?? '',
    srcSet: s.getAttribute('srcset') ?? '',
    media: s.getAttribute('media') ?? undefined,
  }));

  return {
    src: img.getAttribute('src') ?? '',
    alt: img.getAttribute('alt') ?? '',
    sources,
  };
}

/**
 * Renders an EDS picture element as a React component.
 * Equivalent to <picture> with multiple <source> for WebP/responsive support.
 */
export function EDSPicture({ data, className }: { data: PictureData; className?: string }) {
  return (
    <picture className={className}>
      {data.sources.map((source) => (
        <source
          key={source.type + source.srcSet}
          type={source.type || undefined}
          srcSet={source.srcSet || undefined}
          media={source.media}
        />
      ))}
      <img src={data.src} alt={data.alt} loading="lazy" />
    </picture>
  );
}
