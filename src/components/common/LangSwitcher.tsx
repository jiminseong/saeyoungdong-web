"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex gap-2 items-center">
      {["ko", "en", "zh"].map((cur) => (
        <button
          key={cur}
          className={`text-sm px-2 py-1 rounded transition-colors ${
            cur === locale
              ? "font-bold text-orange-primary bg-orange-50"
              : "text-gray-400 hover:text-soft-brown"
          }`}
          onClick={() => onChange(cur)}
          disabled={isPending}
        >
          {cur.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
