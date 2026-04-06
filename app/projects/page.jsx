import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Bowling Alley Website",
    role: "Full-stack developer",
    description:
      "Built a responsive website for a bowling alley during a 24-hour hackathon. Users could reserve lanes, view the menu, and check business hours through a clean interface.",
    tools: ["HTML", "CSS"],
    github: "https://github.com/Ayelins",
  },
  {
    title: "Find the Candy Game",
    role: "Project developer",
    description:
      "Developed an interactive Python game using Turtle graphics with event-driven controls, modular scoring, and randomized gameplay elements.",
    tools: ["Python"],
    github: "https://github.com/Ayelins",
  },
  {
    title: "Red Light Cameras",
    role: "Developer",
    description:
      "Built a C++ application using data structures and file streams to analyze traffic camera violation data and identify trends across neighborhoods. Processed 1,000+ violation records to generate reports and summaries highlighting high-risk intersections.",
    tools: ["C++"],
    github: "https://github.com/Ayelins",
  },
];

function ProjectCard({ title, role, description, tools, github }) {
  return (
    <div className="rounded-[34px] bg-[#f3ede6] p-8 shadow-[0_14px_40px_rgba(114,93,67,0.08)]">
      <h2 className="text-[40px] font-semibold leading-tight tracking-[-0.03em] text-[#4a3f37]">
        {title}
      </h2>

      <p className="mt-3 text-[18px] font-semibold text-[#5a4d45]">{role}</p>

      <p className="mt-5 text-[18px] leading-[1.8] text-[#685c54]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-[#e8ddd1] px-4 py-2 text-[15px] text-[#5b5048]"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#c8b29a] px-6 py-3 text-[17px] font-medium text-white transition hover:opacity-90"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#ece3d8] px-6 pb-12 pt-4">
      <div className="relative mx-auto max-w-[1550px] overflow-hidden rounded-[40px]">
        <div className="pointer-events-none absolute left-[-120px] top-[420px] h-[260px] w-[260px] rounded-full bg-[#e7dbce] opacity-70" />
        <div className="pointer-events-none absolute right-[-90px] top-[720px] h-[220px] w-[220px] rounded-full bg-[#e6d8ca] opacity-60" />

        <nav className="mx-auto flex h-[105px] w-full items-center justify-end rounded-[60px] bg-[#cbbba8] px-10 md:px-16">
          <div className="flex items-center gap-8 md:gap-12">
            <Link href="/" className="text-xl font-medium text-white">
              Home
            </Link>
            <Link href="/about" className="text-xl font-medium text-white">
              About
            </Link>
            <Link href="/contact" className="text-xl font-medium text-white">
              Contact
            </Link>
            <Link href="/projects" className="text-xl font-medium text-white">
              Projects
            </Link>
          </div>
        </nav>

        <section className="relative z-10 px-8 py-10 md:px-14 lg:px-16 lg:py-12">
          <div className="max-w-[980px]">
            <h1 className="text-6xl font-bold tracking-[-0.04em] text-[#2f2a27]">
              Projects
            </h1>

            <p className="mt-4 text-[22px] leading-[1.7] text-[#514943]">
              Here are a few projects I&apos;ve worked on that showcase my
              skills and experience.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}