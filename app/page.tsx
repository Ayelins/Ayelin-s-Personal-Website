import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
<div className="absolute left-[750px] top-[300px] flex flex-col gap-4">
  <Link
    href="/about"
    className="bg-black text-white px-12 py-4 rounded-full w-72 text-center"
  >
    About
  </Link>

  <Link
    href="/contact"
    className="bg-black text-white px-12 py-4 rounded-full w-72 text-center"
  >
    Contact
  </Link>

  <Link
    href="/projects"
    className="bg-black text-white px-12 py-4 rounded-full w-72 text-center"
  >
    Projects
  </Link>
</div>

      <main>
        <h1 className="text-5xl font-bold absolute left-[750px] top-[150px] whitespace-nowrap">Ayelin Vellikara</h1>
        <p className="absolute left-[750px] top-[200px] whitespace-nowrap text-2xl"> University of Illinois Chicago</p>
      <div className="absolute left-[200px] top-[120px] w-[400px] h-[500px] overflow-hidden rounded-t-[200px]">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={400}
          height={500}
          className="object-cover object-bottom w-full h-full"
        />
      </div>
      </main>
    </div>
  );
}
