import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HariNiti Finance Private Limited. Schedule a free strategy call for Loan & Funding, GST, Tax, Virtual CFO, Startup Incorporation, and all financial advisory services. Best finance company contact.",
  keywords: [
    "contact Hariniti Finance",
    "best finance company contact",
    "financial advisory contact India",
    "free consultation finance company",
    "GST tax consultancy contact",
    "virtual CFO contact",
    "startup incorporation help",
    "loan funding contact",
  ],
  openGraph: {
    title: "Contact Us | Hariniti Finance",
    description:
      "Reach out to our expert team for a free strategy call. We're here to help with all your financial needs.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
