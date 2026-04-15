"use client";

import { motion } from "framer-motion";

interface Achievement {
  text: string;
  metric: string;
}

const achievements: Achievement[] = [
  {
    text: "Engineered and scaled production-grade backend systems using Node.js, TypeScript, and Python, supporting thousands of active users.",
    metric: "Thousands of users",
  },
  {
    text: "Led optimization of core platform features, improving system performance by 40% through render reduction and efficient state management.",
    metric: "40% perf. boost",
  },
  {
    text: "Improved music system reliability and synchronization by 60%, ensuring seamless cross-platform performance.",
    metric: "60% reliability",
  },
  {
    text: "Migrated large-scale data from Bubble to Node.js/PostgreSQL, enhancing scalability and system reliability.",
    metric: "Full data migration",
  },
  {
    text: "Optimized chatbot infrastructure, reducing latency by 70% through backend and API improvements.",
    metric: "70% latency cut",
  },
  {
    text: "Designed and deployed AI-powered chatbots and bilingual voice agents (English/Urdu), collaborating directly with clients.",
    metric: "AI Voice Agents",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-10 sm:py-12 md:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <p className="overline mb-5">Work History</p>
          <h2
            className="font-display font-light text-charcoal leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Professional{" "}
            <em className="italic font-normal text-gold-gradient not-italic">
              Experience
            </em>
          </h2>
        </motion.div>

        {/* Experience block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Company header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gold/20">
            <div>
              <h3
                className="font-display font-normal text-charcoal leading-tight mb-2"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
              >
                Code Huddle
              </h3>
              <p
                className="font-display italic font-light text-gold-gradient"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
              >
                Full Stack Developer
              </p>
            </div>

            <div className="flex flex-col gap-1 md:text-right">
              <span className="font-sans text-sm text-stone font-semibold">
                July 2023 — Present
              </span>
              <span className="font-sans text-xs text-stone-light tracking-wide">
                Islamabad, Pakistan
              </span>
            </div>
          </div>

          {/* Achievements — 2-col grid */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-gold/15 shadow-sm mt-px">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/15">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-[#FFFFFF] hover:bg-[#FDFBF7] transition-colors duration-300 p-5 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
              >
                <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                  <span className="editorial-num text-3xl sm:text-4xl shrink-0 select-none leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-sm text-stone-light leading-relaxed group-hover:text-charcoal transition-colors duration-300 min-w-0">
                    {item.text}
                  </p>
                </div>
                <div className="pl-0 sm:pl-[2.75rem] md:ml-10 md:pl-0">
                  <span
                    className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 border border-gold/30 text-[#A87E2E] bg-gold/5 rounded-full"
                  >
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="warm-divider mt-8 sm:mt-10 md:mt-12 container mx-auto px-4 sm:px-6 md:px-12 max-w-full" />
    </section>
  );
}
