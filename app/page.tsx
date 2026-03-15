import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#172554] flex flex-col font-sans selection:bg-[#d4af37] selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-end">
          <Link
            href="/support"
            className="px-10 py-3 rounded-full border-2 border-[#172554] text-[#172554] hover:bg-[#172554] hover:text-white transition-all duration-500 font-bold uppercase tracking-widest text-xs"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
        {/* Ambient luxury lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1200px] mt-12">
          {/* Arched Triptych Gallery - Uniform, Symmetrical, Responsive */}
          <div className="relative z-10 flex flex-nowrap items-center justify-center gap-4 md:gap-10 w-full px-6 overflow-hidden">
            
            {/* Left Arch */}
            <div className="relative flex-shrink min-w-0">
              <div className="relative w-[28vw] max-w-[320px] aspect-[2/3] rounded-t-[160px] rounded-b-2xl overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white backdrop-blur-sm">
                <Image
                  src="/leader_three.png"
                  alt="Visionary Leadership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Arch */}
            <div className="relative z-20 flex-shrink min-w-0">
              <div className="relative w-[28vw] max-w-[320px] aspect-[2/3] rounded-t-[160px] rounded-b-2xl overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white backdrop-blur-sm">
                <Image
                  src="/logo_two.png"
                  alt="Mike Sonko"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Arch */}
            <div className="relative flex-shrink min-w-0">
              <div className="relative w-[28vw] max-w-[320px] aspect-[2/3] rounded-t-[160px] rounded-b-2xl overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white backdrop-blur-sm">
                <Image
                  src="/leader_four.png"
                  alt="Visionary Leadership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* Elegant gold accent behind the images */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-[#d4af37]/5 blur-[120px] rounded-full" />
        </div>

        {/* Minimal Scroll Detail */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
          <div className="w-px h-12 bg-gradient-to-b from-[#172554] to-transparent" />
        </div>
      </section>

      {/* Story Sections - Chronological Zigzag */}
      <section id="about" className="py-24 px-6 bg-white shrink-0">
        <div className="max-w-7xl mx-auto space-y-48">
          
          {/* Chapter 1: The Foundation */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/family.png" alt="The Foundation" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Roots</span>
                <span className="text-[#172554]">Mike Sonko's path began with a </span>
                <span className="text-[#d4af37]">deep-seated commitment</span>
                <span className="text-[#172554]"> to community. His early life in the coastal region forged a </span>
                <span className="text-[#d4af37]">unbreakable bond</span>
                <span className="text-[#172554]"> with the common citizen.</span>
              </p>
            </div>
          </div>

          {/* Chapter 2: Academic Pursuits */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-6 text-right">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Intellect</span>
                <span className="text-[#172554]">Fueling his leadership with </span>
                <span className="text-[#d4af37]">academic precision</span>
                <span className="text-[#172554]">, he pursued business and governance. This </span>
                <span className="text-[#d4af37]">strategic mindset</span>
                <span className="text-[#172554]"> became the blueprint for his future administrative successes.</span>
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/education.png" alt="Academic Pursuits" fill className="object-cover" />
            </div>
          </div>

          {/* Chapter 3: The Breakthrough */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader.png" alt="Political Breakthrough" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Emergence</span>
                <span className="text-[#172554]">Bursting onto the stage as a </span>
                <span className="text-[#d4af37]">titan for the people</span>
                <span className="text-[#172554]">. He dismantled barriers, proving that leadership belongs to those who </span>
                <span className="text-[#d4af37]">listen and act</span>
                <span className="text-[#172554]"> without fear.</span>
              </p>
            </div>
          </div>

          {/* Chapter 4: Vision & Inspiration */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-6 text-right">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Vision</span>
                <span className="text-[#172554]">Inspired by </span>
                <span className="text-[#d4af37]">global excellence</span>
                <span className="text-[#172554]">, he envisioned a modern Nairobi. His drive brought </span>
                <span className="text-[#d4af37]">world-class innovation</span>
                <span className="text-[#172554]"> to the streets where it was needed the most.</span>
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader_three.png" alt="Vision and Inspiration" fill className="object-cover" />
            </div>
          </div>

          {/* Chapter 5: Philanthropic Legacy */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader_five.png" alt="Rescue Team Impact" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Rescue</span>
                <span className="text-[#172554]">The </span>
                <span className="text-[#d4af37]">Sonko Rescue Team</span>
                <span className="text-[#172554]"> redefined humanity in governance. They became the </span>
                <span className="text-[#d4af37]">beating heart</span>
                <span className="text-[#172554]"> of Nairobi's emergency response and community welfare.</span>
              </p>
            </div>
          </div>

          {/* Chapter 6: Professional Synergy */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-6 text-right">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Synergy</span>
                <span className="text-[#172554]">Building </span>
                <span className="text-[#d4af37]">strategic bridges</span>
                <span className="text-[#172554]"> with icons like Raila Odinga. He proved that </span>
                <span className="text-[#d4af37]">national unity</span>
                <span className="text-[#172554]"> is the ultimate catalyst for a prosperous and stable Kenya.</span>
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/with_raila.png" alt="With Raila Odinga" fill className="object-cover" />
            </div>
          </div>

          {/* Chapter 7: Strategic Partnerships */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/colleague.png" alt="Strategic Partnerships" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Alliance</span>
                <span className="text-[#172554]">He believed in the </span>
                <span className="text-[#d4af37]">power of experts</span>
                <span className="text-[#172554]">. By aligning with top-tier professionals, he ensured his </span>
                <span className="text-[#d4af37]">bold agenda</span>
                <span className="text-[#172554]"> was executed with unparalleled precision.</span>
              </p>
            </div>
          </div>

          {/* Chapter 8: Urban Transformation */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-6 text-right">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Change</span>
                <span className="text-[#172554]">With President Uhuru Kenyatta, he sparked an </span>
                <span className="text-[#d4af37]">urban revolution</span>
                <span className="text-[#172554]">. Nairobi's skyline and infrastructure underwent a </span>
                <span className="text-[#d4af37]">historic modernization</span>
                <span className="text-[#172554]"> under their combined focus.</span>
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/with_uhuru.png" alt="With Uhuru Kenyatta" fill className="object-cover" />
            </div>
          </div>

          {/* Chapter 9: Modern Statesmanship */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader_two.png" alt="Modern Statesmanship" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Resolve</span>
                <span className="text-[#172554]">A leader </span>
                <span className="text-[#d4af37]">refined by fire</span>
                <span className="text-[#172554]">. His commitment to the rule of law and </span>
                <span className="text-[#d4af37]">equitable progress</span>
                <span className="text-[#172554]"> defines his current era of modern statesmanship.</span>
              </p>
            </div>
          </div>

          {/* Chapter 10: The Ongoing Journey */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-6 text-right">
              <p className="text-2xl leading-tight font-medium">
                <span className="text-[#d4af37] block mb-2 uppercase tracking-widest text-xs font-black">The Mission</span>
                <span className="text-[#172554]">The story </span>
                <span className="text-[#d4af37]">continues to unfold</span>
                <span className="text-[#172554]">. With renewed vigor and a </span>
                <span className="text-[#d4af37]">people-first heart</span>
                <span className="text-[#172554]">, Mike Sonko moves forward into Kenya's bright future.</span>
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/friends.png" alt="The Ongoing Journey" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="py-60 px-6 bg-white border-t border-gray-50 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl">
          <span className="text-8xl md:text-9xl font-serif text-[#d4af37] opacity-20 leading-none">"</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#172554] uppercase tracking-tighter leading-tight mt-[-2rem] mb-8">
            Leadership is not about the position you hold, but about the <span className="text-gradient">lives you change.</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#d4af37]" />
            <span className="text-xs uppercase font-black tracking-[0.5em] text-[#172554]/40">Mike Mbuvi Sonko</span>
            <div className="h-px w-12 bg-[#d4af37]" />
          </div>
        </div>
      </section>

      {/* Creative Section: The Sonko Mural */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Background Branding */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-[#172554]/[0.02] tracking-tighter whitespace-nowrap select-none">
            SONKOREEEE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
            {/* Mural Card 1 */}
            <div className="md:col-span-8 bg-[#172554] rounded-[3rem] p-12 text-white overflow-hidden relative group h-[500px]">
              <div className="absolute inset-0 opacity-40">
                <Image src="/leader_four.png" alt="Leadership" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <p className="text-[#d4af37] font-black uppercase tracking-widest text-xs mb-4">Core Philosophy</p>
                <h3 className="text-5xl font-black uppercase tracking-tighter leading-none max-w-md">Driven By<br />The People's<br />Pulse</h3>
              </div>
            </div>

            {/* Mural Card 2 */}
            <div className="md:col-span-4 bg-[#d4af37] rounded-[3rem] p-12 text-white flex flex-col justify-between group h-[500px]">
              <div className="w-16 h-1 w-full bg-white/20" />
              <div className="space-y-6">
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-[0.8]">The<br />Rescue<br />Spirit</h3>
                <p className="text-sm font-medium opacity-80 leading-relaxed italic">"When systems fail, humanity must prevail. We are the bridge to service."</p>
              </div>
            </div>

            {/* Mural Card 3 */}
            <div className="md:col-span-4 border-2 border-[#172554]/5 rounded-[3rem] p-8 flex items-center justify-center bg-gray-50/50 h-[300px]">
               <div className="text-center">
                  <span className="block text-6xl font-black text-[#172554]">100%</span>
                  <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#d4af37]">Commitment to Action</p>
               </div>
            </div>

            {/* Mural Card 4 */}
            <div className="md:col-span-8 bg-white border border-gray-100 rounded-[3rem] overflow-hidden relative group h-[300px]">
              <Image src="/leader_two.png" alt="Strategic Vision" fill className="object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center p-12">
                <h3 className="text-4xl font-black text-[#172554] uppercase tracking-tighter">Strategic<br />Integrity</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-50">&copy; {new Date().getFullYear()} Mike Sonko.</p>
          <p className="text-xs font-black uppercase tracking-widest text-[#d4af37]">Power to the People</p>
        </div>
      </footer>
    </div>
  );
}
