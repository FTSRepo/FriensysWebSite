import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../../common/WhatsApp/WhatsAppButton";

const jobs = [
  {
    title: "ASP.NET Developer",
    location: "Remote / Hybrid",
    type: "Full Time",
    tag: "Backend",
    tagColor: "#4f46e5",
    description:
      "Build robust enterprise-grade web applications using ASP.NET Core, REST APIs, and SQL Server for our ERP product suite.",
    skills: ["ASP.NET Core", "C#", "SQL Server", "REST APIs"],
  },
  {
    title: "Full Stack Developer",
    location: "Bangalore, India",
    type: "Full Time",
    tag: "Full Stack",
    tagColor: "#0891b2",
    description:
      "Own end-to-end product features from database design to responsive UI using React, Node.js, and cloud-native tools.",
    skills: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    tag: "Frontend",
    tagColor: "#059669",
    description:
      "Craft pixel-perfect, high-performance UIs with React and Tailwind CSS. You care about accessibility and micro-interactions.",
    skills: ["React", "Tailwind CSS", "TypeScript", "Figma"],
  },
  {
    title: "Backend Developer",
    location: "Delhi NCR",
    type: "Full Time",
    tag: "Backend",
    tagColor: "#4f46e5",
    description:
      "Design scalable microservices and REST/GraphQL APIs. Work with distributed systems and optimize for performance.",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full Time",
    tag: "AI & ML",
    tagColor: "#9333ea",
    description:
      "Integrate LLMs and machine learning pipelines into our products. Work on NLP, recommendation engines, and smart automation.",
    skills: ["Python", "PyTorch", "LangChain", "OpenAI API"],
  },
  {
    title: "AWS Cloud Engineer",
    location: "Remote / Hybrid",
    type: "Full Time",
    tag: "Cloud",
    tagColor: "#d97706",
    description:
      "Architect and manage cloud infrastructure on AWS. Set up CI/CD pipelines, monitor systems, and ensure 99.9% uptime.",
    skills: ["AWS", "Terraform", "CI/CD", "Linux"],
  },
];

const benefits = [
  {
    icon: "🌐",
    title: "Remote-First Culture",
    desc: "Work from anywhere. We trust our team to deliver, not clock in.",
  },
  {
    icon: "📈",
    title: "Fast Career Growth",
    desc: "Clear paths to senior roles, mentorship from industry leaders.",
  },
  {
    icon: "🧠",
    title: "Learning Budget",
    desc: "Annual allowance for courses, certifications & conferences.",
  },
  {
    icon: "🤝",
    title: "Collaborative Teams",
    desc: "Small squads, big impact. Your voice is heard on day one.",
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    desc: "Market-beating salaries with performance bonuses.",
  },
  {
    icon: "🏖️",
    title: "Flexible Leave",
    desc: "Unlimited PTO policy. Rest is part of great work.",
  },
];

function TagBadge({ label, color }) {
  return (
    <span
      style={{
        backgroundColor: color + "1a",
        color: color,
        border: `1px solid ${color}40`,
      }}
      className="text-xs font-semibold px-3 py-1 rounded-full"
    >
      {label}
    </span>
  );
}

function JobCard({ job, index }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <TagBadge label={job.tag} color={job.tagColor} />
        <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mt-3 mb-1 group-hover:text-indigo-700 transition-colors">
        {job.title}
      </h3>

      {/* Location */}
      <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
        <span>📍</span> {job.location}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{job.description}</p>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {job.skills.map((s) => (
          <span
            key={s}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-4">
        <Link
          to="/apply"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:gap-3 transition-all duration-200"
        >
          Apply Now
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
            style={{ backgroundColor: job.tagColor }}
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

function Careers() {
  const [filter, setFilter] = useState("All");

  const tags = ["All", "Frontend", "Backend", "Full Stack", "AI & ML", "Cloud"];

  const filtered =
    filter === "All" ? jobs : jobs.filter((j) => j.tag === filter);

  return (
    <div className="bg-[#f8f9fc] text-gray-800 font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0f0f1a] text-white py-28 px-4 text-center">
        {/* Decorative blobs */}
        <div
          className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 rounded-full mb-6">
            We're Hiring
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
            Build the Future <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-8">
            Join a team of passionate engineers, designers, and dreamers building
            next-gen ERP & AI-powered solutions for education and enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-indigo-600/30"
            >
              See Open Roles
            </a>
            <Link
              to="/apply"
              className="border border-white/20 hover:border-white/40 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Reach Out
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "6+", label: "Open Positions" },
            { value: "Remote", label: "Work Mode" },
            { value: "Fast", label: "Career Growth" },
            { value: "Top 1%", label: "Team Culture" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-indigo-600">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Current Openings
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We're growing fast. Find a role that matches your skills and ambitions.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === t
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Job cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job, i) => (
            <JobCard key={job.title} job={job} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">No openings in this category right now.</p>
        )}
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Why Friensys Info Labs?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We don't just offer jobs. We build careers and life-long relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-300"
              >
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#0f0f1a] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">Our Hiring Process</h2>
          <p className="text-gray-400">Simple, transparent, and fast — usually within 2 weeks.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", label: "Apply", desc: "Submit your profile via our contact page." },
            { step: "02", label: "Screen", desc: "Quick 20-min intro call with our HR team." },
            { step: "03", label: "Assess", desc: "A small take-home task or technical round." },
            { step: "04", label: "Offer", desc: "Get your offer letter and join the team!" },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm mx-auto mb-3">
                {s.step}
              </div>
              <h4 className="font-bold text-white mb-1">{s.label}</h4>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 text-white text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Don't see a perfect fit?
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Send us your resume anyway. We're always open to exceptional talent.
        </p>
        <Link
          to="/apply"
          className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
        >
          Get In Touch →
        </Link>
      </section>

      <WhatsAppButton />
    </div>
  );
}

export default Careers;