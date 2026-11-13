import type { Metadata } from "next";
import { Inter, Outfit, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ContactFab } from "@/components/ui/ContactFab";
import { SITE_URL, DEFAULT_OG_IMAGE, GEO_BASE_KEYWORDS } from "@/lib/seo";
import { buildRootGraphSchema } from "@/lib/schema";
import { BRAND_CONFIG } from "@/data/vensai-data";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vensai Labs — Software, vendorship, and BPO delivery",
    template: "%s | Vensai Labs",
  },
  description:
    "VenSai Labs by Vijetha Softwares Pvt. Ltd. is a software company with IT and non-IT practices: software engineering, mobile, AI, cloud, cybersecurity, SAP/BI, e-commerce, consulting, brand, KPO, BPO and support.",
  applicationName: "Vensai Labs",
  authors: [{ name: "Vensai Labs", url: SITE_URL }],
  creator: "Vensai Labs",
  publisher: "Vensai Labs",
  keywords: [
    "Vensai Labs",
    "Software Company",
    "Enterprise vendorship India",
    "BPO voice chat India",
    "E-commerce Solutions",
    "Enterprise Technology Consulting",
    "Technical Consulting & R&D",
    "Dedicated Professional Teams",
    "Post-Deployment Managed Support",
    ...GEO_BASE_KEYWORDS,
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: [
      "en_GB", "en_CA", "en_AU", "de_DE",
      "en_AE", "ar_AE", "en_EG", "ar_EG",
      "it_IT", "en_IN", "hi_IN",
    ],
    url: `${SITE_URL}/`,
    siteName: "Vensai Labs",
    title: "Vensai Labs — Software, vendorship, and BPO",
    description:
      "Custom software, enterprise subcontracting, and voice/chat BPO from Vijetha Softwares Pvt. Ltd.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vensai Labs — Software, vendorship, and BPO",
    description:
      "Custom software, enterprise subcontracting, and voice/chat BPO from Vijetha Softwares Pvt. Ltd.",
    images: [DEFAULT_OG_IMAGE.url],
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
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/vensai-symbol.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootGraphSchema = buildRootGraphSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans bg-vensai-paper dark:bg-vensai-obsidian text-slate-900 dark:text-slate-100 antialiased selection:bg-vensai-electric selection:text-white min-h-screen flex flex-col w-full max-w-full overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraphSchema) }}
        />
        <ScrollProgress />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-vensai-royal focus:text-white focus:rounded-sm"
          >
            Skip to main content
          </a>
          <Navbar brandTagline={BRAND_CONFIG.tagline} />
          <main id="main-content" className="flex-1 w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <ContactFab />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

