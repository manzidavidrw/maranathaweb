import { Link } from "react-router-dom";
import savingsImg from "@/assets/savings.jpg";
import loansImg from "@/assets/loans.jpg";
import { PiggyBank, HandCoins, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description:
      "Flexible savings plans with competitive interest rates designed for every member — from daily savers to long-term wealth builders.",
    image: savingsImg,
    route: null,
    anchor: "#about",
    cta: "Learn About Savings",
  },
  {
    icon: HandCoins,
    title: "Loan Products",
    description:
      "Six tailored loan packages — emergency, business, home, education, agricultural, and salary advance — with transparent rates and no hidden fees.",
    image: loansImg,
    route: "/loans",
    anchor: null,
    cta: "View All Loan Packages",
  },
  {
    icon: GraduationCap,
    title: "Financial Literacy",
    description:
      "Free workshops and community resources to help members master budgeting, savings, investment, and business finance.",
    image: null,
    route: null,
    anchor: "#contact",
    cta: "Join a Workshop",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Services",
    description:
      "Protect your family and assets with our affordable cooperative insurance plans — life, asset, and loan protection cover available.",
    image: null,
    route: null,
    anchor: "#contact",
    cta: "Explore Insurance",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-warm">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Financial Services That{" "}
            <span className="text-gradient-primary">Empower You</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            From savings to loans, we provide comprehensive financial solutions tailored for our community members.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border flex flex-col"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                {service.route ? (
                  <Link to={service.route}>
                    <Button variant="hero" className="w-full sm:w-auto">
                      {service.cta} <ArrowRight size={15} className="ml-1" />
                    </Button>
                  </Link>
                ) : (
                  <a
                    href={service.anchor!}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(service.anchor!);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {service.cta} <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Team teaser strip */}
        <div className="mt-14 bg-foreground rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-xl font-bold text-background mb-1">
              Meet the People Behind MFSC
            </p>
            <p className="text-sm font-body text-background/60">
              Dedicated professionals committed to your financial wellbeing.
            </p>
          </div>
          <Link to="/team">
            <Button variant="hero" size="lg" className="shrink-0">
              Meet Our Team <ArrowRight size={15} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
