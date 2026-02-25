import { motion } from "framer-motion";
import { Award, Briefcase, Scale, Cpu } from "lucide-react";

const team = [
  {
    icon: Award,
    count: "10+",
    title: "Chartered Accountants",
    desc: "Deep financial insight, compliance excellence, taxation strategy, audit expertise, and structured advisory.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Briefcase,
    count: "5+",
    title: "MBAs",
    desc: "Strategic planning, business growth models, financial analysis, and performance optimization.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Scale,
    count: "5+",
    title: "Advocates & Company Secretaries",
    desc: "Legal structuring, corporate governance, regulatory compliance, and risk management.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Cpu,
    count: "—",
    title: "Engineers & Technical Experts",
    desc: "Analytical precision, project evaluation, and sector-specific financial structuring support.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const StrengthSection = () => {
  return (
    <section id="strength" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Our Strength</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            A Multidisciplinary <span className="text-accent">Expert Team</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
            One Team. Multiple Perspectives. One Goal — <strong className="text-foreground">Your Financial Growth.</strong>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-full ${member.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <member.icon className={`w-7 h-7 ${member.color}`} />
              </div>
              <div className="font-display text-3xl font-bold text-accent mb-1">{member.count}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{member.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-base text-muted-foreground font-body">
              We combine <strong className="text-foreground">finance, law, strategy, and technical expertise</strong> under one roof to create measurable impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrengthSection;
