"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("HomePage");

  return (
    <footer className="w-full bg-[#3d332d] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold font-serif text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-primary inline-block"></span>
            {t("title")}
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">{t("hero.subheadline")}</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>043-645-9008</li>
            <li>{t("about.address")}</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-white font-bold mb-4">Opening Headers</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon - Sun</li>
            <li>11:00 AM - 10:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-700 text-xs text-gray-500 flex justify-between items-center">
        <p>© 2026 Saeyoungdong Galbi. All rights reserved.</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
