import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import { blogPosts as allBlogPosts } from "@/data/blogPosts";

const blogPosts = allBlogPosts.slice(0, 4);

const stats = [
  { value: "50+", label: "Research partners" },
  { value: "12", label: "Countries" },
  { value: "3M+", label: "Data points" },
];

const Index = () => (
  <Layout>
    <SEO title="Jobgraph — Making work better" description="Jobgraph is building the future of work platform — research-driven technology helping organisations and individuals transform how they work." />
    {/* Hero */}
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now accepting early access partners
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold text-foreground leading-[1.05] tracking-tight mb-8 max-w-5xl">
            Making work{" "}
            <span className="text-gradient">better.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-light">
            We help organizations and individuals transform for the future.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5 group"
            >
              Get early access
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full border-2 border-border text-foreground hover:bg-secondary transition-all duration-200"
            >
              Learn more
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-20">
            <a href="#mission" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronDown size={16} className="animate-bounce" />
              Discover more
            </a>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Stats */}
    <section className="py-6 px-6 lg:px-10 border-y">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1}>
            <div className="text-center md:text-left px-6">
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    {/* Mission */}
    <section id="mission" className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] max-w-4xl">
            We aim to bring about a future of work that advances{" "}
            <span className="text-gradient">society</span> for the better.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Research Section */}
    <section className="py-24 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Research</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Insights & analysis</h2>
            </div>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              View all research
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link to={`/blog/${post.slug}`} className="block group h-full">
                <article className="cursor-pointer bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
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

    {/* Products */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Products</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">The platform</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Today, the Jobgraph platform is available to a select group of partners who share our mission. We're sharing our progress as we go, working with and getting feedback from people outside of Jobgraph.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
            >
              Request access
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="right">
          <div className="bg-secondary rounded-3xl p-12 aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grain" />
            <div className="grid grid-cols-3 gap-3 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-16 h-16 rounded-xl bg-foreground/30" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none" className="text-accent">
                  <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
                  <ellipse cx="14" cy="14" rx="5" ry="12" stroke="currentColor" strokeWidth="2" fill="none" />
                  <line x1="2" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Work has always changed */}
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url(/the-way-we-work-has-always-changed-1.jpg)" }}
        />
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url(/the-way-we-work-has-always-changed-2.jpg)" }}
        />
      </div>
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative h-full flex items-center justify-center px-6">
        <FadeIn>
          <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-background text-center max-w-4xl leading-tight">
            Work has always changed.<br />How it changes next is in our hands.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-6 lg:px-10 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-5" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-background mb-10 max-w-3xl mx-auto leading-[1.1]">
            We are building the future of work platform.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-background text-foreground hover:bg-background/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
          >
            Get early access today
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
