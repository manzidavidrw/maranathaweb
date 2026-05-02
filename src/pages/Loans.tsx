import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  BadgePercent,
  Wallet,
  Briefcase,
  Home,
  GraduationCap,
  Sprout,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

const loanPackages = [
  {
    id: "emergency",
    icon: AlertCircle,
    badge: "Most Popular",
    badgeColor: "bg-gold text-foreground",
    title: "Emergency Loan",
    tagline: "Fast relief when life surprises you",
    description:
      "Designed for urgent, unexpected needs — medical bills, urgent repairs, or family emergencies. Funds disbursed within 24 hours of approval.",
    minAmount: "50,000",
    maxAmount: "500,000",
    currency: "RWF",
    interestRate: "2.5%",
    interestType: "per month (flat)",
    minTerm: "1 month",
    maxTerm: "12 months",
    eligibility: [
      "Active MFSC member for at least 3 months",
      "Valid national ID",
      "Regular savings record",
    ],
    features: [
      "Approval within 24 hours",
      "No collateral required up to RWF 200,000",
      "Flexible repayment schedule",
      "Grace period of 7 days",
    ],
    color: "border-gold/40 hover:border-gold",
    accentColor: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    id: "business",
    icon: Briefcase,
    badge: "Best for Growth",
    badgeColor: "bg-forest text-background",
    title: "Business Loan",
    tagline: "Capital to grow your enterprise",
    description:
      "Fuel your business ambitions — whether you're starting out or scaling up. Competitive rates tailored to micro and small business needs.",
    minAmount: "200,000",
    maxAmount: "5,000,000",
    currency: "RWF",
    interestRate: "2%",
    interestType: "per month (reducing balance)",
    minTerm: "3 months",
    maxTerm: "36 months",
    eligibility: [
      "Active MFSC member for at least 6 months",
      "Business registration or proof of trade",
      "Business plan or financial projections",
      "Two guarantors who are MFSC members",
    ],
    features: [
      "Large loan amounts available",
      "Business mentorship support included",
      "Top-up facility after 50% repayment",
      "Insurance cover on loan balance",
    ],
    color: "border-forest/40 hover:border-forest",
    accentColor: "bg-forest/10",
    iconColor: "text-forest",
  },
  {
    id: "home",
    icon: Home,
    badge: "Long Term",
    badgeColor: "bg-chocolate text-background",
    title: "Home Improvement Loan",
    tagline: "Build the home your family deserves",
    description:
      "Renovate, expand, or repair your home with affordable long-term financing. We believe every family deserves a safe and comfortable place to live.",
    minAmount: "300,000",
    maxAmount: "8,000,000",
    currency: "RWF",
    interestRate: "1.8%",
    interestType: "per month (reducing balance)",
    minTerm: "6 months",
    maxTerm: "48 months",
    eligibility: [
      "Active MFSC member for at least 12 months",
      "Proof of property ownership or tenancy",
      "Approved building plan or quote from contractor",
      "Collateral or two guarantors",
    ],
    features: [
      "Longest repayment period available",
      "Low monthly installments",
      "Staged disbursement aligned to construction",
      "Free property assessment consultation",
    ],
    color: "border-chocolate/40 hover:border-chocolate",
    accentColor: "bg-chocolate/10",
    iconColor: "text-chocolate",
  },
  {
    id: "education",
    icon: GraduationCap,
    badge: "Student Friendly",
    badgeColor: "bg-ocean text-background",
    title: "Education Loan",
    tagline: "Invest in the future generation",
    description:
      "No one should miss school because of money. Cover tuition, school fees, uniforms, and supplies with our flexible education financing.",
    minAmount: "50,000",
    maxAmount: "2,000,000",
    currency: "RWF",
    interestRate: "1.5%",
    interestType: "per month (flat)",
    minTerm: "1 month",
    maxTerm: "12 months",
    eligibility: [
      "Parent/guardian must be an active MFSC member",
      "Admission letter or fee statement from institution",
      "Valid national ID",
    ],
    features: [
      "Lowest interest rate in our portfolio",
      "Repayment aligned to school terms",
      "Covers primary through university level",
      "Quick 48-hour disbursement",
    ],
    color: "border-ocean/40 hover:border-ocean",
    accentColor: "bg-ocean/10",
    iconColor: "text-ocean",
  },
  {
    id: "agri",
    icon: Sprout,
    badge: "For Farmers",
    badgeColor: "bg-forest/80 text-background",
    title: "Agricultural Loan",
    tagline: "From seed to harvest, we support you",
    description:
      "Purpose-built for farmers and agribusiness owners. Covers inputs, equipment, and working capital with repayment timed to harvest cycles.",
    minAmount: "100,000",
    maxAmount: "3,000,000",
    currency: "RWF",
    interestRate: "2%",
    interestType: "per season (flat)",
    minTerm: "3 months",
    maxTerm: "18 months",
    eligibility: [
      "Active MFSC member for at least 3 months",
      "Proof of land ownership or lease",
      "Crop plan or farming proposal",
    ],
    features: [
      "Repayment tied to harvest season",
      "Input financing (seeds, fertilizer) available",
      "Linked to crop insurance options",
      "Agricultural advisory support",
    ],
    color: "border-forest/30 hover:border-forest/70",
    accentColor: "bg-forest/5",
    iconColor: "text-forest",
  },
  {
    id: "salary",
    icon: Wallet,
    badge: "Instant Approval",
    badgeColor: "bg-primary text-primary-foreground",
    title: "Salary Advance Loan",
    tagline: "Bridge the gap until payday",
    description:
      "For salaried employees who need a short-term bridge. Get up to 3x your monthly salary with automatic repayment deduction.",
    minAmount: "50,000",
    maxAmount: "1,500,000",
    currency: "RWF",
    interestRate: "2%",
    interestType: "per month (flat)",
    minTerm: "1 month",
    maxTerm: "6 months",
    eligibility: [
      "Employed with a regular salary (payslip required)",
      "Active MFSC member for at least 1 month",
      "Employer must be on MFSC approved list",
    ],
    features: [
      "Approval same day",
      "No collateral needed",
      "Automatic salary deduction repayment",
      "Up to 3x monthly salary",
    ],
    color: "border-primary/40 hover:border-primary",
    accentColor: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Become a Member",
    desc: "Open a savings account and become an active MFSC member. Some loans require a minimum savings period.",
  },
  {
    step: "02",
    title: "Choose Your Loan",
    desc: "Select the loan package that fits your need and review eligibility requirements carefully.",
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "Visit any MFSC branch or apply through our office. Bring your required documents.",
  },
  {
    step: "04",
    title: "Get Approved & Funded",
    desc: "Our team reviews your application and disburses funds to your account upon approval.",
  },
];

const Loans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-foreground via-foreground/95 to-chocolate/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-forest blur-3xl" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm font-body mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-body font-semibold text-gold uppercase tracking-widest mb-4">
              Loan Products
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-background mb-6 leading-tight">
              Loans Built for{" "}
              <span className="text-gold">Real People</span>,<br />
              Real Needs
            </h1>
            <p className="text-background/70 font-body text-lg leading-relaxed max-w-2xl">
              From emergency relief to long-term business growth — MFSC offers six tailored loan packages with transparent rates, no hidden fees, and a team that genuinely cares about your success.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Cards */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">
              Our Packages
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Find the Right Loan for You
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              All loans come with straightforward terms, transparent rates, and a dedicated officer to guide you through the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {loanPackages.map((loan) => (
              <div
                key={loan.id}
                className={`bg-card rounded-2xl border-2 ${loan.color} transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden`}
              >
                {/* Card header */}
                <div className={`${loan.accentColor} px-6 pt-6 pb-4`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-sm">
                      <loan.icon className={`w-6 h-6 ${loan.iconColor}`} />
                    </div>
                    <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${loan.badgeColor}`}>
                      {loan.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{loan.title}</h3>
                  <p className="text-sm font-body text-muted-foreground italic">{loan.tagline}</p>
                </div>

                <div className="px-6 py-5 flex flex-col flex-1">
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">
                    {loan.description}
                  </p>

                  {/* Amount & Rate */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-muted/50 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Wallet size={13} className="text-muted-foreground" />
                        <span className="text-xs font-body text-muted-foreground">Loan Amount</span>
                      </div>
                      <p className="font-heading text-sm font-bold text-foreground">
                        {loan.currency} {loan.minAmount}
                      </p>
                      <p className="text-xs font-body text-muted-foreground">
                        up to {loan.currency} {loan.maxAmount}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <BadgePercent size={13} className="text-muted-foreground" />
                        <span className="text-xs font-body text-muted-foreground">Interest Rate</span>
                      </div>
                      <p className="font-heading text-sm font-bold text-foreground">{loan.interestRate}</p>
                      <p className="text-xs font-body text-muted-foreground">{loan.interestType}</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 col-span-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Clock size={13} className="text-muted-foreground" />
                        <span className="text-xs font-body text-muted-foreground">Repayment Period</span>
                      </div>
                      <p className="font-heading text-sm font-bold text-foreground">
                        {loan.minTerm} — {loan.maxTerm}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <p className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2">
                      Key Benefits
                    </p>
                    <ul className="space-y-1.5">
                      {loan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle size={14} className={`${loan.iconColor} mt-0.5 shrink-0`} />
                          <span className="text-xs font-body text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Eligibility */}
                  <div className="mb-6">
                    <p className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2">
                      Eligibility
                    </p>
                    <ul className="space-y-1.5">
                      {loan.eligibility.map((e) => (
                        <li key={e} className="flex items-start gap-2">
                          <ShieldCheck size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                          <span className="text-xs font-body text-muted-foreground">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button variant="hero" className="w-full">
                      Apply for This Loan <ArrowRight size={15} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-warm">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Simple Process</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              How to Get Your Loan
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Four straightforward steps stand between you and your loan. We keep it simple, transparent, and fast.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={step.step} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background font-heading text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background mb-4">
            Ready to Apply?
          </h2>
          <p className="text-background/60 font-body mb-8 max-w-xl mx-auto">
            Visit any of our branches or call us to speak with a loan officer. We're here to help you choose the right product and get you funded fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-base">
              Start Application <ArrowRight className="ml-1" />
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="px-8 py-6 text-base border-background/30 text-background hover:bg-background/10 hover:text-background">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Loans;
