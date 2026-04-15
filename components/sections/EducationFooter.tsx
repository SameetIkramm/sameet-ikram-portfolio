"use client";

import { motion } from "framer-motion";
import { GraduationCap, Phone, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function EducationFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("03360978418");
    setCopied(true);
    toast.success("Phone number copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-8 sm:pt-12 md:pt-16 pb-[max(2rem,env(safe-area-inset-bottom,0px)+1rem)] sm:pb-12">
      <div className="warm-divider mb-0" />

      {/* Ambient glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-full">
        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 sm:py-10 md:py-12"
        >
          <p className="overline mb-6">Let&apos;s Connect</p>
          <h2
            className="font-display font-light text-charcoal leading-[0.9] mb-8 sm:mb-10"
            style={{ fontSize: "clamp(2.25rem, 8vw, 8rem)" }}
          >
            Have a project
            <br />
            <em className="font-normal text-gold-gradient not-italic">
              in mind?
            </em>
          </h2>
          <a
            href="mailto:ikramsameet46@gmail.com"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-3 sm:gap-4 font-sans text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-6 py-4 sm:px-10 sm:py-5 border-2 border-gold/40 text-[#A87E2E] hover:bg-gold hover:text-cream transition-all duration-300 shadow-sm min-h-12 rounded-full"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="warm-divider mb-0" />

        {/* Bottom info grid */}
        <div className="rounded-2xl overflow-hidden ring-1 ring-gold/15 shadow-sm mt-px">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/15">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFFF] p-5 sm:p-6 md:p-8 group hover:bg-cream transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-5 h-5 text-[#A87E2E]" />
              <span className="overline">Education</span>
            </div>
            <p
              className="font-display font-normal text-charcoal leading-tight mb-2"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
            >
              B.S. Computer Science
            </p>
            <p className="font-display italic text-[#A87E2E] mb-4" style={{ fontSize: "1.1rem" }}>
              FAST NUCES
            </p>
            <p className="font-sans text-xs text-stone-light font-medium">2019 — 2023 · Islamabad, Pakistan</p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#FFFFFF] p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6"
          >
            <div className="flex items-center gap-3 mb-1">
              <Mail className="w-5 h-5 text-[#A87E2E]" />
              <span className="overline">Email</span>
            </div>
            <a
              href="mailto:ikramsameet46@gmail.com"
              className="group/link relative inline-block pb-1 font-sans text-sm font-medium text-stone-light hover:text-charcoal transition-colors duration-300 break-all"
            >
              ikramsameet46@gmail.com
              <span className="absolute bottom-0 left-0 block w-0 h-px bg-gold group-hover/link:w-full transition-all duration-400" />
            </a>

            <button
              type="button"
              onClick={handleCopyPhone}
              className="group/btn flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 text-left w-full min-h-11 py-1 -mx-1 px-1 rounded-xl"
            >
              <div className="flex items-center gap-3 shrink-0">
                <Phone className="w-5 h-5 text-[#A87E2E]" />
                <span className="overline">Phone</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <span className="font-sans text-sm font-medium text-stone-light group-hover/btn:text-charcoal transition-colors duration-300">
                  +92 336 0978418
                </span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#A87E2E] shrink-0" aria-hidden />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-stone-light group-hover/btn:text-[#A87E2E] transition-colors duration-300 shrink-0" aria-hidden />
                )}
              </div>
            </button>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FFFFFF] p-5 sm:p-6 md:p-8 hover:bg-cream transition-colors duration-300 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <ExternalLink className="w-5 h-5 text-[#A87E2E]" />
              <span className="overline">LinkedIn</span>
            </div>
            <a
              href="https://linkedin.com/in/sameet-ikram"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative inline-block pb-1 font-sans text-sm font-medium text-stone-light hover:text-charcoal transition-colors duration-300"
            >
              Sameet Ikram
              <span className="absolute bottom-0 left-0 block w-0 h-px bg-gold group-hover/link:w-full transition-all duration-400" />
            </a>
            <p className="font-sans text-xs text-stone-light mt-3 font-medium">
              linkedin.com/in/sameet-ikram
            </p>
          </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pt-8 sm:pt-10 mt-px text-center md:text-left">
          <p className="font-sans text-[10px] font-semibold text-stone-light tracking-widest uppercase max-w-md leading-relaxed">
            © {new Date().getFullYear()} Sameet Ikram. All rights reserved.
          </p>
          <p className="font-sans text-[10px] font-semibold text-stone-light tracking-widest uppercase max-w-md leading-relaxed">
            Crafted with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
