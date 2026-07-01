"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server } from "lucide-react";
import { summary } from "@/data/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Django, FastAPI, Flask — production APIs at scale",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Multi-database, ETL pipelines, caching strategies",
  },
  {
    icon: Code2,
    title: "Distributed Systems",
    description: "Microservices, message brokers, real-time WebSockets",
  },
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="About" title="Who I Am" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-soft-gray">
              {summary}
            </p>
            <p className="text-lg leading-relaxed text-soft-gray">
              I specialize in architecting robust backend solutions that power
              real-world applications — from cryptocurrency platforms and CRM
              systems to cybersecurity data pipelines. Passionate about clean
              code, performance optimization, and building systems that scale.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-4"
                >
                  <item.icon className="mb-2 h-5 w-5 text-teal" />
                  <h3 className="mb-1 text-sm font-semibold text-off-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-soft-gray">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-teal/20 via-cyan/10 to-purple/20 blur-2xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-navy to-black shadow-glow lg:h-80 lg:w-80">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal/10 to-purple/10">
                  <span className="text-6xl font-bold text-gradient lg:text-7xl">
                    ST
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-dashed border-teal/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
