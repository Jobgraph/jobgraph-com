import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";

const BOOK_CALL_HREF =
  "mailto:daniel@jobgraph.com?subject=Jobgraph%20%E2%80%94%20follow%20up%20from%20Hong%20Kong";

const QBNCapital = () => (
  <Layout>
    <SEO
      title="Jobgraph — for QBN Capital & Frank Tong"
      description="A personal follow-up from Hong Kong: where Jobgraph is, why our methodology is the only UK government AI transformation that's actually scaling, and why we'd love QBN as a partner."
    />

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-5xl mx-auto w-full relative z-10 pt-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
            Personal · for QBN Capital
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-8">
            Frank — what we couldn&apos;t fit into{" "}
            <span className="text-gradient">a coffee in Hong Kong.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-10">
            Thanks again for the time. Here&apos;s where Jobgraph is, why we think the methodology
            travels, and why QBN is exactly the kind of partner we&apos;d want as we move from UK
            government into Asia&apos;s banking sector.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href={BOOK_CALL_HREF}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5 group"
          >
            Book a follow-up call
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </FadeIn>
      </div>
    </section>

    {/* ── Where we are ──────────────────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Where we are today
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Six weeks old. Already in the room.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-16">
            Jobgraph is a six-week-old company carrying twenty years of methodology and a UK
            government track record most decade-old vendors can&apos;t match.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              kpi: "£500k / yr",
              label: "DWP contract",
              detail:
                "Securing a recurring contract with the Department for Work and Pensions, with forward-deployed engineers embedded inside the team.",
            },
            {
              kpi: "FDEs in gov",
              label: "Embedded delivery",
              detail:
                "Jobgraph engineers working alongside civil servants, not selling from the outside. We learn the system. The system learns us.",
            },
            {
              kpi: "Gov → Corporate",
              label: "Next frontier",
              detail:
                "The methodology has been proven in the hardest environment — heavy regulation, unions, scrutiny. Banks like HSBC are the natural next move.",
            },
          ].map((card, i) => (
            <FadeIn key={card.label} delay={0.25 + i * 0.1}>
              <div className="bg-background rounded-2xl p-8 border-2 border-border h-full">
                <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                  {card.kpi}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  {card.label}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Proof point: Probation ────────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The proof
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            The only UK gov AI transformation that is actually scaling.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-16">
            We applied the methodology to UK Probation — one of the most operationally fragile and
            politically sensitive parts of government. The numbers are unusual.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <FadeIn delay={0.25}>
            <div className="rounded-2xl border-2 border-border bg-background p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Invested
              </div>
              <div className="text-6xl md:text-7xl font-extrabold text-foreground leading-none mb-4">
                £7m
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Into the first product, built with probation staff at the centre — not as a target
                of automation, but as co-designers.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="rounded-2xl border-2 border-accent bg-background p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                Returned
              </div>
              <div className="text-6xl md:text-7xl font-extrabold text-gradient leading-none mb-4">
                £80m
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Through time savings and cost avoidance — primarily by{" "}
                <span className="text-foreground font-semibold">not having to hire</span> the
                probation officers the system would otherwise have needed.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <p className="text-foreground text-xl md:text-2xl font-extrabold leading-tight max-w-3xl">
            The reason it worked: we did it{" "}
            <em className="not-italic text-gradient">with</em> the probation staff themselves.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── Phil Brown — spiritual founder ────────────────────────────────────── */}
    <section
      className="py-32 px-6 lg:px-10"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The spiritual founder
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 max-w-4xl">
            Professor Phillip Brown.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-light mb-16">
            Phil is the reason the methodology exists. Thirty years of research at Cardiff. Seventeen
            books on work, skills, and the AI economy. Keynotes at the World Bank and the
            International Labour Organization. He is the company&apos;s spiritual founder, and his
            framework underpins every piece of work we ship.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="border-l-4 border-accent pl-8 mb-12 max-w-4xl">
            <p className="text-2xl md:text-3xl text-white leading-relaxed italic font-light">
              &ldquo;The AI transition debate is almost entirely focused on the technology.
              What&apos;s missing is a rigorous understanding of what humans actually do, the tacit
              knowledge they hold, and where human judgment remains irreplaceable. Without that
              foundation, AI deployment fails.&rdquo;
            </p>
            <p className="text-accent font-semibold mt-6">— Professor Phillip Brown</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Beyond skills",
              body: "Phil&apos;s core insight: skills frameworks miss most of what makes a workforce work — tacit knowledge, relationships, judgment, the unspoken way things get done. Jobgraph is the first tool built around that insight.",
            },
            {
              title: "Capability, not headcount",
              body: "His research reframes workforce planning around capability — what a person can actually do, in this organisation, in this context — not job titles or self-reported skill tags.",
            },
            {
              title: "A network the rest can&apos;t buy",
              body: "Phil opens doors at the World Bank, the ILO, and senior civil service that other vendors take a decade to build. That network is what got Jobgraph into the room six weeks in.",
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={0.4 + i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 h-full">
                <h3
                  className="text-lg font-extrabold text-white mb-3"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── The methodology / why it works ────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Why the ROI actually lands
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Cultural transformation <em className="not-italic text-gradient">is</em> the technical
            transformation.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-16">
            Most AI rollouts fail not because the tech doesn&apos;t work, but because they land on
            people who weren&apos;t asked, didn&apos;t want it, and quietly refuse to use it. Our
            edge is that we treat that as the actual problem.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          {[
            {
              title: "We interview the workforce.",
              body: "An AI in the style of Phil Brown. It calls or texts people after work and asks what drains them, what they want to keep, what they&apos;d gladly hand over. No surveys. No consultants. The data is the workforce&apos;s own words.",
            },
            {
              title: "We map what actually happens.",
              body: "A live graph of tasks, tacit knowledge, capability and AI exposure across the org — the layer beneath job titles and HRIS data. This is what every transformation needs and almost no transformation has.",
            },
            {
              title: "We build with the people, not at them.",
              body: "Autonomous agents that take painful tasks off the employee&apos;s plate — not a redundancy memo. The workforce becomes the buyer of the automation, not the casualty of it. Adoption stops being a problem.",
            },
            {
              title: "We measure the ROI honestly.",
              body: "Hours saved. Cost avoided. Capacity unlocked. The same loop runs again in three months — re-interview, re-map, re-measure — so the numbers stay live, not slide-deck fiction.",
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={0.25 + i * 0.08}>
              <div>
                <h3 className="text-2xl font-extrabold text-foreground mb-3 leading-tight">
                  {card.title}
                </h3>
                <p
                  className="text-muted-foreground text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="text-foreground text-xl md:text-2xl font-extrabold leading-tight max-w-3xl mt-16">
            The competitive advantage isn&apos;t that we use AI. Everyone uses AI. It&apos;s that
            our customers&apos; people <em className="not-italic">want</em> the change to land.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── Why QBN / the expansion ───────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Why QBN
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Gov was the hardest sale. Asia banking is the biggest one.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-10">
            We chose to prove this in UK government — heavy regulation, unionised workforces, public
            scrutiny, political risk. If the methodology works there, it works anywhere. Banks are
            the natural next market: same regulatory weight, same scale, much better unit
            economics — and Asia is where the volume is.
          </p>
        </FadeIn>

        {/* Existing connection callout */}
        <FadeIn delay={0.3}>
          <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-8 md:p-10 mb-16 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              We&apos;re not strangers
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              Daniel spent years at <span className="font-extrabold">Amplyfi</span> — one of QBN&apos;s
              own portfolio companies. A lot of what Jobgraph does well is a direct result of what
              that chapter taught us about scaling AI into large, regulated enterprises.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Your thesis —{" "}
              <em className="not-italic font-semibold text-foreground">
                embrace change, create value, accelerate growth
              </em>{" "}
              — is the brief Jobgraph was built for. AI that creates measurable enterprise value
              because the humans inside it actually accept the change.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "A proven approach in regulated, unionised environments.",
              body: "The hardest go-to-market in tech. UK gov, unions, public scrutiny — we&apos;ve done the work. The same playbook fits banks, insurers, and Asia&apos;s heavy-regulation incumbents.",
            },
            {
              title: "Direct alignment with your portfolio thesis.",
              body: "AI, big data, fintech, regulated industries — Jobgraph sits cleanly inside QBN&apos;s focus areas, and reinforces the thesis you&apos;re already backing through Amplyfi, Callsign and HexTrust.",
            },
            {
              title: "A bridge from London into Asia banking.",
              body: "HSBC, Standard Chartered, DBS, OCBC — same regulatory weight, much better unit economics than gov. QBN&apos;s Hong Kong network is where the first conversations should happen.",
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={0.4 + i * 0.1}>
              <div className="rounded-2xl border-2 border-border bg-background p-7 h-full">
                <h3 className="text-lg font-extrabold text-foreground mb-3 leading-tight">
                  {card.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── The team ──────────────────────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Who you&apos;d be backing
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-16 max-w-4xl">
            Three founders. One thesis.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              initials: "PB",
              name: "Professor Phillip Brown",
              title: "Spiritual founder & Executive Director",
              bio: "30 years of workforce research. 17 books. Keynotes at the World Bank and ILO. The methodology is his life&apos;s work — Jobgraph is the operationalisation of it.",
            },
            {
              initials: "WT",
              name: "Will Tarr",
              title: "Co-founder & CTO",
              bio: "YC founder. Has built and shipped AI products at scale. Owns the technical platform — the interview agent, the graph, the autonomous workers.",
            },
            {
              initials: "DJ",
              name: "Daniel James",
              title: "Co-founder & CEO",
              bio: "10+ years leading workforce transformation across large UK organisations — including time at <strong class=\"text-foreground\">Amplyfi</strong>, one of QBN&apos;s own portfolio companies. That&apos;s where a lot of what Jobgraph does well comes from: a hands-on lesson in what does and doesn&apos;t travel when AI lands inside a large, regulated enterprise. Holds the customer relationships and the gov network.",
            },
          ].map((person, i) => (
            <FadeIn key={person.name} delay={0.15 + i * 0.1}>
              <div className="border-2 border-border rounded-2xl p-8 bg-background h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-lg font-extrabold text-white">{person.initials}</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground mb-1">{person.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  {person.title}
                </p>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: person.bio }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Close ─────────────────────────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
            Frank — let&apos;s pick this up.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We&apos;re moving fast. The DWP contract is closing this quarter, the methodology is
            ready to travel, and the timing for Asia banking is right. We&apos;d love QBN
            alongside us as we do it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Whenever works in the next two weeks — happy to come back to Hong Kong, or jump on a
            call. Thank you again for the meeting.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-start gap-4">
            <a
              href={BOOK_CALL_HREF}
              className="inline-flex items-center gap-3 bg-foreground text-background font-semibold px-8 py-4 rounded-2xl text-base hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-0.5 group"
            >
              Book a follow-up call
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-muted-foreground">
              Daniel James — daniel@jobgraph.com
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default QBNCapital;
