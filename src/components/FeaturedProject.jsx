import { ExternalLink, Radio } from "lucide-react";
import { GithubIcon } from "./icons";

const isRealLink = (url) => Boolean(url) && !url.startsWith("YOUR_");

export default function FeaturedProject({ project }) {
  const {
    title,
    overview,
    problem,
    howItWorks,
    technologies,
    features,
    image,
    github,
    demo,
  } = project;
  const hasGithub = isRealLink(github);
  const hasDemo = isRealLink(demo);

  return (
    <div className="card overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Visual side */}
        <div className="relative bg-base border-b lg:border-b-0 lg:border-r border-base-line aspect-video lg:aspect-auto min-h-[280px]">
          <img
            src={image}
            alt={`${title} diagram`}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="absolute top-4 left-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-base/90 border border-base-line text-signal">
            <Radio size={12} className="animate-pulse-line" />
            Flagship project
          </span>
        </div>

        {/* Content side */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-ink-muted leading-relaxed">{overview}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-signal mb-2">
              Problem
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">{problem}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-signal mb-2">
              How it works
            </h4>
            <ol className="flex flex-col gap-2">
              {howItWorks.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="font-mono text-signal shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-signal mb-2">
              Key features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {features.map((feature) => (
                <li key={feature} className="text-sm text-ink-muted flex gap-2">
                  <span className="text-signal">›</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-signal mb-2">
              Technologies
            </h4>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded bg-base border border-base-line text-ink-faint"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={hasGithub ? github : undefined}
              target={hasGithub ? "_blank" : undefined}
              rel={hasGithub ? "noreferrer" : undefined}
              className={`btn-secondary flex-1 ${!hasGithub ? "opacity-40 pointer-events-none" : ""}`}
            >
              <GithubIcon size={16} />
              {hasGithub ? "View on GitHub" : "Add GitHub link"}
            </a>
            <a
              href={hasDemo ? demo : undefined}
              target={hasDemo ? "_blank" : undefined}
              rel={hasDemo ? "noreferrer" : undefined}
              className={`btn-secondary flex-1 ${!hasDemo ? "opacity-40 pointer-events-none" : ""}`}
            >
              <ExternalLink size={16} />
              {hasDemo ? "Watch Demo" : "Add demo link"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
