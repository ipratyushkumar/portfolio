import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col ${alignClass} gap-3 mb-12`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="text-ink-muted max-w-2xl text-[1rem] leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
