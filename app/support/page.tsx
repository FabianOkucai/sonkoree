import Link from "next/link";

export default function Support() {
    return (
        <div className="min-h-screen bg-white text-[#172554] flex flex-col font-sans selection:bg-[#d4af37] selection:text-white">
            {/* Navigation */}
            <nav className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
                    <Link href="/" className="px-6 py-2 rounded-full border border-[#172554] text-[#172554] hover:bg-[#172554] hover:text-white transition-all duration-300 font-bold uppercase tracking-wider text-sm">
                        Back Home
                    </Link>
                </div>
            </nav>

            <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
                <h1 className="text-6xl md:text-8xl font-black font-serif uppercase mb-8 leading-none">
                    Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#172554]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    The movement is built on the voices of the people. Whether you have a question, a suggestion, or want to join the team, we are here to listen.
                </p>

                <form className="w-full max-w-xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-medium"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-medium"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-medium"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={6}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-medium"
                    ></textarea>
                    <button className="w-full py-5 bg-[#172554] text-white font-black uppercase tracking-widest text-sm rounded-xl shadow-xl hover:scale-[1.02] transition-all">
                        Send Message
                    </button>
                </form>
            </main>

            <footer className="bg-white py-12 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-[#172554] text-sm uppercase font-black tracking-[0.2em] font-serif">
                        Power to the People
                    </p>
                </div>
            </footer>
        </div>
    );
}
