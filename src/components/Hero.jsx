import { ArrowRight, Download, ExternalLink, Mail } from "lucide-react";
import profile from "../data/profile";
import SignalWave from "./SignalWave";

export default function Hero() {
  const handleViewResume = () => {
    window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center pt-16"
    >
      {/* Ambient grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1E2530 1px, transparent 1px), linear-gradient(90deg, #1E2530 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="section relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow">Portfolio</span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
            Hi, I&apos;m {profile.name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-ink-muted font-medium">
            {profile.title}
          </p>

          <p className="mt-6 text-[1rem] sm:text-lg text-ink-muted leading-relaxed max-w-xl">
            {profile.heroSummary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>

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
              className="btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <SignalWave className="absolute bottom-0 left-0 w-full h-24 sm:h-32 opacity-70" />
    </section>
  );
}