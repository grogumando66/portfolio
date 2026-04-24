function EducationTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={`${item.institution}-${item.period}`} className="timeline__item fade-in">
          <span className="timeline__marker" />
          <div className="timeline__content card">
            <p className="timeline__period">{item.period}</p>
            <h3>{item.qualification}</h3>
            <p className="timeline__institution">{item.institution}</p>
            <p>{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default EducationTimeline;
