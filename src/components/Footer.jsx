import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Let’s improve quality together</h3>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-lg">
            Share your goals and constraints. You’ll receive a clear, actionable plan within 48 hours.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" /><a href="mailto:hello@primequality.co" className="hover:underline">hello@primequality.co</a></li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" /><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /><span>Global • Remote-first</span></li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6">
          <form className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" required className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium mb-1">Company</label>
              <input type="text" className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Acme Inc." />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" required className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">What are you trying to achieve?</label>
              <textarea rows={4} className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Briefly describe your project" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-neutral-500">I typically reply within 1 business day.</p>
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
                Send inquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} PrimeQuality Consulting. All rights reserved.</div>
    </footer>
  );
}
