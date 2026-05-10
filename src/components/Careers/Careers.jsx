import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../../common/WhatsApp/WhatsAppButton";

const jobs = [
  {
    title: "ASP.NET Developer",
    location: "Remote",
    type: "Full Time",
    tag: "Backend",
    tagColor: "#4f46e5",
    description: "Build enterprise-grade web apps using ASP.NET Core, REST APIs, and SQL Server for our ERP suite.",
    skills: ["ASP.NET Core", "C#", "SQL Server", "REST APIs"],
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full Time",
    tag: "Full Stack",
    tagColor: "#0891b2",
    description: "Own end-to-end features from database design to responsive UI using React, Node.js, and cloud tools.",
    skills: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    tag: "Frontend",
    tagColor: "#059669",
    description: "Craft pixel-perfect, high-performance UIs with React and Tailwind CSS.",
    skills: ["React", "Tailwind CSS", "TypeScript", "Figma"],
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full Time",
    tag: "Backend",
    tagColor: "#4f46e5",
    description: "Design scalable microservices and REST/GraphQL APIs optimized for performance.",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full Time",
    tag: "AI & ML",
    tagColor: "#9333ea",
    description: "Integrate LLMs and ML pipelines into our products — NLP, recommendations, and smart automation.",
    skills: ["Python", "PyTorch", "LangChain", "OpenAI API"],
  },
  {
    title: "AWS Cloud Engineer",
    location: "Remote",
    type: "Full Time",
    tag: "Cloud",
    tagColor: "#d97706",
    description: "Architect and manage cloud infrastructure on AWS. Set up CI/CD pipelines and ensure 99.9% uptime.",
    skills: ["AWS", "Terraform", "CI/CD", "Linux"],
  },
];

const internships = [
  {
    title: "Software Development Intern",
    location: "Remote",
    type: "6 months",
    tag: "Engineering",
    tagColor: "#0891b2",
    description: "Work on real product features alongside senior engineers. Hands-on experience across our ERP suite.",
    skills: ["React / Node.js", "Git", "REST APIs"],
  },
  {
    title: "UI/UX Design Intern",
    location: "Remote",
    type: "6 months",
    tag: "Design",
    tagColor: "#7c3aed",
    description: "Design intuitive interfaces for education and enterprise products — wireframes to shipped screens.",
    skills: ["Figma", "Design Systems", "User Research"],
  },
  {
    title: "Business Development Intern",
    location: "Remote",
    type: "3 months",
    tag: "Business",
    tagColor: "#059669",
    description: "Assist with client outreach and support the sales pipeline for our SaaS products.",
    skills: ["Market Research", "CRM Tools", "Communication"],
  },
  {
    title: "Marketing & Content Intern",
    location: "Remote",
    type: "3 months",
    tag: "Marketing",
    tagColor: "#d97706",
    description: "Create content for social media, blogs, and campaigns. Learn B2B marketing in a fast-moving company.",
    skills: ["Content Writing", "Social Media", "Canva / Adobe"],
  },
];

const benefits = [
  { icon: "🌐", title: "Remote-First", desc: "Work from anywhere. We trust our team to deliver." },
  { icon: "📈", title: "Fast Growth", desc: "Clear paths to senior roles with mentorship." },
  { icon: "🧠", title: "Learning Budget", desc: "Annual allowance for courses and certifications." },
  { icon: "🤝", title: "Small Teams", desc: "Small squads, big impact. Your voice is heard." },
  { icon: "💰", title: "Competitive Pay", desc: "Market-rate salaries with performance bonuses." },
  { icon: "🏖️", title: "Flexible Leave", desc: "Unlimited PTO — rest is part of great work." },
];

function TagBadge({ label, color }) {
  return (
    <span
      style={{ backgroundColor: color + "15", color, border: `1px solid ${color}30` }}
      className="text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
    >
      {label}
    </span>
  );
}

function InternCard({ job }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:shadow-sm transition-all duration-200 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <TagBadge label={job.tag} color={job.tagColor} />
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{job.type}</span>
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-1">{job.title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed mb-3 flex-1">{job.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills.map((s) => (
          <span key={s} className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded">
            {s}
          </span>
        ))}
      </div>
      <Link
        to="/apply"
        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group w-fit"
      >
        Apply Now
        <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </Link>
    </div>
  );
}

function JobRow({ job }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition-colors group">
      <TagBadge label={job.tag} color={job.tagColor} />
      <span className="flex-1 font-medium text-gray-800 text-sm group-hover:text-indigo-700 transition-colors truncate">
        {job.title}
      </span>
      <div className="hidden md:flex items-center gap-4 text-xs text-gray-400 flex-shrink-0">
        <span>📍 {job.location}</span>
        <span className="bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{job.type}</span>
      </div>
      <Link
        to="/apply"
        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 flex-shrink-0"
      >
        Apply →
      </Link>
    </div>
  );
}

function Careers() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Frontend", "Backend", "Full Stack", "AI & ML", "Cloud"];
  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.tag === filter);

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* ── HERO ── */}
      <section className="border-b border-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-5">
            We're Hiring
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Join Friensys Info Labs.<br />
            <span className="text-indigo-600">Build what matters.</span>
          </h1>
          <p className="text-gray-500 text-base max-w-xl mb-8 leading-relaxed">
            We build ERP &amp; AI-powered solutions for education and enterprise. Join our remote-first team of engineers, designers, and builders.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#internships"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              View Internships
            </a>
            <a
              href="#openings"
              className="border border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              View Openings
            </a>
          </div>
        </div>
      </section>

      {/* ── INTERNSHIP PROGRAM ── */}
      <section id="internships" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full">
              Internship Program
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-1">Start your journey here</h2>
            <p className="text-gray-500 text-sm">Real work, real mentorship, and a shot at a full-time role.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {internships.map((job) => (
              <InternCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="px-6 py-16 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Current Openings</h2>
            <p className="text-gray-500 text-sm">Full-time, remote positions across our product teams.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === t
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            {filtered.map((job) => (
              <JobRow key={job.title} job={job} />
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-gray-400 py-10 text-sm">No openings in this category right now.</p>
            )}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Why Friensys Info Labs?</h2>
          <p className="text-gray-500 text-sm mb-8">We don't just offer jobs — we build careers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-indigo-100 hover:bg-indigo-50/20 transition-colors"
              >
                <span className="text-lg flex-shrink-0 leading-none mt-0.5">{b.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{b.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-6 py-14 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Our Hiring Process</h2>
          <p className="text-gray-500 text-sm mb-10">Simple and fast — usually within 2 weeks.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Apply", desc: "Submit your profile." },
              { step: "02", label: "Screen", desc: "20-min intro call." },
              { step: "03", label: "Assess", desc: "Task or technical round." },
              { step: "04", label: "Offer", desc: "Join the team!" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold text-xs mx-auto mb-3">
                  {s.step}
                </div>
                <p className="font-semibold text-gray-800 text-sm">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-14 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Don't see the right fit?</h2>
          <p className="text-gray-500 text-sm mb-6">Send us your resume — we're always open to exceptional people.</p>
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg text-sm font-semibold transition-colors inline-block"
          >
            Get In Touch →
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default Careers;
