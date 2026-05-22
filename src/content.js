const baseUrl = import.meta.env?.BASE_URL ?? "/portfolio/";
const asset = (name) => `${baseUrl}assets/${name}`;

export const navItems = [
  ["About", "#about"],
  ["Worlds", "#worlds"],
  ["Research", "#research"],
  ["Digital Twins", "#digital-twins"],
  ["Ventures", "#ventures"],
  ["Publications", "#publications"],
  ["Recognition", "#recognition"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export const profile = {
  name: "Turan Mutallimov",
  role: "PhD Researcher | Project Engineer | PMP",
  shortRole: "Researcher, engineer, builder",
  location: "Aberdeen, Scotland, UK",
  affiliation: "University of Aberdeen",
  email: "turan.mutallimov@yahoo.com",
  portrait: asset("profile-clean.jpg"),
  heroVisual: asset("world-hero.png"),
  headline:
    "I build evidence-driven systems for energy, environment, safety, and human impact.",
  summary:
    "My work connects petroleum engineering research, project delivery, digital twins, startup thinking, and social-impact initiatives. The common thread is turning complex technical problems into tools, decisions, and stories people can actually use.",
  thesis:
    "Current PhD work: microbial crude-oil biodegradation, coastal-soil bioremediation, environmental-factor modelling, and responsible digital-twin thinking for safer offshore decisions.",
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
    note: "Research collaboration context",
  },
  {
    name: "Helptix",
    image: asset("logo-helptix.png"),
    note: "Digital health venture",
  },
  {
    name: "Icarus",
    mark: "Icarus",
    note: "Safety technology venture",
  },
  {
    name: "Təbəssüm",
    mark: "Təbəssüm",
    note: "Charity and social impact",
  },
];

export const proofPoints = [
  {
    value: "PMP",
    label: "Certified project delivery",
  },
  {
    value: "PhD",
    label: "Petroleum engineering researcher",
  },
  {
    value: "5",
    label: "Public research outputs listed",
  },
  {
    value: "2",
    label: "Engineering symposium awards",
  },
  {
    value: "41%",
    label: "Observed crude-oil degradation signal",
  },
  {
    value: "3.5x",
    label: "Biomass increase in biodegradation work",
  },
];

export const heroNodes = [
  "Bioremediation",
  "Digital twins",
  "Offshore safety",
  "Icarus Suit",
  "Helptix",
  "Təbəssüm",
  "Project delivery",
  "Publications",
];

export const worlds = [
  {
    id: "bioremediation",
    label: "Bioremediation Research",
    kicker: "PhD research world",
    title: "Microbes, crude oil, coastal soils, and model-ready evidence.",
    image: asset("research-multifigure.jpg"),
    body:
      "A doctoral research stream investigating microbial crude-oil biodegradation under real environmental constraints: moisture, pH, oxygen, heavy metals, oil fractions, and microbial activity.",
    facts: [
      "Neptunomonas, Oleispira, and Streptomyces screening",
      "GC-FID, GC-MS, SARA, sand-column, and pore-network workflows",
      "Environmental-factor modelling for coastal bioremediation",
    ],
  },
  {
    id: "digital-twins",
    label: "Offshore Digital Twins",
    kicker: "Decision systems",
    title: "From offshore noise exposure to modular safety architecture.",
    image: asset("digital-twin-dashboard.jpg"),
    body:
      "Co-authored digital-twin work spans offshore noise-risk modelling and modular safety architecture for decision-making, with public outputs connected through DOI and research-portal records.",
    facts: [
      "Ocean Engineering noise-risk digital twin article",
      "Reliability Engineering & System Safety DOI-listed architecture work",
      "Physics-informed and data-driven safety thinking",
    ],
  },
  {
    id: "icarus",
    label: "Icarus Suit",
    kicker: "Safety venture",
    title: "Wearable motorcycle safety concept for injury-aware emergency response.",
    image: asset("icarus-cover.jpg"),
    body:
      "Icarus is a smart protective-suit concept for motorcyclists, focused on detecting rider injury signals and helping emergency services receive more useful context faster.",
    facts: [
      "Wearable sensing for crash and injury context",
      "Hospital and first-aid notification direction",
      "Curated venture story without exposing the source deck",
    ],
  },
  {
    id: "helptix",
    label: "Helptix",
    kicker: "Digital health venture",
    title: "Medical-service access, ambulance location, and first-aid guidance.",
    image: asset("helptix-app.jpg"),
    body:
      "Helptix is framed from the attached venture deck as digital infrastructure for accessing medical services, including ambulance support, accurate location finding, injury-type context, doctor/driver communication, blood search, remote licensed staff, and first-aid guidance.",
    facts: [
      "Google Maps, Directions, Geocoding, Firebase, Android, Figma",
      "Designed around hospitals, patients, and emergency users",
      "Includes a partnership story with Icarus Suit",
    ],
  },
  {
    id: "tebessum",
    label: "Təbəssüm",
    kicker: "Social impact",
    title: "A charity identity kept deliberately simple and human.",
    image: asset("tebessum-impact.jpg"),
    body:
      "Təbəssüm is represented as Turan's charity and social-impact space. Until public details are ready, the website presents it as a clean text-mark with careful, non-inflated language.",
    facts: [
      "Charity and social-impact identity",
      "Presented without administrative source documents",
      "Reserved for future public storytelling",
    ],
  },
];

export const about = {
  eyebrow: "About",
  title: "A personal space for engineering, research, ventures, and impact.",
  body: [
    "Turan Mutallimov is a PMP-certified project engineer and PhD researcher in petroleum engineering at the University of Aberdeen. His work brings together energy project coordination, laboratory research, mathematical modelling, technical communication, and early-stage venture building.",
    "The professional direction is broad but coherent: build systems that improve decisions. In research, that means making microbial biodegradation measurable and useful for coastal and offshore environmental decisions. In digital twins, it means translating risk into operational insight. In ventures, it means turning urgent human problems into structured tools.",
  ],
  focus: [
    "Project engineering, planning, reporting, and stakeholder coordination",
    "Microbial crude-oil biodegradation and coastal-soil bioremediation",
    "Offshore digital twins, risk modelling, and safety decision support",
    "Startup concepts across medical access, wearable safety, and social impact",
  ],
};

export const researchPillars = [
  {
    icon: "Microscope",
    title: "Microbial Systems",
    body:
      "Screening and interpreting bacteria with hydrocarbon-degradation potential, including Neptunomonas, Oleispira, and Streptomyces workstreams.",
  },
  {
    icon: "FlaskConical",
    title: "Experimental Evidence",
    body:
      "Laboratory workflows across crude oil, coastal soils, SARA fractions, bioassays, GC methods, and static/dynamic sand-column scenarios.",
  },
  {
    icon: "Database",
    title: "Model-Ready Data",
    body:
      "Environmental-factor integration for moisture, pH, oxygen, heavy metals, biomass, and degradation kinetics.",
  },
  {
    icon: "Cpu",
    title: "Decision Translation",
    body:
      "Turning experiments and models into visual, communicable decision support for energy, environment, and offshore operations.",
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
    label: "Oxygen-availability shift observed in biodegradation behaviour",
  },
  {
    value: "25-85%",
    label: "Scenario TPH removal range in dynamic sand-column framing",
  },
];

export const digitalTwin = {
  eyebrow: "Digital Twins",
  title: "A safety and decision layer above complex offshore systems.",
  body:
    "The digital-twin work on this site shows the direction, publications, and transferable thinking behind safer offshore decisions. The emphasis is risk visibility, modular architecture, and engineering communication.",
  image: asset("digital-twin-field.jpg"),
  items: [
    {
      title: "Noise Exposure Modelling",
      body:
        "A co-authored Ocean Engineering publication using digital-twin thinking for offshore worker safety, risk analysis, and predictive modelling.",
      href: "https://abdn.elsevierpure.com/en/publications/a-digital-twin-approach-to-noise-exposure-modelling-and-risk-anal/",
    },
    {
      title: "Modular Offshore Safety Architecture",
      body:
        "A DOI-listed Reliability Engineering & System Safety work on modular digital-twin architecture for offshore safety and decision-making.",
      href: "https://doi.org/10.1016/j.ress.2026.112428",
    },
    {
      title: "Operational Storytelling",
      body:
        "Dashboards, models, and visuals are treated as a decision language for engineers, operators, stakeholders, and research audiences.",
    },
  ],
};

export const ventures = [
  {
    icon: "HeartHandshake",
    name: "Helptix",
    label: "Digital health infrastructure",
    image: asset("helptix-app.jpg"),
    logo: asset("logo-helptix.png"),
    body:
      "A medical-service access concept for ambulance support, accurate location finding, injury-type dispatch context, doctor/driver communication, blood requests, remote licensed staff, and first-aid instructions.",
    details: [
      "Built around hospitals, patients, and emergency users",
      "Deck technology stack: Google Maps, Directions, Geocoding, Firebase, Android, Figma, Java/Kotlin",
      "Public pitch direction includes a partnership story with Icarus Suit",
    ],
  },
  {
    icon: "ShieldCheck",
    name: "Icarus Suit",
    label: "Wearable safety technology",
    image: asset("icarus-solution.jpg"),
    body:
      "A smart motorcycle-safety suit concept focused on crash context, injury awareness, and faster emergency communication.",
    details: [
      "Wearable sensing and injury-context direction",
      "Safety and emergency-response positioning",
      "Presented as a curated venture narrative, not raw pitch material",
    ],
  },
  {
    icon: "Sparkles",
    name: "Təbəssüm",
    label: "Charity and social impact",
    image: asset("tebessum-impact.jpg"),
    body:
      "A charity organisation identity included as part of Turan's wider social-impact world, kept intentionally concise until more public material is ready.",
    details: [
      "Human-centred impact space",
      "Clean text-mark representation",
      "No private registration or administrative data exposed",
    ],
  },
];

export const publications = [
  {
    title: "A modular digital twin architecture for offshore safety and decision-making: A North Sea platform case study",
    category: "Digital twins",
    venue: "Reliability Engineering & System Safety",
    detail:
      "ORCID-listed article with DOI record for modular offshore safety and decision-making architecture.",
    href: "https://doi.org/10.1016/j.ress.2026.112428",
  },
  {
    title: "A digital twin approach to noise exposure modelling and risk analysis",
    category: "Digital twins",
    venue: "Ocean Engineering",
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
    detail:
      "Explainable depression-severity assessment using domain-aware attention for health-related AI research.",
    href: "https://doi.org/10.48550/arXiv.2510.00706",
  },
  {
    title:
      "Biodegradation Potential of Neptunomonas naphthovoran for Crude Oil Pollution Mitigation",
    category: "Bioremediation",
    venue: "bioRxiv",
    detail:
      "Experimental and modelling insights into microbial crude-oil pollution mitigation.",
    href: "https://doi.org/10.1101/2024.05.31.596902",
  },
  {
    title: "Reducing deaths in traffic accidents with space research and artificial intelligence",
    category: "Safety AI",
    venue: "International Astronautical Congress",
    detail:
      "Conference proceedings work connecting safety, transport risk, space research, and artificial intelligence.",
  },
  {
    title: "Microbial Guardians of the Seas: Unlocking Bacteria's Power for Crude Oil Cleanup",
    category: "Public seminar",
    venue: "UFAZ research seminar",
    detail:
      "Public research seminar on microbial biodegradation, petroleum engineering, and crude-oil cleanup.",
    href: "https://www.ufaz.az/en/events/phd-student-at-the-university-of-aberdeen-turan-mutallimov-will-deliver-a-research-seminar/",
  },
];

export const recognition = [
  {
    icon: "Award",
    title: "Best Poster Award",
    detail: "16th Engineering Symposium",
  },
  {
    icon: "Sparkles",
    title: "Industry Impact Award",
    detail: "17th Engineering Symposium",
  },
  {
    icon: "ShieldCheck",
    title: "Project Management Professional",
    detail: "PMP certification, valid 2024-2027",
  },
  {
    icon: "ShieldCheck",
    title: "PMI Agile Certified Practitioner",
    detail: "PMI-ACP certification, valid 2024-2027",
  },
  {
    icon: "Presentation",
    title: "Reservoir Microbiology Forum",
    detail: "London, 2024 selected technical presentation",
  },
  {
    icon: "BookOpen",
    title: "Azerbaijan State Scholarship",
    detail: "Doctoral study support for PhD research",
  },
];

export const experience = [
  {
    period: "2022 - Present",
    role: "PhD Candidate, Petroleum Engineering",
    place: "University of Aberdeen",
    details:
      "Researching microbial biodegradation and biodiversity effects in petroleum engineering environments, with emphasis on coastal soils, modelling, and sustainable remediation.",
  },
  {
    period: "2023 - 2024",
    role: "Teaching Assistant",
    place: "University of Aberdeen",
    details:
      "Supported well testing, marine energy systems, and wind energy teaching through tutorials, assessment, student guidance, and technical delivery.",
  },
  {
    period: "2021 - 2022",
    role: "Lecturer",
    place: "Azerbaijan State Oil and Industry University",
    details:
      "Prepared curriculum material, organised seminars and workshops, and mentored students in research communication.",
  },
  {
    period: "2021",
    role: "Junior Project Engineer",
    place: "HECOTEC IDC, client JOCAP",
    details:
      "Supported planning, reporting, vendor coordination, site visits, and engineering review workflows for energy project delivery.",
  },
  {
    period: "2018 - 2019",
    role: "Training Department Administrative Manager",
    place: "Technical Education Center",
    details:
      "Coordinated training operations, documentation, participant communication, and administrative delivery.",
  },
];

export const education = [
  {
    degree: "PhD, Petroleum Engineering",
    place: "University of Aberdeen",
    period: "2022 - Present",
  },
  {
    degree: "MSc, Offshore Engineering",
    place: "University of Bologna",
    period: "2019 - 2021",
  },
  {
    degree: "BSc, Oil and Gas Engineering",
    place: "Azerbaijan State Oil and Industry University",
    period: "2015 - 2019",
  },
];

export const gallery = [
  {
    title: "Research Evidence Board",
    tag: "Bioremediation",
    image: asset("research-multifigure.jpg"),
  },
  {
    title: "Digital Twin Dashboard",
    tag: "Offshore safety",
    image: asset("digital-twin-dashboard.jpg"),
  },
  {
    title: "Helptix App Direction",
    tag: "Medical access",
    image: asset("helptix-app.jpg"),
  },
  {
    title: "Icarus Suit Concept",
    tag: "Wearable safety",
    image: asset("icarus-solution.jpg"),
  },
  {
    title: "Modelling Heatmap",
    tag: "Data story",
    image: asset("research-heatmap.jpg"),
  },
  {
    title: "Pore Network Flow",
    tag: "Simulation",
    image: asset("pore-network-flow.jpg"),
  },
];
