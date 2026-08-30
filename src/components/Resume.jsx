import { Download, ExternalLink, FileText } from "lucide-react";
import profile from "../data/profile";
import Reveal from "./Reveal";

export default function Resume() {
  const handleViewResume = () => {
    window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="resume" className="section">
      <Reveal>
        <div className="card p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-signal/10 text-signal shrink-0">
              <FileText size={22} />
            </span>

            <div>
              <h2 className="font-display text-xl font-semibold">
                Want the full picture?
              </h2>

              <p className="text-sm text-ink-muted mt-1">
                View or download my resume for a complete summary of my
                education, skills, and projects.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleViewResume}
              className="btn-secondary"
            >
              <ExternalLink size={16} />
              View Resume
            </button>

            <a
              href={profile.resumeUrl}
              download="Pratyush-Kumar-Resume.pdf"
              className="btn-primary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}