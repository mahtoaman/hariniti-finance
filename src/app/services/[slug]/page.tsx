import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData, type ServiceSection } from "@/data/services-data";
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
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
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
};

type Params = { slug: string };

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Hariniti Finance" };
  return {
    title: `${service.title} | Hariniti Finance`,
    description: service.desc,
  };
}

function SectionCard({ section, index }: { section: ServiceSection; index: number }) {
  const colors = [
    "from-blue-50 to-indigo-50 border-blue-100",
    "from-amber-50 to-yellow-50 border-amber-100",
    "from-emerald-50 to-green-50 border-emerald-100",
    "from-purple-50 to-violet-50 border-purple-100",
    "from-rose-50 to-pink-50 border-rose-100",
    "from-cyan-50 to-sky-50 border-cyan-100",
    "from-orange-50 to-red-50 border-orange-100",
  ];
  const dotColors = [
    "text-blue-600",
    "text-amber-600",
    "text-emerald-600",
    "text-purple-600",
    "text-rose-600",
    "text-cyan-600",
    "text-orange-600",
  ];
  const color = colors[index % colors.length];
  const dotColor = dotColors[index % dotColors.length];

  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br ${color} p-7 shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      {/* Section heading */}
      <div className="flex items-start gap-3 mb-5">
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-bold text-navy font-body border border-border">
          {index + 1}
        </span>
        <h3 className="font-display text-lg font-bold text-navy leading-snug">{section.heading}</h3>
      </div>

      {/* Simple items */}
      {section.items && (
        <ul className="space-y-2.5">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${dotColor}`} />
              <span className="font-body text-sm text-foreground/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Sub-categories */}
      {section.subCategories && (
        <div className="space-y-5">
          {section.subCategories.map((sub, si) => (
            <div key={si}>
              <p className="font-body font-semibold text-navy text-sm mb-2.5 flex items-center gap-1.5">
                <ChevronRight className={`w-4 h-4 ${dotColor}`} />
                {sub.heading}
              </p>
              <ul className="space-y-2 pl-5">
                {sub.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-current ${dotColor}`} />
                    <span className="font-body text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Note */}
      {section.note && (
        <p className="mt-4 pt-4 border-t border-white/60 text-xs font-body text-muted-foreground italic">
          {section.note}
        </p>
      )}
    </div>
  );
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.iconName] ?? FileText;

  // Breadcrumb neighbours
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-navy-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-[#1a2744]" />
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow blob */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-body text-gold-light/50">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gold-light/80 truncate max-w-[200px]">{service.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 pt-32 lg:pt-16">
          <div className="max-w-3xl">
            {/* Icon badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-xs font-body font-semibold tracking-widest uppercase text-gold">
                Our Services
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              {service.title}
            </h1>

            {service.tagline && (
              <p className="text-lg md:text-xl font-body text-gold-light/70 italic mb-6">
                {service.tagline}
              </p>
            )}

            <p className="text-base md:text-lg text-gold-light/60 font-body leading-relaxed max-w-2xl">
              {service.desc}
            </p>
          </div>
        </div>

        {/* Wave fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Overview ─────────────────────────────── */}
      {service.overview && (
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-6 border-l-4 border-gold">
                <span className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-gold" />
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                  {service.overview}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Sections Grid ────────────────────────── */}
      <section className="py-10 pb-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
                What We Cover
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-3">
                Comprehensive Service Breakdown
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {service.sections.map((section, i) => (
                <SectionCard key={i} section={section} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Features Strip ──────────────────── */}
      <section className="py-10 bg-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-body text-sm font-semibold text-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation between services ──────────── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300 w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Previous</p>
                  <p className="text-sm font-body font-semibold text-foreground truncate">{prevService.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/services"
              className="text-sm font-body font-medium text-accent hover:text-navy underline-offset-4 hover:underline transition-colors"
            >
              All Services
            </Link>

            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300 w-full sm:w-auto text-right"
              >
                <div className="text-right min-w-0 flex-1">
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Next</p>
                  <p className="text-sm font-body font-semibold text-foreground truncate">{nextService.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/pattern-dots.svg')", backgroundSize: "20px 20px" }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
            <Icon className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started with{" "}
            <span className="text-gradient-gold">{service.title}?</span>
          </h2>
          <p className="text-base text-gold-light/60 font-body max-w-xl mx-auto mb-8">
            Speak directly with our experts and get a personalized strategy tailored to your business needs — completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-navy-dark font-body font-bold text-base hover:bg-white hover:text-navy-dark transition-all shadow-lg hover:-translate-y-1"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent text-gold border-2 border-gold/40 font-body font-semibold text-base hover:bg-gold/10 transition-all hover:-translate-y-1"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
