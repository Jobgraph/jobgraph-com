import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import { ArrowRight, Rocket, Server, Lightbulb } from "lucide-react";

const roles = [
  {
    title: "Forward Deployed Engineers",
    icon: Rocket,
    description: "You'll work directly with frontline users, including those in prisons and probation services, to understand their daily challenges and rapidly prototype, build, and deploy AI-driven solutions in complex environments.",
    detail: "You will be expected to ship code quickly, be versatile across the stack and deeply understand how to build products for users.",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Platform Engineers",
    icon: Server,
    description: "You will design, build, and maintain the secure, scalable, and reliable infrastructure that underpins our AI solutions, managing data pipelines, MLOps, and LLMOps.",
    detail: "This role is essential for tackling the challenges of deploying modern AI systems within government environments effectively.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "AI Product Managers",
    icon: Lightbulb,
    description: "You will define the vision, strategy, and roadmap for our AI initiatives, translating user needs and system challenges into well-defined product requirements.",
    detail: "This involves working closely with diverse stakeholders to prioritise features and ensure our AI products are usable, ethical, and impactful.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const Talent = () => (
  <Layout>
    <SEO title="Talent — Jobgraph" description="Forward-deployed engineers, platform engineers and AI product managers building the future of work from the inside out." />
    {/* Hero */}
    <section className="pt-32 pb-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Talent</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-8 max-w-4xl">
            Build at the{" "}
            <span className="text-gradient">frontier.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-10">
            We deploy engineers and product leaders directly alongside frontline teams to help transform how organisations work — from the inside out.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Value Prop */}
    <section className="py-24 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Forward deployed, deeply embedded</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our people don't sit in offices waiting for briefs. They work shoulder-to-shoulder with the people they serve — observing, learning, and building solutions that actually work in the real world.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { number: "01", title: "Embed", text: "Join frontline teams. Understand their world." },
            { number: "02", title: "Build", text: "Rapidly prototype and ship AI-driven solutions." },
            { number: "03", title: "Transform", text: "Drive lasting change in complex environments." },
          ].map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group">
                <span className="text-5xl font-extrabold text-border group-hover:text-accent/20 transition-colors duration-500">{step.number}</span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Roles */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Our talent</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-16">The people on the mission</h2>
        </FadeIn>

        <div className="space-y-6">
          {roles.map((role, i) => (
            <FadeIn key={role.title} delay={i * 0.1}>
              <div className="border-2 border-border rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className={`w-14 h-14 rounded-2xl ${role.color} flex items-center justify-center shrink-0`}>
                    <role.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {role.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-3">
                      {role.description}
                    </p>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed">
                      {role.detail}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 max-w-3xl mx-auto leading-[1.1]">
            Ready to build what matters?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            We're looking for people who want to do the most impactful work of their career.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5 group"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Talent;
