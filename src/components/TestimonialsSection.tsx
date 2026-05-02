import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Small Business Owner",
    quote: "MFSC gave me the loan I needed to expand my shop. The process was smooth and the interest rate was very fair. I'm grateful for their support.",
  },
  {
    name: "Grace Okonkwo",
    role: "Teacher & Saver",
    quote: "I've been saving with MFSC for 5 years now. The returns are great and I love that my money is working for the community too.",
  },
  {
    name: "Emmanuel Adeyemi",
    role: "Farmer",
    quote: "The financial literacy program changed how I manage my farm's income. MFSC truly cares about empowering their members.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-warm">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            What Our Members Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground font-body">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
