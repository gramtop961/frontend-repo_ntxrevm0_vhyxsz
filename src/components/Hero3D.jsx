import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative">
      <div className="h-[420px] w-full rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20">
        <Spline
          scene="https://prod.spline.design/8s3Wv6WZ6Xo7qvQy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 dark:from-neutral-950/60 dark:via-neutral-950/20 dark:to-neutral-950/80" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-white/10 backdrop-blur border border-black/10 dark:border-white/10 mb-4">
              New • Handcrafted stories weekly
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Stories that move
              <br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">ideas forward</span>
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
              A modern, animated blogging theme with immersive visuals and buttery-smooth motion. Built for creators who care about craft.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#posts" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
                Explore posts
              </a>
              <a href="#subscribe" className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur border border-black/10 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/15 transition">
                Subscribe
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
