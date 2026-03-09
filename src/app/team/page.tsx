import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Shield, ArrowRight, Briefcase, Award, Scale, Cpu } from "lucide-react";
import { teamMembers } from "@/data/team-data";

export const metadata: Metadata = {
  title: "Our Team | Hariniti Finance",
  description: "Meet the expert multidisciplinary team at Hariniti Finance — Chartered Accountants, MBAs, Advocates, and more.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* ── Hero Section ────────────────────────────── */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/team-meeting.jpg"
            alt="Hariniti Finance Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/70 backdrop-blur-[2px]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm font-body font-semibold tracking-widest uppercase text-gold mb-6 animate-fade-in">
              <Users className="w-4 h-4" />
              Our Experts
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Meet the <span className="text-gradient-gold">Multidisciplinary</span> Minds
            </h1>
            <p className="text-lg text-slate-300 font-body max-w-2xl leading-relaxed animate-slide-up delay-100">
              A collective of Chartered Accountants, MBAs, Advocates, and Strategic Advisors dedicated to your financial growth and regulatory excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Team Grid ────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Section: Leadership */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border" />
              <h2 className="font-display text-2xl font-bold text-foreground">Leadership Team</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.filter(m => m.category === "Leadership").map((member, i) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>

          {/* Section: Professionals */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border" />
              <h2 className="font-display text-2xl font-bold text-foreground">Our Professionals</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.filter(m => m.category !== "Leadership").map((member, i) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Numbers Section ──────────────────────────── */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, count: "10+", label: "Chartered Accountants" },
              { icon: Briefcase, count: "5+", label: "Strategic MBAs" },
              { icon: Scale, count: "5+", label: "Advocates & CS" },
              { icon: Cpu, count: "5+", label: "IT Developers" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.count}</div>
                <div className="text-sm text-slate-400 font-body uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl bg-navy-dark overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-hero-gradient opacity-90" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Ready to work with our experts?
              </h2>
              <p className="text-slate-300 font-body mb-10">
                Contact us today for a consultation and let our multidisciplinary team help you achieve your financial goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-body font-bold text-base hover:brightness-110 transition-all shadow-gold group"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TeamCard({ member }: { member: any }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative h-80 overflow-hidden shrink-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold z-10" />
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: "center 15%" }}
        />
        {member.category && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-navy-dark/80 backdrop-blur-md text-[10px] font-bold text-gold border border-gold/20 uppercase tracking-widest">
              {member.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-xl font-bold text-foreground">
          {member.name}
        </h3>
        <p className="text-sm font-body font-semibold text-accent">
          {member.role}
        </p>
        {member.credentials && (
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="text-[10px] font-body font-medium text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-0.5">
              {member.credentials}
            </span>
          </div>
        )}
        <p className="text-xs text-muted-foreground font-body leading-relaxed mt-3 italic">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
