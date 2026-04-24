function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading fade-in">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
