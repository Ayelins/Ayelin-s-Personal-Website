import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </div>

      <main>
        <h1 className="text-5xl font-bold absolute left-[650px] top-[200px] whitespace-nowrap">Ayelin Vellikara</h1>
        <p className="absolute left-[650px] top-[300px] whitespace-nowrap text-2xl"> University of Illinois Chicago</p>
        <Image
          src="/profile.jpg"   // file must be in /public
          alt="Profile"
          width={400}
          height={500}
          className="mt-20 ml-30"
        />
      </main>
    </div>
  );
}
