import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";

const boardMembers = [
  {
    name: "HITIMANA Eric",
    role: "Board Chairperson",
    department: "Board of Directors",
    bio: "With over 20 years in cooperative finance and rural development, Eric provides strategic direction ensuring MFSC remains true to its mission of financial inclusion.",
    image: "/images/team/ERIC-HITIMANA.jpg", 
    initials: "EH",
    color: "bg-chocolate/20 text-chocolate",
  },
   {
    name: "NDAYISENGA Theoneste",
    role: "Board Vice Chairperson",
    department: "Board of Directors",
    bio: "With over 20 years in cooperative finance and rural development, Theoneste provides strategic direction ensuring MFSC remains true to its mission of financial inclusion.",
    image: "/images/team/Theoneste.jpeg", 
    initials: "NT",
    color: "bg-chocolate/20 text-chocolate",
  },
  {
    name: "IRACYANKUNDA Lamberthe",
    role: "Board Secretary",
    department: "Board of Directors",
    bio: "A passionate advocate for women's financial empowerment, Lamberthe brings expertise in microfinance policy and gender-responsive financial product design.",
    image: "/images/team/iracyankunda-lamberthe.jpg",
    initials: "IL",
    color: "bg-forest/20 text-forest",
  },
  {
    name: "GATERA Celestin",
    role: "Board Advisor",
    department: "Board of Directors",
    bio: "Celestin's background in corporate governance and legal compliance ensures MFSC operates with integrity, transparency, and full regulatory alignment.",
    image: "/images/team/gatera-celestin.jpeg",
    initials: "GC",
    color: "bg-ocean/20 text-ocean",
  },
  {
    name: "MUSENGIMANA Colette",
    role: "Board Advisor",
    department: "Board of Directors",
    bio: "Bringing years of experience in financial oversight and community development to strengthen MFSC's governance structure.",
    image: "/images/team/musengimana-colette.jpg",
    initials: "MN",
    color: "bg-gold/20 text-chocolate",
  },
];

const auditCommittee = [
  {
    name: "Alain Patrick RISHIRABAKE",
    role: "Audit Committee President",
    department: "Audit Committee",
    bio: "Oversees internal controls, financial reporting accuracy, and ensures compliance with regulatory standards.",
    image: "/images/team/alain-patrick.jpg",
    initials: "AM",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "Jean D'arc UZAYISENGA",
    role: "Audit Committee Member",
    department: "Audit Committee",
    bio: "Specializes in risk assessment and quality assurance across all MFSC operations.",
    image: "/images/team/Jean.jpg",
    initials: "AM",
    color: "bg-forest/20 text-forest",
  },
  {
    name: "Theogene NGENDAHAYO",
    role: "Audit Committee Member",
    department: "Audit Committee",
    bio: "Expert in financial audit procedures and regulatory compliance monitoring.",
    image: "/images/team/Theogene-ngendahayo.jpg",
    initials: "AM",
    color: "bg-chocolate/20 text-chocolate",
  },
];

const creditCommittee = [
  {
    name: "Shema VENUTSE",
    role: "Credit Committee President",
    department: "Credit Committee",
    bio: "Leads credit policy development and loan approval processes with over 15 years of experience.",
    image: "/images/team/shema-venuste.jpg",
    initials: "CM",
    color: "bg-ocean/20 text-ocean",
  },
  {
    name: "UWITIJE Marie Solange",
    role: "Credit Committee Member",
    department: "Credit Committee ",
    bio: "Specializes in credit risk assessment and portfolio management.",
    image: "/images/team/uwitije.jpg",
    initials: "CM",
    color: "bg-gold/20 text-chocolate",
  },
  {
    name: "KUBWIMANA Emmanuel",
    role: "Credit Committee Member",
    department: "Credit Committee",
    bio: "Expert in evaluating loan applications and ensuring proper documentation.",
    image: "/images/team/kubwimana-emmanuel.jpg",
    initials: "CM",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "BARAKA Emmanuel",
    role: "Credit Committee Member",
    department: "Credit Committee",
    bio: "Focuses on credit policy implementation and member education.",
    image: "/images/team/baraka.jpg",
    initials: "CM",
    color: "bg-forest/20 text-forest",
  },
  {
    name: "UWINGABIRE Angelique",
    role: "Credit Committee Member",
    department: "Credit Committee",
    bio: "Manages loan portfolio performance and develops recovery strategies.",
    image: "/images/team/uwingabire-angelique.jpg",
    initials: "CM",
    color: "bg-chocolate/20 text-chocolate",
  },
];

const loanRecoveryCommittee = [
  {
    name: "TUYIZERE Narcisse",
    role: "Recovery Committee Member",
    department: "Loan Recovery Committee",
    bio: "Leads loan recovery strategies while maintaining positive member relationships.",
    image: "/images/team/narciss.jpg",
    initials: "RM",
    color: "bg-ocean/20 text-ocean",
  },
  {
    name: "BAYISENGE PROTOGENE",
    role: "Recovery Committee Member",
    department: "Loan Recovery Committee",
    bio: "Specializes in restructuring and negotiation for challenged accounts.",
    image: "/images/team/protogene.jpg",
    initials: "RM",
    color: "bg-gold/20 text-chocolate",
  },
  {
    name: "MUZERWA Samuel",
    role: "Recovery Committee Member",
    department: "Loan Recovery Committee",
    bio: "Expert in member communication and payment plan development.",
    image: "/images/team/samuel.jpg",
    initials: "RM",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "HABIMANA Benoit",
    role: "Recovery Committee Member",
    department: "Loan Recovery Committee",
    bio: "Focuses on early intervention and default prevention strategies.",
    image: "/images/team/benoit.jpg",
    initials: "RM",
    color: "bg-forest/20 text-forest",
  },
];

const ictCommission = [
  {
    name: "IMANANIYOGAKIZA Samuel",
    role: "ICT COMITTEE PRESIDENT",
    department: "ICT Commission",
    bio: "Claude leads MFSC's digital transformation — modernising member records, loan tracking systems, and exploring digital payment integration for faster, paperless service.",
    image: "/images/team/sam.jpg",
    initials: "CH",
    color: "bg-primary/20 text-primary",
  }
];

const operationsTeam = [
  {
    name: "NDAYISENGA Jean Isaac",
    role: "Managing Director",
    department: "Operations Team",
    bio: "Robert oversees MFSC's financial health, risk management, and audit functions. His conservative yet growth-oriented approach protects member deposits while expanding services.",
    image: "/images/team/Isaac.JPG",
    initials: "RB",
    color: "bg-primary/20 text-primary",
  },
  {
    name: "ISIMBI ISHIMWE Ange",
    role: "ACCOUNTANT & PUBLIC RELATION OFFICER",
    department: "Operations Team",
    bio: "Alice leads MFSC's day-to-day operations with a focus on sustainable growth, member satisfaction, and operational excellence. She has 15 years in cooperative management.",
    image: "/images/team/ange-isimbi.jpg",
    initials: "AM",
    color: "bg-gold/20 text-chocolate",
  },
  {
    name: "Maxime Blaise",
    role: "LOAN OFFICER",
    department: "Operations Team",
    bio: "Patrick ensures every member receives prompt, friendly, and professional service. He oversees branch operations, onboarding, and member engagement programs.",
    image: "/images/team/patrick-nshimiyimana.jpg",
    initials: "PN",
    color: "bg-chocolate/20 text-chocolate",
  },
  {
    name: "MIHIGO DANIEL",
    role: "LOAN OFFICER",
    department: "Operations Team",
    bio: "Patrick ensures every member receives prompt, friendly, and professional service. He oversees branch operations, onboarding, and member engagement programs.",
    image: "/images/team/patrick-nshimiyimana.jpg",
    initials: "PN",
    color: "bg-chocolate/20 text-chocolate",
  },
];

const values = [
  { label: "Members Served", value: "10,000+" },
  { label: "Years of Service", value: "15+" },
  { label: "Staff Members", value: "45+" },
  { label: "Branches", value: "4" },
];

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
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm font-body mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-body font-semibold text-forest-light uppercase tracking-widest mb-4">
              Our People
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-background mb-6 leading-tight">
              The People Behind{" "}
              <span className="text-gold">Your Trust</span>
            </h1>
            <p className="text-background/70 font-body text-lg leading-relaxed max-w-2xl">
              MFSC is more than a financial institution — it's a team of dedicated professionals who believe deeply in the power of community, cooperation, and financial inclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {values.map((v) => (
              <div key={v.label} className="text-center py-8 px-4">
                <p className="font-heading text-3xl font-bold text-chocolate mb-1">{v.value}</p>
                <p className="text-sm font-body text-muted-foreground">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors - 4 members */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Governance</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Board of Directors
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl">
              Our elected board provides strategic oversight and ensures MFSC remains accountable to its members and true to its cooperative values.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Audit Committee - 3 members */}
      <section className="section-padding bg-warm">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Oversight</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Audit Committee
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl">
              Ensuring financial transparency, internal controls, and regulatory compliance across all MFSC operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditCommittee.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Credit Committee - 5 members */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Lending</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Credit Committee
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl">
              Managing credit policy, loan approvals, and ensuring responsible lending practices that protect both members and the cooperative.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {creditCommittee.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Loan Recovery Committee - 4 members */}
      <section className="section-padding bg-warm">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Collections</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Loan Recovery Committee
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl">
              Working with members facing repayment challenges to find sustainable solutions while protecting the cooperative's financial health.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanRecoveryCommittee.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* ICT Commission - 2 members */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Technology</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              ICT Commission
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl">
              Leading MFSC's digital transformation to provide faster, more efficient, and paperless services to all members.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            {ictCommission.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Team - 3 members */}
      <section className="section-padding bg-warm">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Management</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Operations Team
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl">
              Our executive leadership team managing daily operations, member services, and ensuring MFSC delivers on its mission every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationsTeam.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="section-padding bg-foreground">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-body font-semibold text-forest-light uppercase tracking-widest">Our Culture</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background mt-3 mb-6">
                Why Our Team <span className="text-gold">Shows Up</span> Every Day
              </h2>
              <p className="text-background/70 font-body leading-relaxed mb-6">
                Every person at MFSC is driven by a shared purpose: to make financial services accessible, dignified, and genuinely useful for community members who have historically been underserved.
              </p>
              <p className="text-background/70 font-body leading-relaxed mb-8">
                We invest in continuous staff training, fair compensation, and a culture of transparency — because we believe the best way to serve our members is to take care of the people serving them.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Member-first mindset",
                  "Continuous learning",
                  "Transparent communication",
                  "Community accountability",
                  "Cooperative principles",
                  "Inclusive workplace",
                ].map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="text-sm font-body text-background/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual block */}
            <div className="bg-card rounded-3xl p-10 text-center relative overflow-hidden border border-border">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-forest/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <p className="font-heading text-5xl font-bold text-chocolate mb-3">21</p>
                <p className="font-body text-muted-foreground mb-8">dedicated team members across all committees</p>
                <div className="flex justify-center -space-x-3 mb-6">
                  {["BoD", "AC", "CC", "LR", "ICT", "OPS"].map((label, i) => (
                    <div
                      key={label}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-chocolate border-2 border-card flex items-center justify-center text-[10px] font-heading font-bold text-background"
                      style={{ zIndex: 10 - i }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-body text-muted-foreground">
                  Join a team that makes a difference every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the team CTA */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            We're always looking for passionate individuals who believe in financial inclusion and cooperative values. Get in touch to learn about open positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-base">
              <Mail size={16} className="mr-2" /> Contact HR
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="px-8 py-6 text-base">
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

const TeamCard = ({ person }: { person: typeof boardMembers[0] }) => {
  const [imageError, setImageError] =useState(false);

  return (
    <div className="bg-card rounded-2xl border border-border hover:border-border/80 hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image or Avatar */}
      <div className="bg-muted/30 px-6 pt-8 pb-6 flex flex-col items-center text-center">
        {!imageError && person.image ? (
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-background shadow-lg group-hover:scale-105 transition-transform duration-300">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div
            className={`w-32 h-32 rounded-full ${person.color} font-heading font-bold text-3xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
          >
            {person.initials}
          </div>
        )}
        <h3 className="font-heading font-bold text-foreground mb-1 text-lg">
          {person.name}
        </h3>
        <p className="text-sm font-body font-semibold text-primary">{person.role}</p>
        <span className="text-xs font-body text-muted-foreground mt-2 bg-muted px-3 py-1 rounded-full">
          {person.department}
        </span>
      </div>

      <div className="px-6 py-5">
        <p className="text-sm font-body text-muted-foreground leading-relaxed">{person.bio}</p>
      </div>
    </div>
  );
};

export default Team;