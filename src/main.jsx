import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
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
import "./styles.css";

const navItems = [
  ["About", "#about"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Publications", "#publications"],
  ["Contact", "#contact"],
];

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const stats = [
  { value: "PMP", label: "Certified project delivery" },
  { value: "PhD", label: "Petroleum engineering candidate" },
  { value: "5+", label: "Conference and symposium outputs" },
  { value: "3", label: "Languages: Azerbaijani, English, Turkish" },
];

const snapshots = [
  {
    icon: BriefcaseBusiness,
    title: "Energy project delivery",
    body: "Project planning, vendor coordination, milestone tracking, and stakeholder reporting across energy-sector engineering work.",
  },
  {
    icon: FlaskConical,
    title: "Bioremediation research",
    body: "Doctoral work on microbial crude-oil biodegradation, biodiversity, environmental factors, and predictive modelling in coastal soils.",
  },
  {
    icon: Wrench,
    title: "Technical modelling toolkit",
    body: "MATLAB, Python, R, COMSOL, LaTeX, statistical modelling, data visualization, machine learning, and research documentation.",
  },
];

const projects = [
  {
    title: "Microfluidic Biodegradation Simulator",
    tag: "Predictive research tool",
    image: asset("microfluidic-simulator.png"),
    body: "A pore-scale simulator concept for exploring brine, oil, biomass, emulsion, and air behaviour during microbial degradation scenarios.",
  },
  {
    title: "Coastal Bioremediation Modelling",
    tag: "PhD research stream",
    image: asset("microfluidic-heatmap.png"),
    body: "Environmental-factor integration for modelling crude-oil degradation under changing pH, moisture, oxygen, heavy-metal, and microbial conditions.",
  },
  {
    title: "Experimental Workflow and Assay Design",
    tag: "Laboratory research",
    image: asset("sara-fractionation-workflow.jpg"),
    body: "Research workflow spanning microbial screening, oil fractionation, chemical analysis, and model-ready experimental documentation.",
  },
];

const timeline = [
  {
    period: "2022 - Present",
    role: "PhD Candidate, Petroleum Engineering",
    place: "University of Aberdeen",
    details:
      "Researching microbial biodegradation and biodiversity effects in petroleum engineering environments, with emphasis on coastal soils, modelling, and sustainability.",
  },
  {
    period: "2023 - 2024",
    role: "Teaching Assistant",
    place: "University of Aberdeen",
    details:
      "Supported courses including Marine and Wind Energy and Well Testing through tutorials, lectures, course delivery, assessment, and student guidance.",
  },
  {
    period: "2021 - 2022",
    role: "Lecturer",
    place: "Azerbaijan State Oil and Industry University",
    details:
      "Prepared curriculum and class materials, organized seminars and workshops, and mentored students in research publication activity.",
  },
  {
    period: "2021",
    role: "Junior Project Engineer",
    place: "HECOTEC IDC, client JOCAP",
    details:
      "Supported project planning, timelines, resources, critical paths, progress reporting, vendor coordination, site visits, and engineering reviews.",
  },
];

const publications = [
  {
    title:
      "Biodegradation Potential of Neptunomonas naphthovorans-NAG-2N-126 for Crude Oil Pollution Mitigation",
    type: "Research preprint",
    detail: "Experimental and modelling insights, 2024.",
  },
  {
    title: "A digital twin approach to noise exposure modelling and risk analysis",
    type: "Research paper",
    detail: "Digital twin, PINN modelling, worker safety, offshore risk analysis.",
  },
  {
    title: "Reducing deaths in traffic accidents with space research and artificial intelligence",
    type: "IAC conference proceedings",
    detail: "Published in Proceedings of the International Astronautical Congress, 2023.",
  },
];

const conferences = [
  "32nd CSCST-SCI Conference, University of Aberdeen, 2025",
  "Reservoir Microbiology Forum, London, 2024",
  "15th Engineering Symposium, Aberdeen, 2024",
  "InterPore 2023, Edinburgh",
];

const certifications = [
  "PMI Agile Certified Practitioner, PMI-ACP",
  "Project Management Professional, PMP",
  "Primavera P6 Specialist",
  "HSE Specialist",
  "AutoCAD",
];

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
      <a className="icon-link" href="https://www.linkedin.com/in/trnmtllmv/" aria-label="LinkedIn profile">
        <Linkedin size={19} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true" style={{ "--hero-image": `url("${asset("bioremediation-hero.png")}")` }} />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Project Engineer | PMP | PhD Researcher</p>
          <h1>Turan Mutallimov</h1>
          <p className="lead">
            I connect project delivery, petroleum engineering, microbial bioremediation, and data-driven modelling to help energy work become more measurable, safer, and more sustainable.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              <Sparkles size={18} />
              View Work
            </a>
            <a className="secondary-button" href="mailto:turan.mutallimov@yahoo.com">
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>
        <div className="portrait-panel" aria-label="Profile photograph and professional status">
          <img src={asset("profile.png")} alt="Turan Mutallimov" />
          <div>
            <strong>Aberdeen, United Kingdom</strong>
            <span>Open to energy, research, and project engineering opportunities.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="eyebrow">Professional Snapshot</p>
        <h2>Project delivery with a research engine underneath.</h2>
      </div>
      <div className="stats-grid">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
      <div className="snapshot-grid">
        {snapshots.map(({ icon: Icon, title, body }) => (
          <article className="feature-card" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research-band" id="research">
      <div className="research-copy">
        <p className="eyebrow">Research Focus</p>
        <h2>Quantifying microbial hydrocarbon degradation in real engineering conditions.</h2>
        <p>
          Turan's doctoral work investigates how mathematical models for crude-oil biodegradation in coastal soils can better represent environmental complexity: moisture, pH, oxygen, heavy metals, microbial activity, and other contaminants.
        </p>
        <div className="research-list">
          <span><CheckCircle2 size={18} /> Coastal soil and sediment bioremediation</span>
          <span><CheckCircle2 size={18} /> Machine learning and statistical modelling</span>
          <span><CheckCircle2 size={18} /> Digital-twin thinking for field decisions</span>
        </div>
      </div>
      <div className="research-visual">
        <img src={asset("bioremediation-hero.png")} alt="Microbial bioremediation concept with oil droplets in a lab setting" />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading narrow">
        <p className="eyebrow">Selected Work</p>
        <h2>Research translated into tools, evidence, and communication.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt="" />
            <div className="project-body">
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="figure-strip">
        <img src={asset("two-window-kinetics.png")} alt="Two-window biodegradation kinetics chart" />
        <img src={asset("pore-network-flow.jpg")} alt="Pore network flow visualization" />
        <img src={asset("bioassay-screening-plate.jpg")} alt="Bioassay screening plate" />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-band" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience and Education</p>
        <h2>Across energy projects, teaching, and doctoral research.</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.role}`}>
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
      <div className="section-heading">
        <p className="eyebrow">Publications, Conferences, Certifications</p>
        <h2>Signals of research depth and professional delivery discipline.</h2>
      </div>
      <div className="pub-layout">
        <div className="publication-list">
          {publications.map((pub) => (
            <article className="publication-card" key={pub.title}>
              <BookOpen size={22} />
              <div>
                <span>{pub.type}</span>
                <h3>{pub.title}</h3>
                <p>{pub.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="credential-panel">
          <div>
            <Presentation size={23} />
            <h3>Conference presence</h3>
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
      <div>
        <p className="eyebrow">Contact</p>
        <h2>For project engineering, research collaboration, and energy-sector opportunities.</h2>
      </div>
      <div className="contact-actions">
        <a className="primary-button" href="mailto:turan.mutallimov@yahoo.com">
          <Mail size={18} />
          Email
        </a>
        <a className="secondary-button" href="https://www.linkedin.com/in/trnmtllmv/">
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
      <div className="contact-meta">
        <span><MapPin size={18} /> Aberdeen, United Kingdom</span>
        <span><GraduationCap size={18} /> University of Aberdeen</span>
        <span><ShieldCheck size={18} /> PMP-certified project professional</span>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>Turan Mutallimov</span>
        <a href="#top">
          Back to top
          <ArrowUpRight size={16} />
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
