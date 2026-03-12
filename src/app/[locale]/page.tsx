import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Gallery from "@/components/home/Gallery";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  // @ts-ignore
  const siteTitle = messages.HomePage.title;
  // @ts-ignore
  const siteDescription = messages.HomePage.description;

  return {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
    },
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  const tc = useTranslations("Common");
  const storyVisuals = [
    { src: "/images/ai/story-hall.png", alt: "Story hall" },
  ];
  const hasPendingStoryVisual = storyVisuals.length < 2;

  return (
    <div className="w-full relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-orange-light rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:pb-40 md:pt-18 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start gap-6 z-10">
          <span className="inline-block px-4 py-1 border border-light-brown rounded-full text-sm font-sans tracking-widest text-light-brown">
            {tc("since")}
          </span>

          <h1 className="text-5xl md:text-7xl font-serif text-soft-brown leading-tight text-balance-header tracking-tight">
            <span className="block text-xl md:text-2xl font-sans font-light text-light-brown  tracking-normal">
              {t("hero.subheadline")}
            </span>
            <span className="font-semibold">{t("title")}</span>
          </h1>

          <p className="text-lg text-light-brown max-w-md leading-relaxed font-sans break-keep">
            {t("hero.headline")}
          </p>

          <div className="flex gap-3">
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
          <div className="relative w-full aspect-[1/1] bg-ivory rounded-[2rem] overflow-hidden shadow-photo border border-soft-brown/5">
            <Image
              src="/가게외관.png"
              alt={t("gallery.title")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-brown/15 via-transparent to-transparent" />
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
                  {tc("since")}
                </span>

                <div className="w-8 h-px bg-white/40 mb-2" />

                <h4 className="text-base md:text-lg font-serif font-bold leading-tight tracking-tight drop-shadow-md">
                  {t("heritageBadge.title")}{" "}
                  <span className="block text-xs md:text-sm font-normal mt-0.5 opacity-90">
                    {t("heritageBadge.subtitle")}
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 md:gap-16 lg:items-start">
            <div className="space-y-8 lg:pr-6">
              <h2 className="max-w-[10ch] text-[clamp(2.75rem,4.8vw,4.75rem)] font-serif text-soft-brown leading-[1.18] tracking-[-0.03em] break-keep text-balance-header">
                {t("story.title")}
              </h2>
              <div className="max-w-[34rem] space-y-4 text-light-brown font-sans text-lg leading-relaxed break-keep">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p className="font-serif italic text-soft-brown pt-4">"{t("story.quote")}"</p>
              </div>
            </div>
            <div className="w-full lg:pt-2">
              <div className="grid grid-cols-1 gap-6 lg:max-w-xl lg:ml-auto">
                {storyVisuals.map((visual) => (
                  <EditorialImageCard
                    key={visual.src}
                    src={visual.src}
                    alt={visual.alt}
                    aspectClassName="aspect-[5/4]"
                    roundedClassName="rounded-[2rem]"
                    priority
                  />
                ))}
              </div>
              {hasPendingStoryVisual && (
                <p className="mt-4 text-right text-[11px] font-sans tracking-[0.24em] uppercase text-light-brown/45">
                  {tc("imageComingSoon")}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Alternating Layout */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24 md:gap-32">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
            <div className="w-full md:w-1/2 order-1">
              <EditorialImageCard
                src="/images/ai/feature-naengmyeon.png"
                alt={t("intro.feature1")}
                aspectClassName="aspect-square"
                roundedClassName="rounded-[2.5rem]"
                priority
              />
            </div>
            <div className="flex-1 order-2 space-y-4">
              <h3 className="max-w-[10ch] text-3xl md:text-5xl font-serif text-soft-brown leading-[1.18] tracking-[-0.03em] break-keep text-balance-header">
                {t("intro.feature1")}
              </h3>
              <p className="text-light-brown leading-relaxed font-sans break-keep text-lg md:text-xl opacity-90">
                {t("intro.feature1Desc")}
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <EditorialImageCard
                src="/images/ai/feature-butchering.png"
                alt={t("intro.feature2")}
                aspectClassName="aspect-square"
                roundedClassName="rounded-[2.5rem]"
              />
            </div>
            <div className="flex-1 order-2 md:order-1 space-y-4">
              <h3 className="max-w-[10ch] text-3xl md:text-5xl font-serif text-soft-brown leading-[1.18] tracking-[-0.03em] break-keep text-balance-header">
                {t("intro.feature2")}
              </h3>
              <p className="text-light-brown leading-relaxed font-sans break-keep text-lg md:text-xl opacity-90">
                {t("intro.feature2Desc")}
              </p>
            </div>
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
      <Gallery />
    </div>
  );
}

function EditorialImageCard({
  src,
  alt,
  aspectClassName,
  roundedClassName,
  priority = false,
}: {
  src?: string;
  alt: string;
  aspectClassName: string;
  roundedClassName: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div className="flex items-center justify-center py-4">
        <span className="text-[11px] font-sans tracking-[0.24em] uppercase text-light-brown/45">
          준비중
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden border border-soft-brown/5 bg-ivory shadow-organic ${aspectClassName} ${roundedClassName}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={priority} />
      <div className="absolute inset-0 bg-gradient-to-t from-soft-brown/10 via-transparent to-transparent" />
    </div>
  );
}
