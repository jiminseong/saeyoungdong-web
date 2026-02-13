"use client";

import { Link, usePathname } from "@/i18n/routing";
import LangSwitcher from "../common/LangSwitcher";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  // const t = useTranslations("HomePage");
  const locale = useLocale();
  const currentPath = usePathname();

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold font-serif text-soft-brown flex items-center gap-2"
          locale={locale}
        >
          <span className="w-2 h-2 rounded-full bg-orange-primary inline-block"></span>
          새영동
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              className={`text-sm font-medium transition-colors ${
                currentPath === item.href
                  ? "text-orange-primary font-bold"
                  : "text-gray-500 hover:text-soft-brown"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>
          <LangSwitcher />
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden flex items-center gap-4">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  );
}
