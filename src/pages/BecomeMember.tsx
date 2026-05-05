import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Phone, CheckCircle, Clock, FileText, UserCheck, Wallet, PartyPopper } from "lucide-react";
import { useState } from "react";

// ─── STEPS ───────────────────────────────────────────────
const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Fill the Application",
    desc: "Complete the membership application form — online below or in person at any MFSC branch. You'll need your national ID and a passport photo.",
    duration: "5 minutes",
    color: "bg-chocolate/10 text-chocolate border-chocolate/20",
    accent: "bg-chocolate",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Verification",
    desc: "Our team reviews your application and verifies your identity. We may contact you for any additional documents required.",
    duration: "1–2 business days",
    color: "bg-forest/10 text-forest border-forest/20",
    accent: "bg-forest",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Pay Membership Fee",
    desc: "Pay the one-time registration fee and your initial savings deposit. This activates your account and opens access to all MFSC services.",
    duration: "Same day",
    color: "bg-ocean/10 text-ocean border-ocean/20",
    accent: "bg-ocean",
  },
  {
    icon: PartyPopper,
    number: "04",
    title: "Welcome to MFSC!",
    desc: "You're officially a member. Receive your member card, passbook, and full access to savings, loans, and cooperative benefits.",
    duration: "Immediate",
    color: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-primary",
  },
];

// ─── BENEFITS ────────────────────────────────────────────
const benefits = [
  "Access to all loan products from day one",
  "Competitive interest on savings",
  "Financial literacy workshops",
  "Cooperative profit sharing (dividends)",
  "Emergency loan within 24 hours",
  "Dedicated member support officer",
];

// ─── BRANCHES ────────────────────────────────────────────
const branches = [
  { name: "MFSC Main Branch", address: "Maranatha Church Compound, Kigali", phone: "+250 700 000 000", hours: "Mon–Fri 8am–5pm, Sat 9am–1pm" },
  { name: "MFSC Branch 2", address: "Branch address here", phone: "+250 700 000 001", hours: "Mon–Fri 8am–5pm" },
];

// ─── FORM ────────────────────────────────────────────────
const BecomeMember = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", nationalId: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`MFSC Membership Application – ${form.name}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `National ID: ${form.nationalId}\n\n` +
      `Additional Info:\n${form.message || "N/A"}`
    );
    window.location.href = `mailto:info@mfsc.coop?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-foreground via-foreground/95 to-chocolate/70 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-forest blur-3xl" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm font-body mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-body font-semibold text-gold uppercase tracking-widest mb-4">
              Membership
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-background mb-6 leading-tight">
              Join the <span className="text-gold">MFSC Community</span>
            </h1>
            <p className="text-background/70 font-body text-lg leading-relaxed max-w-2xl">
              Becoming a member of Maranatha Financial Service Cooperative opens the door to savings, affordable loans, and a community that grows together. Here's how to get started.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits strip ── */}
      <section className="bg-card border-b border-border py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-forest shrink-0" />
                <span className="text-sm font-body text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section-padding bg-background">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-body font-semibold text-forest uppercase tracking-widest">Simple Process</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              How to Become a Member
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Four straightforward steps stand between you and full MFSC membership. The whole process takes less than 48 hours.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border z-0 -translate-x-1/2" />
                )}
                <div className={`relative z-10 rounded-2xl border p-6 ${step.color} h-full flex flex-col`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.accent} text-background`}>
                      <step.icon size={22} />
                    </div>
                    <span className="font-heading text-3xl font-bold text-foreground/10">{step.number}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">{step.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-current/10">
                    <Clock size={12} className="text-muted-foreground" />
                    <span className="text-xs font-body text-muted-foreground">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply section: form + branch ── */}
      <section className="section-padding bg-warm">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-body font-semibold text-forest uppercase tracking-widest">Apply Now</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Choose How to Apply
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Apply online and we'll follow up, or walk into any branch and our team will guide you through in person.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Online form */}
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
                  <Mail size={18} className="text-forest" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Apply Online</h3>
                  <p className="text-xs font-body text-muted-foreground">We'll contact you within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-3">🎉</div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-2">Application Sent!</h4>
                  <p className="text-sm font-body text-muted-foreground mb-6">
                    Your email app has opened with your application pre-filled. Hit send and we'll be in touch soon.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-sm font-body font-semibold text-primary underline underline-offset-2">
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold text-foreground mb-1.5 uppercase tracking-wider">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-foreground mb-1.5 uppercase tracking-wider">National ID *</label>
                      <input name="nationalId" value={form.nationalId} onChange={handleChange} required
                        placeholder="ID number"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-foreground mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="you@email.com"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-foreground mb-1.5 uppercase tracking-wider">Phone Number *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                      placeholder="+250 7xx xxx xxx"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-foreground mb-1.5 uppercase tracking-wider">Anything else? (optional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Questions, preferred branch, or anything we should know..."
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" />
                  </div>
                  <Button type="submit" variant="hero" className="w-full py-6 text-base">
                    Submit Application →
                  </Button>
                  <p className="text-center text-xs font-body text-muted-foreground">
                    This opens your email app with your application pre-filled.
                  </p>
                </form>
              )}
            </div>

            {/* Branch visit */}
            <div className="flex flex-col gap-6">
              <div className="bg-foreground rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-background">Visit a Branch</h3>
                      <p className="text-xs font-body text-background/50">Walk in, no appointment needed</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {branches.map((branch) => (
                      <div key={branch.name} className="border border-background/10 rounded-2xl p-5">
                        <h4 className="font-heading font-bold text-background text-sm mb-3">{branch.name}</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <MapPin size={13} className="text-gold mt-0.5 shrink-0" />
                            <span className="text-xs font-body text-background/60">{branch.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={13} className="text-gold shrink-0" />
                            <span className="text-xs font-body text-background/60">{branch.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={13} className="text-gold shrink-0" />
                            <span className="text-xs font-body text-background/60">{branch.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What to bring */}
              <div className="bg-card rounded-3xl border border-border p-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">What to Bring</h3>
                <ul className="space-y-3">
                  {[
                    "Valid National ID or Passport",
                    "1 recent passport-size photo",
                    "Initial savings deposit (ask branch for amount)",
                    "Completed application form (or fill at branch)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-forest mt-0.5 shrink-0" />
                      <span className="text-sm font-body text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Have Questions Before Applying?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            Our team is happy to walk you through the process before you commit. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@mfsc.coop">
              <Button variant="hero" size="lg" className="px-8">
                <Mail size={16} className="mr-2" /> Email Us
              </Button>
            </a>
            <Link to="/">
              <Button variant="outline" size="lg" className="px-8">Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeMember;