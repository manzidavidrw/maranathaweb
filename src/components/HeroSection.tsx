import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Community members in a financial meeting" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative container-max section-padding">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-forest/20 border border-forest/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-forest animate-pulse" />
            <span className="text-sm font-body text-[#04ea60]">Trusted by 1000+ members</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            Empowering Your <span className="text-gold">Financial</span> Future Together
          </h1>

          <p className="text-lg text-background/80 font-body mb-8 max-w-xl leading-relaxed">
            Maranatha Financial Service Cooperative — providing accessible savings, loans, and financial empowerment to communities since day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button onClick={scrollToContact} variant="hero" size="lg" className="text-base px-8 py-6">
              Become a Member <ArrowRight className="ml-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Users, label: "Active Members", value: "2K+" },
              { icon: Shield, label: "Years of Trust", value: "7+" },
              { icon: TrendingUp, label: "Loans Disbursed", value: "RF 3.3B+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <stat.icon className="w-5 h-5 text-gold mb-1 mx-auto sm:mx-0" />
                <p className="font-heading text-2xl font-bold text-background">{stat.value}</p>
                <p className="text-xs font-body text-background/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;