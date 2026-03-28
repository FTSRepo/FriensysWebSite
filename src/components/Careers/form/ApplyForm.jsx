import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const STEPS = ["Personal Details", "Educational Details", "Resume Upload", "Review & Submit"];

const jobTitles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Sales Executive",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  applyingFor: "",
  degree: "",
  institution: "",
  graduationYear: "",
  percentage: "",
  twelthSchool: "",
  twelthYear: "",
  twelthPercentage: "",
  tenthSchool: "",
  tenthYear: "",
  tenthPercentage: "",
  experience: "",
  skills: "",
  linkedIn: "",
  portfolio: "",
  resumeName: "",
  coverLetter: "",
};

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 0) {
      if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email required.";
      if (!form.phone.match(/^\d{10}$/)) newErrors.phone = "10-digit phone number required.";
      if (!form.dob) newErrors.dob = "Date of birth is required.";
      if (!form.gender) newErrors.gender = "Please select gender.";
      if (!form.applyingFor) newErrors.applyingFor = "Please select a position.";
    }
    if (step === 1) {
      if (!form.degree.trim()) newErrors.degree = "Degree is required.";
      if (!form.institution.trim()) newErrors.institution = "Institution is required.";
      if (!form.graduationYear) newErrors.graduationYear = "Graduation year is required.";
    }
    if (step === 2) {
      if (!resumeFile) newErrors.resumeName = "Please upload your resume.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => s + 1); };
  const back = () => setStep((s) => s - 1);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      update("resumeName", file.name);
    }
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      const templateParams = {
        from_name: form.fullName,
        from_email: form.email,
        phone: form.phone,
        dob: form.dob,
        gender: form.gender,
        address: `${form.address}, ${form.city}, ${form.state} - ${form.pincode}`,
        applying_for: form.applyingFor,
        degree: form.degree,
        institution: form.institution,
        graduation_year: form.graduationYear,
        percentage: form.percentage,
        twelfth_school: form.twelthSchool,
        twelfth_year: form.twelthYear,
        twelfth_percentage: form.twelthPercentage,
        tenth_school: form.tenthSchool,
        tenth_year: form.tenthYear,
        tenth_percentage: form.tenthPercentage,
        experience: form.experience,
        skills: form.skills,
        linkedin: form.linkedIn,
        portfolio: form.portfolio,
        resume_name: form.resumeName,
        cover_letter: form.coverLetter,
      };

      await emailjs.send(
        "service_u807rke",
        "template_oo2wo5f",
        templateParams,
        "nYysKLXX916tXkFee"
      );
      setSubmitted(true);
    } catch (err) {
      alert("Failed to send application. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-8 animate-bounce-once">
            <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Application Submitted!
          </h2>
          <p className="text-indigo-300 mb-2 text-lg">Thank you, <span className="text-white font-semibold">{form.fullName}</span>!</p>
          <p className="text-slate-400 mb-8">We've received your application for <span className="text-indigo-300 font-medium">{form.applyingFor}</span>. Our team will review it and get back to you soon.</p>
          <a href="/careers" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all">
            Back to Careers
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-12 px-4">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-[0.3em] text-indigo-400 uppercase mb-3">Friensys Info Labs</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Apply for a Position
        </h1>
        <p className="text-slate-400">Complete all sections to submit your application.</p>
      </div>

      {/* Stepper */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-5 h-px bg-slate-700 z-0" />
          {STEPS.map((label, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2
                ${i < step ? "bg-indigo-500 border-indigo-500 text-white" :
                  i === step ? "bg-indigo-600 border-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]" :
                  "bg-slate-800 border-slate-600 text-slate-500"}`}>
                {i < step ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : i + 1}
              </div>
              <span className={`mt-2 text-xs font-medium text-center hidden md:block transition-colors
                ${i === step ? "text-indigo-300" : i < step ? "text-indigo-400" : "text-slate-600"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>

          {/* Step 0: Personal Details */}
          {step === 0 && (
            <div>
              <SectionTitle icon="👤" title="Personal Details" subtitle="Tell us who you are" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                <Field label="Full Name *" error={errors.fullName}>
                  <input className={input(errors.fullName)} placeholder="John Doe" value={form.fullName} onChange={e => update("fullName", e.target.value)} />
                </Field>
                <Field label="Email Address *" error={errors.email}>
                  <input className={input(errors.email)} type="email" placeholder="john@example.com" value={form.email} onChange={e => update("email", e.target.value)} />
                </Field>
                <Field label="Phone Number *" error={errors.phone}>
                  <input className={input(errors.phone)} placeholder="10-digit mobile number" maxLength={10} value={form.phone} onChange={e => update("phone", e.target.value.replace(/\D/, ""))} />
                </Field>
                <Field label="Date of Birth *" error={errors.dob}>
                  <input className={input(errors.dob)} type="date" value={form.dob} onChange={e => update("dob", e.target.value)} />
                </Field>
                <Field label="Gender *" error={errors.gender}>
                  <select className={input(errors.gender)} value={form.gender} onChange={e => update("gender", e.target.value)}>
                    <option value="">Select gender</option>
                    <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                  </select>
                </Field>
                <Field label="Applying For *" error={errors.applyingFor}>
                  <select className={input(errors.applyingFor)} value={form.applyingFor} onChange={e => update("applyingFor", e.target.value)}>
                    <option value="">Select position</option>
                    {jobTitles.map(j => <option key={j}>{j}</option>)}
                  </select>
                </Field>
                <Field label="Address" className="md:col-span-2">
                  <input className={input()} placeholder="Street address" value={form.address} onChange={e => update("address", e.target.value)} />
                </Field>
                <Field label="City">
                  <input className={input()} placeholder="City" value={form.city} onChange={e => update("city", e.target.value)} />
                </Field>
                <Field label="State">
                  <input className={input()} placeholder="State" value={form.state} onChange={e => update("state", e.target.value)} />
                </Field>
                <Field label="Pincode">
                  <input className={input()} placeholder="Pincode" maxLength={6} value={form.pincode} onChange={e => update("pincode", e.target.value.replace(/\D/, ""))} />
                </Field>
              </div>
            </div>
          )}

          {/* Step 1: Education */}
          {step === 1 && (
            <div>
              <SectionTitle icon="🎓" title="Educational Details" subtitle="Your academic background" />
              <div className="mt-6 space-y-6">
                <div className="bg-slate-700/30 rounded-xl p-5 border border-slate-600/30">
                  <h4 className="text-indigo-300 font-semibold mb-4 text-sm tracking-wide uppercase">Graduation / Post-Graduation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Degree / Course *" error={errors.degree}>
                      <input className={input(errors.degree)} placeholder="e.g. B.Tech Computer Science" value={form.degree} onChange={e => update("degree", e.target.value)} />
                    </Field>
                    <Field label="Institution *" error={errors.institution}>
                      <input className={input(errors.institution)} placeholder="University / College name" value={form.institution} onChange={e => update("institution", e.target.value)} />
                    </Field>
                    <Field label="Year of Graduation *" error={errors.graduationYear}>
                      <input className={input(errors.graduationYear)} type="number" placeholder="e.g. 2023" min="1990" max="2030" value={form.graduationYear} onChange={e => update("graduationYear", e.target.value)} />
                    </Field>
                    <Field label="CGPA / Percentage">
                      <input className={input()} placeholder="e.g. 8.5 / 85%" value={form.percentage} onChange={e => update("percentage", e.target.value)} />
                    </Field>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-5 border border-slate-600/30">
                  <h4 className="text-purple-300 font-semibold mb-4 text-sm tracking-wide uppercase">12th Standard</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Field label="School Name">
                      <input className={input()} placeholder="School name" value={form.twelthSchool} onChange={e => update("twelthSchool", e.target.value)} />
                    </Field>
                    <Field label="Year of Passing">
                      <input className={input()} type="number" placeholder="e.g. 2019" value={form.twelthYear} onChange={e => update("twelthYear", e.target.value)} />
                    </Field>
                    <Field label="Percentage">
                      <input className={input()} placeholder="e.g. 88%" value={form.twelthPercentage} onChange={e => update("twelthPercentage", e.target.value)} />
                    </Field>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-5 border border-slate-600/30">
                  <h4 className="text-cyan-300 font-semibold mb-4 text-sm tracking-wide uppercase">10th Standard</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Field label="School Name">
                      <input className={input()} placeholder="School name" value={form.tenthSchool} onChange={e => update("tenthSchool", e.target.value)} />
                    </Field>
                    <Field label="Year of Passing">
                      <input className={input()} type="number" placeholder="e.g. 2017" value={form.tenthYear} onChange={e => update("tenthYear", e.target.value)} />
                    </Field>
                    <Field label="Percentage">
                      <input className={input()} placeholder="e.g. 90%" value={form.tenthPercentage} onChange={e => update("tenthPercentage", e.target.value)} />
                    </Field>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Work Experience">
                    <select className={input()} value={form.experience} onChange={e => update("experience", e.target.value)}>
                      <option value="">Select experience</option>
                      <option>Fresher (0 years)</option>
                      <option>0–1 year</option>
                      <option>1–2 years</option>
                      <option>2–5 years</option>
                      <option>5+ years</option>
                    </select>
                  </Field>
                  <Field label="Key Skills">
                    <input className={input()} placeholder="e.g. React, Node.js, Figma" value={form.skills} onChange={e => update("skills", e.target.value)} />
                  </Field>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Resume */}
          {step === 2 && (
            <div>
              <SectionTitle icon="📎" title="Resume & Links" subtitle="Upload your resume and share your profiles" />
              <div className="mt-6 space-y-5">
                <Field label="Resume / CV *" error={errors.resumeName}>
                  <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 cursor-pointer transition-all
                    ${errors.resumeName ? "border-red-500 bg-red-900/10" : "border-slate-600 hover:border-indigo-500 bg-slate-700/20 hover:bg-indigo-900/10"}`}>
                    <div className="text-4xl mb-3">📄</div>
                    {resumeFile ? (
                      <span className="text-indigo-300 font-medium">{resumeFile.name}</span>
                    ) : (
                      <>
                        <span className="text-slate-300 font-medium">Click to upload your resume</span>
                        <span className="text-slate-500 text-sm mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                      </>
                    )}
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
                  </label>
                </Field>
                <Field label="LinkedIn Profile URL">
                  <input className={input()} placeholder="https://linkedin.com/in/yourprofile" value={form.linkedIn} onChange={e => update("linkedIn", e.target.value)} />
                </Field>
                <Field label="Portfolio / GitHub URL">
                  <input className={input()} placeholder="https://yourportfolio.com" value={form.portfolio} onChange={e => update("portfolio", e.target.value)} />
                </Field>
                <Field label="Cover Letter (Optional)">
                  <textarea className={`${input()} resize-none`} rows={5} placeholder="Tell us why you'd be a great fit for this role..." value={form.coverLetter} onChange={e => update("coverLetter", e.target.value)} />
                </Field>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div>
              <SectionTitle icon="✅" title="Review & Submit" subtitle="Double-check your information before submitting" />
              <div className="mt-6 space-y-4">
                <ReviewBlock title="Personal Details" color="indigo" rows={[
                  ["Full Name", form.fullName],
                  ["Email", form.email],
                  ["Phone", form.phone],
                  ["Date of Birth", form.dob],
                  ["Gender", form.gender],
                  ["Applying For", form.applyingFor],
                  ["Address", [form.address, form.city, form.state, form.pincode].filter(Boolean).join(", ")],
                ]} />
                <ReviewBlock title="Education" color="purple" rows={[
                  ["Degree", form.degree],
                  ["Institution", form.institution],
                  ["Graduation Year", form.graduationYear],
                  ["CGPA/Percentage", form.percentage],
                  ["12th School", form.twelthSchool],
                  ["10th School", form.tenthSchool],
                  ["Experience", form.experience],
                  ["Skills", form.skills],
                ]} />
                <ReviewBlock title="Resume & Links" color="cyan" rows={[
                  ["Resume", form.resumeName],
                  ["LinkedIn", form.linkedIn],
                  ["Portfolio", form.portfolio],
                  ["Cover Letter", form.coverLetter ? "Provided" : "Not provided"],
                ]} />

                <div className="mt-6 p-4 bg-indigo-900/20 border border-indigo-500/30 rounded-xl text-sm text-slate-400">
                  By submitting, you confirm that all information provided is accurate and complete.
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10 pt-6 border-t border-slate-700/50">
            <button onClick={back} disabled={step === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all
                ${step === 0 ? "invisible" : "text-slate-400 hover:text-white border border-slate-600 hover:border-slate-400"}`}>
              ← Back
            </button>
            {step < 3 ? (
              <button onClick={next}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-indigo-500/25">
                Continue →
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={sending}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-emerald-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2">
                {sending ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending...
                  </>
                ) : "Submit Application 🚀"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers
const input = (err) =>
  `w-full bg-slate-700/50 border ${err ? "border-red-500" : "border-slate-600"} rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm`;

function Field({ label, children, error, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-slate-300 text-sm font-medium mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h2>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

function ReviewBlock({ title, color, rows }) {
  const colors = {
    indigo: "text-indigo-300 border-indigo-500/20 bg-indigo-900/10",
    purple: "text-purple-300 border-purple-500/20 bg-purple-900/10",
    cyan: "text-cyan-300 border-cyan-500/20 bg-cyan-900/10",
  };
  return (
    <div className={`rounded-xl border p-5 ${colors[color]}`}>
      <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">{title}</h3>
      <div className="space-y-1.5">
        {rows.filter(([, v]) => v).map(([label, value]) => (
          <div key={label} className="flex gap-2 text-sm">
            <span className="text-slate-500 w-36 shrink-0">{label}:</span>
            <span className="text-slate-300 break-all">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}