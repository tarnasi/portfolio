"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";
import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>(experience[0].id);

  return (
    <section id="experience" className="relative z-10 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="7+ years building backends, APIs, and data-driven systems across industries."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-teal/50 via-cyan/30 to-transparent md:left-8" />

          <div className="space-y-6">
            {experience.map((job, i) => {
              const isOpen = expanded === job.id;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-16 md:pl-20"
                >
                  <div className="absolute top-6 left-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-teal bg-navy md:left-6">
                    <div className="h-2 w-2 rounded-full bg-teal" />
                  </div>

                  <motion.div
                    layout
                    className={cn(
                      "glass-card cursor-pointer overflow-hidden rounded-2xl transition-all",
                      isOpen && "border-teal/30 shadow-glow",
                    )}
                    onClick={() => setExpanded(isOpen ? null : job.id)}
                    data-cursor
                  >
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div className="flex gap-4">
                        <div className="hidden rounded-xl border border-white/10 bg-white/5 p-3 sm:block">
                          <Briefcase className="h-5 w-5 text-teal" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-off-white">
                            {job.role}
                          </h3>
                          {job.subtitle && (
                            <p className="text-sm text-cyan">{job.subtitle}</p>
                          )}
                          <p className="mt-1 font-medium text-teal">
                            {job.company}
                          </p>
                          <p className="mt-1 text-sm text-soft-gray">
                            {job.period}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 shrink-0 text-soft-gray"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 border-t border-white/10 px-6 pt-4 pb-6">
                            {job.bullets.map((bullet, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.05 }}
                                className="flex gap-3 text-sm leading-relaxed text-soft-gray"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-teal to-cyan" />
                                {bullet}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
