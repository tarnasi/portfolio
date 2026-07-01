"use client";

import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm text-off-white">
            <span className="text-teal">ST</span>
            <span className="text-soft-gray">.dev</span>
          </p>
          <p className="mt-1 text-sm text-soft-gray">
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="rounded-lg p-2 text-soft-gray transition-colors hover:text-teal"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="rounded-lg p-2 text-soft-gray transition-colors hover:text-teal"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="flex items-center gap-1 text-sm text-soft-gray">
          Crafted with <Heart size={14} className="text-teal" /> by{" "}
          {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
