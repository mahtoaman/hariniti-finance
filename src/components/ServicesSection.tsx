import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Loan & Funding Assistance",
    desc: "End-to-end support for securing the right loans and funding solutions tailored to your business needs.",
  },
  {
    icon: BarChart3,
    title: "Business Financial Advisory",
    desc: "Strategic financial planning and advisory to drive informed decisions and sustainable business growth.",
  },
  {
    icon: FileText,
    title: "Accounting, GST & Tax",
    desc: "Comprehensive bookkeeping, GST compliance, and income tax consultancy to keep you always audit-ready.",
  },
  {
    icon: Scale,
    title: "MCA & Legal Compliance",
    desc: "MCA services, legal compliances, NCLT and IBC consultancy for robust corporate governance.",
  },
  {
    icon: Coins,
    title: "Financial Consultancy & Asset Management",
    desc: "Expert asset management and financial consultancy services to grow and protect your wealth.",
  },
  {
    icon: Rocket,
    title: "Startup India & Incorporation",
    desc: "Business incorporation, Startup India registration, and end-to-end setup support for new ventures.",
  },
  {
    icon: UserCheck,
    title: "Virtual CFO Services",
    desc: "Get the expertise of a Chief Financial Officer without the full-time cost — strategic finance on demand.",
  },
  {
    icon: TrendingUp,
    title: "Funding & Valuation Support",
    desc: "Business valuation, investor-ready financials, and fundraising strategy for growth-stage companies.",
  },
  {
    icon: Building2,
    title: "Real Estate Investment Support",
    desc: "Expert guidance on real estate investment analysis, structuring, and portfolio optimization.",
  },
  {
    icon: HardHat,
    title: "Stalled Projects Funding",
    desc: "Specialized funding support and financial restructuring for stalled or distressed projects.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Structured Capital. <br />
              <span className="text-accent">Strategic Growth.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-body font-semibold border border-border shadow-sm hover:shadow-md hover:border-gold hover:text-gold transition-all group"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── Bento Grid Layout for All Services ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            // Make the 1st and 7th cards span 2 columns on large screens to create a bento box look
            const isWide = i === 0 || i === 6;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl p-8 border border-border bg-white shadow-sm hover:shadow-card-hover hover:border-accent/30 transition-all duration-500 flex flex-col justify-end ${
                  isWide ? "md:col-span-2 lg:col-span-2 min-h-[300px]" : "col-span-1 min-h-[300px]"
                }`}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/[0.02] group-hover:to-accent/[0.08] transition-colors duration-500" />
                
                {/* Large decorative watermark icon */}
                <service.icon className="absolute -bottom-6 -right-6 w-48 h-48 text-accent/[0.03] group-hover:text-accent/[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-auto group-hover:-translate-y-1 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 tracking-wide">{service.title}</h3>
                    <p className={`text-base font-body text-muted-foreground leading-relaxed ${isWide ? "max-w-md" : ""}`}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
