const baseUrl = import.meta.env?.BASE_URL ?? "/portfolio/";
const asset = (name) => `${baseUrl}assets/${name}`;

export const navItems = [
  ["About", "#about"],
  ["Recognition", "#recognition"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Publications", "#publications"],
  ["Contact", "#contact"],
];

export const profile = {
  name: "Turan Mutallimov",
  role: "Project Engineer | PMP | PhD Researcher",
  location: "Aberdeen, United Kingdom",
  affiliation: "University of Aberdeen",
  email: "turan.mutallimov@yahoo.com",
  linkedin: "https://www.linkedin.com/in/trnmtllmv/",
  portrait: asset("profile.png"),
  heroImage: asset("bioremediation-hero.png"),
  thesis:
    "I work at the intersection of project delivery, petroleum engineering, microbial bioremediation, and data-driven modelling.",
  summary:
    "My current research focuses on how microbes transform crude oil in coastal soils, and how engineers can turn laboratory evidence into better environmental decisions, safer operations, and more reliable models.",
};

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
    value: "2",
    label: "Engineering symposium awards",
  },
  {
    value: "3",
    label: "Languages: Azerbaijani, English, Turkish",
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
    detail: "PMP-certified delivery discipline for engineering work",
  },
  {
    icon: "Presentation",
    title: "Public Research Seminar",
    detail: "Microbial Guardians of the Seas, UFAZ, 2024",
    href: "https://www.ufaz.az/en/events/phd-student-at-the-university-of-aberdeen-turan-mutallimov-will-deliver-a-research-seminar/",
  },
];

export const about = {
  eyebrow: "About",
  title: "A project engineer with a researcher's evidence habit.",
  body: [
    "Turan Mutallimov is a PMP-certified project professional and PhD researcher in petroleum engineering at the University of Aberdeen. His work combines delivery discipline with laboratory research, modelling, and technical communication.",
    "The through-line is practical: make complex energy and environmental work easier to plan, explain, measure, and improve. That means translating microbial biodegradation research, simulation outputs, and field-facing risk ideas into decisions that engineers and stakeholders can use.",
  ],
  focus: [
    "Energy project coordination and stakeholder reporting",
    "Microbial crude-oil biodegradation in coastal soils",
    "Statistical modelling, machine learning, and technical visualization",
    "Teaching, mentoring, and research communication",
  ],
};

export const research = {
  eyebrow: "Research Focus",
  title: "Quantifying microbial hydrocarbon degradation in real engineering conditions.",
  body:
    "Turan's doctoral work investigates how crude-oil biodegradation models can better represent environmental complexity: moisture, pH, oxygen, heavy metals, microbial activity, oil fractions, and competing contaminants.",
  bullets: [
    "Coastal soil and sediment bioremediation",
    "Microbial biodiversity and degradation kinetics",
    "Experimental workflows translated into model-ready data",
    "Digital-twin thinking for safer energy decisions",
  ],
  image: asset("bioremediation-hero.png"),
};

export const projects = [
  {
    title: "Microfluidic Biodegradation Simulator",
    tag: "Predictive research tool",
    image: asset("microfluidic-simulator.png"),
    imageAlt: "Microfluidic biodegradation simulator interface",
    body:
      "A pore-scale simulator concept for exploring brine, oil, biomass, emulsion, and air behaviour during microbial degradation scenarios.",
  },
  {
    title: "Coastal Bioremediation Modelling",
    tag: "PhD research stream",
    image: asset("microfluidic-heatmap.png"),
    imageAlt: "Heatmap from biodegradation modelling workflow",
    body:
      "Environmental-factor integration for modelling crude-oil degradation under changing pH, moisture, oxygen, heavy-metal, and microbial conditions.",
  },
  {
    title: "Experimental Workflow and Assay Design",
    tag: "Laboratory research",
    image: asset("sara-fractionation-workflow.jpg"),
    imageAlt: "SARA fractionation workflow diagram",
    body:
      "Research workflow spanning microbial screening, oil fractionation, chemical analysis, and model-ready experimental documentation.",
  },
  {
    title: "Noise Exposure Digital Twin",
    tag: "Offshore safety publication",
    image: asset("pore-network-flow.jpg"),
    imageAlt: "Pore network and flow visualization",
    body:
      "A co-authored digital twin and physics-informed modelling study for predictive offshore noise exposure and risk analysis.",
    href: "https://abdn.elsevierpure.com/en/publications/a-digital-twin-approach-to-noise-exposure-modelling-and-risk-anal/",
  },
];

export const timeline = [
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

export const publications = [
  {
    title: "A digital twin approach to noise exposure modelling and risk analysis",
    type: "Peer-reviewed article",
    detail:
      "Ocean Engineering, 2026. Digital twin, PINN modelling, worker safety, offshore risk analysis.",
    href: "https://abdn.elsevierpure.com/en/publications/a-digital-twin-approach-to-noise-exposure-modelling-and-risk-anal/",
  },
  {
    title:
      "Biodegradation Potential of Neptunomonas naphthovorans-NAG-2N-126 for Crude Oil Pollution Mitigation",
    type: "Research preprint",
    detail: "Experimental and modelling insights into crude-oil pollution mitigation, 2024.",
  },
  {
    title: "Microbial Guardians of the Seas: Unlocking Bacteria's Power for Crude Oil Cleanup",
    type: "Public seminar",
    detail:
      "Research seminar at UFAZ on petroleum engineering, microbial biodegradation, and coastal-soil modelling.",
    href: "https://www.ufaz.az/en/events/phd-student-at-the-university-of-aberdeen-turan-mutallimov-will-deliver-a-research-seminar/",
  },
  {
    title: "Reducing deaths in traffic accidents with space research and artificial intelligence",
    type: "IAC conference proceedings",
    detail: "Published in Proceedings of the International Astronautical Congress, 2023.",
  },
];

export const conferences = [
  "32nd CSCST-SCI Conference, University of Aberdeen, 2025",
  "Reservoir Microbiology Forum, London, 2024",
  "15th Engineering Symposium, Aberdeen, 2024",
  "InterPore 2023, Edinburgh",
];

export const certifications = [
  "Project Management Professional, PMP",
  "PMI Agile Certified Practitioner, PMI-ACP",
  "Primavera P6 Specialist",
  "HSE Specialist",
  "AutoCAD",
];

export const figureStrip = [
  {
    src: asset("two-window-kinetics.png"),
    alt: "Two-window biodegradation kinetics chart",
  },
  {
    src: asset("pore-network-flow.jpg"),
    alt: "Pore network flow visualization",
  },
  {
    src: asset("bioassay-screening-plate.jpg"),
    alt: "Bioassay screening plate",
  },
];
