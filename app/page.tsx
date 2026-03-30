import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#172554] flex flex-col font-sans selection:bg-[#d4af37] selection:text-white">
      {/* Floating Action Button */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-end">
          <Link
            href="/support"
            className="px-10 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#172554] transition-all duration-500 font-bold uppercase tracking-widest text-xs"
          >
            Get in touch
          </Link>

        </div>
      </div>


      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden animate-hero-gradient">
        {/* Ambient Overlay Layer */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-12">
          <div className="flex flex-col items-center space-y-10 animate-fade-in-up">
            
            {/* Portrait Frame */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-[8px] border-white/20 overflow-hidden shadow-2xl ring-2 ring-[#d4af37]/40 ring-offset-4 ring-offset-[#172554]/20">
                <Image
                  src="/logo_two.png"
                  alt="Mike Mbuvi Sonko"
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
              </div>

              {/* Decorative Gold Rim */}
              <div className="absolute inset-0 rounded-full border border-white/30 pointer-events-none scale-105" />
            </div>

            {/* Identity Statement */}
            <div className="space-y-4 px-4 w-full max-w-lg md:max-w-none">
              <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none italic drop-shadow-2xl break-words">
                Mike Mbuvi <span className="text-gradient brightness-150">Sonko</span>
              </h1>
              

            </div>


          </div>
        </div>


      </section>


      {/* Story Sections - Chronological Zigzag */}
      <section id="about" className="py-24 px-6 bg-white shrink-0">
        <div className="max-w-7xl mx-auto space-y-48">

          {/* Chapter 1: The Foundation */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/family.png" alt="The Foundation" fill className="object-cover object-top" />
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
            <div className="order-1 md:order-2 relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/education.png" alt="Academic Pursuits" fill className="object-cover object-top" />
            </div>

          </div>

          {/* Chapter 3: The Breakthrough */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader.png" alt="Political Breakthrough" fill className="object-cover object-top" />
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
            <div className="order-1 md:order-2 relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader_three.png" alt="Vision and Inspiration" fill className="object-cover object-top" />
            </div>

          </div>

          {/* Chapter 5: Philanthropic Legacy */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader_five.png" alt="Rescue Team Impact" fill className="object-cover object-top" />
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
            <div className="order-1 md:order-2 relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/with_raila.png" alt="With Raila Odinga" fill className="object-cover object-top" />
            </div>

          </div>

          {/* Chapter 7: Strategic Partnerships */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/colleague.png" alt="Strategic Partnerships" fill className="object-cover object-top" />
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
            <div className="order-1 md:order-2 relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/with_uhuru.png" alt="With Uhuru Kenyatta" fill className="object-cover object-top" />
            </div>

          </div>

          {/* Chapter 9: Modern Statesmanship */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/leader_two.png" alt="Modern Statesmanship" fill className="object-cover object-top" />
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
            <div className="order-1 md:order-2 relative aspect-[4/5] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/friends.png" alt="The Ongoing Journey" fill className="object-cover object-top" />
            </div>

          </div>

        </div>
      </section>

      {/* Political Movement Section - Premium Redesign */}
      <section className="py-40 px-6 bg-gray-50/30 overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            {/* Left: Content & CTA */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-12 animate-fade-in-up">
              <div className="space-y-6">
                <span className="text-[#d4af37] uppercase tracking-[0.5em] text-[10px] font-black block">The Political Revolution</span>
                <h2 className="text-5xl md:text-7xl font-black text-[#172554] uppercase tracking-tighter italic leading-[0.9]">
                  Join the <span className="text-gradient">Movement</span>
                </h2>
                <div className="h-1 w-24 bg-[#d4af37]/40 rounded-full" />
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-[#172554] uppercase leading-tight">National Economic Development Party</h3>
                  <p className="text-[#172554]/60 font-medium italic">"Uchumi na Mwananchi"</p>
                </div>
                
                <p className="text-lg text-[#172554]/80 leading-relaxed font-medium">
                  NEDP stands as the ultimate catalyst for Kenyan prosperity. We are building a future where economic liberation is not a dream, but a standard for every citizen.
                </p>

                <div className="pt-6">
                  <Link
                    href="https://nedp.co.ke/"
                    target="_blank"
                    className="inline-flex items-center px-12 py-5 bg-[#172554] text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl hover:scale-105 hover:bg-[#d4af37] transition-all duration-500 group"
                  >
                    <span>Register to Join</span>
                    <svg className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Integrated Image Collage */}
            <div className="lg:col-span-12 xl:col-span-7 relative">
              <div className="relative z-10 grid grid-cols-12 gap-4 items-end animate-fade-in-up delay-200">
                
                {/* Background Large Asset */}
                <div className="col-span-12 md:col-span-11 relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/party.png" 
                    alt="NEDP Leadership" 
                    fill 
                    className="object-cover transition-transform duration-[2s] hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Overlapping Floating Asset */}
                <div className="col-span-8 md:col-span-6 -mt-32 md:-mt-48 ml-auto relative aspect-square rounded-[32px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white z-20 transform translate-x-4 md:translate-x-12 translate-y-8 md:translate-y-12">
                  <Image 
                    src="/party_two.png" 
                    alt="Join NEDP" 
                    fill 
                    className="object-cover object-top transition-transform duration-[2s] hover:scale-110" 
                  />
                  {/* Subtle glass effect label */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass-nav rounded-2xl border border-white/20 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#172554]">Official Member Enrollment</p>
                  </div>
                </div>

                {/* Decorative Gold Elements */}
                <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-[#d4af37]/10 blur-[100px] rounded-full" />
                <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-[#172554]/10 blur-[100px] rounded-full" />
              </div>
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

      {/* Luxury Coachline - Rolls-Royce Style */}
      <div className="w-full flex justify-center py-4 bg-white">
        <div className="w-full max-w-7xl h-0.5 bg-[#d4af37] opacity-60 rounded-full mx-6 shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
      </div>

      {/* Footer */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-[10px] uppercase font-bold tracking-[0.5em] opacity-30">&copy; {new Date().getFullYear()} Mike Sonko.</p>
            <p className="text-xs font-black uppercase tracking-widest text-[#d4af37]">Power to the People</p>
          </div>

          {/* Social Handles */}
          <div className="flex items-center gap-8">
            <Link href="https://web.facebook.com/MikeSonkoTV" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 fill-[#172554]" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </Link>
            <Link href="https://x.com/MikeSonko" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 fill-[#172554]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </Link>
            <Link href="https://www.tiktok.com/@mike.sonko.tv" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 fill-[#172554]" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.84.2-.76.38-1.4 1.05-1.69 1.83-.45.89-.37 2.09.2 2.91.64.91 1.82 1.39 2.92 1.27 1.25-.13 2.37-.96 2.82-2.13.14-.38.21-.78.21-1.18V.02z" /></svg>
            </Link>
            <Link href="https://www.youtube.com/@mikesonkoofficial" target="_blank" className="opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 fill-[#172554]" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
