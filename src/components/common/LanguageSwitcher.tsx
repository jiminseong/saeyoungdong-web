"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useTransition, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-label="Change language"
        className={`flex items-center gap-2.5 pl-3 pr-2 py-1.5 rounded-full border border-soft-brown/10 bg-warm-beige hover:bg-ivory transition-all shadow-sm group ${
          isOpen ? "ring-1 ring-orange-primary bg-ivory" : ""
        }`}
      >
        <Globe
          className={`w-3.5 h-3.5 ${
            isOpen ? "text-orange-primary" : "text-light-brown"
          } group-hover:text-orange-primary transition-colors`}
        />

        <span className="text-[11px] font-sans font-extrabold tracking-wider text-soft-brown uppercase">
          {locale}
        </span>

        <ChevronDown
          className={`w-3 h-3 text-light-brown/50 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-warm-beige border border-soft-brown/10 rounded-2xl shadow-photo overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-sans transition-colors ${
                  lang.code === locale
                    ? "text-orange-primary bg-orange-light font-bold"
                    : "text-soft-brown hover:bg-ivory"
                }`}
              >
                <span className="tracking-tight">{lang.label}</span>
                {lang.code === locale && <Check className="w-3.5 h-3.5 text-orange-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
