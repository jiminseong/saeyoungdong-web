import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  // @ts-ignore
  const menuTitle = messages.MenuPage.title;
  // @ts-ignore
  const siteTitle = messages.HomePage.title;
  // @ts-ignore
  const siteDescription = messages.HomePage.description;

  return {
    title: menuTitle,
    description: `${siteTitle} ${menuTitle}: ${siteDescription}`,
  };
}

export default function MenuPage() {
  const t = useTranslations("MenuPage");
  const tc = useTranslations("Common");
  const menuImageById: Partial<Record<string, string>> = {
    hanwoo_galbi: "/images/menu/생갈비.png",
  };

  const categories = [
    {
      id: "beef",
      items: [
        { id: "hanwoo_galbi", price: "54,000" },
        { id: "hanwoo_anchang", price: "51,000" },
        { id: "hanwoo_galbisal", price: "39,000" },
        { id: "hanwoo_deungsim", price: "50,000" },
        { id: "hanwoo_teukyang", price: "39,000" },
        { id: "hanwoo_yangnyeom_galbisal", price: "39,000" },
        { id: "hanwoo_yangnyeom_so_galbi", price: "39,000" },
        { id: "hanwoo_yukhoe", price: "53,000 / 43,000 / 33,000" },
        { id: "pork_galbi", price: "18,000" },
        { id: "pork_jjageuli", price: "18,000" },
        { id: "pork_samgyeopsal", price: "17,000" },
      ],
    },
    {
      id: "meal",
      items: [
        { id: "naengmyeon_mul", price: "8,000" },
        { id: "naengmyeon_bibim", price: "9,000" },
        { id: "naengmyeon_hoe", price: "12,000" },
        { id: "yukgaejang", price: "10,000" },
        { id: "galbitang", price: "12,000" },
        { id: "doenjang", price: "1,000" },
        { id: "rice", price: "1,000" },
      ],
    },
    {
      id: "drink",
      items: [
        { id: "drinks_soju", price: "4,000" },
        { id: "drinks_beer", price: "5,000" },
        { id: "soda", price: "2,000" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-warm-beige pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-20">
          <span className="text-orange-primary font-serif tracking-[0.2em] text-sm mb-4 block">
            OUR MENU
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-soft-brown mb-6">{t("title")}</h1>
          <div className="w-16 h-0.5 bg-orange-primary mx-auto" />
        </header>

        <div className="space-y-24">
          {categories.map((category) => (
            <section key={category.id} className="space-y-10">
              <h2 className="text-2xl md:text-3xl font-serif text-soft-brown border-b-2 border-orange-primary/20 pb-4 inline-block tracking-tight">
                {t(`categories.${category.id}`)}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item) => (
                  <MenuItem
                    key={item.id}
                    name={t(`items.${item.id}`)}
                    price={item.price}
                    desc={t.has(`descriptions.${item.id}`) ? t(`descriptions.${item.id}`) : ""}
                    imageSrc={menuImageById[item.id]}
                    imageAlt={t(`items.${item.id}`)}
                    placeholderLabel={tc("imageComingSoon")}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-32 text-center border-t border-soft-brown/10 pt-10">
          <p className="text-light-brown font-sans text-sm break-keep">
            {t("notices.weight")}
            <br />
            {t("notices.season")}
          </p>
        </footer>
      </div>
    </div>
  );
}

function MenuItem({
  name,
  price,
  desc,
  imageSrc,
  imageAlt,
  placeholderLabel,
}: {
  name: string;
  price: string;
  desc: string;
  imageSrc?: string;
  imageAlt: string;
  placeholderLabel: string;
}) {
  return (
    <article className="flex flex-col gap-4 p-4 md:p-5 rounded-2xl border border-soft-brown/10 bg-ivory/30 group cursor-default">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-soft-brown/10 bg-warm-beige">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-light-brown/70 text-sm md:text-base font-sans">
            {placeholderLabel}
          </div>
        )}
      </div>
      <div className="flex justify-between items-baseline gap-2 group-hover:translate-x-1 transition-transform duration-300">
        <h3 className="text-xl md:text-2xl font-serif text-soft-brown min-w-0">{name}</h3>
        <div className="flex-grow border-b border-dashed border-light-brown/30 mb-1.5 min-w-[10px]" />
        <span className="text-xl font-sans text-orange-primary font-bold whitespace-nowrap flex-shrink-0">
          {price}
        </span>
      </div>
      {desc && (
        <p className="text-sm md:text-base text-light-brown font-sans leading-relaxed break-keep">
          {desc}
        </p>
      )}
    </article>
  );
}
