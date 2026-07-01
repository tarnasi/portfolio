"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Globe, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/resume";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0.6, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      style={{ opacity: navOpacity }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-navy/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group font-mono text-sm font-semibold tracking-wider text-off-white"
          data-cursor
        >
          <span className="text-teal">ST</span>
          <span className="text-soft-gray transition-colors group-hover:text-teal">
            .
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                data-cursor
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "text-teal"
                    : "text-soft-gray hover:text-off-white",
                )}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-teal to-cyan"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="rounded-lg p-2 text-soft-gray transition-colors hover:text-teal"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="rounded-lg p-2 text-soft-gray transition-colors hover:text-teal"
            aria-label="GitHub"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="rounded-lg p-2 text-soft-gray transition-colors hover:text-teal"
            aria-label="Website"
          >
            <Globe size={18} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            data-cursor
            className="flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-sm font-medium text-teal transition-all hover:border-teal/60 hover:bg-teal/20 hover:shadow-glow"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-off-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-navy/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full rounded-lg px-4 py-3 text-left text-soft-gray hover:bg-white/5 hover:text-teal"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5 text-soft-gray" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5 text-soft-gray" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 text-sm text-teal"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
