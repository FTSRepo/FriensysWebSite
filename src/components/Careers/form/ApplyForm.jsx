import { useState } from "react";

const STEPS = [
  { id: 0, label: "Personal Info", icon: "👤", tagline: "Let's start with the basics.", sub: "Tell us who you are so we can reach you.", color: "#2563eb", accent: "#1d4ed8", tip: "Make sure your contact info is accurate — that's how we'll reach you." },
  { id: 1, label: "Education", icon: "🎓", tagline: "Your academic journey.", sub: "Share your educational background.", color: "#dc2626", accent: "#b91c1c", tip: "List your highest qualification first. Percentages help us assess fit." },
  { id: 2, label: "Experience", icon: "💼", tagline: "Your professional story.", sub: "Walk us through your work history.", color: "#d97706", accent: "#b45309", tip: "Focus on achievements, not just responsibilities. Numbers impress." },
  { id: 3, label: "Resume", icon: "📎", tagline: "Show us your work.", sub: "Upload your resume and online profiles.", color: "#2563eb", accent: "#1d4ed8", tip: "PDF format is preferred. Keep your resume under 2 pages." },
  { id: 4, label: "Review", icon: "✅", tagline: "Almost there!", sub: "Check everything before you submit.", color: "#16a34a", accent: "#15803d", tip: "Take a final look — you can't edit after submission!" },
];

const JOB_TITLES = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Product Manager", "Sales Executive", "Data Analyst", "DevOps Engineer"];

const INIT = {
  fullName: "", email: "", phone: "", dob: "", gender: "", address: "", city: "", state: "", pincode: "", applyingFor: "",
  degree: "", institution: "", graduationYear: "", percentage: "", twelthSchool: "", twelthYear: "", twelthPercentage: "", tenthSchool: "", tenthYear: "", tenthPercentage: "",
  experience: "", skills: "", company1: "", role1: "", duration1: "", desc1: "", company2: "", role2: "", duration2: "", desc2: "",
  linkedIn: "", portfolio: "", resumeName: "", coverLetter: "",
};

export default function App() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INIT);
  const [resumeFile, setRes] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSub] = useState(false);
  const [sending, setSending] = useState(false);
  const [exCount, setExCount] = useState(1);
  const [anim, setAnim] = useState(0);

  const cur = STEPS[step];
  const upd = (k, v) => { setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: "" })); };

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.fullName.trim()) e.fullName = "Required";
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
      if (!form.phone.match(/^\d{10}$/)) e.phone = "10-digit number";
      if (!form.dob) e.dob = "Required";
      if (!form.gender) e.gender = "Required";
      if (!form.applyingFor) e.applyingFor = "Required";
    }
    if (step === 1) {
      if (!form.degree.trim()) e.degree = "Required";
      if (!form.institution.trim()) e.institution = "Required";
      if (!form.graduationYear) e.graduationYear = "Required";
    }
    if (step === 3 && !resumeFile) e.resumeName = "Please upload your resume";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const next = () => { if (validate()) { setAnim(a => a + 1); setStep(s => s + 1); } };
  const back = () => { setAnim(a => a + 1); setStep(s => s - 1); };

  const handleSubmit = async () => {
    setSending(true);
    await new Promise(r => setTimeout(r, 1800));
    setSub(true); setSending(false);
  };

  const inp = (err) =>
    `w-full border-2 rounded-xl px-4 py-3 text-sm font-medium bg-white placeholder-gray-300 transition-all outline-none focus:ring-2 ${err ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-gray-200 hover:border-blue-300 focus:border-blue-500 focus:ring-blue-100"}`;

  if (submitted) return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", background: "#f0f4ff" }} className="min-h-screen flex items-center justify-center p-6">
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      <style>{`@keyframes pop{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}.pop{animation:pop 0.45s cubic-bezier(.22,1,.36,1) both}`}</style>
      <div className="pop bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md w-full border border-blue-100">
        <div className="relative inline-flex mb-8">
          <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-200" style={{ transform: "rotate(-6deg)" }}>
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-lg shadow-md" style={{ transform: "rotate(10deg)" }}>🎉</div>
        </div>
        <h2 style={{ fontFamily: "'Instrument Serif',serif" }} className="text-4xl font-bold text-gray-900 mb-3 leading-tight">Application<br /><em>Submitted!</em></h2>
        <p className="text-gray-500 mb-1">Thank you, <span className="font-bold text-blue-600">{form.fullName}</span>!</p>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">Your application for <span className="font-semibold text-red-500">{form.applyingFor}</span> is in. We'll review and reach out soon.</p>
        <button onClick={() => { setSub(false); setStep(0); setForm(INIT); setRes(null); }} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 transition-all">Apply Again</button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }} className="h-screen flex overflow-hidden bg-gray-100">
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeSlide{from{opacity:0;transform:translateX(22px)}to{opacity:1;transform:translateX(0)}}
        @keyframes sideIn{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:translateX(0)}}
        @keyframes floatY{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-14px) rotate(var(--r,0deg))}}
        .form-in{animation:fadeSlide 0.35s cubic-bezier(.22,1,.36,1) both}
        .side-in{animation:sideIn 0.4s cubic-bezier(.22,1,.36,1) both}
        .f1{animation:floatY 3s ease-in-out infinite;--r:15deg}
        .f2{animation:floatY 3.7s ease-in-out infinite 0.5s;--r:-10deg}
        .f3{animation:floatY 4.2s ease-in-out infinite 1s;--r:25deg}
        .f4{animation:floatY 3.3s ease-in-out infinite 1.5s;--r:-20deg}
        input[type=date]::-webkit-calendar-picker-indicator{opacity:0.4;cursor:pointer}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:99px}
        select option{color:#111827}
      `}</style>

      {/* ═══════════ LEFT SIDEBAR ═══════════ */}
      <div className="hidden lg:flex w-[340px] xl:w-[380px] 2xl:w-[420px] flex-shrink-0 flex-col h-full relative overflow-hidden"
        style={{ background: `linear-gradient(150deg,${cur.color} 0%,${cur.accent} 100%)`, transition: "background 0.6s ease" }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="g" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0L0 0 0 36" fill="none" stroke="white" strokeWidth="1" />
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
        <div className="f1 absolute top-16 right-8 w-24 h-24 rounded-3xl bg-white opacity-[0.08]" />
        <div className="f2 absolute top-48 left-6 w-14 h-14 rounded-2xl bg-white opacity-[0.08]" />
        <div className="f3 absolute bottom-36 right-5 w-18 h-18 rounded-full bg-white opacity-[0.08]" style={{ width: 72, height: 72 }} />
        <div className="f4 absolute bottom-16 left-8 w-10 h-10 rounded-xl bg-white opacity-[0.08]" />

        <div className="relative z-10 flex flex-col h-full px-8 py-9">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <span className="text-white font-black text-xs">FIL</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">Friensys Info Labs</p>
              <p className="text-white/50 text-xs mt-0.5">Career Portal</p>
            </div>
          </div>

          {/* Dynamic content */}
          <div className="side-in flex-1 flex flex-col justify-center gap-7" key={`s-${step}`}>
            <div>
              <div className="w-16 h-16 rounded-3xl bg-white/15 flex items-center justify-center text-3xl mb-5 shadow-2xl" style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}>
                {cur.icon}
              </div>
              <h2 style={{ fontFamily: "'Instrument Serif',serif" }} className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-2">{cur.tagline}</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">{cur.sub}</p>
            </div>

            {/* Steps */}
            <div className="space-y-2.5">
              {STEPS.map((s, i) => (
                <div key={i} className={`flex items-center gap-3 transition-all duration-300 ${i === step ? "opacity-100" : i < step ? "opacity-55" : "opacity-25"}`}>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all
                    ${i < step ? "bg-white text-blue-600 shadow" : i === step ? "bg-white/25 text-white ring-2 ring-white/50" : "bg-white/10 text-white/50"}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-sm font-semibold ${i === step ? "text-white" : i < step ? "text-white/75" : "text-white/35"}`}>{s.label}</span>
                  {i === step && <div className="ml-auto flex items-center gap-1.5 bg-yellow-400/20 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
                    <span className="text-yellow-200 text-xs font-bold">Now</span>
                  </div>}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full transition-all duration-700" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
              </div>
              <span className="text-white font-black text-sm">{Math.round((step / (STEPS.length - 1)) * 100)}%</span>
            </div>
          </div>

          {/* Tip */}
          <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
            <p className="text-white/80 text-xs leading-relaxed">
              <span className="text-yellow-300 font-bold">💡 </span>{cur.tip}
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════ RIGHT PANEL ═══════════ */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">

        {/* Top bar */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 xl:px-10 py-3.5 flex items-center justify-between shadow-sm">
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-400 font-medium">
            <span>Careers</span><span className="text-gray-300 mx-1">›</span>
            <span>Apply</span><span className="text-gray-300 mx-1">›</span>
            <span className="font-bold" style={{ color: cur.color }}>{cur.label}</span>
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-black" style={{ background: cur.color }}>FIL</div>
            <span className="font-bold text-gray-800 text-sm">Friensys Info Labs</span>
          </div>
          <div className="flex items-center gap-2">
            {STEPS.map((_, i) => (
              <div key={i} className="rounded-full transition-all duration-400"
                style={{ width: i === step ? 24 : 10, height: 10, background: i === step ? cur.color : i < step ? "#93c5fd" : "#e2e8f0" }} />
            ))}
          </div>
        </div>

        {/* Mobile step bar */}
        <div className="lg:hidden flex flex-shrink-0 bg-white px-4 pb-3 gap-1 border-b border-gray-100">
          {STEPS.map((_, i) => (
            <div key={i} className="h-1 flex-1 rounded-full" style={{ background: i < step ? "#3b82f6" : i === step ? cur.color : "#e2e8f0" }} />
          ))}
        </div>

        {/* ── Scrollable form ── */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="w-full h-full px-6 xl:px-10 2xl:px-14 py-7 xl:py-9 flex flex-col">

            {/* Header row */}
            <div className="flex items-start justify-between mb-6 flex-shrink-0">
              <div>
                <h1 style={{ fontFamily: "'Instrument Serif',serif" }} className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">{cur.label}</h1>
                <p className="text-gray-400 text-sm mt-1">{cur.sub}</p>
              </div>
              <div className="flex-shrink-0 w-13 h-13 rounded-2xl flex items-center justify-center text-2xl shadow-lg ml-4"
                style={{ width: 52, height: 52, background: `linear-gradient(135deg,${cur.color},${cur.accent})`, boxShadow: `0 8px 24px ${cur.color}40` }}>
                {cur.icon}
              </div>
            </div>

            {/* ─── FORM CONTENT ─── */}
            <div className="form-in flex-1" key={`f-${anim}`}>

              {/* STEP 0 — Personal */}
              {step === 0 && (
                <div className="space-y-5">
                  <Card label="Basic Information" dot="#2563eb">
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                      <F label="Full Name *" err={errors.fullName}>
                        <input className={inp(errors.fullName)} placeholder="Rahul Sharma" value={form.fullName} onChange={e => upd("fullName", e.target.value)} />
                      </F>
                      <F label="Email Address *" err={errors.email}>
                        <input className={inp(errors.email)} type="email" placeholder="rahul@email.com" value={form.email} onChange={e => upd("email", e.target.value)} />
                      </F>
                      <F label="Phone Number *" err={errors.phone}>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-blue-600 border-r-2 border-gray-200 pr-2.5">+91</span>
                          <input className={`${inp(errors.phone)} pl-14`} placeholder="10-digit mobile" maxLength={10} value={form.phone} onChange={e => upd("phone", e.target.value.replace(/\D/, ""))} />
                        </div>
                      </F>
                      <F label="Date of Birth *" err={errors.dob}>
                        <input className={inp(errors.dob)} type="date" value={form.dob} onChange={e => upd("dob", e.target.value)} />
                      </F>
                      <F label="Gender *" err={errors.gender}>
                        <select className={inp(errors.gender)} value={form.gender} onChange={e => upd("gender", e.target.value)}>
                          <option value="">Select gender</option>
                          <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                        </select>
                      </F>
                      <F label="Applying For *" err={errors.applyingFor}>
                        <select className={inp(errors.applyingFor)} value={form.applyingFor} onChange={e => upd("applyingFor", e.target.value)}>
                          <option value="">Select position</option>
                          {JOB_TITLES.map(j => <option key={j}>{j}</option>)}
                        </select>
                      </F>
                    </div>
                  </Card>

                  <Card label="Address Details" dot="#dc2626">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                      <div className="col-span-2 xl:col-span-4">
                        <F label="Street Address">
                          <input className={inp()} placeholder="House no., Street, Area, Landmark" value={form.address} onChange={e => upd("address", e.target.value)} />
                        </F>
                      </div>
                      <F label="City"><input className={inp()} placeholder="City" value={form.city} onChange={e => upd("city", e.target.value)} /></F>
                      <F label="State"><input className={inp()} placeholder="State" value={form.state} onChange={e => upd("state", e.target.value)} /></F>
                      <F label="Pincode"><input className={inp()} placeholder="6-digit pincode" maxLength={6} value={form.pincode} onChange={e => upd("pincode", e.target.value.replace(/\D/, ""))} /></F>
                    </div>
                  </Card>
                </div>
              )}

              {/* STEP 1 — Education */}
              {step === 1 && (
                <div className="space-y-5">
                  <Card label="Graduation / Post-Graduation" dot="#2563eb" badge="Highest Qualification">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                      <div className="col-span-2">
                        <F label="Degree / Course *" err={errors.degree}>
                          <input className={inp(errors.degree)} placeholder="B.Tech Computer Science, MBA, MCA..." value={form.degree} onChange={e => upd("degree", e.target.value)} />
                        </F>
                      </div>
                      <div className="col-span-2">
                        <F label="Institution Name *" err={errors.institution}>
                          <input className={inp(errors.institution)} placeholder="University / College name" value={form.institution} onChange={e => upd("institution", e.target.value)} />
                        </F>
                      </div>
                      <F label="Year of Graduation *" err={errors.graduationYear}>
                        <input className={inp(errors.graduationYear)} type="number" placeholder="2023" value={form.graduationYear} onChange={e => upd("graduationYear", e.target.value)} />
                      </F>
                      <F label="CGPA / Percentage">
                        <input className={inp()} placeholder="8.5 or 85%" value={form.percentage} onChange={e => upd("percentage", e.target.value)} />
                      </F>
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <Card label="12th Standard" dot="#dc2626" badge="Higher Secondary">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <F label="School Name"><input className={inp()} placeholder="School name" value={form.twelthSchool} onChange={e => upd("twelthSchool", e.target.value)} /></F>
                        </div>
                        <F label="Year of Passing"><input className={inp()} type="number" placeholder="2019" value={form.twelthYear} onChange={e => upd("twelthYear", e.target.value)} /></F>
                        <F label="Percentage"><input className={inp()} placeholder="88%" value={form.twelthPercentage} onChange={e => upd("twelthPercentage", e.target.value)} /></F>
                      </div>
                    </Card>
                    <Card label="10th Standard" dot="#d97706" badge="Secondary">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <F label="School Name"><input className={inp()} placeholder="School name" value={form.tenthSchool} onChange={e => upd("tenthSchool", e.target.value)} /></F>
                        </div>
                        <F label="Year of Passing"><input className={inp()} type="number" placeholder="2017" value={form.tenthYear} onChange={e => upd("tenthYear", e.target.value)} /></F>
                        <F label="Percentage"><input className={inp()} placeholder="90%" value={form.tenthPercentage} onChange={e => upd("tenthPercentage", e.target.value)} /></F>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {/* STEP 2 — Experience */}
              {step === 2 && (
                <div className="space-y-5">
                  <Card label="Overall Profile" dot="#d97706">
                    <div className="grid grid-cols-2 gap-5">
                      <F label="Total Experience">
                        <select className={inp()} value={form.experience} onChange={e => upd("experience", e.target.value)}>
                          <option value="">Select level</option>
                          <option>Fresher (0 years)</option><option>0–1 year</option><option>1–2 years</option>
                          <option>2–5 years</option><option>5–10 years</option><option>10+ years</option>
                        </select>
                      </F>
                      <F label="Key Skills">
                        <input className={inp()} placeholder="React, Node.js, Figma, Python, AWS..." value={form.skills} onChange={e => upd("skills", e.target.value)} />
                      </F>
                    </div>
                  </Card>

                  {[1, 2].slice(0, exCount).map(idx => (
                    <div key={idx} className="rounded-2xl border-2 overflow-hidden"
                      style={{ borderColor: idx === 1 ? "#bfdbfe" : "#fde68a" }}>
                      <div className="px-5 py-3.5 flex items-center gap-3 border-b"
                        style={{ borderColor: idx === 1 ? "#bfdbfe" : "#fde68a", background: idx === 1 ? "#eff6ff" : "#fffbeb" }}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-white text-xs"
                          style={{ background: idx === 1 ? "#2563eb" : "#d97706" }}>{idx}</div>
                        <span className="font-bold text-sm" style={{ color: idx === 1 ? "#1e40af" : "#92400e" }}>
                          {idx === 1 ? "Most Recent Position" : "Previous Position"}
                        </span>
                        {idx === 2 && <button onClick={() => setExCount(1)} className="ml-auto text-xs text-red-400 hover:text-red-600 font-bold">✕ Remove</button>}
                      </div>
                      <div className="p-5 bg-white">
                        <div className="grid grid-cols-3 gap-5 mb-4">
                          <F label="Company Name"><input className={inp()} placeholder="Company" value={form[`company${idx}`]} onChange={e => upd(`company${idx}`, e.target.value)} /></F>
                          <F label="Job Title"><input className={inp()} placeholder="Software Engineer" value={form[`role${idx}`]} onChange={e => upd(`role${idx}`, e.target.value)} /></F>
                          <F label="Duration"><input className={inp()} placeholder="Jan 2022 – Mar 2024" value={form[`duration${idx}`]} onChange={e => upd(`duration${idx}`, e.target.value)} /></F>
                        </div>
                        <F label="Key Responsibilities & Achievements">
                          <textarea className={`${inp()} resize-none`} rows={3} placeholder="What did you build, lead, or improve? Mention measurable outcomes..." value={form[`desc${idx}`]} onChange={e => upd(`desc${idx}`, e.target.value)} />
                        </F>
                      </div>
                    </div>
                  ))}

                  {exCount < 2 && (
                    <button onClick={() => setExCount(2)} className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-blue-300 hover:border-blue-400 text-blue-500 hover:bg-blue-50 rounded-2xl py-4 text-sm font-bold transition-all">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center font-black text-lg leading-none">+</span>
                      Add Another Position
                    </button>
                  )}
                </div>
              )}

              {/* STEP 3 — Resume */}
              {step === 3 && (
                <div className="space-y-5">
                  <F label="Resume / CV *" err={errors.resumeName}>
                    <label className={`flex items-center gap-6 border-2 border-dashed rounded-2xl px-8 py-8 cursor-pointer transition-all group
                      ${errors.resumeName ? "border-red-400 bg-red-50" : "border-blue-200 hover:border-blue-400 hover:bg-blue-50/50 bg-blue-50/20"}`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-all shadow-sm
                        ${resumeFile ? "bg-blue-600 text-white shadow-blue-200" : "bg-white border-2 border-blue-200 group-hover:border-blue-400"}`}>
                        {resumeFile ? "✓" : "📄"}
                      </div>
                      <div className="flex-1 min-w-0">
                        {resumeFile
                          ? <><p className="font-bold text-blue-600">{resumeFile.name}</p><p className="text-xs text-gray-400 mt-1">Click to replace file</p></>
                          : <><p className="font-bold text-gray-700">Drop your resume here or click to browse</p><p className="text-xs text-gray-400 mt-1">Accepted: PDF, DOC, DOCX — Max file size: 5MB</p></>
                        }
                      </div>
                      <span className="text-xs font-bold px-5 py-2.5 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                        style={{ background: cur.color }}>Browse Files</span>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => { const f = e.target.files[0]; if (f) { setRes(f); upd("resumeName", f.name); } }} />
                    </label>
                    {errors.resumeName && <p className="text-red-500 text-xs mt-1.5 font-semibold">⚠ {errors.resumeName}</p>}
                  </F>

                  <Card label="Online Profiles" dot="#2563eb">
                    <div className="grid grid-cols-2 gap-5">
                      <F label="LinkedIn Profile URL">
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] font-black text-white bg-blue-600 rounded px-1 py-0.5 leading-none">in</span>
                          <input className={`${inp()} pl-10`} placeholder="linkedin.com/in/yourprofile" value={form.linkedIn} onChange={e => upd("linkedIn", e.target.value)} />
                        </div>
                      </F>
                      <F label="Portfolio / GitHub URL">
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm">🔗</span>
                          <input className={`${inp()} pl-9`} placeholder="github.com/you or yoursite.com" value={form.portfolio} onChange={e => upd("portfolio", e.target.value)} />
                        </div>
                      </F>
                    </div>
                  </Card>

                  <Card label="Cover Letter" dot="#d97706" badge="Optional">
                    <textarea className={`${inp()} resize-none w-full`} rows={5}
                      placeholder="Tell us why you're excited about this role and what makes you a great fit for the team..."
                      value={form.coverLetter} onChange={e => upd("coverLetter", e.target.value.slice(0, 1000))} />
                    <p className="text-right text-xs text-gray-400 mt-1.5">{form.coverLetter.length}/1000</p>
                  </Card>
                </div>
              )}

              {/* STEP 4 — Review */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="flex gap-3 items-start bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
                    <span className="text-xl flex-shrink-0">⚠️</span>
                    <p className="text-sm font-semibold text-yellow-800">Review carefully before submitting. Use ← Back to make any changes.</p>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {[
                      { title: "Personal Information", icon: "👤", color: "#2563eb", rows: [["Full Name", form.fullName], ["Email", form.email], ["Phone", `+91 ${form.phone}`], ["Date of Birth", form.dob], ["Gender", form.gender], ["Applying For", form.applyingFor], ["Location", [form.city, form.state, form.pincode].filter(Boolean).join(", ")]] },
                      { title: "Education", icon: "🎓", color: "#dc2626", rows: [["Degree", form.degree], ["Institution", form.institution], ["Grad Year", form.graduationYear], ["CGPA/Percentage", form.percentage], ["12th School", form.twelthSchool], ["12th Year", form.twelthYear], ["10th School", form.tenthSchool], ["10th Year", form.tenthYear]] },
                      { title: "Work Experience", icon: "💼", color: "#d97706", rows: [["Experience", form.experience], ["Skills", form.skills], ["Recent Company", form.company1], ["Role", form.role1], ["Duration", form.duration1]] },
                      { title: "Resume & Links", icon: "📎", color: "#2563eb", rows: [["Resume", form.resumeName], ["LinkedIn", form.linkedIn], ["Portfolio", form.portfolio], ["Cover Letter", form.coverLetter ? "Provided ✓" : "Not provided"]] },
                    ].map(s => (
                      <div key={s.title} className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: `${s.color}25` }}>
                        <div className="px-5 py-3 flex items-center gap-2" style={{ background: s.color }}>
                          <span>{s.icon}</span>
                          <h3 className="font-bold text-white text-sm">{s.title}</h3>
                          <span className="ml-auto text-white/70 text-xs">{s.rows.filter(([, v]) => v).length} entries</span>
                        </div>
                        <div className="divide-y divide-gray-100 bg-white">
                          {s.rows.filter(([, v]) => v).map(([l, v]) => (
                            <div key={l} className="px-5 py-2.5 flex gap-4 items-baseline text-sm">
                              <span className="text-gray-400 text-xs font-bold uppercase tracking-wide w-28 flex-shrink-0">{l}</span>
                              <span className="text-gray-800 font-semibold break-all">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed bg-gray-50 border border-gray-200 rounded-xl p-4">
                    By clicking <strong>Submit Application</strong>, you confirm all information is accurate and consent to processing your personal data for recruitment purposes.
                  </p>
                </div>
              )}
            </div>

            {/* ── NAVIGATION ── */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-200 flex-shrink-0">
              <button onClick={back} disabled={step === 0}
                className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-sm transition-all
                  ${step === 0 ? "invisible" : "bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md active:scale-95"}`}>
                ← Back
              </button>
              <div className="flex items-center gap-1.5">
                {STEPS.map((_, i) => (
                  <div key={i} className="rounded-full transition-all duration-400"
                    style={{ width: i === step ? 28 : 8, height: 8, background: i === step ? cur.color : i < step ? "#93c5fd" : "#e2e8f0" }} />
                ))}
              </div>
              {step < 4
                ? <button onClick={next}
                  className="flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-sm text-white transition-all shadow-lg hover:scale-[1.02] active:scale-[0.97]"
                  style={{ background: `linear-gradient(135deg,${cur.color},${cur.accent})`, boxShadow: `0 8px 24px ${cur.color}45` }}>
                  Continue →
                </button>
                : <button onClick={handleSubmit} disabled={sending}
                  className="flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-sm text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200 transition-all hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending
                    ? <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Submitting...</>
                    : "Submit Application 🚀"
                  }
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function F({ label, err, children }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      {children}
      {err && <p className="text-red-500 text-xs mt-1 font-semibold">⚠ {err}</p>}
    </div>
  );
}

function Card({ label, dot, badge, children }) {
  return (
    <div className="rounded-2xl border-2 border-gray-100 overflow-hidden bg-white shadow-sm">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2.5" style={{ background: `${dot}08` }}>
        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: dot }} />
        <span className="text-xs font-black uppercase tracking-widest" style={{ color: dot }}>{label}</span>
        {badge && <span className="ml-auto text-xs font-semibold bg-white border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-500">{badge}</span>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}