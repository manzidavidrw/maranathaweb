import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  FileText,
  UserCheck,
  Wallet,
  PartyPopper,
} from "lucide-react";

// ─── STEPS ───────────────────────────────────────────────
const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Fill the Application",
    desc: "Complete the membership application form at any MFSC branch. You'll need your national ID and a passport photo.",
    duration: "5 minutes",
    color: "bg-chocolate/10 text-chocolate border-chocolate/20",
    accent: "bg-chocolate",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Verification",
    desc: "Our team reviews your application and verifies your identity.",
    duration: "1–2 business days",
    color: "bg-forest/10 text-forest border-forest/20",
    accent: "bg-forest",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Pay Membership Fee",
    desc: "Pay the one-time registration fee and your initial savings deposit.",
    duration: "Same day",
    color: "bg-ocean/10 text-ocean border-ocean/20",
    accent: "bg-ocean",
  },
  {
    icon: PartyPopper,
    number: "04",
    title: "Welcome to MFSC!",
    desc: "You're officially a member with full access to savings and loan services.",
    duration: "Immediate",
    color: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-primary",
  },
];

// ─── BENEFITS ────────────────────────────────────────────
const benefits = [
  "Access to all loan products",
  "Competitive savings interest",
  "Financial literacy workshops",
  "Cooperative dividends",
  "Emergency loan access",
  "Dedicated support officer",
];

// ─── BRANCH (UPDATED FROM FOOTER) ─────────────────────────
const branch = {
  name: "MFSC Main Branch",
  address: "Rwanda, Kigali Ets Ndamage Building",
  phone: "+250 796 888 997",
  email: "maranathafinancialservicecoop@gmail.com",
  hours: "Mon–Fri 8am–5pm",
};

const BecomeMember = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-foreground via-foreground/95 to-chocolate/70 relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-4 inline-block">
              Membership
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-background mb-6">
              Join the <span className="text-gold">MFSC Community</span>
            </h1>
            <p className="text-background/70 text-lg">
              Becoming a member opens access to savings, affordable loans, and a strong cooperative network.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-card border-b border-border py-6">
        <div className="container-max px-4 grid grid-cols-2 md:grid-cols-3 gap-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <CheckCircle size={15} className="text-forest" />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="section-padding">
        <div className="container-max px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How to Become a Member</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className={`rounded-2xl border p-6 ${step.color}`}>
                <div className="flex justify-between mb-4">
                  <div className={`w-10 h-10 ${step.accent} text-white flex items-center justify-center rounded`}>
                    <step.icon size={18} />
                  </div>
                  <span className="text-3xl opacity-10 font-bold">{step.number}</span>
                </div>

                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm mb-4">{step.desc}</p>

                <div className="flex items-center gap-1 text-xs">
                  <Clock size={12} /> {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit Branch ONLY ── */}
      <section className="section-padding bg-warm">
        <div className="container-max px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Visit Our Branch</h2>
          <p className="text-muted-foreground">
            Apply in person and our team will guide you step by step.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-foreground rounded-3xl p-8 text-left">
          <h3 className="text-xl font-bold text-background mb-6">
            {branch.name}
          </h3>

          <div className="space-y-4">
            <div className="flex gap-2">
              <MapPin className="text-gold" size={16} />
              <span className="text-background/70">{branch.address}</span>
            </div>

            <div className="flex gap-2">
              <Phone className="text-gold" size={16} />
              <span className="text-background/70">{branch.phone}</span>
            </div>

            <div className="flex gap-2">
              <Mail className="text-gold" size={16} />
              <span className="text-background/70">{branch.email}</span>
            </div>

            <div className="flex gap-2">
              <Clock className="text-gold" size={16} />
              <span className="text-background/70">{branch.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding text-center">
        <h2 className="text-2xl font-bold mb-3">Need Help?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us and we’ll guide you before you visit.
        </p>

        <a
  href="https://wa.me/250796888997?text=Hello%20MFSC,%20I%20want%20to%20become%20a%20member"
  target="_blank"
>
  <Button variant="outline">WhatsApp Us</Button>
</a>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeMember;