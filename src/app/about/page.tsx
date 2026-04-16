import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — CONFERENCE BG",
  description: "Learn more about Conference BG — professional technical support for conferences and congress events.",
};

const sidebar = [
  { name: "SOUND SYSTEM", href: "/services/sound-system" },
  { name: "SIMULTANEOUS TRANSLATION", href: "/services/simultaneous-translation" },
  { name: "MULTIMEDIA", href: "/services/multimedia" },
  { name: "DESIGN & LIGHTING", href: "/services/design-and-lighting" },
  { name: "TOUR GUIDE SYSTEM", href: "/services/tour-guide-system" },
  { name: "RECORDING & STREAMING", href: "/services/recording-and-streaming" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner — dark with background image, left-aligned title */}
      <section className="relative overflow-hidden">
        <Image
          src="/header8.jpg"
          alt="About Us"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase">ABOUT US</h1>
        </div>
      </section>

      {/* Content: main text + sidebar */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Main content */}
            <div className="lg:flex-1">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
                Professional technical support is an{" "}
                <strong className="text-red font-bold">integral</strong> and very important
                part of every event. At{" "}
                <strong className="text-red font-bold">Konferencia.bg</strong> we provide
                everything needed for the smooth running of your conferences,
                congresses, working meetings, symposiums and more.
              </p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8">
                We have{" "}
                <strong className="text-red font-bold">professional</strong> equipment
                for events of various types and scales. Our team has years of experience and will
                make sure to meet{" "}
                <strong className="text-red font-bold">all your requirements</strong>.
              </p>

              <div className="relative w-full aspect-[46/15] shadow-[0_0_7px_0_rgba(0,0,0,0.75)] overflow-hidden">
                <Image
                  src="/about-img.jpg"
                  alt="Conference BG"
                  fill
                  className="object-cover"
                />
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
