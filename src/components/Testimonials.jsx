import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'VP Engineering, FinBank',
    quote:
      'We passed our audit on the first attempt and reduced incident volume by 38% within a quarter. A partner who delivers measurable results.',
  },
  {
    name: 'Marcus Lee',
    role: 'COO, NovaPay',
    quote:
      'Our team finally has clear, lean processes. Releases are smoother and customer trust is up—this engagement paid for itself fast.',
  },
  {
    name: 'Sara Patel',
    role: 'Head of Product, Lumen Digital',
    quote:
      'From roadmap to rollout, we gained clarity and confidence. The quality playbooks are now part of how we build.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Results clients talk about</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Real impact from real teams operating at scale.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-neutral-800 dark:text-neutral-200">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
