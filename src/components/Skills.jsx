import { Cpu, Code2, Database, Brain, Sparkles, Terminal } from 'lucide-react'

const skills = [
  { icon: Cpu, title: 'CS Foundations', items: ['DSA', 'OOP', 'OS', 'DBMS', 'CN'] },
  { icon: Brain, title: 'AI & DS', items: ['ML', 'DL (PyTorch)', 'NLP', 'Data Viz'] },
  { icon: Database, title: 'Data & Cloud', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Docker'] },
  { icon: Code2, title: 'Web Dev', items: ['React', 'FastAPI', 'Node', 'Tailwind'] },
  { icon: Terminal, title: 'Tools', items: ['Git/GitHub', 'Linux', 'CI/CD', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.1),transparent)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <span className="text-blue-300/70 text-sm hidden md:block">Always learning <Sparkles className="inline w-4 h-4"/></span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({icon:Icon, title, items}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-blue-300">
                  <Icon size={20}/>
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="text-slate-300/90 space-y-1.5 text-sm">
                {items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
