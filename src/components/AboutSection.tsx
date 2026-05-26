import { CheckCircle, Target, Eye, Flag } from "lucide-react";

const values = [
  "Member-owned and democratically governed",
  "Transparent and accountable financial management",
  "Community-focused growth and development",
  "Affordable rates with no hidden fees",
];

const mvg = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the leading community-based financial institution empowering individuals and families to achieve lasting financial independence and prosperity.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide accessible, affordable, and sustainable financial services rooted in cooperation, transparency, and mutual responsibility — serving every member with integrity.",
  },
  {
    icon: Flag,
    title: "Our Goal",
    text: "To grow a thriving cooperative where every member has access to savings, credit, and financial literacy tools that build wealth and strengthen the community.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            About MFSC
          </h2>
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-chocolate mt-3">
            Building Financial Strength Through Community
          </h3>
        </div>

        {/* Top grid: text + stat card */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
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
                  { number: "7+",     label: "Years Serving Members" },
                  { number: "1,000+", label: "Active Members"        },
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

        {/* Mission / Vision / Goal cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {mvg.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-foreground">{title}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;