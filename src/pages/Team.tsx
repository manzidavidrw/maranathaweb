import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";

const boardMembers = [
  { name: "HITIMANA Eric", role: "Board Chairperson", department: "Board of Directors", bio: "", image: "/images/team/ERIC-HITIMANA.jpg", initials: "HE", color: "bg-chocolate/20 text-chocolate" },
  { name: "NDAYISENGA Theoneste", role: "Board Vice Chairperson", department: "Board of Directors", bio: "", image: "/images/team/Theoneste.jpeg", initials: "NT", color: "bg-chocolate/20 text-chocolate" },
  { name: "IRACYANKUNDA Lamberthe", role: "Board Secretary", department: "Board of Directors", bio: "", image: "/images/team/iracyankunda-lamberthe.jpg", initials: "IL", color: "bg-forest/20 text-forest" },
  { name: "GATERA Celestin", role: "Board Advisor", department: "Board of Directors", bio: "", image: "/images/team/gatera-celestin.jpeg", initials: "GC", color: "bg-ocean/20 text-ocean" },
  { name: "MUSENGIMANA Colette", role: "Board Advisor", department: "Board of Directors", bio: "", image: "/images/team/musengimana-colette.jpg", initials: "MN", color: "bg-gold/20 text-chocolate" },
];

const auditCommittee = [
  { name: "Alain Patrick RISHIRABAKE", role: "Audit Committee President", department: "Audit Committee", bio: "", image: "/images/team/alain-patrick.jpg", initials: "AP", color: "bg-primary/20 text-primary" },
  { name: "Jean D'arc UZAYISENGA", role: "Audit Committee Member", department: "Audit Committee", bio: "", image: "/images/team/Jean.jpg", initials: "JU", color: "bg-forest/20 text-forest" },
  { name: "Theogene NGENDAHAYO", role: "Audit Committee Member", department: "Audit Committee", bio: "", image: "/images/team/Theogene-ngendahayo.jpg", initials: "TN", color: "bg-chocolate/20 text-chocolate" },
];

const creditCommittee = [
  { name: "Shema VENUTSE", role: "Credit Committee President", department: "Credit Committee", bio: "", image: "/images/team/shema-venuste.jpg", initials: "SV", color: "bg-ocean/20 text-ocean" },
  { name: "UWITIJE Marie Solange", role: "Credit Committee Member", department: "Credit Committee", bio: "", image: "/images/team/uwitije.jpg", initials: "UM", color: "bg-gold/20 text-chocolate" },
  { name: "KUBWIMANA Emmanuel", role: "Credit Committee Member", department: "Credit Committee", bio: "", image: "/images/team/kubwimana-emmanuel.jpg", initials: "KE", color: "bg-primary/20 text-primary" },
  { name: "BARAKA Emmanuel", role: "Credit Committee Member", department: "Credit Committee", bio: "", image: "/images/team/baraka.jpg", initials: "BE", color: "bg-forest/20 text-forest" },
  { name: "UWINGABIRE Angelique", role: "Credit Committee Member", department: "Credit Committee", bio: "", image: "/images/team/uwingabire-angelique.jpg", initials: "UA", color: "bg-chocolate/20 text-chocolate" },
];

const loanRecoveryCommittee = [
  { name: "TUYIZERE Narcisse", role: "Recovery Committee Member", department: "Loan Recovery Committee", bio: "", image: "/images/team/narciss.jpg", initials: "TN", color: "bg-ocean/20 text-ocean" },
  { name: "BAYISENGE PROTOGENE", role: "Recovery Committee Member", department: "Loan Recovery Committee", bio: "", image: "/images/team/protogene.jpg", initials: "BP", color: "bg-gold/20 text-chocolate" },
  { name: "MUZERWA Samuel", role: "Recovery Committee Member", department: "Loan Recovery Committee", bio: "", image: "/images/team/samuel.jpeg", initials: "MS", color: "bg-primary/20 text-primary" },
  { name: "HABIMANA Benoit", role: "Recovery Committee Member", department: "Loan Recovery Committee", bio: "", image: "/images/team/benoit.jpg", initials: "HB", color: "bg-forest/20 text-forest" },
];

const ictCommission = [
  { name: "IMANANIYOGAKIZA Samuel", role: "ICT Committee President", department: "ICT Commission", bio: "", image: "/images/team/sam.jpg", initials: "IS", color: "bg-primary/20 text-primary" },
  { name: "Manzi David", role: "IT", department: "ICT Commission", bio: "", image: "/images/team/manzi.jpg", initials: "IS", color: "bg-primary/20 text-primary" },

];

const operationsTeam = [
  { name: "NDAYISENGA Jean Isaac", role: "Director of Liaison", department: "Operations Team", bio: "", image: "/images/team/jeanisaac.png", initials: "NJ", color: "bg-primary/20 text-primary" },
  { name: "ISIMBI ISHIMWE Ange", role: "Accountant & Public Relation Officer", department: "Operations Team", bio: "", image: "/images/team/ange-isimbi.jpg", initials: "IA", color: "bg-gold/20 text-chocolate" },
  { name: "Maxime Blaise", role: "Loan Officer", department: "Operations Team", bio: "", image: "/images/team/maxime.jpeg", initials: "MB", color: "bg-chocolate/20 text-chocolate" },
  { name: "MIHIGO DANIEL", role: "Loan Officer", department: "Operations Team", bio: "", image: "/images/team/danny.jpeg", initials: "MD", color: "bg-chocolate/20 text-chocolate" },
];

const stats = [
  { label: "Members Served", value: "10,000+" },
  { label: "Years of Service", value: "15+" },
  { label: "Staff Members", value: "45+" },
  { label: "Branches", value: "4" },
];

const sections = [
  { id: "board", tag: "Governance", title: "Board of Directors", desc: "Our elected board provides strategic oversight and ensures MFSC remains accountable to its members and true to its cooperative values.", members: boardMembers, cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5", accent: "border-l-chocolate" },
  { id: "audit", tag: "Oversight", title: "Audit Committee", desc: "Ensuring financial transparency, internal controls, and regulatory compliance across all MFSC operations.", members: auditCommittee, cols: "grid-cols-2 sm:grid-cols-3", accent: "border-l-gold" },
  { id: "credit", tag: "Lending", title: "Credit Committee", desc: "Managing credit policy, loan approvals, and ensuring responsible lending practices that protect both members and the cooperative.", members: creditCommittee, cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5", accent: "border-l-forest" },
  { id: "recovery", tag: "Collections", title: "Loan Recovery Committee", desc: "Working with members facing repayment challenges to find sustainable solutions while protecting the cooperative's financial health.", members: loanRecoveryCommittee, cols: "grid-cols-2 sm:grid-cols-4", accent: "border-l-chocolate" },
  { id: "ict", tag: "Technology", title: "ICT Commission", desc: "Leading MFSC's digital transformation to provide faster, more efficient, and paperless services to all members.", members: ictCommission, cols: "grid-cols-2 max-w-2xl", accent: "border-l-ocean" },
  { id: "operations", tag: "Management", title: "Operations Team", desc: "Our executive leadership team managing daily operations, member services, and ensuring MFSC delivers on its mission every day.", members: operationsTeam, cols: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4", accent: "border-l-primary" },
];

// ─── CARD ───────────────────────────────────────────────
const TeamCard = ({ person }: { person: typeof boardMembers[0] }) => {
  const [imageError, setImageError] = useState(false);
  const showImage = !imageError && person.image;

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/20">
      {/* Photo area — tall portrait */}
      <div className="relative w-full aspect-[3/4] bg-muted overflow-hidden">
        {showImage ? (
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${person.color} text-4xl font-heading font-bold`}>
            {person.initials}
          </div>
        )}

        {/* Gradient overlay — always visible at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />

        {/* Name + role pinned to bottom of photo */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading font-bold text-background text-sm leading-tight mb-0.5">
            {person.name}
          </h3>
          <p className="text-primary-foreground/80 text-xs font-body leading-tight line-clamp-2"
            style={{ color: "hsl(var(--gold))" }}>
            {person.role}
          </p>
        </div>
      </div>

      {/* Department tag below card */}
      <div className="bg-card px-4 py-2.5 border-t border-border">
        <span className="text-[11px] font-body font-semibold text-muted-foreground uppercase tracking-wider">
          {person.department}
        </span>
      </div>
    </div>
  );
};

// ─── PAGE ───────────────────────────────────────────────
const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-forest via-forest/90 to-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-chocolate blur-3xl" />
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <Link to="/" className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm font-body mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-body font-semibold text-gold uppercase tracking-widest mb-4">Our People</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-background mb-6 leading-tight">
              The People Behind <span className="text-gold">Your Trust</span>
            </h1>
            <p className="text-background/70 font-body text-lg leading-relaxed max-w-2xl">
              MFSC is built on people — from the board that governs, to the committees that decide, to the team that serves you every single day.
            </p>
          </div>
        </div>
      </section>
      {/* Sticky jump nav */}
      <div className="sticky top-[5.5rem] z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="shrink-0 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section key={section.id} id={section.id} className={`section-padding ${idx % 2 === 1 ? "bg-warm" : "bg-background"}`}>
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className={`border-l-4 ${section.accent} pl-5 mb-12`}>
              <span className="text-xs font-body font-semibold text-forest uppercase tracking-widest">{section.tag}</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-3">{section.title}</h2>
              <p className="text-muted-foreground font-body max-w-2xl leading-relaxed">{section.desc}</p>
            </div>
            <div className={`grid ${section.cols} gap-5`}>
              {section.members.map((person) => (
                <TeamCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Culture */}
      <section className="section-padding bg-foreground">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-body font-semibold text-gold uppercase tracking-widest">Our Culture</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background mt-3 mb-6">
                Why Our Team <span className="text-gold">Shows Up</span> Every Day
              </h2>
              <p className="text-background/70 font-body leading-relaxed mb-8">
                Every person at MFSC is driven by a shared purpose: to make financial services accessible, dignified, and genuinely useful for community members who have historically been underserved.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Member-first mindset", "Continuous learning", "Transparent communication", "Community accountability", "Cooperative principles", "Inclusive workplace"].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="text-sm font-body text-background/80">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-10 text-center relative overflow-hidden border border-border">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <p className="font-heading text-5xl font-bold text-chocolate mb-2">22</p>
                <p className="font-body text-muted-foreground mb-8">dedicated members across all committees</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["BoD", "AC", "CC", "LR", "ICT", "OPS"].map((label) => (
                    <div key={label} className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-chocolate border-2 border-card flex items-center justify-center text-[10px] font-heading font-bold text-background">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Want to Join Our Team?</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            We're always looking for passionate individuals who believe in financial inclusion and cooperative values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-base">
              <Mail size={16} className="mr-2" /> Contact HR
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="px-8 py-6 text-base">Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;