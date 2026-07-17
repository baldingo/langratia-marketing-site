"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    tier: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-navy py-20 sm:py-28" id="contact-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-indigo mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
            Let&apos;s Build Something Elegant
          </h1>
          <p className="max-w-xl mx-auto text-lg text-cloud-gray/70 leading-relaxed">
            Tell us about your project. We&apos;ll review your message and
            send back a scoped proposal within 48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20" id="contact-form-section">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-20 flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full gradient-action flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-dark-navy">Message Received</h2>
              <p className="text-dark-navy/60 max-w-md leading-relaxed">
                Thank you for reaching out. Our team will review your project
                details and respond within 48 hours with a tailored proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-form">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-dark-navy">
                    Full Name <span className="text-primary-purple">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="rounded-brand border border-cloud-gray bg-white px-4 py-3 text-dark-navy text-sm outline-none transition-all duration-200 focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20 placeholder:text-dark-navy/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-dark-navy">
                    Work Email <span className="text-primary-purple">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="rounded-brand border border-cloud-gray bg-white px-4 py-3 text-dark-navy text-sm outline-none transition-all duration-200 focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20 placeholder:text-dark-navy/30"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-semibold text-dark-navy">
                  Company / Project Name
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className="rounded-brand border border-cloud-gray bg-white px-4 py-3 text-dark-navy text-sm outline-none transition-all duration-200 focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20 placeholder:text-dark-navy/30"
                />
              </div>

              {/* Tier Select */}
              <div className="flex flex-col gap-2">
                <label htmlFor="tier" className="text-sm font-semibold text-dark-navy">
                  Which service are you interested in? <span className="text-primary-purple">*</span>
                </label>
                <select
                  id="tier"
                  name="tier"
                  required
                  value={form.tier}
                  onChange={handleChange}
                  className="rounded-brand border border-cloud-gray bg-white px-4 py-3 text-dark-navy text-sm outline-none transition-all duration-200 focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20"
                >
                  <option value="" disabled>Select a service tier</option>
                  <option value="creator">Creator Launchpad — MVP in 14 Days</option>
                  <option value="smb">SMB Systems Hub — Custom Business Systems</option>
                  <option value="enterprise">Enterprise Gateway — Dedicated Capacity</option>
                  <option value="other">Not Sure / Exploratory</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-dark-navy">
                  Tell us about your project <span className="text-primary-purple">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project, current challenges, and what success looks like for you..."
                  className="rounded-brand border border-cloud-gray bg-white px-4 py-3 text-dark-navy text-sm outline-none resize-none transition-all duration-200 focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20 placeholder:text-dark-navy/30"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="contact-submit"
                className="gradient-action rounded-brand-lg px-8 py-4 text-base font-semibold text-white text-center transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/30 hover:scale-[1.02] cursor-pointer"
              >
                Send Project Brief
              </button>
              <p className="text-xs text-center text-dark-navy/40">
                We&apos;ll respond within 48 hours with a tailored proposal.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
