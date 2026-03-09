import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg.src} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
          >
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-body text-gold-light">Strategic · Transparent · Future-Focused</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-gold-light/90">Your Trusted</span>
            <br />
            <span className="text-gradient-gold">Financial Growth</span>
            <br />
            <span className="text-gold-light/90">Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-lg md:text-xl text-gold-light/60 italic mb-4"
          >
            "Advising Today. Securing Tomorrow."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-gold-light/50 font-body max-w-xl mb-10 leading-relaxed"
          >
            We help individuals and businesses make smart, confident financial decisions through personalized strategies and transparent advisory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
            >
              Talk to an Advisor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/30 text-gold-light font-body font-medium text-base hover:bg-gold/5 transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
        >
          {[
            { icon: Users, label: "Expert Team", value: "20+ Professionals", href: "/team" },
            { icon: Shield, label: "Certified", value: "CA, CS, MBA & More" },
            { icon: TrendingUp, label: "Focus", value: "Your Growth" },
          ].map((stat, i) => {
            const content = (
              <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-gold/5 border border-gold/10 transition-all h-full ${stat.href ? 'hover:bg-gold/10 hover:border-gold/30 cursor-pointer' : ''}`}>
                <stat.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <div className="text-sm font-body font-semibold text-gold-light/90">{stat.value}</div>
                  <div className="text-xs font-body text-gold-light/40">{stat.label}</div>
                </div>
              </div>
            );

            return stat.href ? (
              <Link key={i} href={stat.href}>
                {content}
              </Link>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
