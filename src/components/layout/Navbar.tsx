"use client";

import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const locale = useLocale();
  const currentPath = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-warm-beige/90 backdrop-blur-md z-50 border-b border-soft-brown/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-serif text-soft-brown flex items-center gap-2"
          locale={locale}
        >
          <span className="w-2 h-2 rounded-full bg-orange-primary inline-block font-semibold" />{" "}
          새영동숯불갈비
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              className={`text-sm tracking-widest font-sans transition-colors ${
                currentPath === item.href
                  ? "text-orange-primary font-bold"
                  : "text-light-brown hover:text-soft-brown"
              }`}
            >
              {item.label}
            </Link>
          ))}{" "}
          <LanguageSwitcher />
        </div>

        {/* Right Section: Lang + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-soft-brown transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-soft-brown transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-soft-brown transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-beige border-t border-soft-brown/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              className={`text-2xl font-serif ${
                currentPath === item.href ? "text-orange-primary" : "text-soft-brown"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
