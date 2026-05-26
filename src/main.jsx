import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  Database,
  ExternalLink,
  Filter,
  FlaskConical,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Presentation,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  about,
  accounts,
  affiliations,
  education,
  experience,
  gallery,
  navItems,
  profile,
  projects,
  proofPoints,
  publications,
  recognition,
  researchMap,
  researchMetrics,
  researchPillars,
  researchStages,
  skillGroups,
} from "./content";
import "./styles.css";

const iconMap = {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  Database,
  FlaskConical,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  Microscope,
  Presentation,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
};

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useActiveSection(items) {
  const sectionIds = useMemo(() => items.map(([, href]) => href.replace("#", "")), [items]);
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.08, 0.18, 0.32] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

function externalLinkProps(href) {
  if (!href || href.startsWith("mailto:") || href.startsWith("#")) {
    return {};
  }

  return { target: "_blank", rel: "noreferrer" };
}

function IconByName({ name, size = 18 }) {
  const Icon = iconMap[name] ?? ArrowUpRight;
  return <Icon size={size} aria-hidden="true" />;
}

function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`} data-reveal>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Header() {
  const activeId = useActiveSection(navItems);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Turan Mutallimov home">
        <span>TM</span>
      </a>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} className={activeId === href.slice(1) ? "is-active" : ""}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="icon-link"
          href={accounts[0].href}
          aria-label="LinkedIn profile"
          {...externalLinkProps(accounts[0].href)}
        >
          <Linkedin size={18} />
        </a>
        <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email Turan">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" style={{ "--hero-bg": `url("${profile.background}")` }}>
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#research">
              <Microscope size={18} />
              Research Focus
            </a>
            <a className="secondary-button" href="#publications">
              <BookOpen size={18} />
              Publications
            </a>
          </div>
          <div className="hero-proof" aria-label="Profile proof points">
            {proofPoints.slice(0, 3).map((item) => (
              <span key={item.label}>
                <strong>{item.value}</strong>
                {item.label}
              </span>
            ))}
          </div>
          <div className="account-row" aria-label="Public profiles">
            {accounts.map((account) => (
              <a
                className="account-link"
                key={account.label}
                href={account.href}
                aria-label={account.note}
                {...externalLinkProps(account.href)}
              >
                <IconByName name={account.icon} size={17} />
                <span>{account.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-stage" data-reveal>
          <div className="portrait-frame">
            <img src={profile.portrait} alt={profile.name} />
            <div className="portrait-caption">
              <strong>{profile.shortRole}</strong>
              <span>
                <MapPin size={14} />
                {profile.location}
              </span>
            </div>
          </div>
          <div className="hero-map" aria-label="Research and career signals">
            {proofPoints.slice(3).map((item, index) => (
              <span key={item.label} style={{ "--index": index }}>
                <strong>{item.value}</strong>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <AffiliationStrip />
    </section>
  );
}

function AffiliationStrip() {
  return (
    <section className="affiliation-strip" aria-label="Affiliations and credentials">
      {affiliations.map((item) => (
        <article className="affiliation-item" key={item.name}>
          {item.image ? <img src={item.image} alt={item.name} /> : <strong>{item.mark}</strong>}
          <span>{item.note}</span>
        </article>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />
      <div className="about-layout">
        <div className="about-copy" data-reveal>
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="proof-grid" data-reveal>
          {proofPoints.map((item) => (
            <article className="proof-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="focus-grid">
        {about.focus.map((item, index) => (
          <article className="focus-card" key={item} data-reveal style={{ "--delay": index }}>
            <ShieldCheck size={22} />
            <span>{item}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research-section" id="research">
      <SectionHeading
        eyebrow="Digital Rock"
        title="Fluid mechanics in porous media, shown through digital rock."
        body={profile.thesis}
      />
      <div className="research-grid">
        {researchPillars.map((pillar, index) => (
          <article className="research-card" key={pillar.title} data-reveal style={{ "--delay": index }}>
            <IconByName name={pillar.icon} size={24} />
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
      </div>
      <div className="metric-rail" data-reveal>
        {researchMetrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function PhDSystem() {
  return (
    <section className="section pathway-section" id="phd-system">
      <SectionHeading
        eyebrow="PhD System"
        title="Fluid mechanics, petroleum engineering, and digital rock in one research line."
        body="Laboratory evidence, pore-scale flow, digital rock interpretation, subsurface modelling, and digital-twin decision support form the core research workflow."
      />
      <div className="pathway-list">
        {researchStages.map((stage, index) => (
          <article className="pathway-card" key={stage.step} data-reveal style={{ "--delay": index }}>
            <div className="pathway-marker">
              <span>{stage.step}</span>
              <IconByName name={stage.icon} size={20} />
            </div>
            <div className="pathway-copy">
              <p className="eyebrow">{stage.tag}</p>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              <strong>{stage.evidence}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = researchMap[activeIndex];

  return (
    <section className="research-map-section" id="research-map">
      <div className="research-map-copy" data-reveal>
        <p className="eyebrow">Research Map</p>
        <h2>From pore-scale flow to digital-twin decisions.</h2>
        <p>
          Microfluidic evidence, digital rock descriptors, subsurface workflows, bioremediation, and
          project delivery connected in one research system.
        </p>
      </div>
      <div className="map-layout">
        <div className="map-node-grid" role="tablist" aria-label="Research map topics" data-reveal>
          {researchMap.map((node, index) => (
            <button
              type="button"
              key={node.id}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="research-map-panel"
              style={{ "--delay": index }}
            >
              <IconByName name={node.icon} size={20} />
              <span>{node.label}</span>
            </button>
          ))}
        </div>
        <article className="map-detail" id="research-map-panel" data-reveal>
          <img
            className={active.imageFit === "contain" ? "contain" : ""}
            src={active.image}
            alt={`${active.label} visual`}
          />
          <div>
            <p className="eyebrow">{active.kicker}</p>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            <ul>
              {active.points.map((point) => (
                <li key={point}>
                  <Sparkles size={15} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function Publications() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(publications.map((publication) => publication.category)))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const visiblePublications = publications.filter(
    (publication) => activeCategory === "All" || publication.category === activeCategory,
  );

  return (
    <section className="section publications-section" id="publications">
      <SectionHeading
        eyebrow="Publications"
        title="Public outputs that support the digital rock and twin story."
        body="Porous-media flow, bioremediation, digital twins, safety analysis, and decision support."
      />
      <div className="publication-filters" aria-label="Publication filters" data-reveal>
        <Filter size={18} />
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={category === activeCategory ? "is-active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="publication-list">
        {visiblePublications.map((publication) => (
          <article className="publication-card" key={publication.title} data-reveal>
            <div className="publication-main">
              <span>{publication.category}</span>
              <h3>{publication.title}</h3>
              <p>{publication.venue}</p>
            </div>
            <div className="publication-detail">
              <strong>{publication.meta}</strong>
              <p>{publication.detail}</p>
            </div>
            <div className="publication-links">
              {publication.href ? (
                <a href={publication.href} {...externalLinkProps(publication.href)}>
                  Public link
                  <ExternalLink size={15} />
                </a>
              ) : null}
              {publication.secondaryHref ? (
                <a href={publication.secondaryHref} {...externalLinkProps(publication.secondaryHref)}>
                  Research portal
                  <ExternalLink size={15} />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Digital rock, digital twins, and project delivery."
        body="Pore-scale experiments, digital rock modelling, digital-twin translation, and energy project delivery."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name} data-reveal style={{ "--delay": index }}>
            <img src={project.image} alt={`${project.name} visual`} />
            <div className="project-copy">
              <span>
                <IconByName name={project.icon} size={17} />
                {project.label}
              </span>
              <h3>{project.name}</h3>
              <p>{project.body}</p>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="recognition-section" id="recognition">
      <SectionHeading
        eyebrow="Recognition"
        title="Awards, certifications, and research moments."
        align="center"
      />
      <div className="recognition-grid">
        {recognition.map((item, index) => (
          <article
            className="recognition-item"
            key={`${item.title}-${item.detail}`}
            data-reveal
            style={{ "--delay": index }}
          >
            <IconByName name={item.icon} size={24} />
            <span>{item.date}</span>
            <strong>{item.title}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Research, teaching, and project delivery in one timeline."
      />
      <div className="experience-layout">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`} data-reveal>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.place}</strong>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
        <aside className="career-aside" data-reveal>
          <div className="education-panel">
            <h3>Education</h3>
            {education.map((item) => (
              <article key={item.degree}>
                <span>{item.period}</span>
                <strong>{item.degree}</strong>
                <p>{item.place}</p>
                <em>{item.note}</em>
              </article>
            ))}
          </div>
          <div className="skills-panel">
            <h3>Skills and Languages</h3>
            {skillGroups.map((group) => (
              <article key={group.title}>
                <strong>{group.title}</strong>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function VisualEvidence() {
  return (
    <section className="gallery-section" aria-label="Selected research visuals">
      <SectionHeading
        eyebrow="Visual Evidence"
        title="Research evidence across scales."
        body="Microfluidic flow images, digital rock descriptors, field-scale translation, and offshore twin models."
        align="center"
      />
      <div className="gallery-rail">
        {gallery.map((item) => (
          <article className="gallery-card" key={item.title} data-reveal>
            <img src={item.image} alt={item.title} />
            <div>
              <span>{item.tag}</span>
              <strong>{item.title}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>For research, technical projects, presentations, and collaborations.</h2>
        <p>
          Reach me through email, LinkedIn, ORCID, GitHub, or Google Scholar.
        </p>
      </div>
      <div className="contact-grid" data-reveal>
        {accounts.map((account) => (
          <a
            className="contact-card"
            key={account.label}
            href={account.href}
            {...externalLinkProps(account.href)}
          >
            <IconByName name={account.icon} size={22} />
            <span>{account.note}</span>
            <strong>{account.label}</strong>
            <ArrowUpRight size={17} />
          </a>
        ))}
      </div>
    </section>
  );
}

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PhDSystem />
        <Research />
        <ResearchMap />
        <Publications />
        <Projects />
        <VisualEvidence />
        <Experience />
        <Recognition />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
