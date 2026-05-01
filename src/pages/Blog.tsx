import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <Layout>
      <SEO title="Blog — Jobgraph" description="Latest thinking from Jobgraph on the future of work, AI, productivity and workforce transformation." />
      <section className="pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Blog</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-16 leading-[1.1]">Latest thinking</h1>
          </FadeIn>

          {/* Featured post */}
          <FadeIn delay={0.1}>
            <Link to={`/blog/${featured.slug}`} className="block group mb-16">
              <article className="cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                    <img src={featured.image} alt={featured.title} width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">{featured.category}</span>
                      <span className="text-xs text-muted-foreground">{featured.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  </div>
                </div>
              </article>
            </Link>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <article className="cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
