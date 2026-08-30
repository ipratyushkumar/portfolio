import { Code2, Cpu, Database, Globe, LineChart } from "lucide-react";
import skillCategories from "../data/skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const categoryIcons = {
  Programming: Code2,
  "Web Development": Globe,
  Database: Database,
  "Data Science / AI": LineChart,
  IoT: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I've learned & worked with"
        description="A snapshot of what I've studied and built with so far — not a claim of mastery, just an honest map of my toolkit."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map(({ category, items }, i) => {
          const Icon = categoryIcons[category] ?? Code2;
          return (
            <Reveal key={category} delay={i * 80}>
              <div className="card p-6 h-full hover:border-signal-dim">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-signal/10 text-signal">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-medium">{category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-base border border-base-line text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
