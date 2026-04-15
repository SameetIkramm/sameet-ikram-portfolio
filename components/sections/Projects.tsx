"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: "Gymyg",
    category: "Fitness Platform",
    description:
      "Optimized core music system improving playback reliability and synchronization by 60%. Enhanced performance by 40% through render reduction and state optimization. Built privacy mode, screenshot system, and media optimizations with React Query for real-time data sync.",
    tech: ["Next.js", "React Query", "WebRTC", "PostgreSQL"],
    year: "2023–Now",
  },
  {
    title: "Huddle Chatbot",
    category: "SaaS Platform",
    description:
      "Custom chatbot platform enabling businesses to deploy AI chatbots with minimal setup. Embedding in under 5 lines of code. Independently designed scalable backend architecture, APIs, and deployment workflows.",
    tech: ["Node.js", "TypeScript", "Python", "OpenAI"],
    year: "2024",
  },
  {
    title: "DineTalk",
    category: "AI Voice Ordering",
    description:
      "Bilingual AI voice agent for conversational food ordering in English and Urdu. Integrated dynamic menu scraping with real-time voice interaction workflows for seamless customer experience.",
    tech: ["Python", "FastAPI", "Whisper", "Urdu TTS"],
    year: "2024",
  },
  {
    title: "Honest Dog",
    category: "Pet Adoption Platform",
    description:
      "Migrated large-scale data to PostgreSQL ensuring ACID compliance. Optimized queries for sub-second adoption processing, significantly improving platform reliability and user trust.",
    tech: ["PostgreSQL", "Node.js", "Express", "Prisma"],
    year: "2023",
  },
  {
    title: "Anigen",
    category: "AI Media Generation",
    description:
      "Urdu text-to-speech system with avatar-based lip synchronization. Combines deep learning models with real-time video synthesis for natural, expressive avatar animation.",
    tech: ["Python", "OpenCV", "Deep Learning", "TTS"],
    year: "2023",
  },
  {
    title: "Multivendor Marketplace",
    category: "E-commerce",
    description:
      "Full-featured marketplace platform with MonCash payment integration, a full ads system, and WhatsApp order notifications. Mentored a junior engineer through the full project lifecycle.",
    tech: ["Next.js", "Node.js", "MonCash", "WhatsApp API"],
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-12 md:py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4"
        >
          <div>
            <p className="overline mb-5">Selected Work</p>
            <h2
              className="font-display font-light text-charcoal leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Featured{" "}
              <em className="italic font-normal text-gold-gradient not-italic">
                Projects
              </em>
            </h2>
          </div>
          <p className="font-sans text-stone-light text-sm max-w-xs md:text-right leading-relaxed">
            A selection of the most challenging and impactful work I&apos;ve shipped.
          </p>
        </motion.div>

        {/* Projects list — full-width rows */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group"
            >
              {/* Row top border */}
              <div className="warm-divider" />

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-6 md:gap-12 py-5 sm:py-6 md:py-8 group-hover:bg-[#FDFBF7] px-4 sm:px-5 md:px-6 rounded-xl sm:rounded-2xl transition-colors duration-300">
                {/* Left: index + meta */}
                <div className="flex flex-col justify-between gap-4 min-w-0">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="editorial-num text-4xl sm:text-5xl md:text-6xl select-none leading-none shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-[#A87E2E] mb-1">
                        {project.category}
                      </p>
                      <p className="font-sans text-xs text-stone-light">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-[10px] font-medium tracking-wide px-2.5 py-1 border border-gold/20 text-stone-light group-hover:border-gold/40 group-hover:text-charcoal transition-all duration-300 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center: title + description */}
                <div className="flex flex-col justify-center gap-4">
                  <h3
                    className="font-display font-normal text-charcoal leading-tight group-hover:text-[#A87E2E] transition-colors duration-400"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-stone-light leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Right: arrow */}
                <div className="flex items-center justify-start md:justify-end pt-1 md:pt-0">
                  <button
                    type="button"
                    aria-label={`View ${project.title}`}
                    className="w-11 h-11 border border-gold/25 flex items-center justify-center text-[#A87E2E] opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:border-[#A87E2E]/60 hover:bg-gold/10 active:bg-gold/10 transition-all duration-300 touch-manipulation rounded-full"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final border */}
          <div className="warm-divider" />
        </div>
      </div>
    </section>
  );
}
