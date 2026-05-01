import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import researchHero from "@/assets/research-hero.jpg";
import blogNecessaryError from "@/assets/blog-necessary-error.jpg";
import blogSkillsFuture from "@/assets/blog-skills-future.jpg";
import blogProductivity from "@/assets/blog-productivity.jpg";

const clientLogos = [
  "/clients/grey-logos_0004_Layer-6.jpg",
  "/clients/grey-logos_0002_Layer-3.jpg",
  "/clients/grey-logos_0000_Layer-5.jpg",
  "/clients/grey-logos_0003_Layer-1.jpg",
  "/clients/cv_logo-transformed.png",
  "/clients/grey-logos_0001_Layer-4.jpg",
];

const articles = [
  { title: "Necessary Error in Organisations", category: "Thoughts", image: blogNecessaryError },
  { title: "What Are the Skills of the Future?", category: "Thoughts", image: blogSkillsFuture },
  { title: "Why Aren't People More Productive Yet?", category: "Research", image: blogProductivity },
];

const Research = () => (
  <Layout>
    <SEO title="Research — Jobgraph" description="Cutting through the hype around the future of work. Jobgraph's research advances how we work through projects and real-world application." />
    {/* Hero */}
    <section className="pt-32 pb-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Research</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-[1.1]">Research</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-light">
              Our research aims to advance the way we work through combining well-defined research projects with real world application.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.3} direction="right">
          <img src={researchHero} alt="Abstract research visualization" width={800} height={800} className="w-full max-w-md ml-auto rounded-3xl shadow-2xl shadow-foreground/10" />
        </FadeIn>
      </div>
    </section>

    {/* Rethinking */}
    <section className="py-24 px-6 lg:px-10 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Rethinking Workforce Transformation</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            We regularly interview executives at top companies in tech hubs around the world, including Silicon Valley, Singapore, London, Seoul, Helsinki, and Berlin, so that we can understand their challenges in driving change and adopting technologies for a better future of work.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-20 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0"
                style={{ width: "25vw" }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-28 md:h-36 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>

    {/* Parallax divider */}
    <section
      aria-hidden="true"
      className="h-[60vh] bg-fixed bg-center"
      style={{
        backgroundImage: "url(/footer-parallax.jpg)",
        backgroundSize: "50% 50%",
        backgroundRepeat: "repeat",
      }}
    />

    {/* Cut through */}
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">There is a need to cut through the hype</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed font-light">
            <p>Our journey began with a simple yet profound realisation: there is an urgent need to rethink many of the assumptions behind workforce transformation.</p>
            <p>Technology is reshaping the landscape of work and learning at an unprecedented pace.</p>
            <p>In collaboration with Digital Futures of Work, an international research initiative, Jobgraph aims to address the massive uncertainty in the changing world of work — and to cut through the hype that makes strategic decision making extremely difficult.</p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Dive Deeper */}
    <section className="py-24 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Dive deeper</h2>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors group">
              All articles <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.1}>
              <article className="group cursor-pointer bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={article.image} alt={article.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{article.category}</span>
                  <h3 className="text-base font-bold text-foreground mt-2 group-hover:text-accent transition-colors duration-300">{article.title}</h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
