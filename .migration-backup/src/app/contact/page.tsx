"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    tier: "smb",
    message: "",
    ndaRequired: true,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-20 sm:py-28 text-[#1E1548] relative overflow-hidden" id="contact-hero">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6855F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Zero Risk &middot; 48-Hour SLA Guarantee
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1548] sm:text-6xl mb-6">
            Let&apos;s Build Something Elegant
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#1E1548]/70 leading-relaxed">
            Tell us about your project vision. Our senior architects will analyze your requirements and return a custom architectural proposal within 48 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F8FAFC] py-20" id="contact-form-section">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6855F0] to-[#29B5F6] flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-[#1E1548]">Proposal Request Received</h2>
                <p className="text-[#1E1548]/60 max-w-md leading-relaxed text-sm sm:text-base">
                  Thank you for sharing your project parameters, <strong>{form.name}</strong>. Our engineering team is reviewing your requirements and will reach out within 48 hours.
                </p>
                {form.ndaRequired && (
                  <div className="mt-2 p-3 bg-[#F5F3FF] border border-[#6855F0]/20 rounded-xl text-xs text-[#6855F0] font-semibold">
                    &check; Mutual NDA protocol active. Your project details are fully protected.
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" id="contact-form">
                <div className="border-b border-[#E2E8F0] pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#1E1548]">Project Scoping Form</h2>
                    <p className="text-xs text-[#1E1548]/50">Fill out your parameters to receive a structured scope review.</p>
                  </div>
                  <span className="text-xs font-bold text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full">
                    48h Guaranteed SLA
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/80">
                      Full Name <span className="text-[#6855F0]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#1E1548] text-sm outline-none transition-all duration-200 focus:border-[#6855F0] focus:ring-2 focus:ring-[#6855F0]/20 focus:bg-white placeholder:text-[#1E1548]/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/80">
                      Work Email <span className="text-[#6855F0]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#1E1548] text-sm outline-none transition-all duration-200 focus:border-[#6855F0] focus:ring-2 focus:ring-[#6855F0]/20 focus:bg-white placeholder:text-[#1E1548]/30"
                    />
                  </div>
                </div>

                {/* Company & Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/80">
                      Company / Organization Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#1E1548] text-sm outline-none transition-all duration-200 focus:border-[#6855F0] focus:ring-2 focus:ring-[#6855F0]/20 focus:bg-white placeholder:text-[#1E1548]/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="tier" className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/80">
                      Target Project Pipeline <span className="text-[#6855F0]">*</span>
                    </label>
                    <select
                      id="tier"
                      name="tier"
                      value={form.tier}
                      onChange={handleChange}
                      className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#1E1548] text-sm outline-none transition-all duration-200 focus:border-[#6855F0] focus:ring-2 focus:ring-[#6855F0]/20 focus:bg-white"
                    >
                      <option value="creator">Tier I: Creator Launchpad ($1,500 14-Day MVP)</option>
                      <option value="smb">Tier II: SMB Systems Hub (Custom Platforms &amp; Payments)</option>
                      <option value="enterprise">Tier III: Enterprise Gateway (Dedicated Senior Team)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#1E1548]/80">
                    Project Requirements &amp; Goals <span className="text-[#6855F0]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your system vision, timeline, target features, or existing technical debt..."
                    className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-[#1E1548] text-sm outline-none transition-all duration-200 focus:border-[#6855F0] focus:ring-2 focus:ring-[#6855F0]/20 focus:bg-white placeholder:text-[#1E1548]/30"
                  />
                </div>

                {/* NDA Toggle Checkbox */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <input
                    id="ndaRequired"
                    name="ndaRequired"
                    type="checkbox"
                    checked={form.ndaRequired}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-[#6855F0] focus:ring-[#6855F0] cursor-pointer"
                  />
                  <label htmlFor="ndaRequired" className="text-xs text-[#1E1548]/80 font-medium cursor-pointer">
                    <span className="font-bold text-[#1E1548]">Request Mutual Non-Disclosure Agreement (NDA)</span>
                    <span className="block text-[#1E1548]/50">We will execute a standard mutual NDA before reviewing confidential project code or data.</span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.01] text-center"
                  style={{ background: "linear-gradient(135deg, #6855F0 0%, #29B5F6 100%)" }}
                >
                  Submit Proposal Request &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
