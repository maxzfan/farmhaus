export type Logo = {
  name: string;
  /** Optional path under /public/logos. When absent, LogoChip renders a text chip. */
  src?: string;
};

export type Founder = {
  /** Display number, "01"–"07" */
  num: string;
  name: string;
  /** Headline role, e.g. "CTO @ 0studio" — rendered in brand red */
  role: string;
  /** Remainder of the role line, e.g. ", a 3d-native transformer model for CAD …" */
  roleSuffix?: string;
  /** Affiliation lines (school, club leadership, etc.) */
  meta: string[];
  /** Achievement bullets */
  bullets: string[];
  /** Optional headshot under /public/founders. When absent, a numeral placeholder shows. */
  photo?: string;
  logos: Logo[];
};

/**
 * The seven founding members of Farmhouse, transcribed from the cohort deck.
 * Single source of truth — the Founders section maps over this array.
 * `photo` and `logo.src` are intentionally omitted until real assets are dropped
 * into /public; the UI degrades gracefully (numeral avatar, text logo chips).
 */
export const founders: Founder[] = [
  {
    num: "01",
    name: "Andrzej Bachleda-Curus",
    role: "CEO of Telomis",
    roleSuffix: " — a reagent decision layer for preclinical research",
    meta: ["Stanford CS/AI + Math", "Vice President, Stanford BASES (Startup Dev)"],
    bullets: [
      "2x National Math Olympiad Finalist",
      "Built multi-agent systems for data extraction and analysis at an early-stage startup",
      "Inventor, SmartWalker (TreeHacks 2026): an AI rehab walker with computer-vision gait analysis, step count, and pressure sensing",
      "Built a Parkinson's classifier on a 2,105-patient cohort (KNN, 0.889 accuracy) with feature selection to improve fairness",
    ],
    logos: [{ name: "Telomis" }, { name: "BASES" }],
  },
  {
    num: "02",
    name: "Filip Buscu",
    role: "Cofounder & CTO of Oculta",
    roleSuffix:
      " — risk-assessment software for commercial real estate insurers (backed by Cardinal Ventures)",
    meta: ["Stanford Aerospace + Electrical Engineering"],
    bullets: [
      "Founded Romania's first functional satellite company, with two launches via SpaceX",
      "ISEF Grand Award for improving blended-wing aircraft stability and efficiency",
      "ex-RF engineering intern at Tarana Wireless",
      "Recruited onto an Airbus tender at the European Space Agency (ESA)",
      "Competed in physics and astrophysics olympiads",
    ],
    logos: [{ name: "Regeneron ISEF" }, { name: "Cardinal Ventures" }],
  },
  {
    num: "03",
    name: "Andrew Jenkins",
    role: "Founding Engineer @ Nonlinear",
    roleSuffix:
      " — building AI agents automating AEC and physical infrastructure workflows",
    meta: ["Stanford Computer Science (AI Track)", "Vice President, Stanford BASES (Startup Dev)"],
    bullets: [
      "ex-Computer Vision Engineer @ dapster.ai",
      "US Patent No. 12,002,002 B1 — SmartCan Trash Routing System",
      "US Patent No. 11,950,613 B1 — GuacSaver Food Preservation System",
      "Inventor, SmartWalker (TreeHacks 2026): an AI-powered rehab walker",
    ],
    logos: [{ name: "Nonlinear" }, { name: "BASES" }],
  },
  {
    num: "04",
    name: "Max Fan",
    role: "CTO @ 0studio",
    roleSuffix:
      " — a 3D-native transformer model for CAD, backed by Cardinal Ventures",
    meta: ["Stanford CS & Physics", "Vice President, Stanford ASES"],
    bullets: [
      "Stanford AI Club Board",
      "VEX Robotics World Championships Qualifier x3",
      "NLP research for endangered languages at Harvard Phonology & Phonetics Lab",
      "ML for cancer prediction at UCLA Quantitative & Computational Biosciences",
      "TreeHacks winner, Poke Track",
    ],
    logos: [{ name: "ASES" }, { name: "Cardinal Ventures" }],
  },
  {
    num: "05",
    name: "Oliver Sin",
    role: "Founding Operations Engineer @ Context",
    roleSuffix:
      " — an enterprise platform for building, running, and improving AI agents in legacy workflows",
    meta: [
      "Stanford Computer Science (AI Track) & Philosophy",
      "TreeHacks Sponsorships Director · ASES Director",
    ],
    bullets: [
      "Conducting research at Stanford SAFE AI Lab",
      "Youth Delegate to the United Nations",
    ],
    logos: [{ name: "TreeHacks" }, { name: "Context" }, { name: "ASES" }],
  },
  {
    num: "06",
    name: "Matthew Kim",
    role: "Co-Founder @ Caladan",
    roleSuffix:
      " — a drone swarm startup backed by Pareto, IRON Cluster, and more",
    meta: ["Stanford CS + Econ"],
    bullets: [
      "Researcher at Stanford Multi-Robot Systems Lab",
      "ASES Executive Board",
      "First Place International DECA Champion",
      "Built an agentic social-life planner that hit 300 users within 36 hours at TreeHacks (won Poke track)",
    ],
    logos: [{ name: "Caladan" }, { name: "MSL" }, { name: "ASES" }],
  },
  {
    num: "07",
    name: "Nathaniel Laurent",
    role: "ML Research Engineer @ Phinity Labs",
    roleSuffix: " — building AI systems automating chip design workflows",
    meta: ["Stanford Physics & CS (AI Track)", "VP of Technical Cohort, Stanford BASES"],
    bullets: [
      "Ex-ML Engineer @ Midas Intelligence — designed mathematical formal reasoning models",
      "Presented Machine Learning Heliophysics Research @ National NASA Conferences",
    ],
    logos: [{ name: "BASES" }],
  },
  {
    num: "08",
    name: "Raza Zaidi",
    role: "Co-Founder @ Stratton Labs",
    roleSuffix: " — an AI-native hedge fund backed by Y Combinator",
    meta: ["Stanford CS + Econ"],
    bullets: [
      "AI Analyst at Meteora Capital ($2B AUM hedge fund)",
      "AI/ML at Nexa Labs (YC S25), built a predictive cattle health algorithm",
      "Researcher at Stanford Emerging Market Technology Group",
      "F1 in Schools: 13th at Worlds, 2x US National Champion",
      "3x first author on healthcare outcomes research",
    ],
    logos: [{ name: "Y Combinator" }],
  },
];
