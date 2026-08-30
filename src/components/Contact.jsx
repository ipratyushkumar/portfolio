import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import profile from "../data/profile";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const isRealLink = (url) => Boolean(url) && !url.startsWith("YOUR_");

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent

  // NOTE: This form does not send emails yet — there is no backend
  // or email service configured. Submitting currently just confirms
  // receipt in the UI. See EDITING_GUIDE.md → "Contact form" for how
  // to wire it up to a real service (e.g. Formspree) in a few minutes.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Reach out for internship opportunities, collaboration, or just to say hi."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
        <Reveal className="flex flex-col gap-4">
          <ContactLink
            icon={Mail}
            label={profile.email}
            href={isRealLink(profile.email) ? `mailto:${profile.email}` : undefined}
          />
          <ContactLink
            icon={GithubIcon}
            label={isRealLink(profile.github) ? "GitHub" : "Add your GitHub link"}
            href={isRealLink(profile.github) ? profile.github : undefined}
          />
          <ContactLink
            icon={LinkedinIcon}
            label={isRealLink(profile.linkedin) ? "LinkedIn" : "Add your LinkedIn link"}
            href={isRealLink(profile.linkedin) ? profile.linkedin : undefined}
          />
          <ContactLink icon={MapPin} label={profile.location} />
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-ink-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-md bg-base border border-base-line px-4 py-2.5 text-sm text-ink focus-visible:border-signal outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-ink-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-md bg-base border border-base-line px-4 py-2.5 text-sm text-ink focus-visible:border-signal outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="rounded-md bg-base border border-base-line px-4 py-2.5 text-sm text-ink focus-visible:border-signal outline-none resize-none"
              />
            </div>

            <button type="submit" className="btn-primary self-start">
              <Send size={16} />
              Send Message
            </button>

            {status === "sent" && (
              <p className="text-sm text-signal" role="status">
                Thanks for reaching out — this demo form isn't connected to an email
                service yet, so please also email me directly at{" "}
                <span className="font-mono">{profile.email}</span> for now.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, href }) {
  const content = (
    <span className="flex items-center gap-3">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-signal/10 text-signal shrink-0">
        <Icon size={18} />
      </span>
      <span className="text-sm text-ink-muted">{label}</span>
    </span>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="card p-4 hover:border-signal-dim">
      {content}
    </a>
  ) : (
    <div className="card p-4">{content}</div>
  );
}
