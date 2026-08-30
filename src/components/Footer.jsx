import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import profile from "../data/profile";

const isRealLink = (url) => Boolean(url) && !url.startsWith("YOUR_");

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-line">
      <div className="section !py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint order-3 sm:order-1">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <ul className="flex items-center gap-6 order-1 sm:order-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-ink-muted hover:text-signal transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 order-2 sm:order-3">
          {isRealLink(profile.github) && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-signal transition-colors">
              <GithubIcon size={18} />
            </a>
          )}
          {isRealLink(profile.linkedin) && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-signal transition-colors">
              <LinkedinIcon size={18} />
            </a>
          )}
          {isRealLink(profile.email) && (
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-signal transition-colors">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
