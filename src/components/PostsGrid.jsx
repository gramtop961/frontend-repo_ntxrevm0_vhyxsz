import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function PostCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: 0.04 * index }}
      className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 hover:shadow-xl hover:shadow-fuchsia-500/10 transition"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur border border-black/10 dark:border-white/10">
          <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
          {post.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug line-clamp-2">{post.title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-neutral-500">By {post.author} • {post.read} min read</div>
          <a href="#" className="inline-flex items-center gap-1 text-sm group/btn">
            Read
            <ArrowRight className="w-4 h-4 transition -translate-x-1 group-hover/btn:translate-x-0" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function PostsGrid({ posts = [] }) {
  return (
    <section id="posts" className="mt-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured posts</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm">Curated picks for your inspiration</p>
        </div>
        <a href="#" className="text-sm px-3 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">View all</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
