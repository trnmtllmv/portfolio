const baseUrl = import.meta.env?.BASE_URL ?? "/portfolio/";
const asset = (name) => `${baseUrl}assets/${name}`;

export const navItems = [
  ["About", "#about"],
  ["PhD System", "#phd-system"],
  ["Digital Rock", "#research"],
  ["Research Map", "#research-map"],
  ["Publications", "#publications"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Recognition", "#recognition"],
  ["Contact", "#contact"],
];

export const profile = {
  name: "Turan Mutallimov",
  role: "PhD Researcher in Fluid Mechanics, Petroleum Engineering, and Digital Rock | PMP-certified Project Engineer",
  shortRole: "Fluid mechanics, petroleum engineering, digital rock",
  location: "Aberdeen, Scotland, UK",
  affiliation: "University of Aberdeen",
  email: "turan.mutallimov@yahoo.com",
  portrait: asset("profile-clean.jpg"),
  background: asset("digital-twin-platform-full.png"),
  heroVisual: asset("mul-pore-frame-242h.png"),
  headline:
    "I work in fluid mechanics, petroleum engineering, and digital rock: turning pore-scale multiphase-flow evidence into digital-twin decisions.",
  summary:
    "My PhD at the University of Aberdeen is centred on microbial crude-oil biodegradation, MUL microfluidic evidence, pore-network interpretation, and digital subsurface decision support. Under Dr Kejian Wu's supervision, I connect laboratory results, multiphase-flow modelling, subsurface interpretation, and AI-assisted workflow design.",
  thesis:
    "PhD system: fluid mechanics and petroleum engineering questions -> batch biodegradation evidence -> MUL microfluidic results -> digital rock and pore-network descriptors -> sand-column and dynamic validation -> Digital Smart Key and offshore digital-twin decision support.",
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
    name: "Digital rock research team",
    mark: "Dr Wu",
    note: "Supervision and direction",
  },
  {
    name: "bp",
    image: asset("logo-bp.png"),
    note: "Research collaboration context",
  },
  {
    name: "PMI",
    mark: "PMP",
    note: "PMP and PMI-ACP",
  },
  {
    name: "HECOTEC IDC / JOCAP",
    mark: "JOCAP",
    note: "Energy project delivery",
  },
];

export const proofPoints = [
  {
    value: "Fluid mechanics",
    label: "Multiphase flow, capillarity, pressure, and permeability",
  },
  {
    value: "Petroleum eng.",
    label: "Reservoir, crude-oil, recovery, and decommissioning context",
  },
  {
    value: "Digital rock",
    label: "Pore architecture, micromodels, and pore-network interpretation",
  },
  {
    value: "242 h",
    label: "Corrected MUL microfluidic evidence endpoint",
  },
  {
    value: "DSK",
    label: "Digital subsurface workflow bridge from core to field",
  },
  {
    value: "PMP",
    label: "Certified project-delivery discipline, 2024-2027",
  },
];

export const about = {
  eyebrow: "About",
  title: "Digital rock first, with project-engineering discipline.",
  body: [
    "Turan Mutallimov is a PhD researcher in petroleum engineering at the University of Aberdeen, working across fluid mechanics, multiphase flow, and digital rock. His strongest research centre of gravity is turning pore-scale experiments, microfluidic images, and pressure/permeability evidence into interpretable models for petroleum and environmental decisions.",
    "Under the supervision of Dr Kejian Wu, and within a bp-collaboration context, Turan's work links Glen Lyon crude oil, Oleispira antarctica RB-8T, MUL microfluidic experiments, image segmentation, capillary behaviour, pressure/permeability interpretation, AI-assisted modelling, and digital twin workflow design. His project-engineering background adds delivery discipline: clear scope, evidence, stakeholder reporting, and decision-ready communication.",
  ],
  focus: [
    "Fluid mechanics: multiphase flow, capillarity, pressure response, and permeability",
    "Petroleum engineering: crude oil, porous media, recovery, and decommissioning",
    "Digital rock physics, pore architecture, and pore-network interpretation",
    "MUL microfluidic results: saturated and partially saturated 242 h pathways",
    "Digital subsurface and offshore digital-twin decision systems",
    "Public method descriptions only: no confidential field values, proprietary datasets, or internal project numbers",
  ],
};

export const researchStages = [
  {
    step: "01",
    icon: "ShieldCheck",
    tag: "Supervised direction",
    title: "Research question and team context",
    body:
      "The PhD is organised around petroleum engineering and fluid-mechanics problems where microbial activity, multiphase flow, pore architecture, and environmental risk meet. The digital rock strand is developed under Dr Kejian Wu's supervision and connects to collaboration-facing digital subsurface workflows.",
    evidence: "University of Aberdeen PhD, Azerbaijan State Scholarship, supervised digital rock direction",
  },
  {
    step: "02",
    icon: "FlaskConical",
    tag: "Biodegradation base",
    title: "Batch, SARA, and microbial evidence",
    body:
      "The foundation is biological and chemical: crude-oil biodegradation, SARA fraction behaviour, biomass growth, oxygen/nutrient controls, and model-ready interpretation of laboratory evidence.",
    evidence: "Neptunomonas preprint, growth and biodegradation modelling, experimental workflows",
  },
  {
    step: "03",
    icon: "Microscope",
    tag: "MUL evidence",
    title: "Microfluidic pore-scale results",
    body:
      "The MUL work gives visible pore-scale evidence in a 20 x 10 mm, 20 um deep micromodel with about 0.57 porosity and 2.53 D initial permeability. Corrected 242 h evidence compares saturated and partially saturated pathways.",
    evidence: "Glen Lyon crude oil, Oleispira antarctica RB-8T, phase segmentation, pressure response",
  },
  {
    step: "04",
    icon: "Database",
    tag: "Digital rock",
    title: "Pore-network and hydraulic interpretation",
    body:
      "The microfluidic evidence is translated into digital rock descriptors: connected fronts, trapped clusters, residual oil, emulsion behaviour, effective porosity, permeability response, and capillary-pressure discussion.",
    evidence: "MUL simulator, pore-frame exports, permeability and uncertainty proxies",
  },
  {
    step: "05",
    icon: "Cpu",
    tag: "Upscaling",
    title: "Core-to-field digital subsurface workflow bridge",
    body:
      "The Digital Smart Key direction turns pore-scale evidence into multiscale models, AI-assisted interpretation, uncertainty-aware workflows, and upscaling logic that can sit beside reservoir and digital subsurface tools.",
    evidence: "Core-to-log-to-field workflow design, microchannel flow, AI-assisted modelling",
  },
  {
    step: "06",
    icon: "BriefcaseBusiness",
    tag: "Decisions",
    title: "Digital twin and engineering delivery",
    body:
      "The final layer is operational translation: offshore digital twins, safety architecture, response planning, project communication, and the project-engineering discipline needed to make technical evidence usable.",
    evidence: "Offshore platform twin visuals, safety publications, Absheron/JOCAP delivery experience",
  },
];

export const researchPillars = [
  {
    icon: "Database",
    title: "Digital Rock / Pore Architecture",
    body:
      "Building an interpretable link between micromodel geometry, phase occupancy, trapped oil, brine continuity, biomass, and permeability response.",
  },
  {
    icon: "Microscope",
    title: "MUL Microfluidic Results",
    body:
      "Using corrected 242 h MUL evidence to compare saturated and partially saturated pathways for Glen Lyon crude oil and Oleispira antarctica RB-8T.",
  },
  {
    icon: "Cpu",
    title: "Fluid Mechanics / Multiphase Flow",
    body:
      "Connecting pore-network descriptors, capillary response, pressure signals, relative-permeability thinking, uncertainty tests, and beyond-Darcy porous-media communication.",
  },
  {
    icon: "BriefcaseBusiness",
    title: "Digital Twin Decisions",
    body:
      "Extending laboratory evidence into digital subsurface workflows, offshore platform twin integration, safety, decommissioning, and stakeholder decision-support narratives.",
  },
];

export const researchMetrics = [
  {
    value: "242 h",
    label: "Corrected MUL microfluidic endpoint",
  },
  {
    value: "90.2%",
    label: "Brine occupancy at corrected Phase 2 endpoint",
  },
  {
    value: "3.5%",
    label: "Approximate residual oil at corrected Phase 2 endpoint",
  },
  {
    value: "4 layers",
    label: "Method categories: lab, pore scale, subsurface, twin",
  },
];

export const researchMap = [
  {
    id: "digital-rock",
    icon: "Database",
    label: "Digital Rock",
    kicker: "PhD strength",
    title: "Pore-scale evidence translated into digital rock descriptors.",
    image: asset("mul-pore-frame-242h.png"),
    body:
      "The first research story is the digital rock workflow: visible pore architecture, phase segmentation, brine/oil/air/biomass occupancy, pressure response, capillarity, and permeability interpretation.",
    points: [
      "My contribution: research simulator, pore-frame visualisation, and figure-ready evidence pipeline",
      "Micromodel scale: 20 x 10 mm, 20 um depth, about 0.57 porosity",
      "Descriptors for trapped clusters, connected fronts, residual oil, and K response",
    ],
  },
  {
    id: "mul-results",
    icon: "Microscope",
    label: "MUL Results",
    kicker: "Corrected 242 h evidence",
    title: "MUL results show how saturation state changes microbial oil response.",
    image: asset("mul-simulator-dashboard.png"),
    body:
      "The public site now foregrounds the corrected MUL interpretation: Phase 1 as a saturated pathway and Phase 2 as a partially saturated pathway with recovery to 242 h.",
    points: [
      "Glen Lyon crude oil with Oleispira antarctica RB-8T",
      "Phase 1 retains biomass and oil-related occupancy under water-continuous conditions",
      "Phase 2 recovers toward brine dominance, with about 90.2% brine and about 3.5% oil at 242 h",
    ],
  },
  {
    id: "dsk",
    icon: "Cpu",
    label: "DSK / Twin",
    kicker: "Methods, not field results",
    title: "Digital Smart Key connects pore physics with subsurface workflow design.",
    image: asset("digital-twin-platform-full.png"),
    body:
      "The collaboration-facing proposal frames a Digital Smart Key approach through methods rather than confidential results: physics, AI/deep learning, multiscale integration, subsurface uncertainty analysis, and upscaling beyond purely Darcy-style simplifications.",
    points: [
      "Team proposal context under Dr Kejian Wu's leadership",
      "Core-to-log-to-field workflow thinking for reservoir analysis and environmental decisions",
      "Physics-informed AI workflows for subsurface uncertainty analysis",
      "Digital subsurface and offshore twin coupling described without field values or proprietary data",
    ],
  },
  {
    id: "bioremediation",
    icon: "FlaskConical",
    label: "Bioremediation",
    kicker: "PhD foundation",
    title: "Microbial biodegradation supplies the experimental backbone.",
    image: asset("research-multifigure.jpg"),
    body:
      "Batch biodegradation, SARA interpretation, growth kinetics, oxygen/nutrient controls, and residual-oil cleanup provide the experimental base for the digital rock branch.",
    points: [
      "Biodegradation and modelling preprint with public DOI",
      "SARA, GC, bioassay, sand-column, and field-scale interpretation workflows",
      "Environmental decision support for residual oil and decommissioning contexts",
    ],
  },
  {
    id: "project-delivery",
    icon: "BriefcaseBusiness",
    label: "Delivery",
    kicker: "Engineering discipline",
    title: "Project engineering makes the research easier to trust and use.",
    image: asset("digital-twin-platform-detail.png"),
    body:
      "Experience supporting Absheron gas-condensate project delivery informs the portfolio's practical edge: planning, reporting, vendors, site visits, reviews, and communication with stakeholders.",
    points: [
      "HECOTEC IDC, client JOCAP, Absheron project support",
      "Planning, milestone tracking, vendor coordination, site visits, and reports",
      "PMP and PMI-ACP credentials reinforce structured delivery habits",
    ],
  },
];

export const publications = [
  {
    title: "Beyond Darcy's Law: Quantifications of Multiphase Flow in Complex Porous Media",
    category: "Digital rock",
    venue: "InterPore2026",
    meta: "Oral presentation, May 2026",
    detail:
      "Porous-media and multiphase-flow presentation aligned with the PhD's digital rock branch and the move from pore-scale evidence toward engineering-scale interpretation.",
  },
  {
    title:
      "A Modular Digital Twin Architecture for Offshore Safety and Decision-Making: A North Sea Platform Case Study",
    category: "Digital twins",
    venue: "Reliability Engineering & System Safety",
    meta: "Journal article, DOI-listed/forthcoming record",
    detail:
      "CV lists October 2026 issue timing; public site presents it as DOI-listed/forthcoming because the current date is before that issue date.",
    href: "https://doi.org/10.1016/j.ress.2026.112428",
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
    title: "AttentionDep: Domain-Aware Attention for Explainable Depression Severity Assessment",
    category: "AI",
    venue: "arXiv",
    meta: "Preprint, September 2025",
    detail:
      "Explainable depression-severity assessment using domain-aware attention for health-related AI research.",
    href: "https://doi.org/10.48550/arXiv.2510.00706",
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
    icon: "Database",
    name: "Digital Rock and MUL Microfluidic System",
    label: "Fluid mechanics and petroleum engineering",
    image: asset("mul-simulator-dashboard.png"),
    body:
      "A pore-scale research workflow that turns MUL microfluidic images and corrected 242 h evidence into digital rock figures, simulator views, and hydraulic interpretation.",
    details: [
      "Glen Lyon crude oil and Oleispira antarctica RB-8T in a 20 x 10 mm micromodel",
      "Phase occupancy, pressure response, permeability proxy, and endpoint fingerprints",
      "Public-facing simulator visuals that show the research logic clearly",
    ],
  },
  {
    icon: "Cpu",
    name: "Digital Smart Key / Digital Subsurface Workflows",
    label: "Methods and responsibilities",
    image: asset("digital-twin-platform-full.png"),
    body:
      "Collaboration-facing digital subsurface direction connecting physics, AI-assisted modelling, multiscale digital rock, upscaling, reservoir-analysis framing, and offshore decision support.",
    details: [
      "Worked in a team context under Dr Kejian Wu's supervision/leadership",
      "Contributed to pore-scale modelling, microchannel-flow, upscaling, and simulation workflow framing",
      "Supported reservoir-analysis workflow framing using well-log and production-data concepts without publishing values",
      "Describes methods and responsibilities only; no pressure values, production rates, field results, proprietary datasets, or internal project numbers",
    ],
  },
  {
    icon: "BriefcaseBusiness",
    name: "Offshore Platform Digital Twin",
    label: "Digital twin research",
    image: asset("digital-twin-platform-systems.png"),
    body:
      "Offshore platform model and digital-twin architecture work that make safety, exposure, and response planning more visible for engineering decisions.",
    details: [
      "North Sea platform case-study research and DOI-linked digital twin outputs",
      "Supported digital twin integration thinking for offshore operations",
      "System-level workflow visuals for equipment, modules, hazards, and response planning",
      "A bridge between subsurface evidence and operational decision systems",
    ],
  },
  {
    icon: "FlaskConical",
    name: "Field-Scale Bioremediation Decision Support",
    label: "PhD translation",
    image: asset("phd-field-dashboard-overview.png"),
    body:
      "Field-scale dashboards and scenario figures connect microbial evidence to residual-oil cleanup, decommissioning decisions, and environmental engineering communication.",
    details: [
      "Batch evidence, sand-column thinking, dynamic/tidal designs, and field-scale scenarios",
      "Decision-ready visualisation rather than raw document dumping",
      "Complements the digital rock pathway with environmental engineering outcomes",
    ],
  },
  {
    icon: "ShieldCheck",
    name: "Absheron Project Engineering",
    label: "Energy delivery",
    image: asset("digital-twin-platform-detail.png"),
    body:
      "Junior project-engineering support for the Absheron gas-condensate field development through HECOTEC IDC, client JOCAP.",
    details: [
      "Supported planning, timelines, resources, and critical paths",
      "Tracked progress against milestones for senior stakeholders",
      "Coordinated with vendors, contractors, site visits, and engineering reviews",
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
      "Researching microbial crude-oil biodegradation, MUL microfluidic results, fluid mechanics in porous media, digital rock interpretation, pore-network modelling, multiphase-flow simulation workflows, and digital subsurface decision support under Dr Kejian Wu's supervision.",
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
      "Azerbaijan State Scholarship-funded doctoral research; digital rock, biodegradation, and digital subsurface work developed with bp-collaboration context.",
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
    title: "Digital Rock",
    items: [
      "MUL microfluidics",
      "ImageJ/Fiji segmentation",
      "Pore-network modelling",
      "Multiphase flow modelling",
      "Capillary pressure",
      "Relative permeability",
      "Digital twins",
      "Upscaling",
    ],
  },
  {
    title: "Programming and Tools",
    items: ["MATLAB", "Python", "R", "LaTeX", "AutoCAD", "SolidWorks", "Microsoft Office"],
  },
  {
    title: "Data and Research",
    items: [
      "Data visualization",
      "Statistical modelling",
      "Machine learning",
      "AI-assisted modelling",
      "Subsurface data interpretation",
      "Reservoir-analysis framing",
      "Well-log workflow concepts",
      "Production-data workflow concepts",
      "Experimental design",
      "Laboratory management",
      "Technical writing",
    ],
  },
  {
    title: "Project Delivery",
    items: ["PMP", "PMI-ACP", "Planning", "Vendor coordination", "Stakeholder reporting"],
  },
  {
    title: "Languages",
    items: ["Azerbaijani (native)", "English (fluent)", "Turkish (fluent)"],
  },
];

export const gallery = [
  {
    title: "Digital Rock Pore Frame",
    tag: "MUL 242 h",
    image: asset("mul-pore-frame-242h.png"),
  },
  {
    title: "MUL Ten-Day Phase Evolution",
    tag: "Corrected evidence",
    image: asset("mul-phase-evolution.svg"),
  },
  {
    title: "MUL Endpoint Fingerprints",
    tag: "Pore occupancy",
    image: asset("mul-endpoint-fingerprints.svg"),
  },
  {
    title: "Recovery and Pressure Response",
    tag: "Phase 2",
    image: asset("mul-recovery-pressure.svg"),
  },
  {
    title: "Offshore Platform Digital Twin",
    tag: "Digital twin",
    image: asset("digital-twin-platform-full.png"),
  },
  {
    title: "Platform Systems Detail",
    tag: "Operational model",
    image: asset("digital-twin-platform-detail.png"),
  },
  {
    title: "Field-Scale Decision Support",
    tag: "PhD translation",
    image: asset("phd-field-dashboard-overview.png"),
  },
];
