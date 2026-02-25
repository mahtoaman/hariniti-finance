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
    <section id="services" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(43 80% 55%) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-gold">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gold-light/90 mt-3">
            Comprehensive <span className="text-gradient-gold">Financial Solutions</span>
          </h2>
          <p className="mt-4 text-gold-light/50 font-body max-w-2xl mx-auto">
            From startup incorporation to asset management — we provide end-to-end financial services under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-xl border border-gold/10 bg-gold/[0.03] hover:bg-gold/[0.08] hover:border-gold/25 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-base font-semibold text-gold-light/90 mb-2">{service.title}</h3>
              <p className="text-sm text-gold-light/40 font-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
