import { Award, ExternalLink } from "lucide-react";
import certifications from "../data/certifications";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        eyebrow="Certifications"
        title="Learning beyond the classroom"
        description="Courses and certifications that reflect my interest in Data Science, AI, and continuous learning."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((certificate, index) => (
          <Reveal key={certificate.id} delay={index * 80}>
            <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award size={22} />
                </div>

                <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {certificate.year}
                </span>
              </div>

              <div className="mt-5 flex-1">
                <h3 className="text-lg font-semibold text-ink">
                  {certificate.name}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  Issued by {certificate.issuer}
                </p>
              </div>

              {certificate.certificateUrl && (
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              )}

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}