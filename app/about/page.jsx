import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">

      <div className="w-[92%] h-[110px] bg-[#cbbba8] ml-6 mt-6 rounded-[90px] flex items-center justify-end pr-10 gap-8">
        <Link href="/" className="text-white text-xl font-medium">
          Home
        </Link>

        <Link href="/about" className="text-white text-xl font-medium">
          About
        </Link>

        <Link href="/contact" className="text-white text-xl font-medium">
          Contact
        </Link>

        <Link href="/projects" className="text-white text-xl font-medium">
          Projects
        </Link>
      </div>

      <div className="flex mt-24 px-20">

        <div className="w-1/2 flex items-start">
          <h1 className="text-black text-[140px] italic font-light">
            About Me
          </h1>
        </div>

        <div className="w-1/2 max-w-xl text-lg leading-10 text-left">

          <p>
            I am a Computer Science student at the University of Illinois
            Chicago, graduating in May 2028. I like learning by building
            projects and working through real technical problems. I have
            experience with Python, C++, C, and Go, and I regularly use Git
            and Linux in my coursework and projects.
          </p>

          <p className="mt-8">
            I worked as an Operating Systems intern on the Ethos OS, where
            I helped improve scheduling, built client–server programs using
            RPC, and debugged concurrency issues. I am also part of a startup
            QA team, testing front-end and back-end features to make the
            product more stable and easier to use. In addition, I serve as
            Secretary for Women in Computer Science, where I coordinate
            events and handle organizational communications.
          </p>

          <p className="mt-8">
            I am interested in pursuing software engineering and data
            science, with a focus on building efficient applications and
            using data to solve real-world problems.
          </p>

        </div>

      </div>

    </div>
  );
}