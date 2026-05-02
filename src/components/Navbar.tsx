import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import logo from "../assets/Logo_updated.png";

const navLinks = [
  { label: "Home",       href: "/",           type: "route"  },
  { label: "About",      href: "#about",       type: "anchor" },
  { label: "Services",   href: "#services",    type: "anchor" },
  { label: "Loans",      href: "/loans",       type: "route"  },
  { label: "Our Team",   href: "/team",        type: "route"  },
  { label: "Contact",    href: "#contact",     type: "anchor" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Track which section is in view using IntersectionObserver
  useEffect(() => {
    if (!isHome) {
      setActiveAnchor("");
      return;
    }

    const anchors = navLinks
      .filter((l) => l.type === "anchor")
      .map((l) => l.href.replace("#", ""));

    const observers: IntersectionObserver[] = [];

    anchors.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveAnchor(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.label === "Home") return false;
    if (link.type === "route") return location.pathname === link.href;
    return isHome && activeAnchor === link.href;
  };

  const activeCls = "text-primary border-b-2 border-primary pb-0.5";
  const inactiveCls = "text-muted-foreground hover:text-primary";
  const mobileActiveCls = "bg-primary/10 text-primary";
  const mobileInactiveCls = "text-muted-foreground hover:text-primary hover:bg-muted/50";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Webmail bar */}
      <div className="hidden md:flex items-center justify-end bg-primary/10 px-6 lg:px-8 py-1.5">
        <a
          href="https://imaranatha.rw/webmail"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-body font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Mail size={13} />
          Staff Webmail
        </a>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MFSC Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-body font-medium transition-colors ${
                    isActive(link) ? activeCls : inactiveCls
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleAnchorClick(link.href)}
                  className={`text-sm font-body font-medium transition-colors ${
                    isActive(link) ? activeCls : inactiveCls
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
            <Button variant="hero" size="lg">Join Now</Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 space-y-1">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-body font-medium transition-colors ${
                    isActive(link) ? mobileActiveCls : mobileInactiveCls
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleAnchorClick(link.href)}
                  className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-body font-medium transition-colors ${
                    isActive(link) ? mobileActiveCls : mobileInactiveCls
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href="https://imaranatha.rw/webmail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2.5 px-3 text-sm font-body font-medium text-primary"
            >
              <Mail size={15} />
              Staff Webmail
            </a>
            <div className="pt-2">
              <Button variant="hero" className="w-full">Join Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;