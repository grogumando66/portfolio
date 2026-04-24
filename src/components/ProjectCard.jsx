function ProjectCard({ project }) {
  return (
    <article className="project-card card fade-in">
      <div className="project-card__content">
        <div className="project-card__header">
          <p className="project-card__label">Featured Project</p>
          <h3>{project.title}</h3>
        </div>
        <p className="project-card__description">{project.description}</p>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={`${project.title}-${item}`} className="stack-list__tag">
              {item}
            </span>
          ))}
        </div>
      </div>
      <a className="button button--secondary" href={project.github} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
