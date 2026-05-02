import { useState } from "react";
import emailjs from "@emailjs/browser";

const STEPS = [
  { id: 0, label: "Personal Info", icon: "👤", tagline: "Let's start with the basics.", sub: "Tell us who you are so we can reach you.", tip: "Make sure your contact info is accurate — that's how we'll reach you." },
  { id: 1, label: "Education", icon: "🎓", tagline: "Your academic journey.", sub: "Share your educational background.", tip: "List your highest qualification first. Percentages help us assess fit." },
  { id: 2, label: "Experience", icon: "💼", tagline: "Your professional story.", sub: "Walk us through your work history.", tip: "Focus on achievements, not just responsibilities. Numbers impress." },
  { id: 3, label: "Resume", icon: "📎", tagline: "Show us your work.", sub: "Upload your resume and online profiles.", tip: "PDF format is preferred. Keep your resume under 2 pages." },
  { id: 4, label: "Review", icon: "✅", tagline: "Almost there!", sub: "Check everything before you submit.", tip: "Take a final look — you can't edit after submission!" },
];

const JOB_TITLES = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Product Manager", "Sales Executive", "Data Analyst", "DevOps Engineer"];

const INIT = {
  fullName: "", email: "", phone: "", dob: "", gender: "", address: "", city: "", state: "", pincode: "", applyingFor: "",
  degree: "", institution: "", graduationYear: "", percentage: "", twelthSchool: "", twelthYear: "", twelthPercentage: "", tenthSchool: "", tenthYear: "", tenthPercentage: "",
  experience: "", skills: "", company1: "", role1: "", duration1: "", desc1: "", company2: "", role2: "", duration2: "", desc2: "",
  linkedIn: "", portfolio: "", resumeName: "", coverLetter: "",
};

const STEP_COLORS = ["#f97316", "#10b981", "#8b5cf6", "#0ea5e9", "#f59e0b"];
const STEP_BGHUES = ["#fff7ed", "#f0fdf4", "#faf5ff", "#f0f9ff", "#fffbeb"];

export default function App() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INIT);
  const [resumeFile, setRes] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSub] = useState(false);
  const [sending, setSending] = useState(false);
  const [exCount, setExCount] = useState(1);
  const [anim, setAnim] = useState(0);
  const [emailErr, setEmailErr] = useState("");

  const cur = STEPS[step];
  const accent = STEP_COLORS[step];
  const bgHue = STEP_BGHUES[step];
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

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
  });

  const handleSubmit = async () => {
    setSending(true); setEmailErr("");
    try {
      const CLOUD_NAME = "dc6lwce9v";
      const UPLOAD_PRESET = "godedl0o";

      const cloudData = new FormData();
      cloudData.append("file", resumeFile);
      cloudData.append("upload_preset", UPLOAD_PRESET);
      cloudData.append("resource_type", "raw");
      cloudData.append(
        "public_id",
        `resumes/${form.fullName.replace(/\s+/g, "_")}_${Date.now()}`  // ✅ fixed regex
      );

      const cloudRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
        { method: "POST", body: cloudData }
      );
      const cloudJson = await cloudRes.json();
      console.log("Cloudinary response:", cloudJson); // check this

      if (!cloudJson.secure_url) {
        throw new Error("Resume upload failed: " + JSON.stringify(cloudJson.error));
      }

      // ✅ Use direct URL — opens PDF in browser when clicked
      const resumeLink = cloudJson.secure_url;

      const params = {
        from_name: form.fullName, from_email: form.email, phone: form.phone,
        dob: form.dob, gender: form.gender, applying_for: form.applyingFor,
        address: [form.address, form.city, form.state, form.pincode].filter(Boolean).join(", "),
        degree: form.degree, institution: form.institution,
        graduation_year: form.graduationYear, percentage: form.percentage,
        school_12: form.twelthSchool, year_12: form.twelthYear, pct_12: form.twelthPercentage,
        school_10: form.tenthSchool, year_10: form.tenthYear, pct_10: form.tenthPercentage,
        experience: form.experience, skills: form.skills,
        company1: form.company1, role1: form.role1,
        duration1: form.duration1, desc1: form.desc1,
        company2: form.company2 || "N/A", role2: form.role2 || "N/A",
        duration2: form.duration2 || "N/A", desc2: form.desc2 || "N/A",
        linkedin: form.linkedIn || "Not provided",
        portfolio: form.portfolio || "Not provided",
        resume_name: form.resumeName,
        resume_link: resumeLink,
        cover_letter: form.coverLetter || "Not provided",
      };

      // Email to recruiter
      await emailjs.send("service_ww3r4e9", "template_s8emooe", params, "YiFWBOxZLFWmPajed");

      // Confirmation email to candidate
      await emailjs.send("service_ww3r4e9", "template_oiebjy1", {
        to_email: form.email,
        candidate_name: form.fullName,
        applying_for: form.applyingFor,
        test_link: "https://forms.gle/vXdVth26W3SCGpPp6",
      }, "YiFWBOxZLFWmPajed");

      setSub(true);
    } catch (err) {
      console.error("Submit error:", err);
      setEmailErr("Submission failed: " + err.message);
    } finally {
      setSending(false);
    }
  };

  const inp = (err) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm bg-white placeholder-gray-300 transition-all outline-none focus:ring-2 ${err
      ? "border-red-300 focus:border-red-400 focus:ring-red-50"
      : "border-gray-200 hover:border-gray-300 focus:ring-2"} focus:ring-[${accent}20] focus:border-[${accent}]`;

  const inputCls = (err) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm bg-white placeholder-gray-300 transition-all outline-none ${err
      ? "border-red-300 ring-1 ring-red-200"
      : "border-gray-200 hover:border-gray-300 focus:border-current focus:ring-2 focus:ring-current/10"}`;

  if (submitted) return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: "linear-gradient(135deg,#fef3c7 0%,#fde68a 50%,#fbbf24 100%)" }} className="min-h-screen flex items-center justify-center p-6">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      <style>{`@keyframes pop{from{opacity:0;transform:scale(0.8) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}.pop{animation:pop 0.5s cubic-bezier(.34,1.56,.64,1) both}`}</style>
      <div className="pop bg-white rounded-3xl shadow-2xl p-12 text-center max-w-sm w-full">
        <div className="w-20 h-20 rounded-2xl bg-amber-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-200">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif" }} className="text-3xl font-bold text-gray-900 mb-2 italic">All Done!</h2>
        <p className="text-gray-500 text-sm mb-1">Thank you, <span className="font-semibold text-gray-800">{form.fullName}</span></p>
        <p className="text-gray-400 text-xs mb-8">Your application for <span className="font-semibold text-amber-500">{form.applyingFor}</span> is submitted. We'll be in touch!</p>
        <button onClick={() => { setSub(false); setStep(0); setForm(INIT); setRes(null); }}
          className="bg-amber-400 hover:bg-amber-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md">
          Apply Again
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: "#f8f7f4" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .slide-up{animation:slideUp 0.35s cubic-bezier(.22,1,.36,1) both}
        .fade-in{animation:fadeIn 0.3s ease both}
        input,select,textarea{font-family:inherit}
        input:focus,select:focus,textarea:focus{outline:none}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:99px}
        select option{color:#111}
      `}</style>

      {/* ── TOP HEADER ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-white" style={{ background: accent }}>
              FIL
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-none">Friensys Info Labs</p>
              <p className="text-gray-400 text-xs mt-0.5">Career Portal</p>
            </div>
          </div>

          {/* Step pill tabs */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-full p-1">
            {STEPS.map((s, i) => (
              <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${i === step ? "bg-white shadow text-gray-800" : i < step ? "text-gray-500" : "text-gray-400"}`}>
                {i < step ? <span style={{ color: STEP_COLORS[i] }}>✓</span> : null}
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="text-xs font-semibold text-gray-400">
            Step {step + 1} of {STEPS.length}
          </div>
        </div>

        {/* Colored progress line */}
        <div className="h-0.5 bg-gray-100">
          <div className="h-full transition-all duration-700 rounded-full" style={{ width: `${(step / (STEPS.length - 1)) * 100}%`, background: accent }} />
        </div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">

        {/* ─── LEFT SIDEBAR ─── */}
        <aside className="hidden lg:flex flex-col gap-4 w-80 flex-shrink-0 pt-2">
          {/* Step indicator card */}
          <div className="rounded-2xl p-5 sticky top-24" style={{ background: bgHue }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-white shadow-sm">
              {cur.icon}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: accent }} className="text-xl font-bold italic leading-tight mb-1">{cur.tagline}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{cur.sub}</p>

            <div className="mt-5 pt-4 border-t border-black/5">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="font-bold" style={{ color: accent }}>Tip: </span>{cur.tip}
              </p>
            </div>
          </div>

          {/* Mini step list */}
          <div className="flex flex-col gap-1.5">
            {STEPS.map((s, i) => (
              <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${i === step ? "bg-white shadow-sm" : ""}`}>
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0`}
                  style={{ background: i < step ? STEP_COLORS[i] : i === step ? accent : "#e5e7eb", color: i <= step ? "white" : "#9ca3af" }}>
                  {i < step ? "✓" : i + 1}
                </div>
                <span className={`text-xs font-semibold ${i === step ? "text-gray-800" : i < step ? "text-gray-500" : "text-gray-400"}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ─── FORM AREA ─── */}
        <main className="flex-1 min-w-0">
          {/* Page heading */}
          <div className="mb-6 slide-up" key={`h-${step}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Step {step + 1}</span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-400">{cur.label}</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif" }} className="text-3xl font-bold text-gray-900 italic">{cur.tagline}</h1>
          </div>

          {/* ─── FORM CONTENT ─── */}
          <div className="slide-up" key={`f-${anim}`}>

            {/* STEP 0 */}
            {step === 0 && (
              <div className="space-y-4">
                <Section title="Basic Information" accent={accent}>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <Field label="Full Name *" err={errors.fullName} accent={accent}>
                      <input className={inputCls(errors.fullName)} placeholder="Rahul Sharma" value={form.fullName} onChange={e => upd("fullName", e.target.value)} style={focusStyle(accent)} />
                    </Field>
                    <Field label="Email Address *" err={errors.email} accent={accent}>
                      <input className={inputCls(errors.email)} type="email" placeholder="rahul@email.com" value={form.email} onChange={e => upd("email", e.target.value)} style={focusStyle(accent)} />
                    </Field>
                    <Field label="Phone Number *" err={errors.phone} accent={accent}>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 border-r border-gray-200 pr-2">+91</span>
                        <input className={`${inputCls(errors.phone)} pl-12`} placeholder="10-digit mobile" maxLength={10} value={form.phone} onChange={e => upd("phone", e.target.value.replace(/\D/, ""))} style={focusStyle(accent)} />
                      </div>
                    </Field>
                    <Field label="Date of Birth *" err={errors.dob} accent={accent}>
                      <input className={inputCls(errors.dob)} type="date" value={form.dob} onChange={e => upd("dob", e.target.value)} style={focusStyle(accent)} />
                    </Field>
                    <Field label="Gender *" err={errors.gender} accent={accent}>
                      <select className={inputCls(errors.gender)} value={form.gender} onChange={e => upd("gender", e.target.value)} style={focusStyle(accent)}>
                        <option value="">Select gender</option>
                        <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                      </select>
                    </Field>
                    <Field label="Applying For *" err={errors.applyingFor} accent={accent}>
                      <select className={inputCls(errors.applyingFor)} value={form.applyingFor} onChange={e => upd("applyingFor", e.target.value)} style={focusStyle(accent)}>
                        <option value="">Select position</option>
                        {JOB_TITLES.map(j => <option key={j}>{j}</option>)}
                      </select>
                    </Field>
                  </div>
                </Section>

                <Section title="Address Details" accent="#10b981">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="col-span-full">
                      <Field label="Street Address" accent="#10b981">
                        <input className={inputCls()} placeholder="House no., Street, Area, Landmark" value={form.address} onChange={e => upd("address", e.target.value)} style={focusStyle("#10b981")} />
                      </Field>
                    </div>
                    <Field label="City" accent="#10b981"><input className={inputCls()} placeholder="City" value={form.city} onChange={e => upd("city", e.target.value)} style={focusStyle("#10b981")} /></Field>
                    <Field label="State" accent="#10b981"><input className={inputCls()} placeholder="State" value={form.state} onChange={e => upd("state", e.target.value)} style={focusStyle("#10b981")} /></Field>
                    <Field label="Pincode" accent="#10b981"><input className={inputCls()} placeholder="6-digit pincode" maxLength={6} value={form.pincode} onChange={e => upd("pincode", e.target.value.replace(/\D/, ""))} style={focusStyle("#10b981")} /></Field>
                  </div>
                </Section>
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <Section title="Graduation / Post-Graduation" accent={accent} badge="Highest Qualification">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <Field label="Degree / Course *" err={errors.degree} accent={accent}>
                        <input className={inputCls(errors.degree)} placeholder="B.Tech Computer Science, MBA, MCA..." value={form.degree} onChange={e => upd("degree", e.target.value)} style={focusStyle(accent)} />
                      </Field>
                    </div>
                    <div className="col-span-2">
                      <Field label="Institution Name *" err={errors.institution} accent={accent}>
                        <input className={inputCls(errors.institution)} placeholder="University / College name" value={form.institution} onChange={e => upd("institution", e.target.value)} style={focusStyle(accent)} />
                      </Field>
                    </div>
                    <Field label="Year of Graduation *" err={errors.graduationYear} accent={accent}>
                      <input className={inputCls(errors.graduationYear)} type="number" placeholder="2023" value={form.graduationYear} onChange={e => upd("graduationYear", e.target.value)} style={focusStyle(accent)} />
                    </Field>
                    <Field label="CGPA / Percentage" accent={accent}>
                      <input className={inputCls()} placeholder="8.5 or 85%" value={form.percentage} onChange={e => upd("percentage", e.target.value)} style={focusStyle(accent)} />
                    </Field>
                  </div>
                </Section>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <Section title="12th Standard" accent="#f97316" badge="Higher Secondary">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Field label="School Name" accent="#f97316"><input className={inputCls()} placeholder="School name" value={form.twelthSchool} onChange={e => upd("twelthSchool", e.target.value)} style={focusStyle("#f97316")} /></Field>
                      </div>
                      <Field label="Year of Passing" accent="#f97316"><input className={inputCls()} type="number" placeholder="2019" value={form.twelthYear} onChange={e => upd("twelthYear", e.target.value)} style={focusStyle("#f97316")} /></Field>
                      <Field label="Percentage" accent="#f97316"><input className={inputCls()} placeholder="88%" value={form.twelthPercentage} onChange={e => upd("twelthPercentage", e.target.value)} style={focusStyle("#f97316")} /></Field>
                    </div>
                  </Section>
                  <Section title="10th Standard" accent="#8b5cf6" badge="Secondary">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Field label="School Name" accent="#8b5cf6"><input className={inputCls()} placeholder="School name" value={form.tenthSchool} onChange={e => upd("tenthSchool", e.target.value)} style={focusStyle("#8b5cf6")} /></Field>
                      </div>
                      <Field label="Year of Passing" accent="#8b5cf6"><input className={inputCls()} type="number" placeholder="2017" value={form.tenthYear} onChange={e => upd("tenthYear", e.target.value)} style={focusStyle("#8b5cf6")} /></Field>
                      <Field label="Percentage" accent="#8b5cf6"><input className={inputCls()} placeholder="90%" value={form.tenthPercentage} onChange={e => upd("tenthPercentage", e.target.value)} style={focusStyle("#8b5cf6")} /></Field>
                    </div>
                  </Section>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <Section title="Overall Profile" accent={accent}>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Total Experience" accent={accent}>
                      <select className={inputCls()} value={form.experience} onChange={e => upd("experience", e.target.value)} style={focusStyle(accent)}>
                        <option value="">Select level</option>
                        <option>Fresher (0 years)</option><option>0–1 year</option><option>1–2 years</option>
                        <option>2–5 years</option><option>5–10 years</option><option>10+ years</option>
                      </select>
                    </Field>
                    <Field label="Key Skills" accent={accent}>
                      <input className={inputCls()} placeholder="React, Node.js, Python, AWS..." value={form.skills} onChange={e => upd("skills", e.target.value)} style={focusStyle(accent)} />
                    </Field>
                  </div>
                </Section>

                {[1, 2].slice(0, exCount).map(idx => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                    <div className="px-5 py-3 flex items-center gap-3 border-b border-gray-100"
                      style={{ background: idx === 1 ? "#faf5ff" : "#fff7ed" }}>
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: idx === 1 ? "#8b5cf6" : "#f97316" }}>{idx}</div>
                      <span className="font-semibold text-sm text-gray-700">{idx === 1 ? "Most Recent Position" : "Previous Position"}</span>
                      {idx === 2 && <button onClick={() => setExCount(1)} className="ml-auto text-xs text-red-400 hover:text-red-600 font-semibold">✕ Remove</button>}
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <Field label="Company Name" accent={idx === 1 ? "#8b5cf6" : "#f97316"}><input className={inputCls()} placeholder="Company" value={form[`company${idx}`]} onChange={e => upd(`company${idx}`, e.target.value)} style={focusStyle(idx === 1 ? "#8b5cf6" : "#f97316")} /></Field>
                        <Field label="Job Title" accent={idx === 1 ? "#8b5cf6" : "#f97316"}><input className={inputCls()} placeholder="Software Engineer" value={form[`role${idx}`]} onChange={e => upd(`role${idx}`, e.target.value)} style={focusStyle(idx === 1 ? "#8b5cf6" : "#f97316")} /></Field>
                        <Field label="Duration" accent={idx === 1 ? "#8b5cf6" : "#f97316"}><input className={inputCls()} placeholder="Jan 2022 – Mar 2024" value={form[`duration${idx}`]} onChange={e => upd(`duration${idx}`, e.target.value)} style={focusStyle(idx === 1 ? "#8b5cf6" : "#f97316")} /></Field>
                      </div>
                      <Field label="Key Responsibilities & Achievements" accent={idx === 1 ? "#8b5cf6" : "#f97316"}>
                        <textarea className={`${inputCls()} resize-none`} rows={3} placeholder="What did you build, lead, or improve?" value={form[`desc${idx}`]} onChange={e => upd(`desc${idx}`, e.target.value)} style={focusStyle(idx === 1 ? "#8b5cf6" : "#f97316")} />
                      </Field>
                    </div>
                  </div>
                ))}

                {exCount < 2 && (
                  <button onClick={() => setExCount(2)} className="w-full flex items-center justify-center gap-2 border-2 border-dashed rounded-2xl py-4 text-sm font-semibold transition-all hover:bg-white"
                    style={{ borderColor: `${accent}50`, color: accent }}>
                    <span className="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-white text-sm" style={{ background: accent }}>+</span>
                    Add Another Position
                  </button>
                )}
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <Field label="Resume / CV *" err={errors.resumeName} accent={accent}>
                    <label className={`flex items-center gap-5 border-2 border-dashed rounded-xl px-6 py-7 cursor-pointer transition-all group ${errors.resumeName ? "border-red-300 bg-red-50" : "border-gray-200 hover:bg-gray-50"}`}
                      style={{ borderColor: resumeFile ? accent : undefined }}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gray-50 border border-gray-200 group-hover:border-current flex-shrink-0 transition-all"
                        style={{ background: resumeFile ? `${accent}10` : undefined, borderColor: resumeFile ? accent : undefined }}>
                        {resumeFile ? "✅" : "📄"}
                      </div>
                      <div className="flex-1">
                        {resumeFile
                          ? <><p className="font-semibold text-gray-800 text-sm">{resumeFile.name}</p><p className="text-xs text-gray-400 mt-0.5">Click to replace</p></>
                          : <><p className="font-semibold text-gray-700 text-sm">Drop your resume here or click to browse</p><p className="text-xs text-gray-400 mt-0.5">PDF, DOC, DOCX · Max 5MB</p></>
                        }
                      </div>
                      <span className="text-xs font-semibold px-4 py-2 rounded-lg text-white flex-shrink-0" style={{ background: accent }}>Browse</span>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => { const f = e.target.files[0]; if (f) { setRes(f); upd("resumeName", f.name); } }} />
                    </label>
                    {errors.resumeName && <p className="text-red-500 text-xs mt-1.5 font-medium">⚠ {errors.resumeName}</p>}
                  </Field>
                </div>

                <Section title="Online Profiles" accent={accent}>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="LinkedIn Profile URL" accent={accent}>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-white bg-blue-600 rounded px-1 py-0.5">in</span>
                        <input className={`${inputCls()} pl-10`} placeholder="linkedin.com/in/yourprofile" value={form.linkedIn} onChange={e => upd("linkedIn", e.target.value)} style={focusStyle(accent)} />
                      </div>
                    </Field>
                    <Field label="Portfolio / GitHub URL" accent={accent}>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">🔗</span>
                        <input className={`${inputCls()} pl-9`} placeholder="github.com/you" value={form.portfolio} onChange={e => upd("portfolio", e.target.value)} style={focusStyle(accent)} />
                      </div>
                    </Field>
                  </div>
                </Section>

                <Section title="Cover Letter" accent="#f59e0b" badge="Optional">
                  <textarea className={`${inputCls()} resize-none w-full`} rows={5}
                    placeholder="Tell us why you're excited about this role..."
                    value={form.coverLetter} onChange={e => upd("coverLetter", e.target.value.slice(0, 1000))} style={focusStyle("#f59e0b")} />
                  <p className="text-right text-xs text-gray-400 mt-1">{form.coverLetter.length}/1000</p>
                </Section>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm font-medium text-amber-800">
                  <span>⚠️</span> Review carefully before submitting. Use ← Back to make changes.
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {[
                    { title: "Personal Information", icon: "👤", color: "#f97316", rows: [["Full Name", form.fullName], ["Email", form.email], ["Phone", `+91 ${form.phone}`], ["Date of Birth", form.dob], ["Gender", form.gender], ["Applying For", form.applyingFor], ["Location", [form.city, form.state, form.pincode].filter(Boolean).join(", ")]] },
                    { title: "Education", icon: "🎓", color: "#10b981", rows: [["Degree", form.degree], ["Institution", form.institution], ["Grad Year", form.graduationYear], ["CGPA/Percentage", form.percentage], ["12th School", form.twelthSchool], ["12th Year", form.twelthYear], ["10th School", form.tenthSchool], ["10th Year", form.tenthYear]] },
                    { title: "Work Experience", icon: "💼", color: "#8b5cf6", rows: [["Experience", form.experience], ["Skills", form.skills], ["Recent Company", form.company1], ["Role", form.role1], ["Duration", form.duration1]] },
                    { title: "Resume & Links", icon: "📎", color: "#0ea5e9", rows: [["Resume", form.resumeName], ["LinkedIn", form.linkedIn], ["Portfolio", form.portfolio], ["Cover Letter", form.coverLetter ? "Provided ✓" : "Not provided"]] },
                  ].map(s => (
                    <div key={s.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                      <div className="px-5 py-3 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${s.color}15` }}>
                          <span>{s.icon}</span>
                        </div>
                        <h3 className="font-semibold text-sm text-gray-800">{s.title}</h3>
                        <span className="ml-auto text-xs text-gray-400">{s.rows.filter(([, v]) => v).length} entries</span>
                      </div>
                      <div className="border-t border-gray-100 divide-y divide-gray-50">
                        {s.rows.filter(([, v]) => v).map(([l, v]) => (
                          <div key={l} className="px-5 py-2.5 flex gap-4 text-sm">
                            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide w-28 flex-shrink-0 pt-0.5">{l}</span>
                            <span className="text-gray-700 font-medium break-all">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-400 leading-relaxed bg-white border border-gray-100 rounded-xl p-4">
                  By clicking <strong>Submit Application</strong>, you confirm all information is accurate and consent to processing your personal data for recruitment purposes.
                </p>
              </div>
            )}
          </div>

          {/* ── NAVIGATION ── */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-200">
            <button onClick={back} disabled={step === 0}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${step === 0 ? "invisible" : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-sm active:scale-95"}`}>
              ← Back
            </button>

            <div className="flex items-center gap-1.5">
              {STEPS.map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-400"
                  style={{ width: i === step ? 24 : 7, height: 7, background: i === step ? accent : i < step ? `${STEP_COLORS[i]}60` : "#e5e7eb" }} />
              ))}
            </div>

            {step < 4
              ? <button onClick={next}
                className="flex items-center gap-2 px-7 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
                style={{ background: accent, boxShadow: `0 4px 16px ${accent}35` }}>
                Continue →
              </button>
              : <button onClick={handleSubmit} disabled={sending}
                className="flex items-center gap-2 px-7 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95 shadow-md disabled:opacity-60"
                style={{ background: "#10b981", boxShadow: "0 4px 16px #10b98135" }}>
                {sending
                  ? <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Submitting...</>
                  : "Submit Application 🚀"
                }
              </button>
            }
          </div>
        </main>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function focusStyle(accent) {
  return { "--tw-ring-color": `${accent}20` };
}

function Field({ label, err, children, accent }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      {children}
      {err && <p className="text-red-500 text-xs mt-1 font-medium">⚠ {err}</p>}
    </div>
  );
}

function Section({ title, accent, badge, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{title}</span>
        {badge && <span className="ml-auto text-xs font-semibold text-gray-400 bg-gray-100 rounded-full px-2.5 py-0.5">{badge}</span>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}