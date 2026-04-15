"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Projects from "@/components/sections/Projects";
import EducationFooter from "@/components/sections/EducationFooter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sectionIds = ["skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Gold progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] origin-left h-px"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #A87E2E, #E2C47A, #C9A84C)",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? "border-b border-gold/15 shadow-sm"
              : ""
          }`}
          style={{
            background: isScrolled ? "rgba(253, 251, 247, 0.92)" : "transparent",
            backdropFilter: isScrolled ? "blur(24px)" : "none",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between relative z-10 max-w-full">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-0.5 focus:outline-none group rounded-lg px-1 -mx-1"
          >
            <span
              className="font-display font-normal leading-none text-charcoal group-hover:text-[#A87E2E] transition-colors duration-300"
              style={{ fontSize: "1.4rem" }}
            >
              Sameet
            </span>
            <span
              className="font-display italic font-light leading-none text-gold"
              style={{ fontSize: "1.4rem" }}
            >
              .
            </span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className={`font-sans text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 relative inline-block pb-1 group ${
                    isActive ? "text-[#A87E2E]" : "text-stone-light hover:text-charcoal"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.a>
              );
            })}

            <motion.a
              href="mailto:ikramsameet46@gmail.com"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 border-2 border-gold/40 text-[#A87E2E] hover:bg-gold hover:text-cream transition-all duration-300 rounded-full"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-stone-light hover:text-[#A87E2E] hover:bg-gold/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 right-0 border-b border-gold/15 shadow-xl rounded-b-2xl"
            style={{ background: "rgba(253, 251, 247, 0.98)", backdropFilter: "blur(24px)" }}
          >
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-2 max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-xs font-semibold tracking-[0.15em] uppercase py-4 text-stone-light hover:text-charcoal border-b border-gold/5 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:ikramsameet46@gmail.com"
                className="mt-6 font-sans text-xs font-bold tracking-[0.2em] uppercase px-6 py-4 border-2 border-gold/40 text-[#A87E2E] text-center hover:bg-gold hover:text-cream transition-all duration-300 rounded-full"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Page sections */}
      <Hero />
      <Skills />
      <ExperienceTimeline />
      <Projects />
      <EducationFooter />
    </main>
  );
}
