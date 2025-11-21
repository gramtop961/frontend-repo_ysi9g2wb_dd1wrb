import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s connect</h2>
              <p className="text-slate-300/90 mt-2">Open to internships, projects, and collaborations.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:your@email" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900">
                <Mail size={18}/> Email
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10">
                <Linkedin size={18}/> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10">
                <Github size={18}/> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
