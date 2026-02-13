import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <p>{t("hero.headline")}</p>
        <p className="border mt-4 p-2 rounded-xl text-orange-500 bg-white shadow-md">
          {t("hero.ctaMenu")}
        </p>
      </div>
    </main>
  );
}
