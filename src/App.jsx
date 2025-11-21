import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

function About(){
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300/90">
              I'm a 3rd year Computer Science student specializing in AI and Data Science. I enjoy solving problems with code, exploring machine learning, and crafting clean, modern web apps.
            </p>
            <p className="mt-3 text-slate-300/90">
              Outside academics, I build side projects, contribute to open source, and share what I learn.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold mb-3">What I’m focusing on</h3>
            <ul className="text-slate-300/90 space-y-2 text-sm">
              <li>• Deepening ML and DL fundamentals</li>
              <li>• Building full-stack projects with React and FastAPI</li>
              <li>• Clean code, testing, and deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <a href="#home" className="text-blue-300 hover:text-white text-sm">Back to top</a>
      </div>
    </footer>
  )
}

export default App
