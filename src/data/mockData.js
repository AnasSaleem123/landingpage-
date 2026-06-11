// Mock data for AI Developer (DevAI) landing page and interactive views

export const REVIEWS = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "VP of Engineering at CloudScale",
    avatar: "https://picsum.photos/seed/alex/100/100",
    rating: 5,
    comment: "DevAI completely redefined how we spin up MVPs. I literally typed 'Design a real-time cluster monitoring tool with warning triggers' and had a working React + Node prototype running in 3 minutes. The web search capabilities are hyper-accurate.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Full-Stack Architect",
    avatar: "https://picsum.photos/seed/sarah/100/100",
    rating: 5,
    comment: "What blew me away was DevAI's multimodal image analysis. I uploaded a handwritten whiteboard wireframe of a billing checkout portal, and it compiled a pixel-perfect, accessible Tailwind dashboard with state management. Insane.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Marcus Dupont",
    role: "SaaS Product Founder",
    avatar: "https://picsum.photos/seed/marcus/100/100",
    rating: 5,
    comment: "As a non-technical founder, booking a live demo with the team and trying out DevAI was the turning point. It acts as an elite senior developer that doesn't sleep. The preview engine is incredibly polished.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Kanya Srisai",
    role: "Lead Devops Engineer",
    avatar: "https://picsum.photos/seed/kanya/100/100",
    rating: 5,
    comment: "DevAI writes cleaner Tailwind than 90% of developers I know. The fact that it searches live API docs on the fly means it never writes deprecated code. This is the future of software engineering.",
    date: "1 month ago"
  }
];

export const PRICING_PLANS = [
  {
    name: "Hobbyist Agent",
    priceMonthly: "Free",
    priceYearly: "Free",
    period: "forever",
    description: "Perfect for developers exploring autonomous agents and small prototypes.",
    features: [
      "30 agent compilations per month",
      "Standard terminal code export",
      "Basic text-to-code prompts",
      "Standard community support",
      "Web sandbox visual previews",
    ],
    cta: "Start Building Free",
    popular: false
  },
  {
    name: "Pro Engineer",
    priceMonthly: "$79",
    priceYearly: "$59",
    period: "user / mo",
    description: "The sweet spot for senior architects and hyper-active startup developers.",
    features: [
      "Unlimited agent compilations",
      "Multimodal image-to-layout analysis",
      "Autonomous real-time Web Search",
      "Full-stack state management generator",
      "Download production bundle (React/Vite/Tailwind)",
      "Priority API rate-limits",
      "Dedicated high-speed rendering threads"
    ],
    cta: "Deploy Pro Agent",
    popular: true
  },
  {
    name: "Enterprise Fleet",
    priceMonthly: "$299",
    priceYearly: "$239",
    period: "team / mo",
    description: "Scale secure autonomous coding agents across your entire enterprise organization.",
    features: [
      "Multi-agent collaborative networks",
      "Private self-hosted LLM adapters",
      "VPC deployment / on-premises sandboxing",
      "SOC-2 Type II secure code containers",
      "Advanced corporate code-style guidelines training",
      "Dedicated Solutions Architect & SLA",
      "Direct API & Github Action webhooks integration"
    ],
    cta: "Schedule Fleet Demo",
    popular: false
  }
];

export const AVAILABLE_DATES = [
  { day: "Mon", date: "Oct 23", slots: ["09:00 AM", "11:00 AM", "02:00 PM", "04:30 PM"] },
  { day: "Tue", date: "Oct 24", slots: ["10:00 AM", "11:30 AM", "01:00 PM", "03:00 PM", "05:00 PM"] },
  { day: "Wed", date: "Oct 25", slots: ["08:30 AM", "10:30 AM", "02:00 PM", "04:00 PM"] },
  { day: "Thu", date: "Oct 26", slots: ["09:00 AM", "01:30 PM", "03:30 PM", "06:00 PM"] },
  { day: "Fri", date: "Oct 27", slots: ["10:00 AM", "12:00 PM", "02:30 PM", "05:30 PM"] }
];

export const PREVIEW_TEMPLATES = [
  {
    id: "crypto",
    title: "Crypto Portfolio & Analytics Tracker",
    prompt: "Design a luxury crypto-portfolio dashboard with electric area charts, pending transactions log, and live pricing metrics in glassmorphic cards.",
    techStack: "React 18 + Tailwind CSS + Custom SVG Sparklines",
    features: ["Interactive chart filters", "Simulation state controls", "Instant toast alerts"]
  },
  {
    id: "invoice",
    title: "SaaS Billing & Invoicing Panel",
    prompt: "Create an active invoicing SaaS platform with custom payment statuses, interactive search-by-customer, and custom slide-out drawers.",
    techStack: "React 18 + Flex Grid Layout + Modal Drawers",
    features: ["Search filters", "Interactive status editing", "Live metrics cards"]
  },
  {
    id: "portfolio",
    title: "Interactive Creative Developer Hub",
    prompt: "Build an ultra-slick, neon terminal-style developer portfolio with interactive tabs, project showcases, and a live feedback contact form.",
    techStack: "React 18 + Retro-Futuristic Terminal Theme + CSS Stars",
    features: ["Interactive tab menus", "Working code emulator", "Terminal commands input"]
  }
];

export const GENERATION_LOGS = {
  crypto: [
    { type: "search", message: "Searching Web: 'latest high-conversion cryptocurrency dashboard UX standards 2024'..." },
    { type: "search_success", message: "Found 6 reference patterns (Coinbase, Stripe Analytics, Dune Dashboard)." },
    { type: "vision", message: "Multimodal Analysis: Inspecting wireframe layouts for chart-to-table spatial balance..." },
    { type: "write", message: "Generating React 18 component scaffolding..." },
    { type: "write", message: "Injecting Tailwind color-tokens: deep-slate background, neon-emerald gains, and sky-blue area charts..." },
    { type: "write", message: "Synthesizing custom responsive SVG area path generators and sparklines..." },
    { type: "write", message: "Wiring state management: search filters, active row selections, and mock coin updates..." },
    { type: "compile", message: "Compiling assets using Vite + PostCSS compiler..." },
    { type: "success", message: "Bundle built successfully! Serving live interactive web preview..." }
  ],
  invoice: [
    { type: "search", message: "Searching Web: 'accessible Tailwind invoicing panels and data grids'..." },
    { type: "search_success", message: "Analyzed 12 active billing layouts. Merged grid rules for column pagination." },
    { type: "vision", message: "Multimodal Analysis: Formulating clean, rounded card interfaces and right-aligned detail drawer modals..." },
    { type: "write", message: "Writing layout structures (Sidebar wrapper, Global Search bar, main metrics)..." },
    { type: "write", message: "Wiring interactive data filters (In Progress, Paid, Pending, Canceled status filters)..." },
    { type: "write", message: "Constructing details slide-out drawer matching the user's interactive spec..." },
    { type: "compile", message: "Compiling code into hot-reload sandboxed React environment..." },
    { type: "success", message: "Invoice Billing Workspace synthesized! Interactive sandbox preview running." }
  ],
  portfolio: [
    { type: "search", message: "Searching Web: 'cutting edge developer portfolio layouts, console themes'..." },
    { type: "search_success", message: "Retrieved references for premium retro-cyber terminal designs." },
    { type: "vision", message: "Multimodal Analysis: Mapping layout with monospaced display typography and neon-bordered modules..." },
    { type: "write", message: "Crafting terminal wrapper and writing animated command line prompt simulators..." },
    { type: "write", message: "Adding responsive tabs: 'Overview', 'Featured Work', 'Skills Emulator'..." },
    { type: "write", message: "Building interactive CLI input reader allowing users to run custom mock console commands..." },
    { type: "compile", message: "Injecting interactive theme and CSS glows. Compiling Vite static output..." },
    { type: "success", message: "Slick Retro Cyber Portfolio complete and live!" }
  ]
};
