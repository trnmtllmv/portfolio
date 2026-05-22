import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
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
  digitalTwin,
  education,
  experience,
  gallery,
  heroNodes,
  navItems,
  profile,
  proofPoints,
  publications,
  recognition,
  researchMetrics,
  researchPillars,
  ventures,
  worlds,
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
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Turan Mutallimov home">
        <span>TM</span>
      </a>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
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
          <div className="hero-actions">
            <a className="primary-button" href="#worlds">
              <Sparkles size={18} />
              Enter My World
            </a>
            <a className="secondary-button" href="#publications">
              <BookOpen size={18} />
              Publications
            </a>
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
          <div className="hero-visual-card">
            <img src={profile.heroVisual} alt="Research and digital systems visual" />
          </div>
          <div className="world-map" aria-label="Turan's professional worlds">
            {heroNodes.map((node, index) => (
              <span key={node} style={{ "--index": index }}>
                {node}
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
    <section className="affiliation-strip" aria-label="Affiliations and ventures">
      {affiliations.map((item) => (
        <article className="affiliation-item" key={item.name} data-reveal>
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

function WorldsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = worlds[activeIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % worlds.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  const go = (direction) => {
    setActiveIndex((current) => (current + direction + worlds.length) % worlds.length);
  };

  return (
    <section className="section worlds-section" id="worlds">
      <span className="anchor-alias" id="projects" aria-hidden="true" />
      <SectionHeading
        eyebrow="Selected Worlds"
        title="Five spaces that explain the whole person, not just one project."
        body="The page is designed as a guided room: research evidence, offshore decision systems, ventures, public service, and professional delivery all sit in one clean narrative."
      />
      <div className="worlds-carousel" data-reveal>
        <div className="world-media">
          <img src={active.image} alt={active.title} />
        </div>
        <div className="world-copy">
          <p className="eyebrow">{active.kicker}</p>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
          <ul className="world-facts">
            {active.facts.map((fact) => (
              <li key={fact}>
                <Sparkles size={16} />
                {fact}
              </li>
            ))}
          </ul>
          <div className="carousel-controls" aria-label="Selected worlds carousel controls">
            <button type="button" className="icon-button" onClick={() => go(-1)} aria-label="Previous world">
              <ChevronLeft size={20} />
            </button>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(worlds.length).padStart(2, "0")}
            </span>
            <button type="button" className="icon-button" onClick={() => go(1)} aria-label="Next world">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="world-tabs" role="tablist" aria-label="World selector">
        {worlds.map((world, index) => (
          <button
            type="button"
            key={world.id}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={index === activeIndex}
          >
            {world.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research-section" id="research">
      <SectionHeading
        eyebrow="Research"
        title="Bioremediation work made measurable, visual, and useful."
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

function DigitalTwin() {
  return (
    <section className="digital-twin-section" id="digital-twins">
      <div className="digital-copy" data-reveal>
        <p className="eyebrow">{digitalTwin.eyebrow}</p>
        <h2>{digitalTwin.title}</h2>
        <p>{digitalTwin.body}</p>
      </div>
      <div className="digital-layout">
        <div className="digital-visual" data-reveal>
          <img src={digitalTwin.image} alt="Digital twin dashboard and offshore decision visual" />
        </div>
        <div className="digital-list">
          {digitalTwin.items.map((item) => (
            <article className="digital-item" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.href ? (
                <a href={item.href} {...externalLinkProps(item.href)}>
                  Open public record
                  <ExternalLink size={15} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ventures() {
  return (
    <section className="section ventures-section" id="ventures">
      <SectionHeading
        eyebrow="Ventures"
        title="Startup and social-impact work with a safety-and-service centre of gravity."
        body="Helptix is now updated from the attached deck as a medical-service access platform for emergency location, ambulance support, first-aid guidance, and care coordination."
      />
      <div className="venture-grid">
        {ventures.map((venture, index) => (
          <article className="venture-card" key={venture.name} data-reveal style={{ "--delay": index }}>
            <div className="venture-image">
              <img src={venture.image} alt={`${venture.name} visual`} />
              {venture.logo ? <img className="venture-logo" src={venture.logo} alt={`${venture.name} logo`} /> : null}
            </div>
            <div className="venture-copy">
              <span>
                <IconByName name={venture.icon} size={17} />
                {venture.label}
              </span>
              <h3>{venture.name}</h3>
              <p>{venture.body}</p>
              <ul>
                {venture.details.map((detail) => (
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
        title="Public outputs across digital twins, bioremediation, AI, and safety."
        body="This section uses public records and DOI/portal links where exact records are available. Google Scholar is linked as a search because an exact profile was not safely verified."
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
            <div>
              <span>{publication.category}</span>
              <h3>{publication.title}</h3>
              <p>{publication.venue}</p>
            </div>
            <p>{publication.detail}</p>
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

function Recognition() {
  return (
    <section className="recognition-section" id="recognition">
      <SectionHeading
        eyebrow="Recognition"
        title="Awards, certifications, and public research moments."
        align="center"
      />
      <div className="recognition-grid">
        {recognition.map((item, index) => (
          <article className="recognition-item" key={`${item.title}-${item.detail}`} data-reveal style={{ "--delay": index }}>
            <IconByName name={item.icon} size={24} />
            <span>{item.detail}</span>
            <strong>{item.title}</strong>
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
        title="A timeline that moves between research, teaching, and project delivery."
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
        <div className="education-panel" data-reveal>
          <h3>Education</h3>
          {education.map((item) => (
            <article key={item.degree}>
              <span>{item.period}</span>
              <strong>{item.degree}</strong>
              <p>{item.place}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="A figure carousel: selected visuals, not a document dump."
        body="Curated public-facing visuals from research, digital twins, Helptix, Icarus, and modelling work."
        align="center"
      />
      <div className="gallery-rail" aria-label="Selected visual carousel">
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
        <h2>For research, project, speaking, and collaboration conversations.</h2>
        <p>
          Professional contact is kept simple and public-facing: email, LinkedIn, ORCID, GitHub, and
          Aberdeen location.
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
        <WorldsCarousel />
        <Research />
        <DigitalTwin />
        <Ventures />
        <Publications />
        <Recognition />
        <Experience />
        <Gallery />
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
