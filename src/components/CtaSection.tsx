import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gold-light/90 mb-6">
              Let's Build Your{" "}
              <span className="text-gradient-gold">Financial Future</span>{" "}
              Together
            </h2>
            <p className="text-lg text-gold-light/50 font-body mb-10 max-w-xl mx-auto">
              Ready to take control of your finances? Schedule a free strategy call and let's discuss how we can help you grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="tel:+919771380480"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
              >
                Schedule a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Phone, label: "Call Us", value: "+91 97713 80480" },
                { icon: Mail, label: "Email", value: "harinitifinancea@gmail.com" },
                { icon: MapPin, label: "Location", value: "East Delhi, 110092" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4">
                  <item.icon className="w-5 h-5 text-gold mb-1" />
                  <span className="text-xs text-gold-light/40 font-body uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm text-gold-light/70 font-body font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
