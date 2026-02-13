"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useTransition, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

const languages = [
  {
    code: "ko",
    label: "한국어",
    flag: (
      <svg className="w-5 h-5 rounded-sm" viewBox="0 0 12 8">
        <rect width="12" height="8" fill="#fff" />
        <circle cx="6" cy="4" r="2" fill="#cd2e3a" />
        <path
          d="M0 0l4 2.667M12 0L8 2.667M0 8l4-2.667M12 8l-4-2.667"
          stroke="#000"
          strokeWidth="0.5"
        />
      </svg>
    ),
  },
  {
    code: "en",
    label: "English",
    flag: (
      <svg className="w-5 h-5 rounded-sm" viewBox="0 0 7410 3900">
        <rect width="7410" height="3900" fill="#b22234" />
        <path d="M0,0H7410V300H0V600H7410V900H0V1200H7410V1500H0V3900" fill="#fff" />
        <rect width="2964" height="2100" fill="#3c3b6e" />
        <path
          d="M444,210L444,1890M1037,210V1890M1630,210V1890M2223,210V1890"
          stroke="#fff"
          strokeWidth="10"
        />
      </svg>
    ),
  },
  {
    code: "zh",
    label: "中文",
    flag: (
      <svg className="w-5 h-5 rounded-sm" viewBox="0 0 30 20" fill="#ee1c25">
        <rect width="30" height="20" />
        <path d="M5,5l1,3l-2.5-2l3,0l-2.5,2z" fill="#ffff00" />
      </svg>
    ),
  },
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

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`flex items-center gap-2.5 pl-3 pr-2 py-1.5 rounded-full border border-soft-brown/10 bg-warm-beige hover:bg-ivory transition-all shadow-sm group ${
          isOpen ? "ring-1 ring-orange-primary bg-ivory" : ""
        }`}
      >
        <Globe
          className={`w-3.5 h-3.5 ${
            isOpen ? "text-orange-primary" : "text-light-brown"
          } group-hover:text-orange-primary transition-colors`}
        />

        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 flex-shrink-0 opacity-80 overflow-hidden rounded-[1px]">
            {currentLang.flag}
          </div>
          <span className="text-[11px] font-sans font-extrabold tracking-wider text-soft-brown uppercase">
            {locale}
          </span>
        </div>

        <ChevronDown
          className={`w-3 h-3 text-light-brown/50 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-warm-beige border border-soft-brown/10 rounded-2xl shadow-photo overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
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
                <div className="w-5 h-3.5 overflow-hidden rounded-[1px] shadow-sm">{lang.flag}</div>
                <span className="tracking-tight">{lang.label}</span>
                {lang.code === locale && (
                  <Check className="ml-auto w-3.5 h-3.5 text-orange-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
