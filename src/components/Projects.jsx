import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI Study Assistant',
    description: 'Context-aware Q&A with semantic search and RAG over course notes.',
    tags: ['FastAPI', 'React', 'Pinecone', 'OpenAI'],
    link: '#',
    source: '#'
  },
  {
    title: 'Vision-Based Attendance',
    description: 'Face recognition pipeline with real-time detection and analytics.',
    tags: ['Python', 'PyTorch', 'OpenCV'],
    link: '#',
    source: '#'
  },
  {
    title: 'Portfolio v2',
    description: 'This website — designed with an interactive 3D hero and smooth sections.',
    tags: ['React', 'Tailwind', 'Spline'],
    link: '#',
    source: '#'
  }
]

function Tag({ children }) {
  return <span className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-blue-200">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(168,85,247,0.08),transparent)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-slate-300/90 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-blue-300 hover:text-white">
                    <ExternalLink size={16}/> Live
                  </a>
                  <a href={p.source} className="inline-flex items-center gap-1 text-blue-300 hover:text-white">
                    <Github size={16}/> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
