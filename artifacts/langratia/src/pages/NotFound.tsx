import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mx-auto max-w-lg bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-[#E2E8F0] relative overflow-hidden">
        <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md">
          <img src="/logo.png" alt="Langratia logo" className="object-contain w-full h-full" />
        </div>

        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6855F0] bg-[#6855F0]/10 px-3 py-1 rounded-full">
          Error 404 &middot; Route Not Found
        </span>

        <h1 className="text-3xl font-black text-[#1E1548] mt-4 mb-2">
          Architectural Off-Grid
        </h1>

        <p className="text-xs text-[#1E1548]/70 leading-relaxed mb-8">
          The endpoint or page you are looking for has been relocated, refactored, or does not exist in our production schema.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto rounded-xl bg-[#6855F0] text-white px-5 py-3 text-xs font-bold shadow-md hover:bg-[#5b4be0] transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto rounded-xl bg-[#1E1548]/5 text-[#1E1548] border border-[#E2E8F0] px-5 py-3 text-xs font-bold hover:bg-[#1E1548]/10 transition-colors"
          >
            View Services Directory
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-[11px] text-[#1E1548]/50">
          Need immediate engineering assistance?{" "}
          <Link href="/contact" className="text-[#6855F0] font-bold underline">
            Contact Support SLA &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
