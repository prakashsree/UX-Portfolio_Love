import { useState, useCallback, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const workDropdownItems = [
  { label: "Universal Cart & Quote Experience", href: "/case-study/universal-cart" },
  { label: "Device Setup Experience", href: "/case-study/device-setup" },
  { label: "BCSP Services", href: "/case-study/bcsp-services" },
  { label: "Proof of Concept / RFP", href: "/case-study/poc-rfp" },
];

const navItems = [
  { label: "Work", href: "#work", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Story", href: "/story", isRoute: true },
  { label: "Resume", href: "https://drive.google.com/file/d/1n58wH_qmFwxfxLoMcdD5zfwAm07T-4Us/view?usp=drive_link", external: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) return;
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/home");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  const handleCaseStudyClick = (href: string) => {
    setWorkDropdownOpen(false);
    setMobileWorkOpen(false);
    setIsOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          Prakash<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                  className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${workDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {workDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border border-border bg-card p-2 shadow-lg"
                    >
                      {workDropdownItems.map((study) => (
                        <button
                          key={study.href}
                          onClick={() => handleCaseStudyClick(study.href)}
                          className="block w-full rounded-lg px-4 py-2.5 text-left font-body text-sm text-foreground transition-colors hover:bg-accent hover:text-primary"
                        >
                          {study.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : item.isRoute ? (
              <button
                key={item.label}
                onClick={() => navigate(item.href)}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={(e) => handleNavClick(e, item.href, item.external)}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            )
          )}
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="rounded-lg bg-primary px-4 py-2 font-body text-sm font-medium text-primary-foreground transition-shadow hover:shadow-glow"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                      className="inline-flex w-full items-center justify-between font-body text-base text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileWorkOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-2 flex flex-col gap-1 overflow-hidden pl-4"
                        >
                          {workDropdownItems.map((study) => (
                            <button
                              key={study.href}
                              onClick={() => handleCaseStudyClick(study.href)}
                              className="rounded-lg px-3 py-2 text-left font-body text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                            >
                              {study.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.isRoute ? (
                  <button
                    key={item.label}
                    onClick={() => { navigate(item.href); setIsOpen(false); }}
                    className="font-body text-base text-muted-foreground transition-colors hover:text-primary text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={(e) => { handleNavClick(e, item.href, item.external); setIsOpen(false); }}
                    className="font-body text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="#contact"
                onClick={(e) => { handleNavClick(e, "#contact"); setIsOpen(false); }}
                className="mt-2 rounded-lg bg-primary px-4 py-2 text-center font-body text-sm font-medium text-primary-foreground"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
