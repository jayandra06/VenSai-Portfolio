import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { buildRootGraphSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Vensai Labs | Freelance Talent. Real Solutions. — Enterprise Technology & Business Partner",
    template: "%s | Vensai Labs",
  },
  description:
    "Vensai Labs is a full-service freelancing agency and business solutions partner delivering software engineering, mobile apps, AI/ML, cloud & DevOps, cybersecurity, SAP/BI, e-commerce, consulting, branding, marketing and post-deployment support.",
  applicationName: "Vensai Labs",
  authors: [{ name: "Vensai Labs", url: SITE_URL }],
  creator: "Vensai Labs",
  publisher: "Vensai Labs",
  keywords: [
    "Vensai Labs",
    "Freelancing Agency",
    "Business Solutions Partner",
    "Technology Partner",
    "Software Development Agency",
    "E-commerce Solutions",
    "Enterprise Technology Consulting",
    "Technical Consulting & R&D",
    "Dedicated Professional Teams",
    "Post-Deployment Managed Support",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Vensai Labs",
    title: "Vensai Labs — Freelance Talent. Real Solutions.",
    description:
      "One Business Partner. Multiple Capabilities. End-to-End Delivery. Build • Design • Automate • Scale.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vensai Labs — Freelance Talent. Real Solutions.",
    description:
      "Full-service freelancing agency and business solutions consultancy. Build • Design • Automate • Scale.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootGraphSchema = buildRootGraphSchema();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans bg-white dark:bg-[#0B1118] text-slate-900 dark:text-slate-100 antialiased selection:bg-vensai-electric selection:text-white min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraphSchema) }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-vensai-royal focus:text-white focus:rounded-sm"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}

