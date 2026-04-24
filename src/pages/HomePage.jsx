import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';
import EducationTimeline from '../components/EducationTimeline';
import {
  aboutText,
  education,
  personalInfo,
  researchInterests,
  skills,
} from '../data/portfolio';

function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero container">
        <div className="hero__content slide-up">
          <span className="hero__eyebrow">Software Engineering Portfolio</span>
          <h1>{personalInfo.name}</h1>
          <p className="hero__title">{personalInfo.title}</p>
          <p className="hero__tagline">{personalInfo.tagline}</p>
          <div className="hero__actions">
            <a className="button" href={personalInfo.github} target="_blank" rel="noreferrer">
              Explore GitHub
            </a>
            <a className="button button--ghost" href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__visual slide-up">
          <div className="profile-card card">
            <img
              className="profile-card__image"
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} profile`}
            />
            <div className="profile-card__meta">
              <p>Open to software engineering internships</p>
              <span>AI/ML | Forecasting | Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-grid">
        <div className="card fade-in">
          <SectionHeading eyebrow="About Me" title="Focused on building dependable intelligent systems" />
          <p>{aboutText}</p>
        </div>

        <div className="card fade-in">
          <SectionHeading eyebrow="Personal Details" title="Contact & academic identity" />
          <div className="details-list">
            <div>
              <span>Name</span>
              <strong>{personalInfo.name}</strong>
            </div>
            <div>
              <span>Phone</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${personalInfo.emails[0]}`}>{personalInfo.emails[0]}</a>
            </div>
            <div>
              <span>Academic Email</span>
              <a href={`mailto:${personalInfo.emails[1]}`}>{personalInfo.emails[1]}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-stack">
        <SectionHeading
          eyebrow="Research Interests"
          title="Problem spaces I want to explore deeply"
          description="My interests sit at the intersection of intelligent models, data reliability, and practical software systems."
        />
        <div className="interest-grid">
          {researchInterests.map((interest) => (
            <article key={interest} className="interest-card card fade-in">
              <h3>{interest}</h3>
              <p>
                I am interested in applying rigorous engineering and experimentation to create useful,
                production-minded solutions in this area.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-stack">
        <SectionHeading
          eyebrow="Skills"
          title="Core technical toolkit"
          description="A concise set of languages and web foundations I use for coursework, prototyping, and project delivery."
        />
        <div className="skills-panel card fade-in">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      <section className="container section-stack">
        <SectionHeading
          eyebrow="Education"
          title="Academic path"
          description="Structured around computer science fundamentals and applied software engineering."
        />
        <EducationTimeline items={education} />
      </section>
    </div>
  );
}

export default HomePage;
