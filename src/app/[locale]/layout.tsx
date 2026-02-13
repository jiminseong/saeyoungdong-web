import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  // @ts-ignore
  const siteTitle = messages.HomePage.title;
  // @ts-ignore
  const siteDescription = messages.HomePage.description;

  return {
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
    description: siteDescription,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://saeyoungdong.vercel.app"),
    alternates: {
      languages: {
        ko: "/ko",
        en: "/en",
        zh: "/zh",
      },
    },
    icons: {
      icon: [{ url: "/favicon.png" }, { url: "/icon.png", sizes: "32x32" }],
      apple: [{ url: "/icon.png", sizes: "180x180" }],
    },
    verification: {
      google: "google-site-verification-token", // User should replace with actual token
      other: {
        "naver-site-verification": "naver-site-verification-token", // User should replace with actual token
      },
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      siteName: siteTitle,
      locale: locale,
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    [key: string]: any;
  }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  // @ts-ignore
  const siteTitle = messages.HomePage.title;
  // @ts-ignore
  const siteDescription = messages.HomePage.description;

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: siteTitle,
              description: siteDescription,
              image: [
                `${process.env.NEXT_PUBLIC_BASE_URL || "https://saeyoungdong.vercel.app"}/images/og-image.png`,
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "풍양로9길 13",
                addressLocality: "제천시",
                addressRegion: "충청북도",
                postalCode: "27154",
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.1392164097053,
                longitude: 128.209056982319,
              },
              url: process.env.NEXT_PUBLIC_BASE_URL || "https://saeyoungdong.vercel.app",
              telephone: "+82-43-644-4444", // Example phone, user should verify
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:00",
                  closes: "22:00",
                },
              ],
              servesCuisine: "Korean BBQ",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-warm-beige text-soft-brown flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
