import { CheckCircle } from "lucide-react";

const values = [
  "Member-owned and democratically governed",
  "Transparent and accountable financial management",
  "Community-focused growth and development",
  "Affordable rates with no hidden fees",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">About MFSC</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Building Financial Strength Through <span className="text-chocolate">Community</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Maranatha Financial Service Cooperative (MFSC) is a member-owned institution dedicated to providing accessible,
              affordable, and sustainable financial services to individuals and small businesses within our community.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Founded on the principles of cooperation, self-help, and mutual responsibility, we exist to empower
              our members to achieve financial independence and build a prosperous future.
            </p>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest mt-0.5 shrink-0" />
                  <span className="font-body text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual accent */}
          <div className="relative">
            <div className="bg-warm-alt rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-forest/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-chocolate/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative space-y-8">
                {[
                  { number: "7+", label: "Years Serving Members" },
                  { number: "2,000+", label: "Active Members" },
                  { number: "RF 3.3B+", label: "Total Loans Disbursed" },
                  { number: "98%", label: "Member Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <span className="font-heading text-3xl font-bold text-chocolate">{stat.number}</span>
                    <span className="font-body text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
