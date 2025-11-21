export default function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold">B.Tech — Computer Science (AI & DS)</h3>
            <p className="text-slate-300/90 mt-1">Your University Name • 2022 — Present</p>
            <ul className="mt-4 text-slate-300/90 text-sm space-y-1.5">
              <li>• Specialized in AI, data science, and software engineering</li>
              <li>• Coursework: ML, DL, DSA, Algorithms, DBMS, OS, CN</li>
              <li>• Clubs: Programming Club, AI/ML Society</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold">Certifications & Highlights</h3>
            <ul className="mt-4 text-slate-300/90 text-sm space-y-1.5">
              <li>• AWS / GCP Fundamentals</li>
              <li>• Kaggle projects and mini-competitions</li>
              <li>• Hackathons and open-source contributions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
