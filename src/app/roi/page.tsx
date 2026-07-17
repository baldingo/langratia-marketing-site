"use client";

import { useState } from "react";

export default function ROIPage() {
  const [employees, setEmployees] = useState(25);
  const [hoursWasted, setHoursWasted] = useState(10);
  const [avgSalary, setAvgSalary] = useState(1500);

  // Calculations
  const weeklyWastedCost = (employees * hoursWasted * (avgSalary / 160));
  const monthlyWastedCost = weeklyWastedCost * 4.33;
  const annualWastedCost = monthlyWastedCost * 12;
  const optimizedEfficiency = 0.70; // 70% time-to-market improvement
  const annualSavings = annualWastedCost * optimizedEfficiency;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  // Bar widths for tri-color chart (as percentages)
  const currentWidth = 100;
  const optimizedWidth = Math.round((1 - optimizedEfficiency) * 100);
  const baselineWidth = 60;

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-navy py-20 sm:py-28" id="roi-hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-cyan mb-4">
            ROI Diagnostic Tool
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
            What is Operational Inefficiency{" "}
            <span className="bg-gradient-to-r from-sky-cyan to-deep-cyan bg-clip-text text-transparent">
              Costing You?
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-cloud-gray/70 leading-relaxed">
            Adjust the sliders below to model your current operational overhead.
            See exactly what a precision-engineered system could recover for your business.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Tool */}
      <section className="bg-white py-20 sm:py-28" id="roi-tool">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

            {/* Inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-dark-navy/40 mb-6">
                  Your Operational Parameters
                </p>

                {/* Employees slider */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-dark-navy">
                      Number of Employees
                    </label>
                    <span className="text-lg font-bold text-primary-purple tabular-nums">
                      {employees}
                    </span>
                  </div>
                  <input
                    id="employees-slider"
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #38BDF8 0%, #0284C7 ${((employees - 5) / 195) * 100}%, #E2E8F0 ${((employees - 5) / 195) * 100}%, #E2E8F0 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-dark-navy/30">
                    <span>5</span><span>200</span>
                  </div>
                </div>

                {/* Hours wasted slider */}
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-dark-navy">
                      Hours Wasted on Manual Processes / Week
                    </label>
                    <span className="text-lg font-bold text-sky-cyan tabular-nums">
                      {hoursWasted}h
                    </span>
                  </div>
                  <input
                    id="hours-slider"
                    type="range"
                    min={1}
                    max={40}
                    step={1}
                    value={hoursWasted}
                    onChange={(e) => setHoursWasted(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #38BDF8 0%, #0284C7 ${((hoursWasted - 1) / 39) * 100}%, #E2E8F0 ${((hoursWasted - 1) / 39) * 100}%, #E2E8F0 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-dark-navy/30">
                    <span>1h</span><span>40h</span>
                  </div>
                </div>

                {/* Average salary slider */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-dark-navy">
                      Average Monthly Salary (USD)
                    </label>
                    <span className="text-lg font-bold text-deep-cyan tabular-nums">
                      {fmt(avgSalary)}
                    </span>
                  </div>
                  <input
                    id="salary-slider"
                    type="range"
                    min={500}
                    max={10000}
                    step={250}
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #38BDF8 0%, #0284C7 ${((avgSalary - 500) / 9500) * 100}%, #E2E8F0 ${((avgSalary - 500) / 9500) * 100}%, #E2E8F0 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-dark-navy/30">
                    <span>{fmt(500)}</span><span>{fmt(10000)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Report */}
            <div className="bg-dark-navy rounded-brand-lg p-8 flex flex-col gap-8" id="roi-output">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                  Operational System Inefficiency Report
                </p>
                <p className="text-3xl font-extrabold text-white">
                  {fmt(annualWastedCost)}
                </p>
                <p className="text-sm text-cloud-gray/60 mt-1">
                  estimated annual cost of current inefficiency
                </p>
              </div>

              {/* Tri-color chart */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Efficiency Comparison
                </p>

                {/* Current State — Sky Cyan */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-sky-cyan font-semibold">Current State</span>
                    <span className="text-white/60">{fmt(annualWastedCost)} / yr</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-sky-cyan transition-all duration-700"
                      style={{ width: `${currentWidth}%` }}
                    />
                  </div>
                </div>

                {/* Optimized State — Electric Indigo */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-electric-indigo font-semibold">
                      {"LΛNGRΛT\\Λ"} Optimized
                    </span>
                    <span className="text-white/60">
                      {fmt(annualWastedCost - annualSavings)} / yr
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-electric-indigo transition-all duration-700"
                      style={{ width: `${optimizedWidth}%` }}
                    />
                  </div>
                </div>

                {/* Baseline — Neutral Gray */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-cloud-gray/50 font-semibold">Industry Baseline</span>
                    <span className="text-white/40">avg. ~{baselineWidth}% efficient</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-cloud-gray/40 transition-all duration-700"
                      style={{ width: `${baselineWidth}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Savings callout */}
              <div className="rounded-brand border border-electric-indigo/30 bg-electric-indigo/10 p-5 flex flex-col gap-1">
                <p className="text-xs font-bold uppercase tracking-wider text-electric-indigo">
                  Recoverable Value
                </p>
                <p className="text-2xl font-extrabold text-white">
                  {fmt(annualSavings)}
                </p>
                <p className="text-xs text-cloud-gray/60">
                  estimated annual savings after system optimization (70% efficiency gain)
                </p>
              </div>

              <a
                href="/contact"
                className="gradient-action rounded-brand-lg py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/25 hover:scale-[1.02]"
                id="roi-cta"
              >
                Recover This Value — Start a Conversation
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-xs text-center text-dark-navy/30 max-w-2xl mx-auto leading-relaxed">
            These estimates are based on McKinsey/Numetrics top-quartile software engineering benchmarks.
            Actual results vary by project scope and organizational complexity.
            Contact us for a precise diagnostic tailored to your business.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cloud-gray/30 py-20" id="roi-bottom">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-dark-navy mb-4">
            Ready to stop leaving money on the table?
          </h2>
          <p className="text-dark-navy/55 mb-8 leading-relaxed">
            A custom system isn&apos;t a cost — it&apos;s an investment with a
            measurable return. Let&apos;s scope yours.
          </p>
          <a
            href="/contact"
            className="gradient-action rounded-brand-lg px-10 py-4 text-base font-semibold text-white inline-block transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/30 hover:scale-[1.03]"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </>
  );
}
