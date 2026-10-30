/** Responsive WebP photo. `base` is the path without the -{width}.webp suffix. */
export default function Photo({ base, alt, className = "", sizes = "100vw", priority = false, widths = [800, 1600] }: { base: string; alt: string; className?: string; sizes?: string; priority?: boolean; widths?: number[] }) {
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}-${widths[widths.length - 1]}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
