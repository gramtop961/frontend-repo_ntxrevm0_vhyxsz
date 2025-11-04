import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import PostsGrid from './components/PostsGrid';
import Footer from './components/Footer';

const samplePosts = [
  {
    id: '1',
    title: 'Designing with motion: elevate your storytelling',
    excerpt: 'Learn how micro-interactions and cinematic motion can guide attention and create delight without overwhelming the reader.',
    image:
      'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop',
    category: 'Design',
    author: 'Ava Stone',
    read: 6,
  },
  {
    id: '2',
    title: 'From idea to publish: a creator’s toolkit',
    excerpt: 'The essential stack for writing, visuals, and distribution—streamlined for modern indie publishers.',
    image:
      'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1400&auto=format&fit=crop',
    category: 'Guides',
    author: 'Liam Pratt',
    read: 8,
  },
  {
    id: '3',
    title: 'Color systems that scale across themes',
    excerpt: 'Build accessible, expressive palettes that work across light and dark, and remain consistent over time.',
    image:
      'https://images.unsplash.com/photo-1551861568-c0afa6650c0d?q=80&w=1400&auto=format&fit=crop',
    category: 'UI',
    author: 'Noah Ellis',
    read: 5,
  },
  {
    id: '4',
    title: 'The art of meaningful typography on the web',
    excerpt: 'A practical guide to hierarchy, rhythm, and personality in type—without sacrificing readability.',
    image:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop',
    category: 'Typography',
    author: 'Mia Park',
    read: 7,
  },
  {
    id: '5',
    title: 'Writing evergreen content that compounds',
    excerpt: 'Tactics for choosing topics, structuring posts, and updating over time to build durable traffic.',
    image:
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1400&auto=format&fit=crop',
    category: 'Strategy',
    author: 'Ethan Reed',
    read: 9,
  },
  {
    id: '6',
    title: 'Photography for bloggers: tell deeper stories',
    excerpt: 'Composition, light, and post-processing tips for images that carry the narrative forward.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    category: 'Visuals',
    author: 'Isla Rivera',
    read: 4,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Hero3D />
        <PostsGrid posts={samplePosts} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
