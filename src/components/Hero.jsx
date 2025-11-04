import Spline from '@splinetool/react-spline';
import { ArrowRight, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 lg:pt-24 lg:pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-xs text-neutral-600 dark:text-neutral-300 mb-4">
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />
            ISO, Six Sigma & Operational Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
            Elevate Quality. Reduce Risk. Accelerate Growth.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            I help fintech and digital teams build reliable, compliant, and efficient systems. From audits to implementation, we turn quality into a competitive edge.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 dark:border-white/15 text-neutral-800 dark:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5 transition">
              Explore services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              { label: 'Avg. ROI', value: '4.2x' },
              { label: 'Audit Pass Rate', value: '98.7%' },
              { label: 'Projects Delivered', value: '120+' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950 opacity-70" />
        </div>
      </div>

      <div className="pointer-events-none absolute -z-0 inset-x-0 top-[-10%] h-[40rem] bg-gradient-to-b from-indigo-100 via-sky-50 to-transparent dark:from-indigo-950/40 dark:via-sky-950/20 blur-3xl" />
    </section>
  );
}
