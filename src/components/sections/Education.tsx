"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/resume";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Education & Certifications"
          title="Credentials"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard delay={0.1}>
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <GraduationCap className="h-6 w-6 text-teal" />
              </div>
              <span className="font-mono text-sm text-teal uppercase">
                Education
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-off-white">
              {education.degree}
            </h3>
            <p className="mb-1 text-cyan">{education.institution}</p>
            <p className="mb-1 text-sm text-soft-gray">
              {education.location} · {education.year}
            </p>
            <p className="text-sm text-soft-gray">{education.minor}</p>
          </GlassCard>

          <div className="space-y-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <Award className="h-6 w-6 text-purple" />
              </div>
              <span className="font-mono text-sm text-purple uppercase">
                Certifications
              </span>
            </div>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-5"
              >
                <h4 className="mb-1 text-sm font-semibold text-off-white">
                  {cert.name}
                </h4>
                <p className="text-xs text-soft-gray">
                  {cert.issuer} · {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
