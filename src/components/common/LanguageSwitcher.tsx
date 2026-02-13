"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useTransition, useRef, useEffect } from "react";

const languages = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`flex items-center gap-2 pl-3 pr-2.5 py-1.5 rounded-full border border-soft-brown/10 bg-warm-beige hover:bg-ivory transition-all shadow-sm group ${
          isOpen ? "ring-1 ring-orange-primary bg-ivory" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${isOpen ? "text-orange-primary" : "text-light-brown"} group-hover:text-orange-primary transition-colors`}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>

        <span className="text-xs">{currentLang.flag}</span>

        <span className="text-[11px] font-sans font-extrabold tracking-wider text-soft-brown uppercase">
          {locale}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-light-brown/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-warm-beige border border-soft-brown/10 rounded-2xl shadow-photo overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-sans transition-colors ${
                  lang.code === locale
                    ? "text-orange-primary bg-orange-light font-bold"
                    : "text-soft-brown hover:bg-ivory"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="tracking-tight">{lang.label}</span>
                {lang.code === locale && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
