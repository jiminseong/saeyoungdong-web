import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-orange-light rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start gap-6 z-10">
          <span className="inline-block px-4 py-1 border border-light-brown rounded-full text-sm font-sans tracking-widest text-light-brown">
            Since 1993
          </span>

          <h1 className="text-5xl md:text-7xl font-serif text-soft-brown leading-tight text-balance-header tracking-tight">
            <span className="block text-xl md:text-2xl font-sans font-light text-light-brown mb-4 tracking-normal">
              {t("hero.subheadline")}
            </span>
            <span className="font-semibold">{t("title")}</span>
          </h1>

          <p className="text-lg text-light-brown max-w-md leading-relaxed font-sans break-keep">
            {t("hero.headline")}
          </p>

          <div className="flex gap-3 mt-6">
            <Link
              href="/menu"
              className="px-7 py-3 bg-soft-brown text-warm-beige font-serif rounded-full hover:bg-orange-primary transition-colors"
            >
              {t("hero.ctaMenu")}
            </Link>
            <a
              href="tel:043-645-9008"
              className="px-7 py-3 border border-soft-brown text-soft-brown font-serif rounded-full hover:bg-soft-brown hover:text-warm-beige transition-colors"
            >
              {t("hero.ctaReservation")}
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="relative w-full aspect-[4/5] bg-ivory rounded-[2rem] overflow-hidden shadow-photo border border-soft-brown/5">
            <div className="absolute inset-0 bg-gradient-to-br from-ivory to-orange-light flex items-center justify-center text-light-brown font-serif text-lg">
              Hero Image
            </div>
          </div>
          {/* Floating Heritage Badge - Enhanced Seal Design */}
          <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 w-32 h-32 md:w-36 md:h-36 z-20 group scale-75 md:scale-100 origin-bottom-left">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-orange-primary/20 rounded-full blur-2xl group-hover:bg-orange-primary/30 transition-colors" />

            {/* Main Badge Body */}
            <div className="relative w-full h-full bg-orange-primary rounded-full shadow-photo border-4 border-white/10 flex items-center justify-center rotate-[-12deg] group-hover:rotate-0 transition-transform duration-700 ease-out">
              {/* Inner Decorative Rings */}
              <div className="absolute inset-2 border border-white/20 rounded-full" />
              <div className="absolute inset-[10px] border-2 border-dashed border-white/30 rounded-full" />

              {/* Content Box */}
              <div className="text-white text-center flex flex-col items-center z-10 px-2">
                <span className="text-[10px] md:text-[11px] font-sans font-bold tracking-[0.15em] opacity-80 uppercase mb-1 drop-shadow-sm">
                  Since 1993
                </span>

                <div className="w-8 h-px bg-white/40 mb-2" />

                <h4 className="text-base md:text-lg font-serif font-bold leading-tight tracking-tight drop-shadow-md">
                  30년 전통
                  <span className="block text-xs md:text-sm font-normal mt-0.5 opacity-90">
                    숯불갈비
                  </span>
                </h4>

                <div className="w-8 h-px bg-white/40 mt-2" />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Story Section - Brand Identity */}
      <section className="bg-warm-beige py-24 border-t border-soft-brown/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-soft-brown leading-tight">
                {t("story.title")}
              </h2>
              <div className="space-y-4 text-light-brown font-sans text-lg leading-relaxed break-keep">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p className="font-serif italic text-soft-brown pt-4">"{t("story.quote")}"</p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 w-full">
              <div className="aspect-[4/3] md:aspect-[3/4] bg-ivory rounded-2xl overflow-hidden shadow-organic border border-soft-brown/5">
                <div className="w-full h-full bg-orange-light flex items-center justify-center text-orange-primary/30 font-serif">
                  Kitchen
                </div>
              </div>
              <div className="aspect-[4/3] md:aspect-[3/4] bg-ivory rounded-2xl overflow-hidden shadow-organic border border-soft-brown/5 md:mt-12">
                <div className="w-full h-full bg-orange-light flex items-center justify-center text-orange-primary/30 font-serif">
                  Hall
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Alternating Layout */}
      <section className="bg-ivory py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-20">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-2/5 aspect-square bg-warm-beige rounded-[2rem] shadow-inner order-2 md:order-1" />
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-serif text-soft-brown mb-3">
                {t("intro.feature1")}
              </h3>
              <p className="text-light-brown leading-relaxed font-sans break-keep">
                {t("intro.feature1Desc")}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-serif text-soft-brown mb-3">
                {t("intro.feature2")}
              </h3>
              <p className="text-light-brown leading-relaxed font-sans break-keep">
                {t("intro.feature2Desc")}
              </p>
            </div>
            <div className="w-full md:w-2/5 aspect-square bg-warm-beige rounded-[2rem] shadow-inner" />
          </div>

          {/* Feature 3: Center Quote */}
          <div className="text-center py-12 border-y border-soft-brown/10">
            <h3 className="text-3xl md:text-4xl font-serif text-soft-brown mb-4">
              &ldquo;{t("intro.feature3")}&rdquo;
            </h3>
            <p className="text-light-brown max-w-xl mx-auto font-sans leading-loose break-keep">
              {t("intro.feature3Desc")}
            </p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="bg-warm-beige py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-soft-brown mb-4 tracking-tight">
              매장 전경 및 단체실
            </h2>
            <p className="text-light-brown font-sans break-keep max-w-2xl">
              쾌적하고 넓은 공간, 가족 모임과 단체 회식에 최적화된 독립된 룸이 준비되어 있습니다.
              최대 40명까지 수용 가능한 대형 룸과 프라이빗한 소형 룸을 갖추고 있습니다.
            </p>
          </div>
        </div>

        {/* Scrolling Container */}
        <div className="w-full relative overflow-hidden group">
          {/* We use two sets of items for a seamless loop */}
          <div className="flex gap-6 animate-scroll group-hover:pause overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide md:cursor-grab active:md:cursor-grabbing">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="min-w-[85vw] md:min-w-[450px] aspect-video bg-ivory rounded-2xl overflow-hidden shadow-photo border border-soft-brown/10 flex-shrink-0 snap-center"
              >
                <div className="w-full h-full bg-orange-light flex flex-col items-center justify-center text-orange-primary/30 font-serif relative">
                  <span className="text-4xl opacity-20 mb-2">Room {(i % 5) + 1}</span>
                  <span className="text-sm font-sans tracking-widest uppercase opacity-60">
                    Sae Young Dong
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
