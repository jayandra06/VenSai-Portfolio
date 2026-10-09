import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";

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
  metadataBase: new URL("https://vensailabs.com"),
  title: {
    default: "Vensai Labs | Freelance Talent. Real Solutions. — Enterprise Technology & Business Partner",
    template: "%s | Vensai Labs",
  },
  description:
    "Vensai Labs is a full-service freelancing agency and business solutions partner delivering software engineering, mobile apps, AI/ML, cloud & DevOps, cybersecurity, SAP/BI, e-commerce, consulting, branding, marketing and post-deployment support.",
  keywords: [
    "Vensai Labs",
    "Freelancing Agency",
    "Business Solutions",
    "Technology Partner",
    "Software Development",
    "E-commerce Solutions",
    "Enterprise Technology",
    "Technical Consulting",
    "Dedicated Professionals",
    "Post-Deployment Support",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vensailabs.com",
    siteName: "Vensai Labs",
    title: "Vensai Labs — Freelance Talent. Real Solutions.",
    description:
      "One Business Partner. Multiple Capabilities. End-to-End Delivery. Build • Design • Automate • Scale.",
    images: [
      {
        url: "/brand/vensai-logo-original.jpg",
        width: 1024,
        height: 724,
        alt: "Vensai Labs — Freelance Talent. Real Solutions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vensai Labs — Freelance Talent. Real Solutions.",
    description:
      "Full-service freelancing agency and business solutions consultancy. Build • Design • Automate • Scale.",
    images: ["/brand/vensai-logo-original.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vensai Labs",
    slogan: "Freelance Talent. Real Solutions.",
    description:
      "Vensai Labs is a full-service freelancing agency and business solutions consultancy with full-time professional teams across software engineering, cloud, AI, cybersecurity, enterprise technology, e-commerce, branding, marketing and operational support.",
    url: "https://vensailabs.com",
    logo: "https://vensailabs.com/brand/vensai-logo-original.jpg",
    knowsAbout: [
      "Software & Product Engineering",
      "Mobile Applications",
      "AI & Machine Learning",
      "Cloud, DevOps & Infrastructure",
      "Cybersecurity",
      "Enterprise Technology (SAP BTP, Power BI, Tableau)",
      "E-Commerce Solutions",
      "Integrations & Automation",
      "Technical Consulting & R&D",
      "Brand & Digital Design",
      "Marketing & Growth",
      "Creative Production",
      "Customer & Operational Support",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans bg-white dark:bg-[#0B1118] text-slate-900 dark:text-slate-100 antialiased selection:bg-vensai-electric selection:text-white min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
