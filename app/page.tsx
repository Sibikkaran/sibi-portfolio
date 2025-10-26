"use client";

import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Briefcase,
  GraduationCap,
  Phone,
  ExternalLink,
  ShieldCheck,
  Workflow,
} from "lucide-react";

/* =========================
   BASIC PROFILE — EDIT HERE
   ========================= */
const ME = {
  name: "Sibi Karunakaran",
  title: "DevOps Engineer · Cloud Automation · MEM @ UTA",
  email: "sibikaran28@gmail.com",
  phone: "+1 682-405-9496",
  linkedin: "https://www.linkedin.com/in/sibikaran97/",
  resumeUrl: "/Sibi_resume_..pdf", // keep in /public
  headshotUrl: "/pic.png",         // keep in /public
  tagline:
    "I design reliable, observable, and cost-efficient cloud systems and align them with business outcomes.",
  about: [
    "I’m a DevOps and Cloud Engineering professional with 3.8 years of experience building automation, infrastructure, and delivery systems on AWS and Azure. I’ve shipped CI/CD pipelines, containerized workloads, and disaster-recovery architectures that cut release time by 20% and reduced cloud spend by 50%.",
    "Now pursuing my M.S. in Engineering Management at the University of Texas at Arlington, I bring systems thinking to technical execution using data, lean practices, and stakeholder alignment to turn engineering work into measurable value.",
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
  "Grafana / CloudWatch",
  "Monitoring & Observability",
  "Shell/Python scripting",
  "CI/CD",
  "Cost Optimization",
  "Incident Reduction",
  "Decision Analytics",
];

/* ==============
   ROADMAP CARDS
   ============== */
const ROADMAP: { period: string; title: string; bullets?: string[]; icon?: React.ReactNode }[] = [
  {
    period: "2017–2021",
    title: "B.E. Electrical & Electronics Engineering · VISTAS, Chennai",
    bullets: ["GPA 7.65/10.0", "Sponsorship Head — IEEE Events"],
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    period: "2021–2023",
    title: "Cloud Administrator · Basis Cloud Solutions",
    bullets: [
      "Managed AWS & Azure infra to ~99.95% uptime",
      "Proactive monitoring → ~80% fewer escalations",
    ],
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    period: "2023–2025",
    title: "DevOps Engineer · Basis Cloud Solutions",
    bullets: [
      "Jenkins + Docker CI/CD → ~20% faster deployments",
      "AWS cost framework → ~50% reduction",
      "MongoDB HA/DR for 99.99% reliability",
    ],
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    period: "2025–2026",
    title: "M.S. Engineering Management · UTA (GPA 3.3/4.0)",
    bullets: ["Cloud & IT Infra Mgmt", "Data-Driven Decisions", "Lean/Agile, Ops & Quality"],
    icon: <GraduationCap className="w-5 h-5" />,
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
      "Led Jenkins + Docker CI/CD; improved release cadence by ~20% with templated pipelines and policy gates.",
      "Designed an AWS cost-optimization program (rightsizing, autoscaling, tagging, lifecycle policies) → ~50% spend reduction.",
      "Implemented MongoDB HA/DR with replication; boosted availability towards 99.99% targets.",
      "Operationalized dashboards with CloudWatch/Grafana for SLO tracking and data-driven incident response.",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Grafana", "MongoDB"],
  },
  {
    role: "Cloud Administrator",
    company: "Basis Cloud Solutions",
    period: "Jun 2021 – Jan 2023",
    bullets: [
      "Maintained AWS/Azure environments; achieved ~99.95% uptime across services.",
      "Introduced proactive monitoring and runbooks → reduced escalations by ~80%.",
      "Hardened baselines and performance tuning to lower downtime and improve UX.",
    ],
    tech: ["AWS", "Azure", "Linux", "CloudWatch", "Runbooks"],
  },
  {
    role: "Software/ML Intern",
    company: "Sigmatix Infotech",
    period: "2020 – 2021",
    bullets: [
      "Developed small full-stack features (Python/Flask, REST).",
      "Built baseline ML models; handled data cleaning and evaluation.",
      "Collaborated with Git/GitHub; documented reproducible steps.",
    ],
    tech: ["Python", "Flask", "Pandas", "scikit-learn", "Git"],
  },
];

/* =======
   PROJECTS (cover images via Unsplash — swap with /public/*.jpg if you prefer)
   ======= */
const PROJECTS = [
  {
    title: "Cloud Cost Optimization Framework",
    tag: "DevOps",
    desc:
      "Rightsizing, autoscaling, tagging, and lifecycle design with dashboards — achieved ~50% AWS cost reduction while preserving performance.",
    href: "#",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Kubernetes Deployment Automation",
    tag: "Automation",
    desc:
      "Jenkins + Docker pipelines to build, scan, and deploy Helm-based workloads with rolling, zero-downtime releases.",
    href: "#",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Disaster Recovery & HA for MongoDB",
    tag: "Reliability",
    desc:
      "Replica sets and DR drills to meet 99.99% data reliability targets; playbooks for failover and restore validation.",
    href: "#",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "NPV Investment Strategy Analysis",
    tag: "Analytics",
    desc:
      "Compared plant investment strategies via NPV with sensitivity analysis on discount rate, demand, and OPEX/CAPEX.",
    href: "#",
    img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop",
  },
];

/* =======
   HELPERS
   ======= */
const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">{title}</h2>
    {subtitle ? <p className="text-zinc-300 mt-2">{subtitle}</p> : null}
    <div className="mt-8">{children}</div>
  </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-sm border border-white/15 bg-white/10 text-zinc-100">
    {children}
  </span>
);

/* =====
   PAGE
   ===== */
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] text-zinc-100 selection:bg-blue-500/30">
      {/* NAVBAR (glass) */}
      <header className="sticky top-0 z-40 bg-[#0f172a]/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Sibi Karunakaran</a>
          <nav className="hidden sm:flex gap-6 text-sm text-zinc-200">
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
          <a
            href={ME.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT */}
        <div>
          <p className="text-zinc-300">I am</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            {ME.name}
          </h1>
          <p className="mt-2 text-lg text-zinc-200">{ME.title}</p>
          <p className="mt-4 text-lg text-zinc-300 max-w-prose">{ME.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              My Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${ME.email}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20"
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

        {/* RIGHT — large portrait */}
        <div className="relative h-[560px] w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ME.headshotUrl}
            alt="Sibi Karunakaran"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <Card>
          <div className="max-w-4xl leading-8 text-zinc-200 space-y-6">
            {ME.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Card>
      </Section>

      {/* ROADMAP */}
      <Section
        id="roadmap"
        title="Roadmap"
        subtitle="My journey across undergrad, industry, and graduate study."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP.map((r) => (
            <Card key={r.period + r.title}>
              <div className="flex items-center gap-2 text-zinc-300">
                {r.icon} <span>{r.period}</span>
              </div>
              <p className="text-lg font-semibold mt-1">{r.title}</p>
              {r.bullets && (
                <ul className="mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-1">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((e) => (
            <Card key={`${e.company}-${e.role}`}>
              <div className="text-sm text-zinc-300">{e.period}</div>
              <div className="font-semibold mt-0.5 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> {e.role}
              </div>
              <div className="text-sm text-zinc-200">{e.company}</div>
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-1">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </Card>
          ))}
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
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
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
                <div className="text-xs text-zinc-300">{p.tag}</div>
                <div className="font-semibold mt-0.5 flex items-center gap-2">
                  {p.title}
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </div>
                <p className="text-sm text-zinc-300 mt-1">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Card>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xl font-semibold">Let’s work together</p>
              <p className="text-zinc-300">
                Open to internships and cloud/automation projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${ME.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href={ME.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`tel:${ME.phone.replace(/[^+0-9]/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </div>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} {ME.name}. Built with Next.js + Tailwind.
      </footer>
    </main>
  );
}
