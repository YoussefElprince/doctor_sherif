import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, X, Stethoscope } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { content, toggleLanguage } = useLanguage();

  const handleMobileNavigation = (href: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }, 250);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft border-b border-primary/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-white shadow-soft group-hover:scale-105 transition-transform">
            <Stethoscope size={18} strokeWidth={2} />
          </span>
          <span className="font-display text-lg md:text-xl text-primary-deep tracking-tight">
            {content.doctor.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-4 lg:gap-9">
          {content.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[15px] font-medium text-ink-soft hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-[15px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-deep hover:shadow-lift lg:px-6"
          >
            {content.ui.bookAppointment}
          </a>
        </div>

        <button
          type="button"
          onClick={toggleLanguage}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/15 px-2.5 py-2 text-sm font-semibold text-primary-deep transition-colors hover:border-accent hover:text-accent lg:px-4"
          aria-label={`Switch language to ${content.ui.language}`}
        >
          <Languages size={16} />
          {content.ui.language}
        </button>

        <button
          className="md:hidden grid place-items-center w-10 h-10 text-primary-deep"
          aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-primary/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleMobileNavigation(link.href)}
                    className="block py-2.5 text-[15px] font-medium text-ink-soft hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => handleMobileNavigation("#contact")}
                  className="block text-center rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-white shadow-soft"
                >
                  {content.ui.bookAppointment}
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/15 px-4 py-2.5 text-sm font-semibold text-primary-deep"
                  aria-label={`Switch language to ${content.ui.language}`}
                >
                  <Languages size={16} />
                  {content.ui.language}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
