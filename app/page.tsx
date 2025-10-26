"use client";

import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Briefcase,
  GraduationCap,
  ChartLine,
  Brain,
  LineChart,
  GitBranch,
  MonitorSmartphone,
  Cloud,
  ExternalLink,
  Phone,
} from "lucide-react";

/* =========================
   BASIC PROFILE (edit here)
   ========================= */
const ME = {
  name: "Sibi Karunakaran",
  email: "sibikaran28@gmail.com",
  phone: "+1 682-405-9496",
  linkedin: "https://www.linkedin.com/in/sibikaran97/",
  headshotUrl: "/pic.png",            // put pic.png in /public
  resumeUrl: "/Sibi_resume_..pdf",    // put Sibi_resume_..pdf in /public
  tagline:
    "DevOps/Cloud engineer pursuing MEM @ UTA — I build reliable, observable, and cost-efficient systems.",
  summary: [
    "Graduate student in Engineering Management with ~3.8 years leading DevOps and cloud projects.",
    "Proven wins: ~50% AWS cost reduction, ~20% faster deployments, and resilient architectures (99.99% availability targets).",
    "Strong in cross-functional delivery using Lean/Agile and data-driven decisions.",
  ],
};

const SKILLS = [
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Linux (Ubuntu/RHEL/Amazon Linux)",
  "Grafana",
  "Monitoring & Observability",
  "Shell/Python scripting",
  "CI/CD",
  "Decision Analytics",
  "Engineering Management",
  "Stakeholder Communication",
];

/* ==============
   TIMELINE CARDS
   ============== */
const ROADMAP: { period: string; title: string; items?: string[] }[] = [
  {
    period: "2017–2021",
    title: "B.E. — Electrical & Electronics Engineering (VISTAS, Chennai)",
    items: [
      "Activities: Sponsorship Head — IEEE Events",
      "GPA 7.65/10.0",
    ],
  },
  {
    period: "2021–2023",
    title: "Cloud Administrator — Basis Cloud Solutions",
    items: [
      "Managed AWS & Azure infra to ~99.95% uptime",
      "Proactive monitoring → ~80% fewer incident escalations",
      "Performance tuning to reduce downtime & improve UX",
    ],
  },
  {
    period: "2023–2025",
    title: "DevOps Engineer — Basis Cloud Solutions",
    items: [
      "Jenkins + Docker CI/CD → ~20% faster deployments",
      "AWS cost optimization framework → ~50% reduction",
      "MongoDB HA & DR design targeting 99.99% reliability",
    ],
  },
  {
    period: "2025–2026",
    title: "M.S. — Engineering Management (UTA)",
    items: [
      "Cloud & IT Infra Mgmt, Data-Driven Decisions, Lean/Agile",
      "Operations, Quality, Supply Chain, Optimization",
      "GPA 3.3/4.0",
    ],
  },
];

/* =========
   EXPERIENCE
   ========= */
const EXPERIENCE = [
  {
    role: "DevOps Engineer",
    company: "Basis Cloud Solutions (Chennai, India)",
    period: "Feb 2023 – Jan 2025",
    bullets: [
      "Led CI/CD & containerization strategy with Jenkins + Docker → ~20% faster deployments.",
      "Implemented AWS cost optimization framework → ~50% expense reduction while aligning to business needs.",
      "Designed HA strategies for MongoDB targeting 99.99% uptime and DR readiness.",
      "Rolled out monitoring dashboards enabling data-driven ops decisions.",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Jenkins", "Grafana", "MongoDB"],
  },
  {
    role: "Cloud Administrator",
    company: "Basis Cloud Solutions",
    period: "Jun 2021 – Jan 2023",
    bullets: [
      "Managed AWS & Azure infra ensuring ~99.95% uptime to meet SLAs.",
      "Introduced proactive monitoring → ~80% fewer incident escalations.",
      "Performance tuning across services to reduce downtime and improve UX.",
    ],
    tech: ["AWS", "Azure", "Linux", "Monitoring / Alerting"],
  },
];

/* =======
   PROJECTS
   ======= */
const PROJECTS = [
  {
    title: "Cloud Cost Optimization Framework",
    desc:
      "Designed & implemented an AWS cost-optimization strategy: automated scaling policies, right-sizing, tagging & dashboards. Achieved ~50% cost reduction.",
    href: "#",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    tag: "DevOps",
  },
  {
    title: "Kubernetes Deployment Automation",
    desc:
      "Built CI/CD with Jenkins + Docker + Kubernetes; Helm charts for scalable, rolling, zero-downtime releases.",
    href: "#",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    tag: "Automation",
  },
  {
    title: "Disaster Recovery & HA for MongoDB",
    desc:
      "Configured replication & clustering; DR plan to achieve 99.99% data reliability and quick recovery.",
    href: "#",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    tag: "Reliability",
  },
  {
    title: "NPV Investment Strategy Analysis",
    desc:
      "Compared two plant investment strategies using NPV; sensitivity on discount rate, OPEX/CAPEX, and demand to choose the optimal plan.",
    href: "#",
    img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
    tag: "Analytics",
  },
];

/* =======
   HELPERS
   ======= */
const Section = ({
  id,
  title,
  children,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    {subtitle ? (
      <p className="text-zinc-600 mt-2">{subtitle}</p>
    ) : null}
    <div className="mt-8">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-sm border border-zinc-300/60 bg-white hover:shadow transition">
    {children}
  </span>
);

/* =====
   PAGE
   ===== */
export default function Page() {
  return (
    <main className="font-sans text-zinc-900 bg-gradient-to-b from-white to-zinc-50 min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            SIBI
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#roadmap" className="hover:opacity-70">Roadmap</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#portfolio" className="hover:opacity-70">Portfolio</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
          </nav>
          <a
            href={ME.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-zinc-300 shadow-sm bg-white hover:shadow"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT */}
        <div>
          <p className="text-zinc-600">I am</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            {ME.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-700 max-w-prose">
            {ME.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900 text-white hover:opacity-90"
            >
              My Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${ME.email}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-300 bg-white hover:shadow"
            >
              Contact Me <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>

        {/* RIGHT image */}
        <div className="relative h-[560px] w-full rounded-3xl overflow-hidden bg-zinc-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ME.headshotUrl}
            alt="Portrait"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ROADMAP */}
      <Section
        id="roadmap"
        title="Roadmap"
        subtitle="My journey across undergrad, industry, and master's."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {ROADMAP.map((r) => (
            <div
              key={r.period + r.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-zinc-600">{r.period}</p>
              <p className="text-xl font-semibold mt-1">{r.title}</p>
              {r.items && (
                <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                  {r.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <div className="max-w-4xl leading-8 text-zinc-800 space-y-6">
          {ME.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* AREAS OF INTEREST (like reference grid) */}
      <Section
        id="portfolio"
        title="Areas of Interest"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={<ChartLine className="w-6 h-6" />} title="Data Analysis"
                text="Transforming raw data into actionable insights." sub="Python · SQL · Power BI" />
          <Card icon={<Brain className="w-6 h-6" />} title="Machine Learning"
                text="Models that predict, classify, and uncover patterns." sub="Classic ML · Feature Engineering" />
          <Card icon={<LineChart className="w-6 h-6" />} title="Time Series Forecasting"
                text="ARIMA, SARIMA, VAR, SARIMAX for demand/pricing." />
          <Card icon={<GitBranch className="w-6 h-6" />} title="Clustering & Segmentation"
                text="K-means & bisecting K-means for market segments." />
          <Card icon={<MonitorSmartphone className="w-6 h-6" />} title="Dashboarding"
                text="Power BI & Tableau with narrative storytelling." />
          <Card icon={<Cloud className="w-6 h-6" />} title="Cloud + Automation"
                text="AWS/Azure DevOps, Terraform, CI/CD pipelines." />
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt="thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-zinc-600">{p.tag}</div>
                <div className="font-semibold mt-0.5 flex items-center gap-2">
                  {p.title}
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </div>
                <p className="text-sm text-zinc-600 mt-1">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xl font-semibold">Let’s work together</p>
            <p className="text-zinc-600">
              Open to internships and cloud/data projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${ME.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white hover:opacity-90"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href={ME.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-white hover:shadow"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`tel:${ME.phone.replace(/[^+0-9]/g, "")}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-white hover:shadow"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {ME.name}. Built with Next.js + Tailwind.
      </footer>
    </main>
  );
}

/* small card component for “Areas of Interest” */
function Card({
  icon,
  title,
  text,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  sub?: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <p className="text-zinc-600 mt-2">{text}</p>
      {sub ? <p className="text-sm text-zinc-500 mt-1">{sub}</p> : null}
    </div>
  );
}
