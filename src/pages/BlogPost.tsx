import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import { getBlogPost } from "@/data/blogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <Layout>
      <SEO title={`${post.title} — Jobgraph`} description={post.excerpt} />
      <article className="pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-10">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6">
              {post.blocks.map((block, i) => {
                if (block.type === "h2")
                  return (
                    <h2
                      key={i}
                      className="text-3xl font-extrabold text-foreground mt-10 leading-tight"
                    >
                      {block.text}
                    </h2>
                  );
                if (block.type === "h3")
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-bold text-foreground mt-8 leading-tight"
                    >
                      {block.text}
                    </h3>
                  );
                if (block.type === "h4")
                  return (
                    <h4
                      key={i}
                      className="text-xl font-bold text-foreground mt-6 leading-tight"
                    >
                      {block.text}
                    </h4>
                  );
                return (
                  <p
                    key={i}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
