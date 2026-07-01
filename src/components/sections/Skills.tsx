"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "@/data/resume";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="relative z-10 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit honed over 7+ years of backend engineering."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "border-teal/50 bg-teal/15 text-teal shadow-glow"
                  : "border-white/10 bg-white/5 text-soft-gray hover:border-white/20 hover:text-off-white",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="mb-8 text-xl font-semibold text-off-white">
            {current.label}
          </h3>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {current.skills.map((skill, i) => (
              <ProgressRing
                key={skill.name}
                value={skill.level}
                label={skill.name}
                delay={i * 0.08}
              />
            ))}
          </div>

          <div className="mt-10 hidden md:block">
            <div className="space-y-4">
              {current.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-off-white">{skill.name}</span>
                    <span className="text-soft-gray">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-teal via-cyan to-purple"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
