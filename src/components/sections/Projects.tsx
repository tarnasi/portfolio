"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/data/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="group glass-card relative overflow-hidden rounded-2xl p-8"
      data-cursor
    >
      <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-teal/10 blur-2xl transition-all group-hover:bg-teal/20" />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <FolderGit2 className="h-6 w-6 text-teal" />
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-soft-gray transition-colors hover:text-teal"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <h3 className="mb-1 text-xl font-bold text-off-white">{project.name}</h3>
        <p className="mb-1 text-sm font-medium text-cyan">{project.org}</p>
        <p className="mb-4 text-xs text-soft-gray">{project.period}</p>
        <p className="mb-6 text-sm leading-relaxed text-soft-gray">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-soft-gray"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Selected projects showcasing backend engineering and open-source contributions."
        />

        <div className="grid gap-8 md:grid-cols-2" style={{ perspective: 1000 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
