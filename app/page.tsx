// app/page.tsx
"use client";

import { ArrowRight, Download, Mail, Linkedin, ExternalLink, Briefcase } from "lucide-react";

const ME = {
  name: "Sibi Karunakaran",
  tagline: "Cloud/DevOps + Data — building reliable, explainable systems.",
  blurb:
    "I turn messy data and complex infrastructure into clear, reliable outcomes. I work across Python/SQL, AWS/Azure, and CI/CD — biasing for clarity over complexity.",
  location: "Arlington, TX",
  email: "sibikaran28@gmail.com", // mailto works from buttons below
  linkedin: "https://www.linkedin.com/in/sibikaran97/",
  resumeUrl: "D:\sibi-portfolio\sibi-portfolio\public\Sibi_resume_..pdf", // put a file in /public/resume.pdf or use an external link
  headshotUrl:
    "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=600&auto=format&fit=crop",
};

const SKILLS = [
  "Python",
  "SQL",
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Power BI",
  "ETL",
  "CI/CD",
];

const EXPERIENCE = [
  {
    role: "Junior Cloud Consultant / DevOps Engineer",
    company: "BCS Team (India)",
    period: "2021 – 2024",
    bullets: [
      "Built CI/CD with Jenkins + Docker; reduced deploy time 40%.",
      "Hardened EKS workloads; cut infra cost 18% via rightsizing.",
      "Automated backups to S3/Glacier; cross-account ECR replication.",
    ],
    tech: ["AWS", "EKS", "Jenkins", "Docker", "Terraform"],
  },
  {
    role: "Graduate Student (MEM)",
    company: "University of Texas at Arlington",
    period: "2025 – 2027",
    bullets: [
      "Operations & analytics coursework with Python/SQL.",
      "Projects in quality, forecasting, and cloud automation.",
    ],
    tech: ["Python", "Pandas", "SQL"],
  },
];

const PROJECTS = [
  {
    title: "Economic Forecasting of Poultry",
    desc: "Forecasted market prices using ARIMA/SARIMA/VAR with exogenous factors.",
    href: "https://example.com/forecasting",
    img: "https://images.unsplash.com/photo-1508161773455-3ada8ed2ab15?q=80&w=1200&auto=format&fit=crop",
    tag: "Forecasting",
  },
  {
    title: "Airbnb Clustering Analysis",
    desc: "PCA + K-means; market segmentation and dashboards.",
    href: "https://example.com/airbnb",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    tag: "Clustering",
  },
  {
    title: "Market Basket Web App",
    desc: "Apriori rule mining Streamlit app with lift-based ranking.",
    href: "https://example.com/mb-app",
    img: "https://images.unsplash.com/photo-1515165562835-c3b8c8c95f6e?q=80&w=1200&auto=format&fit=crop",
    tag: "Apps",
  },
];

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">{title}</h2>
    {children}
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full text-sm border border-zinc-300/60 bg-white/60 backdrop-blur hover:shadow">
    {children}
  </span>
);

export default function Home() {
  return (
    <main className="font-sans text-zinc-900 bg-gradient-to-b from-white to-zinc-50 min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{ME.name}</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#roadmap" className="hover:opacity-70">Roadmap</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href={ME.resumeUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-zinc-300 hover:shadow">
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-zinc-600">I am</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{ME.name}</h1>
          <p className="mt-4 text-lg text-zinc-700 max-w-prose">{ME.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 hover:shadow">
              My Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white hover:opacity-90">
              Contact Me <Mail className="w-4 h-4" />
            </a>
            <a href={ME.linkedin} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 hover:shadow">
              LinkedIn <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((s) => (<Pill key={s}>{s}</Pill>))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ME.headshotUrl} alt="Headshot" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl border border-zinc-200 shadow px-4 py-2 text-sm">
            <span className="font-medium">{ME.location}</span>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <Section id="roadmap" title="Roadmap">
        <p className="text-zinc-600 mb-6">My journey across work and master’s.</p>
        <ol className="relative border-s border-zinc-200 pl-6">
          <li className="mb-8 ms-6">
            <span className="absolute -left-2 h-2.5 w-2.5 rounded-full bg-zinc-900" />
            <h3 className="text-sm font-medium text-zinc-600">2021–2024</h3>
            <p className="text-lg font-semibold mt-0.5">Cloud/DevOps Engineer</p>
          </li>
          <li className="mb-8 ms-6">
            <span className="absolute -left-2 h-2.5 w-2.5 rounded-full bg-zinc-900" />
            <h3 className="text-sm font-medium text-zinc-600">2025–2027</h3>
            <p className="text-lg font-semibold mt-0.5">M.S. Engineering Management (UTA)</p>
          </li>
        </ol>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE.map((e) => (
            <div key={`${e.company}-${e.role}`} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-zinc-600">{e.period}</p>
              <p className="font-semibold mt-0.5 flex items-center gap-2"><Briefcase className="w-4 h-4" /> {e.role}</p>
              <p className="text-sm text-zinc-700">{e.company}</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                {e.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t) => (<Pill key={t}>{t}</Pill>))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
               className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition">
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition" />
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

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xl font-semibold">Let’s work together</p>
            <p className="text-zinc-600">Open to internships and projects in data/cloud.</p>
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white hover:opacity-90">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href={ME.linkedin} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 hover:shadow">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {ME.name}. Built with Next.js + Tailwind.
      </footer>
    </main>
  );
}
