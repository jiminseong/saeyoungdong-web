"use client";

import { useTranslations } from "next-intl";
import KakaoMap from "@/components/map/KakaoMap";
import { Phone } from "lucide-react";

const NAVER_MAP_URL = "https://map.naver.com/p/entry/place/37944232";
const KAKAO_MAP_URL = "https://place.map.kakao.com/9822284";

export default function Footer() {
  const t = useTranslations("HomePage");
  const tc = useTranslations("Common");

  return (
    <footer className="w-full">
      {/* Location & Info Section */}
      <section className="bg-dark-brown text-warm-beige">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-widest text-warm-beige uppercase">
            {t("about.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Info */}
            <div className="flex flex-col gap-8">
              {/* Address */}
              <div>
                <h3 className="text-base text-light-brown mb-2 font-sans">
                  {t("about.addressLabel")}
                </h3>
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-warm-beige">
                  {t("about.address")}
                </p>
                <p className="text-sm text-light-brown mt-1 font-sans">{t("about.parking")}</p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-base text-light-brown mb-2 font-sans">
                  {t("about.phoneLabel")}
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="tel:043-645-9008"
                    className="text-3xl md:text-4xl font-serif text-orange-primary hover:text-orange-active transition-colors"
                  >
                    043-645-9008
                  </a>
                  <a
                    href="tel:043-645-9008"
                    className="flex items-center gap-2 px-4 py-2 border border-orange-primary/30 text-orange-primary rounded-full font-bold text-xs md:text-sm hover:bg-orange-primary/10 transition-all hover:scale-[1.05] whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    {t("about.buttons.call")}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-base text-light-brown mb-2 font-sans">
                  {t("about.hoursLabel")}
                </h3>
                <p className="text-xl font-serif text-warm-beige">{t("about.hours")}</p>
                <p className="text-sm text-light-brown mt-1 font-sans">{t("about.hoursNote")}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={NAVER_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 bg-[#03C75A] text-white rounded-xl font-bold text-[15px] hover:bg-[#02b350] transition-all hover:scale-[1.02] shadow-sm whitespace-nowrap"
                >
                  <span className="text-xl font-black">N</span>
                  {t("about.buttons.naver")}
                </a>
                <a
                  href={KAKAO_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FEE500] text-[#191919] rounded-xl font-bold text-[15px] hover:bg-[#e6cf00] transition-all hover:scale-[1.02] shadow-sm whitespace-nowrap"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.553 1.706 4.8 4.315 6.091l-.81 2.962c-.06.216.068.441.285.498.056.015.114.022.171.022.158 0 .307-.087.382-.236l1.242-2.483c.451.04.91.061 1.415.061 4.97 0 9-3.186 9-7.115S16.97 3 12 3z" />
                  </svg>
                  {t("about.buttons.kakao")}
                </a>
              </div>
            </div>

            {/* Right: Kakao Map */}
            <div className="w-full h-[400px] md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <KakaoMap />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bg-[#2A1810] text-light-brown py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
          <p>{tc("footer.rights")}</p>
          <p className="flex items-center gap-1.5 opacity-80">
            Created by{" "}
            <a
              href="https://mildolab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-orange-primary transition-colors hover:underline underline-offset-4"
            >
              Mildo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
