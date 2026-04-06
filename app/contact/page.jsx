import React from "react";
import Link from "next/link";

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ded2c4] shadow-sm">
        {icon}
      </div>
      <div className="text-[18px] text-[#4b4540]">{text}</div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4b4540"
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#4b4540">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.05 2.05 0 1 0 5.3 7.1 2.05 2.05 0 0 0 5.25 3Zm4.11 5.5V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.38v-6.98c0-3.43-.74-6.06-4.75-6.06-1.93 0-3.22 1.06-3.75 2.06h-.05V8.5H9.36Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#4b4540">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.25 1.84 1.25 1.08 1.83 2.82 1.3 3.51 1 .1-.79.42-1.3.76-1.6-2.67-.31-5.47-1.35-5.47-5.98 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.55.12-3.22 0 0 1.02-.33 3.35 1.24a11.56 11.56 0 0 1 6.1 0c2.32-1.57 3.34-1.24 3.34-1.24.66 1.67.25 2.92.12 3.22.78.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.66-5.48 5.97.43.38.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function EnvelopeLineGraphic() {
  return (
    <div className="mt-5">
      <svg
        width="100%"
        height="100"
        viewBox="0 0 600 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-[650px]"
      >
        <path
          d="M10 90C45 105 92 98 130 65C145 52 156 44 176 49C197 55 214 83 229 99C254 126 291 108 315 87C343 62 379 49 405 67C432 86 434 117 456 117C479 117 491 87 516 68C541 49 570 50 590 62"
          stroke="#b7a593"
          strokeWidth="2.0"
          strokeLinecap="round"
        />
        <path
          d="M92 42L166 30L175 95L100 107L92 42Z"
          stroke="#a9927d"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M93 43L134 78L166 31"
          stroke="#a9927d"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M101 105L128 71"
          stroke="#a9927d"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M173 95L145 70"
          stroke="#a9927d"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#ece3d8] px-6 pb-8 pt-4">
      <div className="relative mx-auto max-w-[1550px] overflow-hidden rounded-[40px]">
        <div className="pointer-events-none absolute left-[-40px] top-[110px] h-[260px] w-[260px] rounded-full bg-[#e6d9cb] opacity-80" />
        <div className="pointer-events-none absolute bottom-[80px] right-[-80px] h-[220px] w-[220px] rounded-full bg-[#e8dccf] opacity-70" />
        <div className="pointer-events-none absolute bottom-[-30px] right-[10px] h-[120px] w-[180px] rounded-[999px] bg-[#e3d6c8] opacity-70" />

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

        <section className="relative z-10 mx-auto max-w-[900px] px-8 py-10 md:px-14 lg:px-16 lg:py-12">
          <div className="pt-2">
            <h1 className="text-5xl font-bold tracking-[-0.03em] text-[#2f2a27]">
              Let&apos;s Connect
            </h1>

            <p className="mt-5 max-w-[560px] text-[20px] leading-[1.7] text-[#4f4944]">
              Have a project, opportunity, or question?
              <br />
              Reach out and I&apos;ll get back to you.
            </p>

            <EnvelopeLineGraphic />

            <div className="mt-7 space-y-5">
              <ContactItem
                icon={<MailIcon />}
                text="ayelin1240@gmail.com"
              />
              <ContactItem
                icon={<LinkedInIcon />}
                text="www.linkedin.com/in/ayelinv"
              />
              <ContactItem
                icon={<GitHubIcon />}
                text="https://github.com/Ayelins"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}