import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} VibeBlog — Crafted for storytellers.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
