import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = "service_bie1bd6";
const EMAILJS_TEMPLATE_ID = "template_11hcwj8";
const EMAILJS_PUBLIC_KEY  = "UdFr-HOPooK01IYg6";
// ────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone,
          subject:      form.subject,
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-body font-medium text-primary uppercase tracking-widest mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Have a question or want to join MFSC? Fill in the form and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: contact info ── */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background rounded-2xl border border-border p-6 space-y-5">
              <InfoRow icon={<MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />}
                label="Address"
                value="Rwanda, Kigali — Ets Ndamage Building" />
              <InfoRow icon={<Phone className="w-5 h-5 text-primary shrink-0" />}
                label="Phone"
                value="+250 796 888 997" />
              <InfoRow icon={<Mail className="w-5 h-5 text-primary shrink-0" />}
                label="Email"
                value="maranathafinancialservicecoop@gmail.com" />
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-sm font-body font-medium text-primary mb-1">Office Hours</p>
              <p className="text-sm font-body text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM</p>
   
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-3 bg-background rounded-2xl border border-border p-6 md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="w-14 h-14 text-green-500" />
                <h3 className="text-xl font-heading font-bold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground font-body max-w-xs">
                  Thank you for reaching out. We'll get back to you within 1–2 business days.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")}>Send another message</Button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name *">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      required
                    />
                  </Field>
                  <Field label="Email address *">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      required
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone number">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+250 7xx xxx xxx"
                      className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </Field>
                  <Field label="Subject">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="">Select a topic</option>
                      <option value="Membership / Join MFSC">Membership / Join MFSC</option>
                      <option value="Savings Account">Savings Account</option>
                      <option value="Loan Products">Loan Products</option>
                      <option value="Financial Literacy">Financial Literacy</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message *">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    required
                  />
                </Field>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full gap-2"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wide">{label}</label>
    {children}
  </div>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>
      <p className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-sm font-body text-foreground">{value}</p>
    </div>
  </div>
);

export default ContactSection;