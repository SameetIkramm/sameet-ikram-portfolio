"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  items: string[];
  span?: string;
}

const skills: SkillCategory[] = [
  {
    title: "Core Strengths",
    items: ["Frontend Development", "UI/UX Design", "Backend Systems", "API Design", "Real-time Applications", "AI Chatbots"],
    span: "md:col-span-2",
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML & CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "NestJS", "Express.js", "React Query", "FastAPI"],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "Prisma", "Redis"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "AWS", "Postman", "Swagger", "Figma", "Cursor"],
    span: "md:col-span-2",
  },
  {
    title: "Core Concepts",
    items: ["REST APIs", "Microservices", "CI/CD", "WebRTC", "Real-time Systems", "Performance Optimization"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-12 md:py-16 relative">
      <div className="warm-divider mb-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 pt-6 sm:pt-8 md:pt-10"
        >
          <div>
            <p className="overline mb-5">Technical Expertise</p>
            <h2
              className="font-display font-light text-charcoal leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Skills &{" "}
              <em className="font-normal text-gold-gradient not-italic">
                Technologies
              </em>
            </h2>
          </div>

          <p className="font-sans text-stone-light text-sm max-w-xs leading-relaxed md:text-right">
            A curated stack built through years of production work across diverse domains.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="rounded-2xl overflow-hidden ring-1 ring-gold/15 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/15">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group bg-[#FFFFFF] p-5 sm:p-6 md:p-8 hover:bg-[#FDFBF7] transition-colors duration-400 ${skill.span ?? ""}`}
            >
              <div className="flex items-start justify-between mb-8">
                <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A87E2E]">
                  {skill.title}
                </p>
                <span className="editorial-num text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-xs font-medium px-3 py-1.5 border border-gold/15 text-stone-light group-hover:border-gold/40 group-hover:text-charcoal transition-all duration-300 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>

      <div className="warm-divider mt-0 container mx-auto px-4 sm:px-6 md:px-12 max-w-full" />
    </section>
  );
}
