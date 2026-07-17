import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-cloud-gray border-t border-white/5" id="main-footer">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Langratia logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="brand-wordmark text-white text-base">
                {"LΛNGRΛT\\Λ"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cloud-gray/70">
              Custom software built for your exact scale. Grace is the radical
              elimination of the unnecessary.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Services
              </h4>
              <Link href="/creators" className="text-sm hover:text-white transition-colors duration-200">Creators</Link>
              <Link href="/smb" className="text-sm hover:text-white transition-colors duration-200">SMB</Link>
              <Link href="/enterprise" className="text-sm hover:text-white transition-colors duration-200">Enterprise</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Company
              </h4>
              <Link href="/case-studies" className="text-sm hover:text-white transition-colors duration-200">Case Studies</Link>
              <Link href="/contact" className="text-sm hover:text-white transition-colors duration-200">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cloud-gray/50">
            &copy; {new Date().getFullYear()} Langratia. All rights reserved.
          </p>
          <p className="text-xs text-cloud-gray/40">
            Engineering Excellence &middot; Strategic Transparency &middot; Radical Adaptability
          </p>
        </div>
      </div>
    </footer>
  );
}
