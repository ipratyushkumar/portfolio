import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const isRealLink = (url) => Boolean(url) && !url.startsWith("YOUR_");

export default function ProjectCard({ project }) {
  const { title, tagline, technologies, image, github, demo } = project;
  const hasGithub = isRealLink(github);
  const hasDemo = isRealLink(demo);

  return (
    <div className="card group flex flex-col overflow-hidden hover:border-signal-dim hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-video bg-base border-b border-base-line overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-display text-lg font-medium mb-1">{title}</h3>
          <p className="text-sm text-ink-muted leading-relaxed">{tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-2 mt-auto">
          {technologies.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded bg-base border border-base-line text-ink-faint"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 pt-2">
          <a
            href={hasGithub ? github : undefined}
            target={hasGithub ? "_blank" : undefined}
            rel={hasGithub ? "noreferrer" : undefined}
            aria-disabled={!hasGithub}
            className={`btn-secondary flex-1 !py-2 text-xs ${
              !hasGithub ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <GithubIcon size={14} />
            {hasGithub ? "GitHub" : "Add GitHub link"}
          </a>
          {hasDemo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 !py-2 text-xs"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
