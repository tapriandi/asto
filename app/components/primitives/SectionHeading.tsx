import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  meta?: string;
  href?: string;
  className?: string;
};

/** Big section heading with an optional mono meta label and a link. */
export default function SectionHeading({
  title,
  meta,
  href,
  className = "",
}: SectionHeadingProps) {
  const content = (
    <div className={`flex flex-wrap items-baseline justify-between gap-4 ${className}`}>
      <h2 className="display-section font-display">{title}</h2>
      {meta ? <span className="label">{meta}</span> : null}
    </div>
  );

  return href ? (
    <Link href={href} className="group block" data-cursor="hover">
      {content}
    </Link>
  ) : (
    content
  );
}
