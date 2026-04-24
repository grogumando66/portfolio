import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="container page-intro slide-up">
        <span className="page-intro__eyebrow">Selected Work</span>
        <h1>Projects</h1>
        <p>
          A snapshot of projects that reflect my interest in machine learning, forecasting, and
          decision-support systems built with practical evaluation in mind.
        </p>
      </section>

      <section className="container section-stack">
        <SectionHeading
          eyebrow="Portfolio Projects"
          title="Applied ML projects with measurable relevance"
          description="Each project emphasizes real datasets, model comparison, and outcomes that align with practical engineering use cases."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
