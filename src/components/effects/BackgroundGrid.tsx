"use client";

export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#050810] to-black" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 212, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 212, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-teal/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple/5 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-[80px]" />
    </div>
  );
}
