type LabelProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

/** Small mono label — the "technical studio" voice used across the site. */
export default function Label({ children, className = "", as = "span" }: LabelProps) {
  const Tag = as as any;
  return <Tag className={`label ${className}`}>{children}</Tag>;
}
