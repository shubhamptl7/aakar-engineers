/** Renders a quote with its key phrase highlighted in brand red. */
export default function Quote({ text, highlight, className = "" }: { text: string; highlight: string; className?: string }) {
  const i = highlight ? text.indexOf(highlight) : -1;
  if (i < 0) return <p className={className}>{text}</p>;
  return (
    <p className={className}>
      {text.slice(0, i)}
      <mark className="bg-transparent bg-[linear-gradient(transparent_60%,rgba(200,52,60,.2)_60%)] font-semibold text-brand-dark">{highlight}</mark>
      {text.slice(i + highlight.length)}
    </p>
  );
}
