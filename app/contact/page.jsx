import React from 'react'
import Link from "next/link";

export default function Contact() {
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

      <div className="mt-20 ml-20 text-4xl font-bold">
        Contact
      </div>
    </div>
  );
}