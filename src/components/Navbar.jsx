import { useEffect, useState } from 'react';
import { Menu, Search, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="font-semibold tracking-tight text-xl">
              <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">Vibe</span>
              <span className="text-neutral-900 dark:text-white">Blog</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-fuchsia-500 transition" href="#">Home</a>
            <a className="hover:text-fuchsia-500 transition" href="#">Topics</a>
            <a className="hover:text-fuchsia-500 transition" href="#">Guides</a>
            <a className="hover:text-fuchsia-500 transition" href="#">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-black/5 dark:bg-white/5 focus-within:ring-2 ring-fuchsia-400/60 transition">
              <Search className="w-4 h-4 opacity-60" />
              <input
                type="text"
                placeholder="Search articles"
                className="bg-transparent outline-none text-sm placeholder:text-neutral-500 w-40"
              />
            </div>
            <button
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 text-sm">
              <a className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">Home</a>
              <a className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">Topics</a>
              <a className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">Guides</a>
              <a className="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" href="#">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
