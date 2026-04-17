import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sound System",
  description: "Professional sound systems, discussion and wireless microphones, audio mixers for all types of events.",
  openGraph: {
    title: "Sound System | Conference BG",
    description: "Professional sound systems, discussion and wireless microphones, audio mixers for all types of events.",
  },
};

const sections = [
  {
    title: "Loudspeaker Systems",
    description:
      "High-technology loudspeaker systems that guarantee the reproduction of every sound and power level according to the size of the event and the number of attendees.",
    image: "/img2.1.jpg",
  },
  {
    title: "Discussion Microphones",
    description:
      "A reliable system of sensitive microphones with elegant design and easy control. The chairman microphone allows full control over the discussion.",
    image: "/img2.2.jpg",
  },
  {
    title: "Wireless Microphones",
    description:
      "Wireless microphones and lapel microphones offering comfort and high-quality sound.",
    image: "/img2.3.jpg",
  },
  {
    title: "Audio Mixers",
    description:
      "Audio mixers with various numbers of microphone channels, powerful pre-amplifiers and built-in effects for a balanced sound picture.",
    image: "/img2.4.jpg",
  },
];

const sidebar = [
  { name: "SOUND SYSTEM", href: "/озвучаване" },
  { name: "SIMULTANEOUS TRANSLATION", href: "/симултанен-превод" },
  { name: "MULTIMEDIA", href: "/мултимедия" },
  { name: "DESIGN & LIGHTING", href: "/дизайн-и-осветление" },
  { name: "TOUR GUIDE SYSTEM", href: "/тур-гайд-система" },
  { name: "RECORDING & STREAMING", href: "/запис-и-стрийминг" },
];

export default function SoundSystemPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image src="/header1.jpg" alt="Sound System" fill sizes="100vw" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">SOUND SYSTEM</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="lg:flex-1">
              <div className="grid gap-12">
                {sections.map((section, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                  >
                    <div className="md:w-1/2 relative aspect-[4/3] w-full shadow-[0_0_7px_0_rgba(0,0,0,0.5)] overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-dark mb-4 uppercase relative">
                        <span className="inline-block w-5 h-0.5 bg-red mr-2 translate-y-[-3px]" />
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-[#f3f3f3] px-6 py-4">
                <h3 className="text-base font-bold text-dark uppercase border-b-2 border-black pb-2 mb-3 pl-1">
                  SERVICES
                </h3>
                <nav className="space-y-0">
                  {sidebar.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 px-1 text-sm font-semibold text-dark hover:text-red transition-colors uppercase tracking-wide"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
