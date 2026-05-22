import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Presentation,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  about,
  certifications,
  conferences,
  figureStrip,
  navItems,
  profile,
  projects,
  proofPoints,
  publications,
  recognition,
  research,
  timeline,
} from "./content";
import "./styles.css";

const iconMap = {
  Award,
  BriefcaseBusiness,
  FlaskConical,
  Presentation,
  ShieldCheck,
  Sparkles,
  Wrench,
};

const focusIcons = [BriefcaseBusiness, FlaskConical, Wrench, Presentation];

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
      { rootMargin: "0px 0px -70px 0px", threshold: 0.12 },
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
      <a
        className="icon-link"
        href={profile.linkedin}
        aria-label="LinkedIn profile"
        {...externalLinkProps(profile.linkedin)}
      >
        <Linkedin size={19} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-backdrop"
        aria-hidden="true"
        style={{ "--hero-image": `url("${profile.heroImage}")` }}
      />
      <div className="hero-content">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero-thesis">{profile.thesis}</p>
          <p className="lead">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#research">
              <FlaskConical size={18} />
              Research Focus
            </a>
            <a className="secondary-button" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>
        <aside className="portrait-panel" aria-label="Professional profile" data-reveal>
          <img src={profile.portrait} alt={profile.name} />
          <div className="portrait-copy">
            <strong>{profile.location}</strong>
            <span>{profile.affiliation}</span>
          </div>
          <div className="portrait-links">
            <a href={profile.linkedin} {...externalLinkProps(profile.linkedin)}>
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} />
              Email
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="recognition-section" id="recognition" aria-label="Selected recognition">
      <div className="recognition-inner">
        {recognition.map((item) => {
          const Icon = iconMap[item.icon] ?? Award;
          const content = (
            <>
              <Icon size={22} />
              <div>
                <span>{item.detail}</span>
                <strong>{item.title}</strong>
              </div>
              {item.href ? <ExternalLink size={16} className="external-indicator" /> : null}
            </>
          );

          if (item.href) {
            return (
              <a className="recognition-item" key={item.title} href={item.href} data-reveal {...externalLinkProps(item.href)}>
                {content}
              </a>
            );
          }

          return (
            <article className="recognition-item" key={item.title} data-reveal>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{about.eyebrow}</p>
        <h2>{about.title}</h2>
      </div>
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
        {about.focus.map((item, index) => {
          const Icon = focusIcons[index] ?? CheckCircle2;
          return (
            <article className="focus-card" key={item} data-reveal>
              <Icon size={23} />
              <span>{item}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research-band" id="research">
      <div className="research-copy" data-reveal>
        <p className="eyebrow">{research.eyebrow}</p>
        <h2>{research.title}</h2>
        <p>{research.body}</p>
        <div className="research-list">
          {research.bullets.map((item) => (
            <span key={item}>
              <CheckCircle2 size={18} />
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="research-visual" data-reveal>
        <img src={research.image} alt="Microbial bioremediation concept with oil droplets in a lab setting" />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading narrow" data-reveal>
        <p className="eyebrow">Selected Work</p>
        <h2>Research translated into tools, evidence, and communication.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const body = (
            <>
              <img src={project.image} alt={project.imageAlt} />
              <div className="project-body">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                {project.href ? (
                  <span className="text-link">
                    Open public page
                    <ArrowUpRight size={15} />
                  </span>
                ) : null}
              </div>
            </>
          );

          if (project.href) {
            return (
              <a className="project-card" key={project.title} href={project.href} data-reveal {...externalLinkProps(project.href)}>
                {body}
              </a>
            );
          }

          return (
            <article className="project-card" key={project.title} data-reveal>
              {body}
            </article>
          );
        })}
      </div>
      <div className="figure-strip" data-reveal>
        {figureStrip.map((figure) => (
          <img src={figure.src} alt={figure.alt} key={figure.src} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-band" id="experience">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Experience and Education</p>
        <h2>Across energy projects, teaching, and doctoral research.</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.role}`} data-reveal>
            <div className="timeline-marker" aria-hidden="true" />
            <div>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.place}</strong>
              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section className="section publication-section" id="publications">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Publications, Talks, Certifications</p>
        <h2>Signals of research depth and professional delivery discipline.</h2>
      </div>
      <div className="pub-layout">
        <div className="publication-list">
          {publications.map((pub) => {
            const content = (
              <>
                <BookOpen size={22} />
                <div>
                  <span>{pub.type}</span>
                  <h3>{pub.title}</h3>
                  <p>{pub.detail}</p>
                  {pub.href ? (
                    <span className="text-link">
                      Open public page
                      <ArrowUpRight size={15} />
                    </span>
                  ) : null}
                </div>
              </>
            );

            if (pub.href) {
              return (
                <a className="publication-card" key={pub.title} href={pub.href} data-reveal {...externalLinkProps(pub.href)}>
                  {content}
                </a>
              );
            }

            return (
              <article className="publication-card" key={pub.title} data-reveal>
                {content}
              </article>
            );
          })}
        </div>
        <aside className="credential-panel" data-reveal>
          <div>
            <Presentation size={23} />
            <h3>Conference Presence</h3>
            <ul>
              {conferences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Award size={23} />
            <h3>Certifications</h3>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>For project engineering, research collaboration, and energy-sector opportunities.</h2>
      </div>
      <div className="contact-actions" data-reveal>
        <a className="primary-button" href={`mailto:${profile.email}`}>
          <Mail size={18} />
          Email
        </a>
        <a className="secondary-button" href={profile.linkedin} {...externalLinkProps(profile.linkedin)}>
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
      <div className="contact-meta" data-reveal>
        <span>
          <MapPin size={18} />
          {profile.location}
        </span>
        <span>
          <GraduationCap size={18} />
          {profile.affiliation}
        </span>
        <span>
          <ShieldCheck size={18} />
          PMP-certified project professional
        </span>
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
        <Recognition />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>{profile.name}</span>
        <a href="#top">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
