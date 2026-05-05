import { Mail, Phone, MapPin } from "lucide-react";

const LOGO = "/images/logo/Logo_updated.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO}
                alt="MFSC Logo"
                className="h-12 w-auto object-contain "
              />
            </div>
            <p className="text-sm font-body text-background/60 leading-relaxed">
              Maranatha Financial Service Cooperative — your trusted partner in financial empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm font-body text-background/60 hover:text-background transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {["Savings Account", "Micro Loans", "Insurance", "Financial Literacy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm font-body text-background/60 hover:text-background transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest-light mt-0.5 shrink-0" />
                <span className="text-sm font-body text-background/60">Rwanda, Kigali Ets Ndamage Building</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest-light shrink-0" />
                <span className="text-sm font-body text-background/60">+250 796 888 997</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-light shrink-0" />
                <span className="text-sm font-body text-background/60">maranathafinancialservicecoop@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-forest-light shrink-0" />
                <a
                  href="https://imaranatha.rw/webmail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-background/60 hover:text-background underline underline-offset-2 transition-colors"
                >
                  Staff Webmail Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm font-body text-background/40">
            © {new Date().getFullYear()} Maranatha Financial Service Cooperative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;