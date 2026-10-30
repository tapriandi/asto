type MarqueeRowProps = {
  items: string[];
  className?: string;
  reverse?: boolean;
};

/** Infinite horizontal ticker. Text is duplicated so the -50% keyframe loops seamlessly. */
export default function MarqueeRow({ items, className = "", reverse = false }: MarqueeRowProps) {
  const row = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="label flex shrink-0 items-center gap-8 whitespace-nowrap px-8 py-2 text-bone"
          >
            {item}
            <span className="text-muted">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
