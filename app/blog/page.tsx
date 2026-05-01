"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const CATEGORIES = ["Todo", "Psicología", "Bienestar", "Nutrición", "Coaching", "Mindfulness"];

const POSTS = [
  {
    id: "b1",
    category: "Psicología",
    tag: "Destacado",
    title: "¿Por qué sientes ansiedad aunque todo esté \"bien\"?",
    excerpt: "La ansiedad no siempre llega en momentos de crisis. A veces aparece justo cuando todo parece estar en orden. Entender por qué es el primer paso para transformarla.",
    author: "Dra. Amalia López",
    authorRole: "Psicóloga Clínica",
    date: "28 abr 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?w=800&h=500&fit=crop",
    color: "#5A634F",
    emoji: "🧠",
    featured: true,
  },
  {
    id: "b2",
    category: "Coaching",
    tag: "Coaching",
    title: "El poder de decir no: límites que liberan",
    excerpt: "Aprender a decir no no es egoísmo, es respeto propio. En este artículo exploramos por qué nos cuesta tanto y cómo establecer límites sin culpa.",
    author: "Valentina Torres",
    authorRole: "Life Coach",
    date: "21 abr 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    color: "#8B9970",
    emoji: "🎯",
    featured: false,
  },
  {
    id: "b3",
    category: "Nutrición",
    tag: "Nutrición",
    title: "Comer con culpa: cómo romper el ciclo",
    excerpt: "¿Terminas de comer y sientes culpa? No estás sola. La relación emocional con la comida es más común de lo que crees, y tiene solución.",
    author: "Lic. Andrea Ruiz",
    authorRole: "Nutricionista",
    date: "14 abr 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    color: "#AB6139",
    emoji: "🌿",
    featured: false,
  },
  {
    id: "b4",
    category: "Mindfulness",
    tag: "Mindfulness",
    title: "5 minutos de presencia al día que cambian todo",
    excerpt: "La meditación no requiere horas ni silencio total. Aquí te enseñamos una práctica sencilla de 5 minutos que puedes empezar hoy.",
    author: "Camila Ríos",
    authorRole: "Instructora de Mindfulness",
    date: "7 abr 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
    color: "#4A7070",
    emoji: "🌙",
    featured: false,
  },
  {
    id: "b5",
    category: "Psicología",
    tag: "Psicología",
    title: "Cuando el duelo no tiene nombre: pérdidas no reconocidas",
    excerpt: "No todo duelo es por una muerte. Perder un trabajo, una amistad, una etapa de vida… también duele. Y merece ser atendido.",
    author: "Dr. Rodrigo Silva",
    authorRole: "Psicoterapeuta",
    date: "1 abr 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&h=500&fit=crop",
    color: "#5A634F",
    emoji: "💙",
    featured: false,
  },
  {
    id: "b6",
    category: "Bienestar",
    tag: "Bienestar",
    title: "Burnout vs. estrés: ¿sabes cuál estás viviendo?",
    excerpt: "Ambos se sienten agotadores, pero tienen diferencias clave. Identificar cuál es el tuyo es esencial para saber qué tipo de apoyo buscar.",
    author: "Carlos Mendoza",
    authorRole: "Coach Ejecutivo",
    date: "25 mar 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&h=500&fit=crop",
    color: "#64C1C4",
    emoji: "⚡",
    featured: false,
  },
];

function FeaturedPost({ post }: { post: typeof POSTS[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer mb-10"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)", minHeight: "480px" }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-12 min-h-[480px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E3812F] text-white">{post.tag}</span>
          <span className="text-white/60 text-xs">{post.readTime} de lectura</span>
          <span className="text-white/60 text-xs">{post.date}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl">{post.title}</h2>
        <p className="text-white/70 text-base leading-relaxed mb-6 max-w-xl">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: post.color }}>
              {post.author.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <p className="text-white/50 text-xs">{post.authorRole}</p>
            </div>
          </div>
          <motion.button
            className="flex items-center gap-2 bg-white text-[#262525] font-bold px-5 py-2.5 rounded-xl text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Leer artículo →
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

function PostCard({ post, index }: { post: typeof POSTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#EDE7E1] cursor-pointer"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.09)" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }} />
        <div className="absolute top-4 left-4">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: post.color, color: "#fff" }}>
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 text-2xl">{post.emoji}</div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 mb-3 text-xs text-[#9a9a9a]">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} de lectura</span>
        </div>
        <h3 className="font-bold text-[#262525] text-base leading-snug mb-2 group-hover:text-[#5A634F] transition-colors">{post.title}</h3>
        <p className="text-[#6b6b6b] text-sm leading-relaxed flex-1 line-clamp-3 mb-4">{post.excerpt}</p>

        <div className="flex items-center gap-2 pt-3 border-t border-[#F0EAE3]">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
            style={{ background: post.color }}>
            {post.author.split(" ").map(w => w[0]).slice(0, 2).join("")}
          </div>
          <div className="min-w-0">
            <p className="text-[#262525] text-xs font-semibold truncate">{post.author}</p>
            <p className="text-[#9a9a9a] text-[11px] truncate">{post.authorRole}</p>
          </div>
          <span className="ml-auto text-[#5A634F] text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const featuredPost = POSTS[0];
  const otherPosts = POSTS.slice(1);

  const filtered = activeCategory === "Todo" ? otherPosts : otherPosts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* Header */}
      <section className="pt-20 pb-12" style={{ background: "#FDFBF8" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">Artículos & Recursos</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#262525] leading-tight">
                El Blog de Insside
              </h1>
              <p className="text-[#6b6b6b] text-sm max-w-sm">
                Reflexiones, herramientas y perspectivas de nuestros especialistas para tu camino de bienestar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-16">
        {/* Featured */}
        <FeaturedPost post={featuredPost} />

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-[#5A634F] text-white border-[#5A634F]"
                  : "bg-white text-[#6b6b6b] border-[#EDE7E1] hover:border-[#B5BC8F]/50"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-20 rounded-3xl p-10 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #EDE7E1 0%, #D9E5DB 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-2xl font-bold text-[#262525] mb-3">Recibe el blog en tu correo</h2>
            <p className="text-[#6b6b6b] text-sm mb-6">
              Artículos de nuestros especialistas, recursos exclusivos y noticias de Insside. Sin spam, lo prometemos.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 border border-[#D9E5DB] bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20"
              />
              <motion.button
                type="submit"
                className="bg-[#5A634F] text-white font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Suscribirme →
              </motion.button>
            </form>
            <p className="text-[#9a9a9a] text-xs mt-3">Al suscribirte aceptas nuestra Política de Privacidad.</p>
          </div>
        </motion.div>
      </div>

      <MarketingFooter />
    </div>
  );
}
