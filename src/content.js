const baseUrl = import.meta.env?.BASE_URL ?? "/portfolio/";
const asset = (name) => `${baseUrl}assets/${name}`;

export const navItems = [
  ["About", "#about"],
  ["Research", "#research"],
  ["Research Map", "#research-map"],
  ["Publications", "#publications"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Recognition", "#recognition"],
  ["Contact", "#contact"],
];

export const profile = {
  name: "Turan Mutallimov",
  role: "PhD Researcher in Petroleum Engineering | PMP-certified Project Engineer",
  shortRole: "PhD researcher, project engineer, PMP",
  location: "Aberdeen, Scotland, UK",
  affiliation: "University of Aberdeen",
  email: "turan.mutallimov@yahoo.com",
  portrait: asset("profile-clean.jpg"),
  background: asset("offshore-platform-hero.jpg"),
  heroVisual: asset("phd-field-dashboard-overview.png"),
  headline:
    "I work at the intersection of petroleum engineering, microbial bioremediation, offshore safety, and digital-twin decision systems.",
  summary:
    "My current PhD research at the University of Aberdeen is funded by the Azerbaijan State Scholarship and developed in close collaboration with bp. Alongside the research, I bring project-engineering experience from energy delivery, including planning, vendor coordination, site visits, reporting, and stakeholder communication.",
  thesis:
    "Research focus: impacts of microbial biodegradation and biodiversity on petroleum engineering environments, with applications in offshore operations, residual-oil cleanup during decommissioning, and model-ready environmental decision support.",
};

export const accounts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trnmtllmv/",
    icon: "Linkedin",
    note: "Professional profile",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0007-4242-2876",
    icon: "ShieldCheck",
    note: "Research identity",
  },
  {
    label: "GitHub",
    href: "https://github.com/trnmtllmv",
    icon: "Github",
    note: "Public code",
  },
  {
    label: "Scholar",
    href: "https://scholar.google.com/scholar?q=%22Turan%20Mutallimov%22",
    icon: "GraduationCap",
    note: "Google Scholar search",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "Mail",
    note: "Professional email",
  },
];

export const affiliations = [
  {
    name: "University of Aberdeen",
    image: asset("logo-aberdeen.png"),
    note: "PhD research",
  },
  {
    name: "bp",
    image: asset("logo-bp.png"),
    note: "Research collaboration",
  },
  {
    name: "HECOTEC IDC / JOCAP",
    mark: "JOCAP",
    note: "Energy project delivery",
  },
  {
    name: "PMI",
    mark: "PMP",
    note: "PMP and PMI-ACP",
  },
  {
    name: "Azerbaijan State Scholarship",
    mark: "Scholarship",
    note: "Doctoral study funding",
  },
];

export const proofPoints = [
  {
    value: "PMP",
    label: "Project Management Professional, 2024-2027",
  },
  {
    value: "PMI-ACP",
    label: "Agile Certified Practitioner, 2024-2027",
  },
  {
    value: "US$1.4B+",
    label: "Absheron EPS project budget context supported",
  },
  {
    value: "bp",
    label: "Close collaboration context for doctoral research",
  },
  {
    value: "6",
    label: "Public outputs and conference records listed",
  },
  {
    value: "3",
    label: "Major 2025-2026 presentation awards",
  },
];

export const about = {
  eyebrow: "About",
  title: "Academic depth with project-engineering discipline.",
  body: [
    "Turan Mutallimov is a PhD researcher in petroleum engineering at the University of Aberdeen and a PMP-certified project engineer. His work connects microbial crude-oil biodegradation, offshore safety, decommissioning, digital-twin response planning, and evidence-led engineering communication.",
    "Before the PhD, Turan supported energy project delivery in Azerbaijan, including planning and reporting workflows for the Absheron gas-condensate field development through HECOTEC IDC, client JOCAP. That delivery background shapes the research: models and experiments should become clearer decisions, not just documents.",
  ],
  focus: [
    "Microbial biodegradation, biodiversity, and residual-oil cleanup",
    "Digital twins for offshore safety and response planning",
    "Project planning, critical paths, vendor coordination, and reporting",
    "Technical writing, data visualization, and cross-functional communication",
  ],
};

export const researchPillars = [
  {
    icon: "Microscope",
    title: "Microbial Biodegradation",
    body:
      "Investigating microbes, crude oil, coastal soils, SARA fractions, biomass growth, and biodegradation signals under environmental constraints.",
  },
  {
    icon: "FlaskConical",
    title: "Experimental Evidence",
    body:
      "Laboratory workflows across bioassays, GC methods, static and dynamic sand-column scenarios, and pore-network interpretation.",
  },
  {
    icon: "Database",
    title: "Model-Ready Data",
    body:
      "Translating moisture, pH, oxygen, heavy metals, biomass, and degradation kinetics into data that can support engineering decisions.",
  },
  {
    icon: "Cpu",
    title: "Digital-Twin Decisions",
    body:
      "Connecting research evidence to offshore risk visibility, response planning, safety architecture, and decommissioning support.",
  },
];

export const researchMetrics = [
  {
    value: "0.974",
    label: "Adjusted R2 in modelling signal",
  },
  {
    value: "0.9512",
    label: "Pearson correlation in model validation",
  },
  {
    value: "20%",
    label: "Oxygen-availability shift observed",
  },
  {
    value: "25-85%",
    label: "Scenario TPH removal range",
  },
];

export const researchMap = [
  {
    id: "bioremediation",
    icon: "Microscope",
    label: "Bioremediation",
    kicker: "PhD core",
    title: "Microbial crude-oil cleanup as an engineering evidence system.",
    image: asset("research-multifigure.jpg"),
    body:
      "The central research thread studies microbial biodegradation and biodiversity effects in petroleum engineering environments, with a public-facing emphasis on residual-oil cleanup and coastal-soil remediation.",
    points: [
      "Neptunomonas naphthovorans research preprint",
      "Bioassay, GC, SARA, sand-column, and modelling workflows",
      "Environmental factors translated into decision-ready evidence",
    ],
  },
  {
    id: "digital-twins",
    icon: "Cpu",
    label: "Digital Twins",
    kicker: "Safety systems",
    title: "Offshore digital twins for safety and operational response.",
    image: asset("digital-twin-dashboard.jpg"),
    body:
      "Published and DOI-listed work connects offshore noise exposure, modular safety architecture, and response planning for complex North Sea operating contexts.",
    points: [
      "Ocean Engineering noise-risk digital twin article",
      "Reliability Engineering & System Safety DOI-listed architecture work",
      "Risk visibility for operators, engineers, and decision-makers",
    ],
  },
  {
    id: "porous-media",
    icon: "Database",
    label: "Porous Media",
    kicker: "InterPore 2026",
    title: "Multiphase flow thinking beyond simple Darcy framing.",
    image: asset("phd-pore-network-flow.jpg"),
    body:
      "The CV adds an InterPore 2026 oral presentation on quantifying multiphase flow in complex porous media, connecting petroleum engineering, modelling, and visualization.",
    points: [
      "Oral presentation at InterPore 2026",
      "Session: MS20 Special Session in Honor of Jun Yao",
      "Porous-media flow and modelling communication",
    ],
  },
  {
    id: "project-delivery",
    icon: "BriefcaseBusiness",
    label: "Project Delivery",
    kicker: "Energy execution",
    title: "Project-engineering habits from large-scale energy delivery.",
    image: asset("digital-twin-field.jpg"),
    body:
      "Experience supporting the Absheron gas-condensate field development informs the site's practical edge: planning, timelines, critical paths, contractors, vendors, reviews, and stakeholder reporting.",
    points: [
      "HECOTEC IDC, client JOCAP",
      "Absheron EPS budget context exceeding US$1.4B",
      "Planning, progress tracking, site visits, and design reviews",
    ],
  },
  {
    id: "ventures",
    icon: "Rocket",
    label: "Ventures",
    kicker: "Applied impact",
    title: "Safety and service concepts kept secondary to academic credibility.",
    image: asset("helptix-app.jpg"),
    body:
      "Helptix, Icarus, and Təbəssüm remain present as selected applied-impact projects, but the redesigned site keeps them curated and professional rather than letting them overpower the academic story.",
    points: [
      "Helptix medical-service access concept",
      "Icarus wearable motorcycle safety concept",
      "Təbəssüm charity and social-impact identity",
    ],
  },
];

export const publications = [
  {
    title:
      "A Modular Digital Twin Architecture for Offshore Safety and Decision-Making: A North Sea Platform Case Study",
    category: "Digital twins",
    venue: "Reliability Engineering & System Safety",
    meta: "Journal article, DOI-listed record",
    detail:
      "CV lists October 2026 issue timing; public site presents it as a DOI-listed/forthcoming record to avoid implying a past issue date.",
    href: "https://doi.org/10.1016/j.ress.2026.112428",
  },
  {
    title: "Beyond Darcy's Law: Quantifications of Multiphase Flow in Complex Porous Media",
    category: "Porous media",
    venue: "InterPore2026",
    meta: "Oral presentation, May 2026",
    detail:
      "Conference presentation in MS20 Special Session in Honor of Jun Yao, connecting multiphase flow, porous media, and petroleum engineering modelling.",
  },
  {
    title: "A Digital Twin Approach to Noise Exposure Modelling and Risk Analysis",
    category: "Digital twins",
    venue: "Ocean Engineering",
    meta: "Journal article, January 2026",
    detail:
      "Digital twin and predictive risk-analysis work for offshore noise exposure and worker safety.",
    href: "https://doi.org/10.1016/j.oceaneng.2025.123629",
    secondaryHref:
      "https://abdn.elsevierpure.com/en/publications/a-digital-twin-approach-to-noise-exposure-modelling-and-risk-anal/",
  },
  {
    title: "AttentionDep: Domain-Aware Attention for Explainable Depression Severity Assessment",
    category: "AI",
    venue: "arXiv",
    meta: "Preprint, September 2025",
    detail:
      "Explainable depression-severity assessment using domain-aware attention for health-related AI research.",
    href: "https://doi.org/10.48550/arXiv.2510.00706",
  },
  {
    title:
      "Biodegradation Potential of Neptunomonas naphthovorans - NAG-2N-126 for Crude Oil Pollution Mitigation: Experimental and Modelling Insights",
    category: "Bioremediation",
    venue: "bioRxiv",
    meta: "Preprint, June 2024",
    detail:
      "Experimental and modelling insights into microbial crude-oil pollution mitigation.",
    href: "https://doi.org/10.1101/2024.05.31.596902",
  },
  {
    title: "Reducing Deaths in Traffic Accidents with Space Research and Artificial Intelligence",
    category: "Safety AI",
    venue: "International Astronautical Congress",
    meta: "Conference proceedings, April 2023",
    detail:
      "Conference proceedings work connecting safety, transport risk, space research, and artificial intelligence.",
  },
];

export const projects = [
  {
    icon: "Microscope",
    name: "Bioremediation Research Platform",
    label: "PhD research",
    image: asset("phd-biodegradation-growth.png"),
    body:
      "Microbial crude-oil biodegradation research for residual-oil cleanup, coastal soils, environmental modelling, and decommissioning-relevant decision support.",
    details: [
      "Funded by Azerbaijan State Scholarship",
      "Developed in close collaboration with bp",
      "Connects lab evidence, modelling, and public research communication",
    ],
  },
  {
    icon: "Cpu",
    name: "Offshore Safety Digital Twins",
    label: "Published research",
    image: asset("phd-field-dashboard-scenario.png"),
    body:
      "Digital-twin work spanning offshore noise exposure modelling and modular architecture for safety and decision-making.",
    details: [
      "Ocean Engineering DOI-linked article",
      "Reliability Engineering & System Safety DOI-linked record",
      "Decision-support visuals for complex offshore systems",
    ],
  },
  {
    icon: "BriefcaseBusiness",
    name: "Absheron Project Engineering",
    label: "Energy delivery",
    image: asset("digital-twin-field.jpg"),
    body:
      "Junior project-engineering support for the Absheron gas-condensate field development through HECOTEC IDC, client JOCAP.",
    details: [
      "Supported planning, timelines, resources, and critical paths",
      "Tracked progress against milestones for senior stakeholders",
      "Coordinated with vendors, contractors, site visits, and reviews",
    ],
  },
  {
    icon: "HeartHandshake",
    name: "Helptix, Icarus, and Təbəssüm",
    label: "Ventures and impact",
    image: asset("helptix-app.jpg"),
    body:
      "Curated applied-impact work across medical-service access, wearable motorcycle safety, and charity identity.",
    details: [
      "Presented as public-facing concepts, not raw private pitch material",
      "Safety and service centre of gravity",
      "Kept secondary to the academic and engineering profile",
    ],
  },
];

export const recognition = [
  {
    icon: "Award",
    title: "Industry Impact Award - Oral Presentation",
    detail: "17th Engineering Research Symposium, University of Aberdeen",
    date: "May 2026",
  },
  {
    icon: "Presentation",
    title: "Second Place Winner - Oral Presentation",
    detail: "32nd CSCST-SCI Conference, Society of Chemical Industry",
    date: "August 2025",
  },
  {
    icon: "Sparkles",
    title: "First Place Winner - Poster Presentation",
    detail: "16th Engineering Research Symposium, University of Aberdeen",
    date: "May 2025",
  },
  {
    icon: "ShieldCheck",
    title: "Project Management Professional",
    detail: "Project Management Institute certification",
    date: "2024-2027",
  },
  {
    icon: "ShieldCheck",
    title: "PMI Agile Certified Practitioner",
    detail: "Project Management Institute certification",
    date: "2024-2027",
  },
  {
    icon: "GraduationCap",
    title: "Azerbaijan State Scholarship",
    detail: "Competitive national doctoral study award",
    date: "2019-2023",
  },
];

export const experience = [
  {
    period: "Oct. 2022 - Present",
    role: "PhD Candidate, Petroleum Engineering",
    place: "University of Aberdeen",
    details:
      "Researching the impacts of microbial biodegradation and biodiversity on petroleum engineering environments, including digital-twin response planning for offshore operations and strategies for cleaning residual oil during decommissioning.",
  },
  {
    period: "2023 - 2024",
    role: "Teaching Assistant",
    place: "University of Aberdeen",
    details:
      "Supported well testing, marine energy systems, and wind energy teaching through tutorials, assessment, student guidance, and technical delivery.",
  },
  {
    period: "Feb. 2021 - Dec. 2021",
    role: "Junior Project Engineer",
    place: "HECOTEC IDC, client JOCAP",
    details:
      "Supported the Absheron gas-condensate field development, including project plans, timelines, resource requirements, critical paths, milestone tracking, stakeholder reporting, vendor and contractor coordination, site visits, and engineering reviews.",
  },
  {
    period: "Oct. 2018 - Jul. 2019",
    role: "Training Department Administrative Manager",
    place: "Technical Education Center",
    details:
      "Developed training programmes, coordinated trainers and trainees, managed scheduling and logistics, and tracked training metrics to identify improvement areas.",
  },
  {
    period: "2018 - 2019",
    role: "Petroleum and Oil-Gas Engineering Intern",
    place: "Balakhani Operating Company and SOCAR",
    details:
      "Interpreted well-log data, used specialist applications and modelling techniques, evaluated hydrocarbon potential, and assessed operational risks including geohazards.",
  },
];

export const education = [
  {
    degree: "PhD, Petroleum Engineering",
    place: "University of Aberdeen",
    period: "2022 - Present",
    note:
      "Azerbaijan State Scholarship-funded doctoral research, developed in close collaboration with bp.",
  },
  {
    degree: "MSc, Offshore Engineering",
    place: "University of Bologna",
    period: "2019 - 2021",
    note: "Research topic: wind-load effects on storage tanks in Azerbaijan. GPA: 96/110.",
  },
  {
    degree: "BSc, Oil and Gas Engineering",
    place: "Azerbaijan State Oil and Industry University",
    period: "2015 - 2019",
    note:
      "Research topic: oil recovery factor for offshore oil fields. GPA: 96/100 (Hons). Sabah Groups programme.",
  },
];

export const skillGroups = [
  {
    title: "Technical",
    items: ["MATLAB", "Python", "R", "LaTeX", "AutoCAD", "SolidWorks", "Microsoft Office"],
  },
  {
    title: "Data and Research",
    items: [
      "Data visualization",
      "Statistical modelling",
      "Machine learning",
      "Experimental design",
      "Laboratory management",
      "Technical writing",
    ],
  },
  {
    title: "Languages",
    items: ["Azerbaijani (native)", "English (fluent)", "Turkish (fluent)"],
  },
];

export const gallery = [
  {
    title: "Model Validation",
    tag: "Research evidence",
    image: asset("phd-model-validation.png"),
  },
  {
    title: "Pore-Network Visualisation",
    tag: "Porous media",
    image: asset("phd-pore-visualisation.png"),
  },
  {
    title: "Two-Window Kinetics",
    tag: "Biodegradation",
    image: asset("phd-two-window-kinetics.png"),
  },
  {
    title: "Digital Twin Dashboard",
    tag: "Offshore safety",
    image: asset("digital-twin-dashboard.jpg"),
  },
];
