import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Landmark,
  BarChart3,
  FileText,
  Scale,
  Coins,
  Rocket,
  UserCheck,
  TrendingUp,
  Building2,
  HardHat,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Hariniti Finance",
  description:
    "Explore our comprehensive financial solutions including Loan & Funding Assistance, Business Financial Advisory, Virtual CFO Services, and Taxation in India.",
};

const extendedServices = [
  {
    icon: Landmark,
    title: "Loan & Funding Assistance",
    desc: "End-to-end support for securing the right loans and funding solutions tailored to your business needs.",
    image: "/service-1.jpg",
    features: ["Project Finance Support", "Working Capital Loans", "Term Loans & LAP", "SME & MSME Funding"],
  },
  {
    icon: BarChart3,
    title: "Business Financial Advisory",
    desc: "Strategic financial planning and advisory to drive informed decisions and sustainable business growth.",
    image: "/service-2.jpg",
    features: ["Strategic Financial Planning", "Risk Management", "Performance Optimization", "Cash Flow Structuring"],
  },
  {
    icon: UserCheck,
    title: "Virtual CFO Services",
    desc: "Get the expertise of a Chief Financial Officer without the full-time cost — strategic finance on demand.",
    image: "/service-3.jpg",
    features: ["Management Dashboards", "Budgeting & Forecasting", "Profitability Analysis", "Cost Optimization"],
  },
  {
    icon: FileText,
    title: "Accounting, GST & Tax",
    desc: "Comprehensive bookkeeping, GST compliance, and income tax consultancy to keep you always audit-ready.",
    image: "/service-4.jpg",
    features: ["Statutory Audit Support", "Direct & Indirect Taxation", "GST Filing & Reconciliation", "Bookkeeping Services"],
  },
  {
    icon: TrendingUp,
    title: "Funding & Valuation Support",
    desc: "Business valuation, investor-ready financials, and fundraising strategy for growth-stage companies.",
    image: "/service-5.jpg",
    features: ["Pitch Deck Preparation", "Business Valuation Reports", "Due Diligence Support", "PE & VC Fundraising"],
  },
  {
    icon: Rocket,
    title: "Startup India & Incorporation",
    desc: "Business incorporation, Startup India registration, and end-to-end setup support for new ventures.",
    image: "/service-6.jpg",
    features: ["Company Registration", "Startup India Seed Fund", "DIPP Recognition", "Founder Agreements"],
  },
  {
    icon: Scale,
    title: "MCA & Legal Compliance",
    desc: "MCA services, legal compliances, NCLT and IBC consultancy for robust corporate governance.",
    image: "/service-7.jpg",
    features: ["Company Secretarial Work", "NCLT Representation", "Corporate Governance", "Annual ROC Filings"],
  },
  {
    icon: Coins,
    title: "Financial Consultancy & Asset Management",
    desc: "Expert asset management and financial consultancy services to grow and protect your wealth.",
    image: "/service-8.jpg",
    features: ["Portfolio Structuring", "Wealth Management", "Investment Advisory", "Market Research"],
  },
  {
    icon: Building2,
    title: "Real Estate Investment Support",
    desc: "Expert guidance on real estate investment analysis, structuring, and portfolio optimization.",
    image: "/service-9.jpg",
    features: ["REITs & Alternate Assets", "Property Due Diligence", "Investment Structuring", "ROI Analysis"],
  },
  {
    icon: HardHat,
    title: "Stalled Projects Funding",
    desc: "Specialized funding support and financial restructuring for stalled or distressed projects.",
    image: "/service-10.jpg",
    features: ["Distressed Asset Funding", "Capital Restructuring", "Project Turnaround", "Special Situation Funds"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/services-hero-bg.png"
            alt="Corporate Advisory Meeting"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-navy-dark/75 backdrop-blur-[2px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm font-body font-semibold tracking-widest uppercase text-gold mb-6 shadow-lg">
              <BarChart3 className="w-4 h-4" />
              Our Expertise
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Transformative <span className="text-gradient-gold drop-shadow-sm">Financial Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gold-light/80 font-body max-w-2xl leading-relaxed mb-10">
              We provide an integrated platform covering Advisory, Funding, Taxation, Compliance, and Strategy — architecting scalable ecosystems for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-navy-dark font-body font-bold text-lg hover:bg-white hover:text-navy-dark transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1"
            >
              Consult with an Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services List (Alternating Layout) ─────── */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1a202c 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col gap-24 lg:gap-32">
            {extendedServices.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-card group">
                      {/* Placeholder logic: using a colored bg with icon if image fails or isn't there yet */}
                      <div className="absolute inset-0 bg-navy/5 flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-border group-hover:bg-navy/10 transition-colors">
                        <service.icon className="w-16 h-16 text-muted-foreground/30 mb-4" />
                        <p className="text-muted-foreground font-body text-sm font-medium">Image Placeholder</p>
                        <p className="text-muted-foreground/60 font-body text-xs mt-1">Please provide: <code className="text-navy font-bold">{service.image}</code></p>
                      </div>

                      {/* Actual image element (will sit on top if it resolves) */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Gradient overlay for premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent z-20 pointer-events-none" />

                      {/* Icon Badge overlay */}
                      <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center z-30 shadow-xl">
                        <service.icon className="w-6 h-6 text-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 text-xs font-body font-bold tracking-widest uppercase text-accent mb-6 self-start">
                      Specialized Service
                    </div>
                    
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <h4 className="font-display font-semibold text-foreground mb-4">Core Deliverables:</h4>
                    <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          <span className="font-body text-sm text-foreground/80 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center gap-2 text-navy hover:text-accent font-body font-bold text-base transition-colors self-start pb-1 border-b-2 border-accent/20 hover:border-accent"
                    >
                      Discuss this with us
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Call to Action CTA ─────────────────────── */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('/pattern-dots.svg')", backgroundSize: "20px 20px" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Structure Your Growth?
          </h2>
          <p className="text-lg text-gold-light/70 font-body max-w-2xl mx-auto mb-10">
            Schedule a free exploratory call with our experts. Let’s identify exactly what your business needs to scale securely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold text-navy-dark font-body font-bold text-lg hover:bg-white hover:text-navy-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="mailto:info@harinitifinance.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent text-gold border-2 border-gold/50 font-body font-bold text-lg hover:bg-gold/10 transition-all hover:-translate-y-1"
            >
              Email Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
