import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "RWF", maximumFractionDigits: 0 }).format(value);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("18");
  const [loanTerm, setLoanTerm] = useState("12");

  const amount = parseFloat(loanAmount) || 0;
  const rate = parseFloat(interestRate) || 0;
  const term = parseFloat(loanTerm) || 0;

  const { monthlyPayment, totalPayment, totalInterest } = useMemo(() => {
    if (amount <= 0 || term <= 0) return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
    const monthlyRate = rate / 100 / 12;
    const n = term;
    const monthly =
      monthlyRate === 0
        ? amount / n
        : (amount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
    return {
      monthlyPayment: monthly,
      totalPayment: monthly * n,
      totalInterest: monthly * n - amount,
    };
  }, [amount, rate, term]);

  return (
    <section id="calculator" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-sm font-body font-semibold text-forest uppercase tracking-widest">
            Plan Your Loan
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Loan Payment <span className="text-gradient-primary">Calculator</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Enter your loan details below to estimate your monthly repayment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="font-body font-semibold text-foreground text-sm mb-2 block">
                Loan Amount (RWF)
              </label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g. 500000"
                min={0}
                className="text-lg font-body"
              />
            </div>

            <div>
              <label className="font-body font-semibold text-foreground text-sm mb-2 block">
                Annual Interest Rate (%)
              </label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 18"
                min={0}
                step={0.1}
                className="text-lg font-body"
              />
            </div>

            <div>
              <label className="font-body font-semibold text-foreground text-sm mb-2 block">
                Loan Term (months)
              </label>
              <Input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                placeholder="e.g. 12"
                min={0}
                className="text-lg font-body"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-forest/5 border border-forest/20 rounded-2xl p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">Your Estimate</h3>
            </div>

            <div className="space-y-5">
              <div className="bg-forest rounded-xl p-6 text-center">
                <p className="text-secondary-foreground/80 font-body text-sm mb-1">Monthly Payment</p>
                <p className="text-secondary-foreground font-heading text-3xl font-bold">
                  {formatCurrency(monthlyPayment)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 text-center border border-border">
                  <p className="text-muted-foreground font-body text-xs mb-1">Total Payment</p>
                  <p className="text-foreground font-heading text-lg font-bold">{formatCurrency(totalPayment)}</p>
                </div>
                <div className="bg-card rounded-xl p-4 text-center border border-border">
                  <p className="text-muted-foreground font-body text-xs mb-1">Total Interest</p>
                  <p className="text-chocolate font-heading text-lg font-bold">{formatCurrency(totalInterest)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
