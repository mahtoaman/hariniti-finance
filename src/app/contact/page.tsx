"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  Send,
  Clock,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 97713 80480",
    href: "tel:+919771380480",
    sub: "Mon–Sat, 11:00 AM – 8:00 PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 97713 80480",
    href: "https://wa.me/919771380480",
    sub: "Chat with us anytime",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "harinitifinancea@gmail.com",
    href: "mailto:harinitifinancea@gmail.com",
    sub: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "A-13, Pandav Nagar, East Delhi",
    href: "https://maps.google.com/?q=Pandav+Nagar+Ganesh+Nagar+Complex+East+Delhi+110092",
    sub: "Ganesh Nagar Complex, 110092",
  },
];

const services = [
  "Loan & Funding Assistance",
  "Business Financial Advisory",
  "Accounting, GST & Tax",
  "MCA & Legal Compliance",
  "Financial Consultancy & Asset Management",
  "Startup India & Incorporation",
  "Virtual CFO Services",
  "Funding & Valuation Support",
  "Real Estate Investment Support",
  "Stalled Projects Funding",
  "Other",
];

const faqs = [
  {
    question: "What services does HariNiti Finance offer?",
    answer:
      "We offer a comprehensive suite of financial services including Loan & Funding Assistance, Business Financial Advisory, GST & Tax Consultancy, MCA & Legal Compliance, Virtual CFO Services, Startup India Incorporation, Funding & Valuation Support, Real Estate Investment Support, and more.",
  },
  {
    question: "How can I schedule a consultation?",
    answer:
      "You can schedule a free strategy call by filling out the contact form on this page, calling us directly, or emailing us. Our team will get back to you within 24 hours to set up a convenient time.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely! In fact, we specialize in helping startups and growing businesses with incorporation, funding strategy, financial planning, and compliance — all from a single point of contact.",
  },
  {
    question: "What makes HariNiti Finance different from other firms?",
    answer:
      "We bring finance, law, strategy, and technical expertise under one roof. Our multidisciplinary team of CAs, MBAs, Advocates, Company Secretaries, and Engineers ensures you get holistic, transparent, and growth-focused advice.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes, we offer a complimentary initial strategy call to understand your needs, evaluate your situation, and suggest how we can help — completely free of charge.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We serve clients across India. Most of our advisory and consultancy work can be handled remotely, so location is never a barrier. We also visit clients on-site when needed.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service or Google Sheets
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero with Background Image ───────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact-hero-bg.jpg"
            alt="HariNiti Finance office consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm font-body font-semibold tracking-widest uppercase text-gold mb-6">
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light/95 leading-tight mb-6">
              Let&apos;s <span className="text-gradient-gold">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-gold-light/70 font-body max-w-2xl leading-relaxed mb-10">
              Have a question or ready to take the next step? Reach out to our
              expert team — we&apos;re here to help you make confident financial
              decisions.
            </p>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
            >
              Send a Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ───────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, i) => {
              const cardClass = "flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group";
              const inner = (
                <>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-2">
                    {item.label}
                  </span>
                  <span className="text-base font-body font-semibold text-foreground mb-1">
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.sub}
                  </span>
                </>
              );
              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} cursor-pointer`}
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full-width image strip ───────────────────── */}
      <section className="relative h-56 overflow-hidden">
        <img
          src="/advisory-session.jpg"
          alt="HariNiti Finance advisory session"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy-dark/55 flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="font-display text-xl md:text-2xl text-gold-light/90 italic max-w-2xl">
              &quot;Every great financial decision starts with the right conversation.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────── */}
      <section id="contact-form" className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* Left */}
            <div>
              <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
                Get Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Send Us a <span className="text-accent">Message</span>
              </h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                Whether you need help with business funding, tax compliance,
                company incorporation, or want a Virtual CFO — fill in the form
                and our team will reach out within 24 hours.
              </p>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-card mb-6">
                <img
                  src="/finance-analysis.jpg"
                  alt="Financial analysis"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="space-y-4">
                {[
                  "Free initial strategy consultation",
                  "Personalized financial roadmap",
                  "Dedicated point of contact",
                  "No hidden fees or obligations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="text-sm text-accent font-body font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-sm hover:brightness-110 transition-all shadow-gold group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left – Image */}
            <div className="sticky top-24">
              <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
                FAQs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Frequently Asked{" "}
                <span className="text-accent">Questions</span>
              </h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                Have more questions? Call us or drop us an email — we&apos;re
                always happy to help.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/team-meeting.jpg"
                  alt="HariNiti Finance team meeting"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* Right – Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-body font-medium text-foreground text-sm pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 pb-5" : "max-h-0"}`}
                  >
                    <p className="px-5 text-sm text-muted-foreground font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="py-16 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gold-light/90 mb-4">
            Don&apos;t Wait —{" "}
            <span className="text-gradient-gold">Your Financial Growth</span>{" "}
            Starts Today
          </h2>
          <p className="text-base text-gold-light/50 font-body mb-8 max-w-xl mx-auto">
            Call or WhatsApp us now for a free strategy session with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919771380480"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919771380480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gold/40 text-gold-light font-body font-semibold text-base hover:bg-gold/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
