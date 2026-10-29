export const SERVICES = [
  {
    id: "academic-projects",
    icon: "grad",
    title: "Academic Projects & Guidance",
    service: "Academic Projects",
    tagline: "Mini & major engineering project development",
    desc: "End-to-end guidance for engineering students. We build working project prototypes with clean code, reports, and viva preparation.",
    pricing: {
      startingAt: "From ₹3,499 ($45)",
      plans: [
        {name: "Mini Project", price: "₹3,499 - ₹5,999", details: "Working code, basic report, viva guidance"},
        {name: "Major / Final Year", price: "₹7,999 - ₹14,999", details: "Complete software/IoT, full IEEE report, PPT & demo coaching"}
      ]
    },
    items: [
      "Final year (major) engineering projects",
      "Mini projects in Web, AI/ML, IoT, Python & Mobile",
      "Clean source code with step-by-step line explanation",
      "Project report (IEEE format), PPT & synopsis",
      "Bug fixing, debugging & local system setup",
      "Viva & live demonstration coaching"
    ],
    cta: "Inquire for Academic Project"
  },
  {
    id: "docs-paper",
    icon: "doc",
    title: "Documentation, PPT & Journal Paper",
    service: "Documentation, PPT & Journal Paper",
    tagline: "Reports, viva presentations & research journal paper writing",
    desc: "Comprehensive academic project documentation, professional PPT presentation slides for reviews, and research journal paper drafting & formatting.",
    pricing: {
      startingAt: "From ₹250",
      plans: [
        {name: "PPT Presentation", price: "Starts from ₹250", details: "Professional viva presentation slides & synopsis"},
        {name: "Complete Project Report", price: "Starts from ₹1,000", details: "Full IEEE/University format report with diagrams & architecture"},
        {name: "Journal Paper", price: "Starts from ₹500", details: "Research paper drafting, formatting & citations"}
      ]
    },
    items: [
      "Complete final-year project reports (IEEE & University format)",
      "High-impact PowerPoint (PPT) slides for reviews & viva",
      "Research paper drafting, formatting & template alignment",
      "System architecture flowcharts, circuit & block diagrams",
      "Plagiarism reduction, proofreading & citation formatting",
      "Project synopsis, abstract & problem statement preparation"
    ],
    cta: "Inquire for Documentation & Paper"
  },
  {
    id: "web-dev",
    icon: "globe",
    title: "Website Development",
    service: "Website Development",
    tagline: "Fast, responsive & modern websites",
    desc: "Custom business websites and high-performance web platforms designed to showcase your brand and generate client leads.",
    pricing: {
      startingAt: "From ₹4,999 ($65)",
      plans: [
        {name: "Starter / Portfolio", price: "₹4,999 - ₹8,999", details: "1-4 pages, modern UI, mobile responsive, contact form"},
        {name: "Business / Full Web App", price: "₹12,999 - ₹24,999", details: "Multi-page dynamic web app, CMS/database, fast SEO"}
      ]
    },
    items: [
      "Business & portfolio websites",
      "Modern React / Next.js web applications",
      "Responsive, mobile-first design",
      "Fast page load speed & SEO setup",
      "Contact forms & WhatsApp direct chat",
      "Free 14 days post-launch support"
    ],
    cta: "Inquire for Website"
  },
  {
    id: "ui-ux",
    icon: "layout",
    title: "UI / UX Design",
    service: "UI / UX Design",
    tagline: "Clean, modern Figma designs & prototypes",
    desc: "Eye-catching, intuitive user interface designs that give your app or website a professional look before development starts.",
    pricing: {
      startingAt: "From ₹3,999 ($50)",
      plans: [
        {name: "Landing Page / App Concept", price: "₹3,999 - ₹6,999", details: "Up to 5 custom screens with interactive Figma prototype"},
        {name: "Complete App / Web System", price: "₹9,999 - ₹18,999", details: "Full screen flows, custom design system, ready for developers"}
      ]
    },
    items: [
      "Figma UI/UX design & clickable prototype",
      "Modern web and mobile interface screens",
      "UX wireframing & user flow design",
      "Custom component libraries and icons",
      "Developer-ready Figma file handover"
    ],
    cta: "Inquire for UI/UX"
  },
  {
    id: "app-dev",
    icon: "phone",
    title: "App Development",
    service: "App Development",
    tagline: "Cross-platform Android & iOS applications",
    desc: "High-performance mobile applications built with clean code and native fluid responsiveness.",
    pricing: {
      startingAt: "From ₹16,999 ($210)",
      plans: [
        {name: "App MVP / Prototype", price: "₹16,999 - ₹24,999", details: "Core screens, authentication, offline storage, API sync"},
        {name: "Full Production App", price: "₹28,000+", details: "Full Android & iOS build, push notifications, store submission"}
      ]
    },
    items: [
      "Cross-platform apps (React Native / Flutter)",
      "Native Android & iOS support",
      "User authentication & database sync",
      "Push notifications & clean animations",
      "Play Store & App Store deployment assistance"
    ],
    cta: "Inquire for App Development"
  },
  {
    id: "drone-tech",
    icon: "cpu",
    title: "Drone Softwares & Components",
    service: "Drone Softwares and Components",
    tagline: "Hardware components & flight telemetry systems",
    desc: "Practical drone engineering solutions covering flight hardware, component selection, assembly, and telemetry dashboards.",
    pricing: {
      startingAt: "From ₹6,999 ($89)",
      plans: [
        {name: "Telemetry Software / Dashboard", price: "₹6,999 - ₹14,999", details: "Live telemetry dashboard, GPS mapping, flight statistics"},
        {name: "Components & Assembly Kit", price: "₹12,999+ (custom)", details: "Hardware selection, motor/ESC tuning, bench testing"}
      ]
    },
    items: [
      "Drone hardware components & accessories",
      "Live flight telemetry & monitoring dashboards",
      "Flight controller setup (Pixhawk, Betaflight, ArduPilot)",
      "Microcontroller integration (ESP32, STM32)",
      "Bench testing, wiring, assembly & maintenance"
    ],
    cta: "Inquire for Drone Tech"
  }
];

export const ENGAGEMENT_MODELS = [
  {
    id: "fixed-price",
    badge: "Most Popular for Projects",
    title: "Fixed-Price Project",
    tagline: "Defined scope, guaranteed milestone deliverables",
    desc: "Ideal for student projects, documentation, websites, or apps with defined specifications. Clear milestones and no unexpected costs.",
    features: [
      "Upfront fixed quote with clear milestone breakdown",
      "Milestone-based payments (advance + demo + final delivery)",
      "Strict deadline adherence with regular progress updates",
      "100% full source code, report, and asset handover",
      "14 days of free post-delivery support"
    ],
    idealFor: "Academic projects, documentation, business websites, and mobile apps",
    cta: "Get Fixed Quote"
  },
  {
    id: "dedicated-developer",
    badge: "For Ongoing Needs",
    title: "Dedicated Monthly Talent",
    tagline: "Your dedicated developer on demand",
    desc: "Need continuous development or mentoring firepower? Hire dedicated weekly or monthly hours for your projects.",
    features: [
      "Dedicated weekly hours of developer focus",
      "Direct chat communication on WhatsApp, Discord, or Phone",
      "Regular updates and rapid turnaround on tasks",
      "Flexibility to prioritize features and fixes anytime",
      "Zero recruitment delays"
    ],
    idealFor: "Startups, ongoing projects, or multi-phase apps",
    cta: "Hire Dedicated Developer"
  },
  {
    id: "hourly-retainer",
    badge: "Maximum Flexibility",
    title: "On-Demand & Hourly Retainer",
    tagline: "Agile support, bug fixing, and doubt clearing",
    desc: "Perfect for quick bug fixes, urgent feature additions, paper formatting, or 1-on-1 code explanation sessions.",
    features: [
      "Pay only for tracked hours on your specific requirements",
      "Quick turnaround on code debugging and errors",
      "1-on-1 project explanation and viva mock practice",
      "Transparent task reporting",
      "No long-term contracts: pay as you go"
    ],
    idealFor: "Doubt clearing, paper formatting, quick bug fixes, or consulting",
    cta: "Book On-Demand Hours"
  }
];

export const WHY = [
  [
    "Multi-Disciplinary Expertise",
    "Academic Projects, Documentation & Journal Papers, Websites, Apps, UI/UX, and Drone Tech under one roof.",
    "layers"
  ],
  [
    "Direct Developer Access",
    "No confusing middlemen. You communicate directly with the engineer and technical writer working on your project.",
    "chat"
  ],
  [
    "100% Code & Asset Ownership",
    "All source code, design files, reports, PPT decks, and paper drafts are completely handed over to you.",
    "target"
  ],
  [
    "On-Time Delivery",
    "We respect deadlines and schedule milestone reviews so you never have to worry about submission dates.",
    "trend"
  ],
  [
    "Transparent & Affordable Pay",
    "Clear, honest pricing with no hidden charges, designed for students and startups.",
    "wrench"
  ]
];

export const TESTIMONIALS = [
  {
    quote: "The guidance for my final year engineering project and IEEE journal paper documentation was fantastic. The PPT slides made my review presentation a breeze!",
    author: "Siddharth R.",
    role: "B.Tech Final Year Student",
    project: "Academic Project & Documentation"
  },
  {
    quote: "WolfNex delivered our company website within a week at very affordable pricing. Fast response and great communication on WhatsApp.",
    author: "Arjun V.",
    role: "Startup Founder",
    project: "Website Development"
  },
  {
    quote: "We got both drone hardware integration and the telemetry dashboard completed smoothly. Highly recommend for any engineering tech.",
    author: "Elena R.",
    role: "Robotics Researcher",
    project: "Drone Telemetry & Components"
  }
];

export const STEPS = [
  [
    "01",
    "Requirements & Quote",
    "Share your project requirements with us. We provide an exact fixed price and timeline within hours."
  ],
  [
    "02",
    "Design & Blueprint",
    "We outline the architecture, UI wireframe, or academic synopsis and begin milestone 1."
  ],
  [
    "03",
    "Build & Progress Demo",
    "We develop the project and share live demos or draft reviews so you see steady progress."
  ],
  [
    "04",
    "Handover & Guidance",
    "Full handover of code, report, and documentation, plus support for setup and viva demo."
  ]
];

export const FAQ = [
  {
    q: "Do you help with project reports, PPT presentations, and journal papers?",
    a: "Yes! We provide full IEEE/college format project reports, professional PowerPoint presentations for viva reviews, and complete assistance in research journal paper drafting, formatting, and plagiarism check."
  },
  {
    q: "How much does an academic project cost?",
    a: "Academic projects start at ₹3,499 for mini projects and ₹7,999 for final-year major projects. Documentation, PPT, and journal paper drafting packages start from ₹250."
  },
  {
    q: "Do you explain the code so I can pass my project viva?",
    a: "Yes! We walk you through the code architecture, key algorithms, and demo flow so you understand your project completely and can answer examiner questions with confidence."
  },
  {
    q: "What is the payment structure?",
    a: "We work with transparent milestones. Usually a small advance to begin, followed by milestone demos, and the balance upon complete delivery and code handover."
  }
];

export const OPTIONS = [
  "Academic Projects",
  "Documentation, PPT & Journal Paper",
  "Website Development",
  "UI / UX Design",
  "App Development",
  "Drone Softwares and Components",
  "Other Custom Work"
];

export const BUDGET_RANGES = [
  "Less than ₹5,000 ($60)",
  "₹5,000 - ₹12,000 ($60 - $150)",
  "₹12,000 - ₹25,000 ($150 - $300)",
  "₹25,000+ ($300+)",
  "Flexible / Let's Discuss"
];

export const TIMELINES = [
  "Urgent (Within 3-5 days)",
  "Standard (1-2 weeks)",
  "Extended (3-4 weeks)",
  "Ongoing Support"
];
