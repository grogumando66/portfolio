import { personalInfo } from '../data/portfolio';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          (c) {new Date().getFullYear()} {personalInfo.name}. Crafted for internship-ready presentation.
        </p>
        <div className="footer__links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
