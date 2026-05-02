import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate via-chocolate-light to-forest opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-background/5" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-background/5" />
      </div>
      <div className="relative container-max text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-background/80 font-body text-lg max-w-2xl mx-auto mb-8">
          Join thousands of members who are building a brighter financial future with Maranatha Financial Service Cooperative.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-background text-chocolate hover:bg-background/90 font-semibold text-base px-8 py-6">
            Open an Account <ArrowRight className="ml-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-background/40 text-background hover:bg-background/10 font-semibold text-base px-8 py-6 bg-transparent">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
