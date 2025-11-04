import { ShieldCheck, TrendingUp, Workflow } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Quality Audits & Compliance',
    desc: 'End-to-end audits aligned with ISO 9001/27001 and industry best practices for fintech and digital products.',
    points: ['Gap analysis', 'Risk controls', 'Remediation roadmap'],
  },
  {
    icon: Workflow,
    title: 'Process Design & Automation',
    desc: 'Streamline delivery with lean, scalable workflows that cut defects and cycle time without adding overhead.',
    points: ['SOPs & playbooks', 'QA automation', 'CI/CD quality gates'],
  },
  {
    icon: TrendingUp,
    title: 'Performance & Reliability',
    desc: 'Build systems that scale gracefully with proactive monitoring and resilient engineering practices.',
    points: ['SLOs & SLAs', 'Observability', 'Incident playbooks'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Services tailored to your stage</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Whether you need a fast compliance pass or a long-term partner, engagements are designed to deliver measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <div key={title} className="group relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/10 via-sky-400/10 to-emerald-400/10" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
