import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast, non-blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80 mb-4">CSE (AI & DS) • 3rd Year</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400">Your Name</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90">
            An aspiring software engineer passionate about AI, data science and building delightful, user-focused products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
