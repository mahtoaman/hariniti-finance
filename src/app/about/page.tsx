import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Briefcase,
  Scale,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import TeamCarousel from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HariNiti Finance Private Limited — a multidisciplinary financial advisory firm with 20+ professionals including Chartered Accountants, MBAs, Advocates, Company Secretaries, and Engineers. Best finance advisory company in India.",
  keywords: [
    "about Hariniti Finance",
    "best finance advisory company",
    "financial advisory firm India",
    "chartered accountant advisory",
    "virtual CFO company",
    "startup finance advisory",
    "GST tax consultancy firm",
    "MCA compliance company",
  ],
  openGraph: {
    title: "About Us | Hariniti Finance",
    description:
      "Meet the multidisciplinary team behind HariNiti Finance — your trusted financial growth partner.",
    images: ["/og-image.png"],
  },
};

const team = [
  {
    icon: Award,
    count: "10+",
    title: "Chartered Accountants",
    desc: "Deep financial insight, compliance excellence, taxation strategy, audit expertise, and structured advisory.",
  },
  {
    icon: Briefcase,
    count: "5+",
    title: "MBAs",
    desc: "Strategic planning, business growth models, financial analysis, and performance optimization.",
  },
  {
    icon: Scale,
    count: "5+",
    title: "Advocates & Company Secretaries",
    desc: "Legal structuring, corporate governance, regulatory compliance, and risk management.",
  },
  {
    icon: Cpu,
    count: "5+",
    title: "IT Developers",
    desc: "Providing technology-driven efficiency, data intelligence, and IT-enabled business solutions.",
  },
];

const teamMembers = [
  {
    name: "CA Satish Singh Rajput",
    role: "Founder & Non-Executive Director",
    credentials: "CA | AIR–13 (CA Inter)",
    bio: "Founder of Hariniti Finance Pvt. Ltd. with 5+ years of diversified experience across stock markets, derivatives, commodities trading, portfolio management, project funding, business consulting, startup advisory, and tax consultancy. AIR–13 in CA (Inter) and former leading member of the Internal Audit Team of a listed NBFC for 2.5 years. Leads Hariniti Finance with a commitment to growth, integrity, and long-term value creation.",
    image: "/satish singh.png",
  },
  {
    name: "Amit Mishra",
    role: "CEO – Hariniti Finance Pvt. Ltd.",
    credentials: "MBA (Finance) | CFA Level I | CA (Pursuing)",
    bio: "A results-driven banking and finance leader with 5+ years of experience in credit, audit, and risk management. Senior Team Member in the Statutory Audit of Bank of Baroda. Expert in Retail Banking, Home Loan & LAP Structuring, and Core Banking Advisory. Driving Hariniti Finance with a vision to deliver strategic funding solutions and scalable financial growth.",
    image: "/amit mishra.png",
  },
  {
    name: "Prabhat Chandra",
    role: "Director & Chief Financial Officer",
    credentials: "B.Com | M.Com | 17+ Years Experience",
    bio: "17+ years of experience in sales and credit underwriting across Home Loans, Business Loans, Personal Loans, and Structured Finance. Managed the complete lending cycle from sourcing to disbursement, with strong expertise in financial assessment, risk evaluation, and portfolio quality. Leads financial strategy and credit governance at Hariniti Finance.",
    image: "/prabhat chandra.png",
  },
  {
    name: "Rahul Ranjan Roy",
    role: "Head of Growth & Strategic Advisory",
    credentials: "MBA (Marketing) | 14 Years Experience",
    bio: "MBA (Marketing) professional with 14 years of execution-driven experience in Marketing and HR. Proven track record in scaling operations, optimizing people performance, and driving growth, with experience at LNJ Bhilwara Group and a US-based MNC. Leads growth, compliance, and strategic advisory at Hariniti Finance.",
    image: "/mba-rahul.png",
  },
  {
    name: "ER Ranjit K. Singh",
    role: "Capital Markets Leader | Investment Strategist",
    credentials: "Finance Professional",
    bio: "A results-driven Finance Professional with deep expertise in equity markets and brokerage leadership, ER Ranjit K. Singh brings strong institutional experience from Motilal Oswal Financial Services and Nirmal Bang Securities. As the driving force behind a franchise of Globe Capital Market Limited, he leads high-performance trading operations, strategic client acquisition, and wealth-focused investment advisory. At Hariniti Finance, he powers the Capital Markets vertical with precision, performance, and a growth-first mindset.",
    image: "/ranjeetksingh.png",
  },
  {
    name: "CA Narendra P. Sah",
    role: "Taxation & Audit Specialist",
    credentials: "Ex-Grant Thornton",
    bio: "Expert in statutory audits, corporate taxation, and regulatory compliance with a strong foundation in structured advisory and financial governance.",
    image: "/ca narendra.png",
  },
  {
    name: "Mr. Rajpreet Singh",
    role: "Global Real Estate & Operations Leader",
    credentials: "Post Graduate | 23+ Years Experience",
    bio: "A Post Graduate professional with 23+ years of leadership in large-scale Infrastructure and Global Real Estate across India and the UAE. Specializing in Luxury Developments, IT Parks, Pre-Leased Assets, Hospitality, and Strategic Investment Advisory — delivering vision-driven, high-value projects with cross-border expertise.",
    image: "/rajpreetsingh.png",
  },
  {
    name: "Sumit Darshan Yadav",
    role: "Corporate Sales & Strategic Partnerships",
    credentials: "MBA",
    bio: "Sumit Darshan Yadav is an MBA professional with strong expertise in Corporate Sales and business development. He brings valuable experience from representing M/s Chinar Forge Ltd., Jalandhar, where he played an instrumental role in strengthening brand positioning and driving institutional sales growth. At Hariniti Finance Pvt. Ltd., he plays a pivotal role in strategic lead generation, client acquisition, and expanding corporate partnerships—directly contributing to revenue growth and enhanced market presence.",
    image: "/sumit darshan yadav.png",
  },
  {
    name: "CA Nikhil Kabra",
    role: "Senior Consultant",
    credentials: "CA | CSI | LL.B.",
    bio: "CA Nikhil Kabra is a multidisciplinary finance and legal professional serving as a Senior Consultant at HariNiti Finance Pvt Ltd. With qualifications in Chartered Accountancy, Corporate Secretarial Practice, and Law, he brings a rare integrated perspective to financial strategy, regulatory compliance, and corporate structuring. He specializes in taxation advisory, corporate governance, transaction structuring, and strategic financial consulting — delivering solutions that align legal precision with commercial practicality. His advisory approach focuses on risk mitigation, compliance excellence, and long-term value creation. Known for his analytical depth and governance-first mindset, CA Nikhil Kabra partners with promoters, startups, and growth-stage enterprises to build compliant, scalable, and financially resilient organizations.",
    image: "/CA Nikhil Kabra.png",
  },
  {
    name: "CA Rohit Kumar",
    role: "Advisor",
    credentials: "CA",
    bio: "CA Rohit Kumar brings over 2 years of experience as Finance Head at Digital Live Services and Digital Live Solutions Limited, where he led financial strategy, compliance, and reporting functions. At HarNiti Finance Pvt. Ltd., he advises businesses on financial structuring, regulatory compliance, and performance optimization — helping organizations build strong, growth-ready financial foundations.",
    image: "/CA Rohit Kumar.png",
  },
  {
    name: "Advocate Abhishek Dixit",
    role: "Litigation & Dispute Resolution Professional",
    credentials: "Advocate",
    bio: "Advocate Abhishek Dixit is a dynamic litigation and dispute resolution professional with expertise in civil, criminal, commercial, banking, insolvency, tax, and regulatory matters. He regularly represents clients before various High Courts and the Supreme Court of India, handling complex proceedings under the Insolvency and Bankruptcy Code and the Prevention of Money Laundering Act. He is an integral part of the expert legal team at Hariniti Finance Pvt Ltd, delivering strategic legal solutions in high-stakes financial and regulatory matters.",
    image: "/Advocate Abhishek Dixit .png",
  },
  {
    name: "CA Rajesh Sah",
    role: "Accounting, Bookkeeping & Taxation Expert",
    credentials: "CA",
    bio: "CA Rajesh Sah is a dedicated Chartered Accountant specializing in Accounting, Bookkeeping, GST Advisory, Audit, and Corporate Compliance. At HariNiti Finance Pvt Ltd, he oversees end-to-end financial management services, ensuring accuracy, transparency, and full statutory compliance for businesses across sectors. With strong expertise in Financial Statement Finalization, Ind-AS compliance, GST returns (GSTR-1, 3B, 9 & 9C), Income Tax filings, ROC compliance, and ITC advisory (including Rule 42 & 43 computations), he provides structured financial solutions tailored to client needs. Proficient in Tally Prime, Zoho Books, Busy Software, and MS Office, CA Rajesh Sah combines technical expertise with analytical strength to deliver reliable, compliant, and growth-oriented financial services.",
    image: "/ca rajesh sah.png",
  }
];



const whyChooseUs = [
  {
    title: "Single-Roof Expertise",
    desc: "Finance, law, strategy, and technical expertise all under one roof — no need to juggle multiple firms.",
  },
  {
    title: "Transparent Advisory",
    desc: "No hidden fees, no complex jargon. We believe in clarity and honest financial guidance.",
  },
  {
    title: "Personalized Strategies",
    desc: "Every business is unique. We craft customized financial plans tailored to your specific goals.",
  },
  {
    title: "Growth-Focused Approach",
    desc: "We don't just manage your finances — we actively drive strategies to accelerate your growth.",
  },
  {
    title: "End-to-End Support",
    desc: "From startup incorporation to asset management, we support you at every stage of your journey.",
  },
  {
    title: "Certified Professionals",
    desc: "Our team of CAs, CSs, MBAs, and Engineers brings deep domain expertise and real-world experience.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero with Background Image ───────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/about-hero-bg.jpg"
            alt="HariNiti Finance office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/65" />
          {/* Gradient fade to white at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm font-body font-semibold tracking-widest uppercase text-gold mb-6">
              <Shield className="w-4 h-4" />
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light/95 leading-tight mb-6">
              The Story Behind{" "}
              <span className="text-gradient-gold">HariNiti Finance</span>
            </h1>
            <p className="text-lg md:text-xl text-gold-light/70 font-body max-w-2xl leading-relaxed">
              Our leadership team brings over 15+ years of extensive experience across corporate finance, credit structuring, banking operations, risk assessment, compliance, taxation, audit, and strategic financial advisory.
            </p>

            {/* Stats bar */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: Users, value: "20+", label: "Professionals" },
                { icon: Shield, value: "CA, CS, MBA+", label: "Certified Team" },
                { icon: TrendingUp, value: "Growth", label: "Your Focus" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gold/10 border border-gold/20 backdrop-blur-sm"
                >
                  <s.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <div>
                    <div className="text-sm font-body font-semibold text-gold-light/90">{s.value}</div>
                    <div className="text-xs font-body text-gold-light/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left text */}
            <div>
              <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Bridging the Gap Between <span className="text-accent">Compliance</span> and <span className="text-accent">Growth</span>
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
                HariNiti Finance was founded with a clear purpose — to transform the way individuals and businesses approach financial growth. In today’s complex financial environment, people don’t just need advice; they need clarity, structure, and strategic direction. We saw a gap between financial compliance and real financial growth, and HariNiti Finance was built to bridge that gap. We are not just advisors. We are <strong className="text-foreground">growth partners</strong> committed to building sustainable financial success.
              </p>
              <p className="text-base text-muted-foreground font-body leading-relaxed">
                Most firms receive fragmented support — one advisor for finance, another for legal compliance, another for tax, and yet another for technology. HariNiti Finance solves this by bringing Financial Advisory, Funding Solutions, Legal & Statutory Compliance, Taxation, and IT-enabled Business Solutions under one strategic platform. We transform complexity into clarity — ensuring businesses are financially strong, legally compliant, and technologically structured for scalable growth.
              </p>
            </div>

            {/* Right image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-full min-h-[320px] lg:min-h-full">
              <img
                src="/advisory-session.jpg"
                alt="Financial advisory consultation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>
          </div>

          {/* Mission / Vision / Belief cards below */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To be a trusted corporate funding and advisory partner, delivering structured capital solutions and strategic financial clarity for sustainable enterprise growth.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To emerge as a leading corporate funding and financial advisory firm, known for integrity, strategic excellence, and transformative capital solutions.",
              },
              {
                icon: Shield,
                title: "Our Core Values",
                text: "Uncompromising integrity, regulatory discipline, and transparent communication. We maintain strict confidentiality while prioritizing sustainable long-term enterprise value.",
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
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width image strip ───────────────────── */}
      <section className="relative h-64 overflow-hidden">
        <img
          src="/team-meeting.jpg"
          alt="HariNiti Finance team in collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/55 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="font-display text-xl md:text-2xl text-gold-light/90 italic">
              &quot;One Team. Multiple Perspectives. One Goal — Your Financial Growth.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ── Team Expertise (Stats) ───────────────────── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
              Our Strength
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              A Multidisciplinary{" "}
              <span className="text-accent">Expert Team</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
              We combine{" "}
              <strong className="text-foreground">
                finance, law, strategy, and technical expertise
              </strong>{" "}
              under one roof to create measurable impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <member.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="font-display text-3xl font-bold text-accent mb-1">
                  {member.count}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {member.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Team ────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
              Our People
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Meet the <span className="text-accent">Team</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
              A collective of finance, law, and strategy professionals committed to your growth.
            </p>
          </div>

          {/* ── Featured: Founder card ── */}
          {teamMembers.slice(0, 1).map((member) => (
            <div
              key={member.name}
              className="group grid md:grid-cols-2 rounded-2xl overflow-hidden bg-white border border-border shadow-card-hover mb-8"
            >
              {/* Photo — left half, tall */}
              <div className="relative h-80 md:h-[480px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: "center 15%" }}
                />
                {/* Subtle right fade on desktop */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white/80" />
              </div>

              {/* Content — right half */}
              <div className="flex flex-col justify-center p-10 lg:p-14">
                {/* Founder badge */}
                <span className="inline-flex self-start items-center gap-1.5 text-xs font-body font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 border border-accent/25 rounded-full px-3 py-1.5 mb-5">
                  ★ Founder
                </span>

                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-body font-semibold text-accent mb-2 tracking-wide">
                  {member.role}
                </p>
                {member.credentials && (
                  <span className="inline-flex self-start text-xs font-body font-medium text-muted-foreground bg-muted border border-border rounded-full px-3 py-1 mb-5">
                    {member.credentials}
                  </span>
                )}

                {/* Divider */}
                <div className="w-10 h-0.5 bg-accent/50 mb-5" />

                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}

          {/* ── Carousel for remaining members ── */}
          {/* ── Carousel for remaining members ── */}
          <TeamCarousel teamMembers={[...teamMembers.slice(1), ...teamMembers.slice(1)]} />

        </div>
      </section>


      {/* ── Why Choose Us ────────────────────────────── */}
      <section className="bg-muted overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-stretch py-12 lg:py-20">

          {/* Left – full-bleed image (absolute so its intrinsic height doesn't break the layout) */}
          <div className="relative w-full lg:w-1/2 min-h-[400px]">
            <img
              src="/finance-analysis.jpg"
              alt="Financial analysis at HariNiti Finance"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
          </div>

          {/* Right – content with its own padding; this dictates the row height */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-16 bg-background shadow-sm my-10 lg:my-0 z-10">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3 block">
              Why HariNiti
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
              Why <span className="text-accent">Choose Us</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {item.desc}
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
            Ready to Take Control of Your{" "}
            <span className="text-gradient-gold">Financial Future</span>?
          </h2>
          <p className="text-base text-gold-light/50 font-body mb-8 max-w-xl mx-auto">
            Schedule a free strategy call and let&apos;s discuss how we can
            help you grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
