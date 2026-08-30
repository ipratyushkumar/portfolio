import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import profile from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="About"
        title="A little about me"
        description="Who I am, what I study, and what I'm working toward."
      />

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,240px)_1fr] gap-10 md:gap-14 items-start">
        <Reveal delay={100} className="flex flex-col items-center md:items-start gap-4">
          {/* Profile photo placeholder. Replace public/profile.jpg with your photo. */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden border border-base-line bg-base-raised">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="w-full h-full hidden items-center justify-center font-display text-4xl text-signal"
              style={{ display: "none" }}
            >
              {profile.initials}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-ink-muted">
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="text-signal shrink-0" />
              B.Tech CSE, LPU
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-signal shrink-0" />
              {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <Sparkles size={16} className="text-signal shrink-0" />
              Aspiring Data Scientist
            </span>
          </div>
        </Reveal>

        <Reveal delay={200} className="flex flex-col gap-4">
          {profile.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-ink-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
