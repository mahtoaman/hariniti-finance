import { motion } from "framer-motion";
import { Target, Eye, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Who We Are</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Built to <span className="text-accent">Challenge</span> the Ordinary
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              We didn't start HariNiti Finance to be just another advisory firm — we started it to challenge the way finance is understood and delivered.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
              For too long, financial decisions have been driven by complexity, hidden motives, and generic advice. We built HariNiti Finance to bring <strong className="text-foreground">clarity</strong> where there is confusion, <strong className="text-foreground">strategy</strong> where there is uncertainty, and <strong className="text-foreground">transparency</strong> where there is doubt.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed">
              At HariNiti Finance Private Limited, we don't just manage finances — we save your time, optimize your resources, protect your capital, and shape your financial future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To create a new standard of financial advisory that is intelligent, ethical, personalized, and relentlessly focused on real growth.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be the most trusted financial growth partner for businesses and individuals across India.",
              },
              {
                icon: Lightbulb,
                title: "Our Belief",
                text: "Confident decisions build powerful futures. We bring finance, law, strategy, and technical expertise under one roof.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
