"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/за-нас" },
  { name: "SERVICES", href: "/услуги" },
  { name: "CLIENTS", href: "/клиенти" },
  { name: "CONTACT", href: "/контакти" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      {/* Footer nav links bar */}
      <div className="bg-[#2d2d2d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center justify-center gap-1 py-4">
            {footerLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && <span className="text-gray-500 mx-2">|</span>}
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === link.href ? "text-red" : "text-white hover:text-red"
                  }`}
                >
                  {link.name}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-400">
            &copy; All rights reserved Konferencia.BG | Designed by Alpha Best
          </p>
        </div>
      </div>
    </footer>
  );
}
