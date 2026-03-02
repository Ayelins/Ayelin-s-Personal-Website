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
        <h1 className="text-5xl font-bold">Ayelin Vellikara</h1>
        <p>Welcome to my personal website</p>
        <Image
          src="/profile.jpg"   // file must be in /public
          alt="Profile"
          width={220}
          height={220}
          className="mt-10"
        />
      </main>
    </div>
  );
}
