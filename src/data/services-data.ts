export type SubCategory = {
  heading: string;
  items: string[];
};

export type ServiceSection = {
  heading: string;
  items?: string[];
  subCategories?: SubCategory[];
  note?: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  iconName: string;
  desc: string;
  image: string;
  features: string[];
  overview?: string;
  tagline?: string;
  sections: ServiceSection[];
};

export const servicesData: ServiceData[] = [
  {
    slug: "loan-funding-assistance",
    title: "Loan & Funding Assistance",
    iconName: "Landmark",
    desc: "End-to-end support for securing the right loans and funding solutions tailored to your business needs.",
    image: "/service-1.jpg",
    features: ["Project Finance Support", "Working Capital Loans", "Term Loans & LAP", "SME & MSME Funding"],
    tagline: "Every Business Deserves The Right Capital.",
    overview: "We provide comprehensive end-to-end funding solutions covering corporate loans, secured finance, retail lending, and structured alternatives. Our team handles everything — from eligibility profiling to final disbursement — so you can focus on growing your business.",
    sections: [
      {
        heading: "Business & Corporate Funding",
        items: [
          "Term Loans (Working Capital / CAPEX)",
          "Cash Credit & Overdraft Facilities",
          "Project Finance (Greenfield & Brownfield)",
          "Machinery & Equipment Finance",
          "Bill Discounting & Trade Finance",
          "MSME & CGTMSE-backed Loans",
        ],
      },
      {
        heading: "Secured Funding Solutions",
        items: [
          "Loan Against Property (Residential / Commercial / Industrial)",
          "Lease Rental Discounting (LRD)",
          "Loan Against Rent Receivables",
          "Structured Collateral-Based Lending",
          "Mortgage Refinancing & Takeover",
        ],
      },
      {
        heading: "Retail & Personal Funding",
        items: [
          "Home Loans (Purchase / Construction / Balance Transfer)",
          "Personal Loans",
          "Business Loans (Unsecured)",
          "Education Loans",
          "Vehicle Loans",
        ],
      },
      {
        heading: "Structured & Alternative Funding",
        items: [
          "Private Funding & NBFC Channel Funding",
          "Bridge Finance",
          "Mezzanine Funding",
          "Venture Debt Support",
          "Investor Connect & Equity Advisory (Growth-stage Businesses)",
        ],
      },
      {
        heading: "End-to-End Funding Advisory",
        items: [
          "Financial Profiling & Eligibility Assessment",
          "CMA Data Preparation & Project Report Drafting",
          "Detailed Project Report (DPR) Preparation",
          "Credit Rating Advisory",
          "Financial Restructuring Support",
          "Banking Liaison & Negotiation",
          "Documentation & Compliance Management",
          "Disbursement Monitoring",
        ],
      },
    ],
  },
  {
    slug: "business-financial-advisory",
    title: "Business Financial Advisory",
    iconName: "BarChart3",
    desc: "Strategic financial planning and advisory to drive informed decisions and sustainable business growth.",
    image: "/service-2.jpg",
    features: ["Strategic Financial Planning", "Risk Management", "Performance Optimization", "Cash Flow Structuring"],
    tagline: "Data-Driven Strategy. Measurable Growth.",
    overview: "Our Business Financial Advisory service delivers customized financial strategy to help businesses thrive. We combine analytical rigour with practical insights across planning, structuring, compliance, and growth advisory.",
    sections: [
      {
        heading: "Strategic Financial Planning",
        items: [
          "Business Financial Health Assessment",
          "Long-Term Financial Roadmap (3–5 Years)",
          "Budgeting & Forecasting Models",
          "Cash Flow Planning & Working Capital Strategy",
          "Profitability & Margin Improvement Analysis",
        ],
      },
      {
        heading: "Financial Structuring & Optimization",
        items: [
          "Capital Structure Advisory (Debt–Equity Mix)",
          "Cost Optimization & Expense Restructuring",
          "Break-even & Sensitivity Analysis",
          "Pricing Strategy & Revenue Model Structuring",
          "Financial Risk Assessment & Mitigation Planning",
        ],
      },
      {
        heading: "Project & Expansion Advisory",
        items: [
          "Feasibility Studies & Financial Viability Analysis",
          "Detailed Project Reports (DPR)",
          "Fund Deployment Strategy",
          "Expansion & Diversification Financial Planning",
          "Mergers, Acquisitions & Restructuring Advisory",
        ],
      },
      {
        heading: "Compliance & Governance Advisory",
        items: [
          "Statutory Compliance Planning",
          "Financial Due Diligence",
          "Internal Audit & Process Improvement",
          "Risk Governance Framework",
          "Corporate Structuring & Advisory",
        ],
      },
      {
        heading: "Growth & Investment Advisory",
        items: [
          "Investor Readiness Assessment",
          "Valuation Advisory",
          "Equity Fundraising Strategy",
          "Private Equity & VC Connect",
          "Exit Strategy Planning",
        ],
      },
    ],
  },
  {
    slug: "virtual-cfo-services",
    title: "Virtual CFO Services",
    iconName: "UserCheck",
    desc: "Get the expertise of a Chief Financial Officer without the full-time cost — strategic finance on demand.",
    image: "/service-3.jpg",
    features: ["Management Dashboards", "Budgeting & Forecasting", "Profitability Analysis", "Cost Optimization"],
    tagline: "Strategic Financial Leadership. Scalable Growth. Measurable Outcomes.",
    overview: "In a rapidly evolving business landscape, financial clarity is not optional — it is strategic power. Our Virtual CFO Services provide executive-level financial leadership to startups, MSMEs, and growth-stage enterprises — without the overhead of a full-time CFO. We work closely with promoters and management to transform financial data into strategic direction, operational efficiency, and sustainable profitability.",
    sections: [
      {
        heading: "Financial Strategy & Growth Architecture",
        items: [
          "Long-term financial roadmap design",
          "Profit optimization frameworks",
          "Budgeting, forecasting & variance governance",
          "Expansion, diversification & capex planning",
          "Strategic financial decision support",
        ],
      },
      {
        heading: "Advanced MIS & Performance Intelligence",
        items: [
          "Structured Monthly MIS & Board Reports",
          "Cash flow & fund flow analytics",
          "Ratio & performance benchmarking",
          "KPI dashboards & business insights",
          "Financial health diagnostics",
        ],
      },
      {
        heading: "Cash Flow & Working Capital Mastery",
        items: [
          "Working capital cycle optimization",
          "Cost control & margin enhancement",
          "Liquidity forecasting & treasury oversight",
          "Banking limit & fund utilization strategy",
        ],
      },
      {
        heading: "Fundraising & Capital Structuring",
        items: [
          "Financial modeling & valuation support",
          "Investor-ready projections & pitch financials",
          "CMA data & debt syndication support",
          "Term loan & working capital advisory",
          "Due diligence & transaction assistance",
        ],
      },
    ],
  },
  {
    slug: "income-tax-tds-filing",
    title: "Income Tax & TDS Return Filing, Appeal Filing Support",
    iconName: "FileText",
    desc: "Comprehensive bookkeeping, GST compliance, and income tax consultancy to keep you always audit-ready.",
    image: "/service-4.jpg",
    features: ["Statutory Audit Support", "Direct & Indirect Taxation", "GST Filing & Reconciliation", "Bookkeeping Services"],
    tagline: "Precision in Every Entry. Compliance in Every Filing.",
    overview: "We offer a full spectrum of accounting, tax, and compliance services — from daily bookkeeping to complex GST filings, income tax advisory, and international accounting. Our expertise ensures your business remains compliant, audit-ready, and financially transparent at all times.",
    sections: [
      {
        heading: "Accounting Services",
        items: [
          "Bookkeeping (Purchase, Sales, Expenses, Receipts entries)",
          "Preparation of Ledger & Trial Balance",
          "Bank Reconciliation (BRS)",
          "Preparation of Profit & Loss Account",
          "Preparation of Balance Sheet",
          "Preparation of Cash Flow Statement",
          "Fixed Asset Register Maintenance",
          "Inventory Accounting",
          "Tally / ERP Accounting Management",
          "Finalisation of Accounts",
        ],
      },
      {
        heading: "GST (Goods & Services Tax) Services",
        items: [
          "GST Registration (New / Amendment / Cancellation)",
          "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)",
          "GST Reconciliation (GSTR-2A / 2B Matching)",
          "Input Tax Credit (ITC) Advisory",
          "GST Refund Processing",
          "E-Way Bill Generation",
          "GST Audit Support",
          "Handling GST Notices & Replies",
          "GST Compliance for Export / Import",
        ],
      },
      {
        heading: "Income Tax Services",
        items: [
          "Income Tax Return (ITR) Filing – Individual / Firm / Company",
          "TDS Return Filing (24Q, 26Q, etc.)",
          "Advance Tax Calculation",
          "Tax Planning & Advisory",
          "Tax Audit under Section 44AB",
          "Reply to Income Tax Notices",
          "PAN / TAN Application",
        ],
      },
      {
        heading: "Business & Regulatory Compliances",
        items: [
          "MSME Registration",
          "PF & ESIC Compliance",
          "Professional Tax Compliance",
        ],
      },
      {
        heading: "Global & International Accounting",
        items: [
          "Dubai",
          "Australia",
          "Singapore",
          "UK",
          "USA",
          "UAE",
        ],
        note: "We provide international accounting and compliance support across key global jurisdictions.",
      },
    ],
  },
  {
    slug: "funding-valuation-support",
    title: "Funding & Valuation Support",
    iconName: "TrendingUp",
    desc: "Business valuation, investor-ready financials, and fundraising strategy for growth-stage companies.",
    image: "/service-5.jpg",
    features: ["Pitch Deck Preparation", "Business Valuation Reports", "Due Diligence Support", "PE & VC Fundraising"],
    tagline: "Know Your Worth. Raise The Right Capital.",
    overview: "We help businesses unlock their true valuation potential and connect with the right capital sources. Whether you're raising your first round or planning an exit, our team brings the analytical depth, investor intelligence, and structuring expertise to get you funded.",
    sections: [
      {
        heading: "Funding Advisory Services",
        subCategories: [
          {
            heading: "Debt Funding Support",
            items: [
              "Term Loans (Working Capital / CAPEX)",
              "Project Finance (Bank / NBFC)",
              "Loan Against Property (LAP)",
              "Machinery Finance",
              "ECB (External Commercial Borrowings)",
              "Structured Debt",
            ],
          },
          {
            heading: "Equity Funding Support",
            items: [
              "Angel Investors",
              "Venture Capital",
              "Private Equity",
              "Strategic Investors",
              "Joint Ventures",
              "IPO / Pre-IPO Advisory",
            ],
          },
          {
            heading: "Government & Subsidy Funding",
            items: [
              "MSME Schemes",
              "CGTMSE Coverage",
              "State Industrial Subsidies",
              "Export Incentives",
            ],
          },
        ],
      },
      {
        heading: "Financial Modelling & Projections",
        items: [
          "Detailed Project Report (DPR)",
          "CMA Data for Bank Submission",
          "5–10 Years Financial Projections",
          "DSCR Calculation",
          "Sensitivity Analysis",
          "Break-even Analysis",
        ],
      },
      {
        heading: "Business Valuation Services",
        subCategories: [
          {
            heading: "Types of Valuation",
            items: [
              "Startup Valuation",
              "Pre-investment Valuation",
              "Post-investment Valuation",
              "M&A Valuation",
              "Exit Valuation",
            ],
          },
          {
            heading: "Valuation Methods",
            items: [
              "Discounted Cash Flow (DCF)",
              "Comparable Company Multiple",
              "Asset-based Valuation",
              "EBITDA Multiple Method",
            ],
          },
        ],
      },
      {
        heading: "Due Diligence Support",
        items: [
          "Financial Due Diligence",
          "Legal Due Diligence",
          "Technical Due Diligence",
          "Risk Assessment",
        ],
      },
    ],
  },
  {
    slug: "startup-india-incorporation",
    title: "Startup India & Incorporation",
    iconName: "Rocket",
    desc: "Business incorporation, Startup India registration, and end-to-end setup support for new ventures.",
    image: "/service-6.jpg",
    features: ["Company Registration", "Startup India Seed Fund", "DIPP Recognition", "Founder Agreements"],
    tagline: "From Idea To Incorporated. We Launch Founders.",
    overview: "We provide end-to-end startup enablement — from entity formation and Startup India recognition to regulatory registrations, legal agreements, IP protection, and funding support. One partner for your entire launch journey.",
    sections: [
      {
        heading: "Business Incorporation Services",
        items: [
          "Private Limited Company (MCA Registration)",
          "One Person Company (OPC)",
          "Limited Liability Partnership (LLP)",
          "Section 8 Company (NGO)",
          "Partnership Firm Registration",
          "Sole Proprietorship Registration",
          "Name Approval & RUN Application",
          "Digital Signature Certificate (DSC)",
          "Director Identification Number (DIN)",
          "MOA & AOA Drafting",
          "Certificate of Incorporation Processing",
        ],
      },
      {
        heading: "Startup India Registration",
        items: [
          "Startup India Recognition (DPIIT Registration)",
          "Preparation of Startup Profile & Documents",
          "Eligibility Assessment",
          "Application Filing & Follow-up",
          "Inter-Ministerial Board (IMB) Approval for Tax Exemption",
        ],
      },
      {
        heading: "Tax & Regulatory Registrations",
        items: [
          "PAN & TAN Application",
          "GST Registration",
          "MSME / Udyam Registration",
          "Professional Tax Registration",
          "Shops & Establishment Registration",
          "Import Export Code (IEC) Registration",
          "EPFO & ESIC Registration",
        ],
      },
      {
        heading: "Startup India Benefits Assistance",
        items: [
          "3-Year Income Tax Exemption",
          "Angel Tax Exemption",
          "Patent & Trademark Fee Rebate",
          "Government Tender Benefits",
          "Self-Certification under Labour & Environmental Laws",
        ],
        note: "Assistance in claiming all applicable Startup India benefits.",
      },
      {
        heading: "Legal & Compliance Support",
        items: [
          "Shareholder Agreement Drafting",
          "Founders Agreement",
          "ESOP Structuring",
          "ROC Annual Compliance",
          "Board Resolutions & Documentation",
          "Startup Valuation Support",
        ],
      },
      {
        heading: "Intellectual Property (IPR)",
        items: [
          "Trademark Registration",
          "Patent Filing",
          "Copyright Registration",
          "Design Registration",
        ],
      },
      {
        heading: "Funding & Structuring Support",
        items: [
          "Pitch Deck Structuring",
          "Financial Projections",
          "Seed / Angel / VC Funding Documentation",
          "Due Diligence Support",
        ],
      },
    ],
  },
  {
    slug: "mca-legal-compliance",
    title: "MCA & Legal Compliance",
    iconName: "Scale",
    desc: "MCA services, legal compliances, NCLT and IBC consultancy for robust corporate governance.",
    image: "/service-7.jpg",
    features: ["Company Secretarial Work", "NCLT Representation", "Corporate Governance", "Annual ROC Filings"],
    tagline: "Governance-First. Compliance-Always.",
    overview: "MCA services, legal compliances, NCLT and IBC consultancy for robust corporate governance. We ensure your company remains fully compliant, well-governed, and protected against regulatory risk — from routine annual filings to complex insolvency proceedings.",
    sections: [
      {
        heading: "MCA (Ministry of Corporate Affairs) Services",
        items: [
          "Company Incorporation (Pvt Ltd / OPC / LLP / Section 8)",
          "Name Reservation & SPICe+ Filing",
          "Drafting MOA & AOA",
          "DIN & DSC Processing",
          "Annual Filings (AOC-4, MGT-7/MGT-7A, ADT-1, DIR-3 KYC, DPT-3, MSME-1)",
          "Event-Based Filings (PAS-3, MGT-14, BEN-2, CHG Forms)",
          "Board Meeting & AGM Documentation",
          "Maintenance of Statutory Registers",
          "Increase in Authorized Capital",
          "Issue / Transfer / Transmission of Shares",
          "Strike Off & Revival of Companies",
        ],
      },
      {
        heading: "Legal & Corporate Compliance Advisory",
        items: [
          "Companies Act, 2013 Advisory",
          "FEMA Compliance (FDI / ODI / ECB)",
          "Director Responsibilities & Governance Advisory",
          "Related Party Transaction Compliance",
          "Drafting Shareholder & Loan Agreements",
          "Employment Contracts & Policy Documentation",
          "Legal & Secretarial Due Diligence",
          "Compliance Health Check & Risk Assessment",
        ],
      },
      {
        heading: "NCLT Consultancy Services",
        items: [
          "Oppression & Mismanagement Matters",
          "Compounding of Offences",
          "Revival of Struck-Off Companies",
          "Merger & Amalgamation Support",
          "Reduction of Share Capital",
          "Drafting & Filing of NCLT Petitions",
          "Representation Coordination with Advocates",
        ],
      },
      {
        heading: "Insolvency & Bankruptcy Code (IBC) Consultancy",
        items: [
          "Pre-Insolvency Advisory & Debt Restructuring",
          "One-Time Settlement (OTS) Support",
          "Filing under Section 7 / 9 / 10",
          "Claim Filing for Creditors",
          "CIRP & CoC Advisory Support",
          "Resolution Plan Evaluation",
          "Liquidation Compliance Support",
        ],
      },
      {
        heading: "Corporate Governance & Risk Advisory",
        items: [
          "Corporate Governance Framework Setup",
          "Internal Compliance System Design",
          "Secretarial Audit Coordination",
          "Compliance Calendar Management",
          "Director Training & Governance Advisory",
          "Risk Mitigation & Regulatory Strategy",
        ],
      },
    ],
  },
  {
    slug: "financial-consultancy",
    title: "Financial Consultancy & Asset Management",
    iconName: "Coins",
    desc: "Expert asset management and financial consultancy services to grow and protect your wealth.",
    image: "/service-8.jpg",
    features: ["Portfolio Structuring", "Wealth Management", "Investment Advisory", "Market Research"],
    tagline: "Grow, Protect, and Multiply Your Wealth.",
    overview: "We provide holistic financial consultancy and asset management services designed to help individuals and businesses build, protect, and multiply their wealth. Our advisors bring deep market expertise and a disciplined, goal-oriented investment philosophy.",
    sections: [
      {
        heading: "Portfolio Structuring & Management",
        items: [
          "Asset Allocation Strategy",
          "Portfolio Construction & Diversification",
          "Risk-Return Optimization",
          "Regular Portfolio Rebalancing",
          "Performance Monitoring & Reporting",
        ],
      },
      {
        heading: "Wealth Management",
        items: [
          "Comprehensive Wealth Planning",
          "Goal-Based Investment Strategy",
          "Family Office Advisory",
          "Succession & Estate Planning",
          "Tax-Efficient Wealth Structuring",
        ],
      },
      {
        heading: "Investment Advisory",
        items: [
          "Equity & Debt Investment Advisory",
          "Mutual Fund Selection & Review",
          "Alternate Investment Fund (AIF) Advisory",
          "Fixed Income & Bond Advisory",
          "Market Research & Sector Analysis",
        ],
      },
      {
        heading: "Corporate Treasury & Asset Advisory",
        items: [
          "Corporate Treasury Management",
          "Surplus Fund Deployment Strategy",
          "Short-term & Long-term Investment Planning",
          "Liquidity Management",
          "Risk Management Framework",
        ],
      },
    ],
  },
  {
    slug: "real-estate-investment",
    title: "Real Estate Investment Support",
    iconName: "Building2",
    desc: "Expert guidance on real estate investment analysis, structuring, and portfolio optimization.",
    image: "/service-9.jpg",
    features: ["REITs & Alternate Assets", "Property Due Diligence", "Investment Structuring", "ROI Analysis"],
    tagline: "Smart Property Decisions. Maximum Returns.",
    overview: "We guide individuals, businesses, and investors through the complex landscape of real estate investment. From due diligence and structuring to REITs and alternative property assets, we ensure every real estate decision is backed by data and sound financial logic.",
    sections: [
      {
        heading: "Investment Analysis & Advisory",
        items: [
          "Real Estate Market Research & Analysis",
          "ROI & Yield Analysis",
          "Location & Demand Assessment",
          "Comparative Market Valuation",
          "Investment Opportunity Identification",
        ],
      },
      {
        heading: "Property Due Diligence",
        items: [
          "Legal Title Verification",
          "Property Document Review",
          "Encumbrance & Lien Check",
          "Regulatory & RERA Compliance Check",
          "Risk Assessment Report",
        ],
      },
      {
        heading: "Investment Structuring",
        items: [
          "Transaction & Deal Structuring",
          "Joint Venture & Partnership Frameworks",
          "Tax-Efficient Ownership Structuring",
          "Financing & Leverage Strategy",
          "Exit Planning & Strategy",
        ],
      },
      {
        heading: "REITs & Alternate Real Estate Assets",
        items: [
          "REIT Investment Advisory",
          "InvIT & Infrastructure Fund Advisory",
          "Fractional Ownership Advisory",
          "Commercial Real Estate Portfolio Review",
          "Alternate Asset Class Integration",
        ],
      },
      {
        heading: "Portfolio Optimization",
        items: [
          "Real Estate Portfolio Assessment",
          "Asset Rationalization",
          "Sale vs. Hold Analysis",
          "Reinvestment Strategy",
          "Capital Gains & Tax Planning",
        ],
      },
    ],
  },
  {
    slug: "stalled-projects-funding",
    title: "Stalled Projects Funding",
    iconName: "HardHat",
    desc: "Specialized funding support and financial restructuring for stalled or distressed projects.",
    image: "/service-10.jpg",
    features: ["Distressed Asset Funding", "Capital Restructuring", "Project Turnaround", "Special Situation Funds"],
    tagline: "Reviving Projects. Restoring Value.",
    overview: "We specialize in diagnosing, restructuring, and reviving stalled or distressed projects. Our team brings together financial engineering, banking relationships, and legal expertise to identify the root cause of stagnation and engineer a practical path to completion.",
    sections: [
      {
        heading: "Distressed Asset Funding",
        items: [
          "Identification of Eligible Funding Sources",
          "NPA Resolution Funding",
          "NBFC Special Situation Finance",
          "Private Credit & Mezzanine Funding",
          "Asset Reconstruction Company (ARC) Advisory",
          "Stressed Asset Sale / Purchase Advisory",
        ],
      },
      {
        heading: "Capital Restructuring",
        items: [
          "Debt Restructuring & Rescheduling",
          "One-Time Settlement (OTS) Negotiation",
          "Equity Infusion Strategy",
          "Promoter Liability Resolution",
          "Balance Sheet Rehabilitation",
          "Hybrid Instrument Advisory",
        ],
      },
      {
        heading: "Project Turnaround Advisory",
        items: [
          "Root Cause Analysis of Project Stall",
          "Revised Project Feasibility Assessment",
          "Revised DPR & Financial Projections",
          "Revised Implementation Schedule",
          "Contractor & Vendor Renegotiation Support",
          "Regulatory & Clearance Reactivation",
        ],
      },
      {
        heading: "Special Situation Funds",
        items: [
          "AIF Special Situation Fund Connect",
          "High-Yield Private Credit Advisory",
          "Bridge Funding for Pending Completion",
          "Equity Backstop Arrangements",
          "Co-investment Structuring",
        ],
      },
      {
        heading: "IBC & Legal Resolution Support",
        items: [
          "Pre-CIRP Advisory & Preventive Restructuring",
          "Resolution Plan Structuring",
          "NCLT Filing & Representation Coordination",
          "Liquidation Asset Management Advisory",
          "Creditor Rights & Recovery Support",
        ],
      },
    ],
  },
  {
    slug: "esg-csr-advisory",
    title: "ESG & CSR Advisory Services",
    iconName: "Leaf",
    desc: "Strategic ESG advisory and CSR planning to drive sustainable business transformation and global impact.",
    image: "/service-11.jpg",
    features: [
      "ESG Strategy & Risk Assessment",
      "BRSR & Sustainability Reporting",
      "Climate Finance & Carbon Markets",
      "CSR Planning & Impact Assessment",
      "ESG Assurance & Compliance",
      "Sustainable Investment Advisory",
    ],
    tagline: "Sustainability for Resilient Growth.",
    overview:
      "As organizations transition toward responsible business models, ESG (Environmental, Social, and Governance) and CSR (Corporate Social Responsibility) have become critical pillars of corporate strategy. We provide comprehensive advisory services to help businesses integrate sustainability, remain compliant with global reporting standards, and create long-term value for all stakeholders.",
    sections: [
      {
        heading: "ESG Advisory & Strategy",
        items: [
          "ESG Strategy & Framework Development",
          "Materiality Assessment",
          "ESG Risk Management & Mitigation",
          "Sustainability Integration into Operations",
        ],
      },
      {
        heading: "Sustainability Reporting & Disclosures",
        items: [
          "BRSR (Business Responsibility and Sustainability Reporting)",
          "GRI (Global Reporting Initiative) Standards",
          "TCFD-aligned Climate Risk Reporting",
          "Stakeholder Engagement & Disclosure Support",
        ],
      },
      {
        heading: "Climate Finance & Net-Zero Strategy",
        items: [
          "Carbon Pricing & Carbon Credit Advisory",
          "Net-Zero Roadmap & Transition Planning",
          "Decarbonization Strategy",
          "Energy Efficiency & Renewable Energy Advisory",
        ],
      },
      {
        heading: "CSR Planning & Impact Assessment",
        items: [
          "Strategic CSR Policy Formulation",
          "Project Identification & Implementation Support",
          "Impact Assessment & SROI Studies",
          "CSR Compliance Monitoring & Reporting",
        ],
      },
      {
        heading: "ESG Assurance & Governance",
        items: [
          "ESG Internal Audits",
          "Board Oversight & Governance Advisory",
          "Regulatory Alignment & Gap Analysis",
          "Supply Chain ESG Due Diligence",
        ],
      },
      {
        heading: "Sustainable Investment & Green Finance",
        items: [
          "Green Bond Advisory",
          "Responsible Investment Frameworks (PRI)",
          "ESG Due Diligence for Investors",
          "Impact Investment Strategy",
        ],
      },
    ],
  },
];
