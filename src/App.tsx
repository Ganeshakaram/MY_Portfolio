import {
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
} from 'lucide-react';
import { useState } from 'react';

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  bullets: string[];
  href?: string;
  linkLabel?: string;
  accent: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'AI-Enhanced Web & API Test Automation Framework',
    description:
      'A reusable Playwright framework paired with an AI-assisted workflow for generating structured test scenarios and Playwright test code.',
    tags: ['Playwright', 'TypeScript', 'REST APIs', 'Gemini API', 'GitHub Actions'],
    bullets: [
      'Page Object Model, reusable fixtures, and browser authentication setup',
      'API-to-UI integration checks for product workflows',
      'Static validation of generated TypeScript before execution',
      'Recorded CI run: 10 regular Chromium tests and 3 AI-generated tests',
    ],
    href: 'https://github.com/Ganeshakaram/agentic-qa-automation',
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'Playwright-Based REST API Automation Framework',
    description:
      'A maintainable API testing foundation built around Playwright Test and TypeScript for organizing and validating REST scenarios.',
    tags: ['TypeScript', 'Playwright Test', 'REST API'],
    bullets: [
      'Reusable client for GET, POST, PUT, and DELETE requests',
      'Typed API response models and reusable test fixtures',
      'Positive and negative scenarios with status validation',
      'Dynamic booking IDs for realistic Restful Booker workflows',
    ],
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Cypress-Based Web Application Test Automation',
    description: 'Developed hands-on web application automation experience using Cypress and JavaScript during QA automation training. Worked on automating and validating application functionality, writing test scripts and assertions, and identifying functional issues through browser-based testing.',
    tags: ['Cypress', 'JavaScript', 'Web UI Automation', 'Functional Testing'],
    bullets: [
      'Orange Army Website: practiced HR-related functionality testing and web application validation',
      'Cars Wheels Website: contributed to a group project involving web application testing and Cypress automation',
    ],
    accent: 'mint',
  },
  {
    number: '04',
    title: 'Vaathavarana',
    description: 'A live web project. Visit the deployed experience to explore the work firsthand.',
    tags: ['Live project'],
    bullets: ['Deployed and available to explore'],
    href: 'https://vaathavarana.vercel.app/',
    accent: 'orange',
  },
  {
    number: '05',
    title: 'Hrushi AI',
    description: 'A live web project. Visit the deployed experience to explore the work firsthand.',
    tags: ['Live project'],
    bullets: ['Deployed and available to explore'],
    href: 'https://hrushi-ai.vercel.app/',
    accent: 'blue',
  },
  {
    number: '06',
    title: 'Words of Wisdom — A Daily Dose of Inspiration',
    description: 'Words of Wisdom is an inspirational web application that presents meaningful quotes and motivational thoughts from renowned thinkers, writers, and leaders. It offers a simple way to discover uplifting ideas and daily inspiration.',
    tags: ['Live project'],
    bullets: ['Deployed and available to explore'],
    href: 'https://project1-omega-lac.vercel.app/',
    linkLabel: 'Live Demo',
    accent: 'mint',
  },
];

const skillGroups = [
  { label: 'QA Automation and Testing', items: ['Playwright', 'Cypress', 'UI Automation Testing', 'REST API Testing', 'Functional Testing', 'Regression Testing', 'Postman', 'Page Object Model (POM)', 'API–UI Integration Testing'] },
  { label: 'Programming and Web Development', items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'MySQL', 'HTML', 'CSS', 'React'] },
  { label: 'Tools, CI/CD and Platforms', items: ['Git', 'GitHub', 'GitHub Actions', 'Jira', 'CI/CD', 'Firebase', 'Vercel', 'Netlify', 'Hugging Face'] },
  { label: 'AI and Engineering Concepts', items: ['AI-Assisted Test Generation', 'AI-Powered Test Automation', 'Agile', 'SDLC', 'STLC'] },
  { label: 'Additional Technologies', items: ['MongoDB'] },
];

const navItems = ['Work', 'Skills', 'Experience', 'About'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Akaram Ganesh home">
            <span className="brand-mark">AG</span>
            <span>AKaram Ganesh<span className="brand-dot">.</span></span>
          </a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
          </div>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities <span className="eyebrow-rule" /></div>
          
<h1>
  Building reliable software through <em>SDET automation,</em> APIs &amp; AI.
</h1>
<p className="hero-lede">
  Aspiring SDET specializing in Playwright, Cypress, API testing, and AI-assisted test generation. I build reusable automation frameworks that improve test reliability, maintainability, and CI/CD feedback.
</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">View my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/Akaram_ganesh_SDET_pdf.pdf" download>Download resume <Download size={16} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Hyderabad, India</span><span className="meta-divider" /><a href="mailto:ganeshakaram58@gmail.com"><Mail size={15} /> ganeshakaram58@gmail.com</a></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="portrait-frame"><div className="portrait-glow" /><img src="/images/3C8E7D64-AFE7-43FE-9F8D-DCFAAE61DE64.png" alt="Akaram Ganesh" /></div>
            <div className="portrait-label"><span className="label-line" /><span>QA AUTOMATION<br /><strong>ENGINEER</strong></span></div>
            <div className="float-card float-card-top"><ShieldCheck size={17} /><span>Quality by design</span></div>
            <div className="float-card float-card-bottom"><span className="mini-bars"><i /><i /><i /></span><span>Built to scale</span></div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Core technologies">
          <div className="marquee-track"><span>PLAYWRIGHT</span><b>✦</b><span>CYPRESS</span><b>✦</b><span>TYPESCRIPT</span><b>✦</b><span>REST API TESTING</span><b>✦</b><span>AI-ASSISTED TEST GENERATION</span><b>✦</b><span>GITHUB ACTIONS</span></div>
        </section>

        <section className="work-section container section-pad" id="work">
          <div className="section-heading"><div><span className="section-kicker">Selected work</span><h2>Proof over promises.</h2></div><p>Practical projects where thoughtful test design meets modern engineering workflows.</p></div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="container section-pad"><div className="section-heading skills-heading"><div><span className="section-kicker">The toolkit</span><h2>Tools I use to<br /><em>build confidence.</em></h2></div><p>QA-first tooling, intelligent automation, and the engineering foundations behind dependable delivery.</p></div><div className="skill-marquees">{skillGroups.map((group, index) => <div className="skill-marquee" key={group.label}><div className="skill-marquee-label"><span className="skill-index">0{index + 1}</span><h3>{group.label}</h3></div><div className="skill-marquee-window"><div className={`skill-marquee-track ${index % 2 === 1 ? 'reverse' : ''}`}>{[...group.items, ...group.items].map((item, itemIndex) => <span key={`${item}-${itemIndex}`}>{item}</span>)}</div></div></div>)}</div></div>
        </section>

        <section className="journey-section container section-pad" id="experience">
          <div className="section-heading"><div><span className="section-kicker">The journey</span><h2>Learning by doing.</h2></div><p>Every project is a chance to turn a new concept into a dependable, repeatable practice.</p></div>
        
<div className="journey-layout">
  <div className="timeline">
    <div className="timeline-item">
      <span className="timeline-dot" />

      <div className="timeline-top">
        <span>01 / 2026 — 04 / 2026</span>
        <span>Chennai, India</span>
      </div>

      <h3>Cognizant Technology Solutions</h3>

      <p className="role">
        QA Automation Engineer Intern / Trainee
      </p>

      <ul>
        <li>
          Gained hands-on experience with Cypress and JavaScript
          for web application automation.
        </li>
        <li>
          Developed and maintained automation scripts, assertions,
          and functional validation checks.
        </li>
        <li>
          Practiced debugging test failures and validating application
          behavior to strengthen test reliability.
        </li>
        <li>
          Built foundational knowledge of QA practices, reusable
          automation, and maintainable test code.
        </li>
      </ul>
    </div>
  </div>

  <aside className="quote-card">
    <Sparkles size={23} />
    <p>
      “Quality engineering turns uncertainty into confidence,
      one reliable test at a time.”
    </p>
    <span>— My approach to SDET engineering</span>
  </aside>
</div>
          </section>

        <section className="about-section" id="about"><div className="container about-grid"><div><span className="section-kicker">A little more</span><h2>Curious about<br /><em>what’s next.</em></h2></div><div className="about-copy"><p>I’m Akaram, a computer science student and aspiring SDET based in Hyderabad. My focus sits at the intersection of quality engineering, developer experience, and intelligent tooling.</p><p>I care about the details that make test automation genuinely useful: clear abstractions, meaningful assertions, fast feedback, and systems that a team can confidently maintain.</p><div className="education-row"><div><strong>B.Tech</strong><span>Computer Science &amp; Engineering</span></div><div><strong>9.01</strong><span> CGPA</span></div><div><strong>2026</strong><span>graduation</span></div></div></div></div></section>

        <section className="contact-section container" id="contact"><div className="contact-card"><div><span className="section-kicker">Start a conversation</span><h2>Let’s make software<br /><em>more reliable.</em></h2></div><div className="contact-right"><p>Whether you’re building a test strategy, a product, or a team, I’d love to hear what you’re working on.</p><a className="button button-primary" href="mailto:ganeshakaram58@gmail.com">Say hello <ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">AG</span><span>Akaram<span className="brand-dot">.</span></span></a><span>© 2026 Akaram Ganesh. Built with intention.</span><div className="socials"><a href="https://github.com/Ganeshakaram" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /><span>GitHub</span></a><a href="https://www.linkedin.com/in/ganeshakaram" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /><span>LinkedIn</span></a><a href="https://leetcode.com/u/Ganesh_akaram/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={17} /><span>LeetCode</span></a><a href="https://www.hackerrank.com/profile/23eg505r02" target="_blank" rel="noreferrer" aria-label="HackerRank"><TerminalSquare size={17} /><span>HackerRank</span></a></div></footer>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card accent-${project.accent}`}><div className="project-top"><span className="project-number">{project.number}</span><div className="project-icon">{project.number === '01' ? <Sparkles size={20} /> : project.number === '02' ? <Code2 size={20} /> : project.number === '03' ? <Globe2 size={20} /> : <TerminalSquare size={20} />}</div></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ul className="project-bullets">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel ?? (project.number === '01' ? 'View on GitHub' : 'Visit live project')} <ExternalLink size={15} /></a>}</article>;
}

export default App;
