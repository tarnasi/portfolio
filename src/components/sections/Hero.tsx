"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Copy, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { personalInfo } from "@/data/resume";

const titles = [
  "Senior Django & Python Backend Engineer",
  "Distributed Systems Architect",
  "API & Microservices Specialist",
];

function TypingTitle() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <span className="text-gradient">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-0.5 inline-block h-[1em] w-0.5 bg-teal align-middle"
      />
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16">
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-soft-gray backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight text-off-white md:text-7xl lg:text-8xl"
        >
          {personalInfo.name.split(" ").map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="inline-block"
            >
              {word}
              {i === 0 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-xl font-medium md:text-2xl lg:text-3xl"
        >
          <TypingTitle />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-soft-gray"
        >
          Building scalable backends, APIs, and distributed systems with Python.
          7+ years crafting production-grade software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#experience"
            data-cursor
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-cyan px-8 py-3.5 font-semibold text-navy transition-all hover:shadow-glow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Experience
            <ArrowDown
              size={18}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <button
            onClick={copyEmail}
            data-cursor
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-medium text-off-white backdrop-blur-sm transition-all hover:border-teal/40 hover:bg-white/10"
          >
            <Mail size={18} />
            {personalInfo.email}
            <Copy size={14} className="text-soft-gray" />
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            data-cursor
            className="flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-8 py-3.5 font-medium text-purple transition-all hover:border-purple/50 hover:bg-purple/20"
          >
            <Download size={18} />
            Download PDF
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-soft-gray"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[10%] hidden h-20 w-20 rounded-2xl border border-teal/20 bg-teal/5 backdrop-blur-sm lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[8%] hidden h-16 w-16 rounded-full border border-purple/20 bg-purple/5 backdrop-blur-sm lg:block"
      />
    </section>
  );
}
