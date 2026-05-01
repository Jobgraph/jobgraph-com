import { ArrowRight, ClipboardList, Map, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import LoopFlow from "@/components/pitch/LoopFlow";
import LivingMapBg from "@/components/pitch/LivingMapBg";
import { motion } from "framer-motion";

// ─── Page ─────────────────────────────────────────────────────────────────────

const BOOK_CALL_HREF =
  "mailto:daniel@jobgraph.com?subject=Jobgraph%20%E2%80%94%20Book%20a%20call";

const Customer = () => (
  <Layout>
    <SEO
      title="Jobgraph — Map the work. Automate what hurts. Prove the ROI."
      description="Jobgraph interviews your people, builds autonomous agents to take on the painful tasks, and measures the ROI. Book a call."
    />

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
            For Enterprise
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6 max-w-5xl">
            Map the work.{" "}
            <span className="text-gradient">Automate what hurts.</span>{" "}
            Prove the ROI.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-10">
            Jobgraph interviews your people, finds the tasks they hate most, builds the agents that take them on — and measures what it&apos;s worth.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href={BOOK_CALL_HREF}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5 group"
          >
            Book a call
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-muted-foreground"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>

    {/* ── Problem ──────────────────────────────────────────────────────────── */}
    <section id="problem" className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The Problem
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Most orgs are deploying AI blind.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-16">
            Then they roll it out to people who never asked for it.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-14">
          {[
            {
              label: "The tech side",
              cards: [
                {
                  title: "No map",
                  description: "You don't actually know what your people do day-to-day.",
                },
                {
                  title: "No plan",
                  description: "AI is deployed without understanding the human impact.",
                },
                {
                  title: "No numbers",
                  description: "Consultants charge £500K for a guess dressed as a strategy.",
                },
              ],
            },
            {
              label: "The human side",
              cards: [
                {
                  title: "Resistance",
                  description:
                    "Staff quietly don't use the tools they didn't ask for. Adoption stalls.",
                },
                {
                  title: "Fear",
                  description:
                    "Displacement worry tanks engagement and goodwill before launch day.",
                },
                {
                  title: "Pushback",
                  description:
                    "Unions and works councils slow or block rollouts that arrive top-down.",
                },
              ],
            },
          ].map((column, ci) => (
            <div key={column.label} className="flex flex-col gap-5">
              <FadeIn delay={0.15 + ci * 0.1}>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {column.label}
                </span>
              </FadeIn>
              {column.cards.map((card, i) => (
                <FadeIn key={card.title} delay={0.2 + ci * 0.1 + i * 0.08}>
                  <div className="bg-background rounded-2xl p-6 border-2 border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-foreground text-xl md:text-2xl font-extrabold leading-tight max-w-3xl">
            There is a better way.
          </p>
        </FadeIn>
        <FadeIn delay={0.6}>
          <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mt-6">
            The best ROI comes from building{" "}
            <em className="not-italic font-semibold text-foreground">with</em> your people — based on
            their own interviews about what drains them — and giving them a vision of a better job, not
            a smaller one.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── Product ──────────────────────────────────────────────────────────── */}
    <section id="product" className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <LivingMapBg />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The Product
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            A living map of your workforce.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-16">
            Jobgraph interviews your employees, builds a live map of how work actually flows, and spins up
            autonomous agents to take on the painful tasks. You see what to automate, what to redesign, and
            what every step is worth.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: ClipboardList,
              label: "Interview",
              description: "AI talks to your people. No surveys. No consultants.",
            },
            {
              Icon: Map,
              label: "Map",
              description: "A live graph of skills, tasks, and AI exposure across your org.",
            },
            {
              Icon: Zap,
              label: "Automate",
              description: "Autonomous agents take on the painful tasks. We measure the ROI.",
            },
          ].map((col, i) => (
            <FadeIn key={col.label} delay={0.15 + i * 0.12}>
              <div className="border-2 border-border rounded-2xl p-8 bg-background hover:border-accent/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                  <col.Icon size={20} />
                </div>
                <h3 className="text-lg font-extrabold text-foreground mb-3">{col.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{col.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Research Foundation ───────────────────────────────────────────────── */}
    <section
      id="research"
      className="py-32 px-6 lg:px-10"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Why This Works
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-12 max-w-4xl">
            Built on 30 years of workforce research.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="border-l-4 border-accent pl-8 mb-10 max-w-3xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed italic font-light">
              &ldquo;The AI transition debate is almost entirely focused on the technology. What&apos;s
              missing is a rigorous understanding of what humans actually do, the tacit knowledge they
              hold, and where human judgment remains irreplaceable. Without that foundation, AI
              deployment fails.&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-accent font-semibold mb-8">
            — Professor Phillip Brown, Cardiff University
          </p>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            Jobgraph&apos;s methodology is built on Prof. Brown&apos;s research. Understanding human
            capabilities first isn&apos;t a nice-to-have — it&apos;s what separates successful AI
            transformation from expensive failure.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── How It Works ─────────────────────────────────────────────────────── */}
    <section id="how-it-works" className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            How It Works
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Build a Jobgraph. Transform the jobs.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-16">
            A loop, not a project. Every cycle gives you a sharper map, more automation, and harder ROI
            numbers.
          </p>
        </FadeIn>

        <LoopFlow />
      </div>
    </section>

    {/* ── Team ─────────────────────────────────────────────────────────────── */}
    <section id="team" className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The Team
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-16 max-w-4xl">
            Built by people who&apos;ve studied this problem for years.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              initials: "WT",
              name: "Will Tarr",
              title: "Co-founder & CTO",
              bio: "YC founder. Built AI products at scale. Focused on the gap between what AI can do and how organisations actually deploy it.",
            },
            {
              initials: "DJ",
              name: "Daniel James",
              title: "Co-founder & CEO",
              bio: "10+ years leading workforce transformation at large UK organisations. Knows what actually works on the ground.",
            },
            {
              initials: "PB",
              name: "Professor Phillip Brown",
              title: "Executive Director",
              bio: "Distinguished Research Professor and author of 17 books on work, skills and the AI economy. Keynote speaker at the World Bank and International Labour Organization. His research on human capability and tacit knowledge is the intellectual foundation of Jobgraph.",
            },
          ].map((person, i) => (
            <FadeIn key={person.name} delay={0.15 + i * 0.12}>
              <div className="border-2 border-border rounded-2xl p-8 bg-background hover:border-accent/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-lg font-extrabold text-white">{person.initials}</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground mb-1">{person.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  {person.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{person.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────────────────────────── */}
    <section id="get-started" className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl mx-auto">
            Ready to map your workforce?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light mb-10">
            Book a 30-minute call. We&apos;ll show you what Jobgraph looks like for your organisation.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <motion.a
              href={BOOK_CALL_HREF}
              className="inline-flex items-center gap-3 bg-foreground text-background font-semibold px-8 py-4 rounded-2xl text-base hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-0.5 group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Book a call with Daniel
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
            <p className="text-sm text-muted-foreground">daniel@jobgraph.com</p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Customer;
