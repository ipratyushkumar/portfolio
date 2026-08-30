import education from "../data/education";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <ol className="relative flex flex-col gap-10 pl-8 sm:pl-10">
        <div
          className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-base-line"
          aria-hidden="true"
        />
        {education.map((item, i) => (
          <Reveal key={item.id} delay={i * 100}>
            <li className="relative">
              <span
                className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-base border-2 border-signal"
                aria-hidden="true"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-display text-lg font-medium">{item.degree}</h3>
                {item.period && (
                  <span className="font-mono text-xs text-signal shrink-0">{item.period}</span>
                )}
              </div>
              <p className="text-sm text-ink-muted mt-1">{item.institution}</p>
              {item.detail && (
                <p className="font-mono text-xs text-ink-faint mt-1">{item.detail}</p>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
