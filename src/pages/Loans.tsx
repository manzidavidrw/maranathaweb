import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Wallet,
  GraduationCap,
  BadgePercent,
  ShieldCheck,
  Home,
} from "lucide-react";

const loanPackages = [
  {
    id: "business-expansion",
    icon: Briefcase,
    title: "Business Expansion Loan",
    interestRate: "2% – 2.5% / month",
    maxAmount: "30,000,000 RWF",
    maxTerm: "24 months",
  },
  {
    id: "overdraft",
    icon: Wallet,
    title: "Overdraft Loan",
    interestRate: "3% – 3.5% / month (5% non-members)",
    maxAmount: "Up to 15,000,000 RWF",
    maxTerm: "Flexible",
  },
  {
    id: "school-fees",
    icon: GraduationCap,
    title: "School Fees Loan",
    interestRate: "3% / month",
    maxAmount: "Up to 3,000,000 RWF",
    maxTerm: "3 months",
  },
  {
    id: "employee",
    icon: Briefcase,
    title: "Employee Loan",
    interestRate: "1.5% / month",
    maxAmount: "Based on salary",
    maxTerm: "24 months",
  },
  {
    id: "double-savings",
    icon: BadgePercent,
    title: "Double-Savings Loan",
    interestRate: "3.5% / month",
    maxAmount: "Up to 30,000,000 RWF",
    maxTerm: "18 months",
  },
  {
    id: "savings-shares",
    icon: ShieldCheck,
    title: "Savings & Shares Loan (80%)",
    interestRate: "3.5% / month",
    maxAmount: "Up to 10,000,000 RWF",
    maxTerm: "18 months",
  },
  {
    id: "asset-business",
    icon: Home,
    title: "Asset Acquisition (Business)",
    interestRate: "3% (members) / 3.5% (non-members)",
    maxAmount: "Up to 25,000,000 RWF",
    maxTerm: "24 months (members), 18 months (non-members)",
  },
  {
    id: "asset-luxury",
    icon: Home,
    title: "Asset Acquisition (Luxury)",
    interestRate: "3.5% (members) / 4% (non-members)",
    maxAmount: "Up to 15,000,000 RWF",
    maxTerm: "18 months (members), 24 months (non-members)",
  },
];

const Loans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-foreground via-foreground/95 to-chocolate/80 relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="text-sm text-gold uppercase tracking-widest">
              Loan Products
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-background mt-4 mb-6">
              Simple Loans. <span className="text-gold">Clear Terms.</span>
            </h1>

            <p className="text-background/70 text-lg">
              Choose from our range of loan products designed to support your
              business, family, and personal financial needs.
            </p>
          </div>
        </div>
      </section>

      {/* LOAN CARDS */}
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Available Loan Products
            </h2>
            <p className="text-muted-foreground">
              Transparent rates. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {loanPackages.map((loan) => (
              <div
                key={loan.id}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full hover:shadow-xl transition"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <loan.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{loan.title}</h3>
                </div>

                {/* Info */}
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">
                      Interest Rate:
                    </span>{" "}
                    {loan.interestRate}
                  </p>

                  <p>
                    <span className="font-semibold text-foreground">
                      Maximum Amount:
                    </span>{" "}
                    {loan.maxAmount}
                  </p>

                  <p>
                    <span className="font-semibold text-foreground">
                      Repayment Period:
                    </span>{" "}
                    {loan.maxTerm}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* GLOBAL NOTE */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            * Loan processing fees apply to all loan products.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-center">
  <div className="container-max px-4">
    <h2 className="text-3xl font-bold text-background mb-4">
      Visit Our Office
    </h2>

    <p className="text-background/70 mb-6 max-w-xl mx-auto">
      For detailed information, eligibility checks, and loan applications,
      please visit our office. Our team will guide you step by step and help
      you choose the best loan for your needs.
    </p>

    <Link to="/">
      <Button variant="outline" className="border-background/30 text-background hover:bg-background/10">
        Back to Home
      </Button>
    </Link>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Loans;