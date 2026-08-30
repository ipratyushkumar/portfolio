import projects from "../data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of hardware-connected systems and software projects — add more any time by editing src/data/projects.js."
      />

      <div className="flex flex-col gap-8 mb-10">
        {featured.map((project) => (
          <Reveal key={project.id}>
            <FeaturedProject project={project} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
