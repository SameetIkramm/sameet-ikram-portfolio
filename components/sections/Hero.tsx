"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stats = [
  { value: "2.5+", label: "Years experience" },
  { value: "10+", label: "Products shipped" },
  { value: "70%", label: "Latency reduced" },
  { value: "60%", label: "Reliability gained" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-12 pt-[max(5rem,env(safe-area-inset-top,0px)+4.5rem)] pb-6 md:pt-24 md:pb-10 bg-cream">
      {/* Ambient warm glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 sm:gap-14 lg:gap-24">
          <div className="flex-1">
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="overline mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-gold" />
              Full Stack Developer &amp; AI Product Engineer
            </motion.p>

            {/* Main headline — editorial, mixed weights */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display leading-[0.82] tracking-[-0.04em]"
                style={{ fontSize: "clamp(2.75rem, 12vw, 14.5rem)" }}
              >
                <span className="block font-light text-charcoal">Sameet</span>
                <span className="block italic font-normal text-gold-gradient py-2">
                  Ikram
                </span>
              </motion.h1>
            </div>

            {/* Description + CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 sm:mt-12 max-w-xl"
            >
              <p
                className="font-sans text-stone leading-relaxed mb-8 sm:mb-10 text-[0.9375rem] sm:text-base md:text-[clamp(1rem,1.5vw,1.3rem)]"
              >
                Building production-grade backend systems, real-time applications,
                and AI-powered products with <span className="text-[#A87E2E] font-semibold">2.5+ years</span> of measurable impact.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-8 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-3 sm:gap-4 font-sans text-sm font-bold text-charcoal hover:text-[#A87E2E] transition-all duration-300 min-h-11"
                >
                  <span className="tracking-[0.2em] uppercase text-[10px]">Explore Work</span>
                  <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full border-2 border-gold/30 group-hover:border-[#A87E2E] group-hover:bg-gold/10 transition-all duration-300">
                    <ArrowDown className="w-4 h-4 text-[#A87E2E]" />
                  </span>
                </button>

                <a
                  href="mailto:ikramsameet46@gmail.com"
                  className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 sm:px-8 sm:py-4 bg-charcoal text-cream hover:bg-[#A87E2E] transition-all duration-300 rounded-full shadow-lg shadow-black/5 text-center min-h-11 inline-flex items-center justify-center"
                >
                  Hire Me
                </a>
              </div>

              {/* Stats — mobile / tablet (desktop shows column on lg) */}
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 lg:hidden border-t border-gold/15 pt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="font-display italic text-2xl sm:text-3xl text-gold-gradient leading-none">
                      {stat.value}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-stone-light leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hidden lg:flex flex-col gap-12 border-l border-gold/20 pl-16 py-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display italic text-4xl text-gold-gradient leading-none">{stat.value}</span>
                <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-stone-light">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 max-[380px]:hidden"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#A87E2E]/60 font-bold">Scroll</span>
        <div className="w-px h-16 bg-linear-to-b from-gold/60 to-transparent" />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-[0.15] pointer-events-none w-[min(100vw,42rem)] sm:w-auto overflow-hidden sm:overflow-visible">
        <svg className="max-w-full h-auto translate-x-1/4 sm:translate-x-0" width="800" height="800" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="500" cy="100" r="300" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="500" cy="100" r="400" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="500" cy="100" r="500" stroke="#C9A84C" strokeWidth="0.5" />
          <line x1="500" y1="100" x2="0" y2="600" stroke="#C9A84C" strokeWidth="0.2" />
        </svg>
      </div>
    </section>
  );
}
