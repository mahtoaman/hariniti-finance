import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harinitifinance.com"),
  title: {
    default: "Hariniti Finance | Best Finance & Business Advisory Company",
    template: "%s | Hariniti Finance",
  },
  description: "Hariniti Finance is the best finance company near you offering comprehensive financial solutions including Loan & Funding Assistance, Business Financial Advisory, Virtual CFO Services, GST, Tax, MCA & Legal Compliance, and Startup India Incorporation.",
  keywords: [
    "best finance company near me",
    "best finance company in India",
    "Loan & Funding Assistance",
    "Business Financial Advisory",
    "Accounting, GST & Tax services near me",
    "MCA & Legal Compliance",
    "Financial Consultancy & Asset Management",
    "Startup India & Incorporation best company",
    "Virtual CFO Services near me",
    "top Virtual CFO firm",
    "Funding & Valuation Support",
    "Real Estate Investment Support",
    "Stalled Projects Funding",
    "bookkeeping and tax consultancy",
    "NCLT and IBC consultancy",
    "business valuation services",
    "investor-ready financials"
  ],
  authors: [{ name: "Hariniti Finance" }],
  creator: "Hariniti Finance",
  publisher: "Hariniti Finance",
  openGraph: {
    title: "Hariniti Finance | Comprehensive Financial Solutions",
    description: "Your trusted partner for Loan & Funding, Startup Incorporation, GST, Accounting, and Virtual CFO services.",
    url: "https://harinitifinance.com",
    siteName: "Hariniti Finance",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hariniti Finance - Best Finance Company",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HarinitiFinance",
    title: "Hariniti Finance | Best Finance & Business Advisory",
    description: "End-to-end support for securing loans, business advisory, tax, and startup incorporation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
