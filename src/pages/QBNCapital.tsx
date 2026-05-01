import { ArrowRight, Eye, GitBranch, Lightbulb, PhoneCall, Rocket, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";

const BOOK_CALL_HREF =
  "mailto:daniel@jobgraph.com?subject=Jobgraph%20%E2%80%94%20follow%20up%20from%20Hong%20Kong";

const APP_BASE = "https://app.jobgraph.com";

const QBNCapital = () => (
  <Layout>
    <SEO
      title="Jobgraph — for QBN Capital"
      description="Workforce intelligence for the AI transition. Interview every employee, understand what they actually do, automate the painful tasks, measure the ROI. Live demo + investment ask."
    />

    {/* ── Hero ─────────────────────────────────────────────────────────────── */}
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="max-w-5xl mx-auto w-full relative z-10 pt-20">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
            For QBN Capital
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-8">
            Evals exist for the models.{" "}
            <span className="text-gradient">We&apos;re building the equivalent for the human side.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-10">
            Jobgraph interviews every employee, understands what they actually do, and ships
            autonomous agents that take the painful tasks off their plate — then measures the ROI
            in hours saved and £ avoided. The workforce intelligence platform for the AI transition.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-3">
            <a
              href="#see-it"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5 group"
            >
              Try the live demo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BOOK_CALL_HREF}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full border-2 border-border text-foreground hover:bg-secondary transition-all duration-200"
            >
              Book a call
            </a>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── How it works ─────────────────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            How it works
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Four steps. End-to-end.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-16">
            Most consultancies stop at a slide deck. Most software stops at a dashboard. Jobgraph
            covers the whole loop, so the AI investment actually delivers.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              Icon: PhoneCall,
              num: "01",
              title: "Enter a few names",
              body: "No CSV. No HR integration needed to start. Type in three employees and hit go. They get an email: <em>&ldquo;Be one of the first to have a conversation with Phil, our AI workforce researcher.&rdquo;</em> They pick a time. That&apos;s the whole setup.",
            },
            {
              Icon: Eye,
              num: "02",
              title: "Phil calls. They open up.",
              body: "Phil — or Sarah, or Marcus — calls at the time they chose. Natural conversation, not a survey. Fifteen minutes of genuine back-and-forth about what they actually do, what drains them, what they&apos;d hand over if they could. The kind of thing people don&apos;t say in a skip-level.",
            },
            {
              Icon: Sparkles,
              num: "03",
              title: "The moment of truth",
              body: "You see the transcript and the analysis. This is when the employer says: <em>&ldquo;Wow — I didn&apos;t know this. You&apos;ve got my people to open up.&rdquo;</em> That&apos;s the first real value. A living map of what your workforce actually does, built from the people themselves.",
            },
            {
              Icon: GitBranch,
              num: "04",
              title: "Agents take the painful parts",
              body: "The tasks your people flagged as draining get handed to autonomous agents. Not replacing anyone — freeing them. With real ROI numbers: hours saved per week, £ avoided per year, FTE capacity unlocked. Then loop again.",
            },
          ].map((c, i) => (
            <FadeIn key={c.num} delay={0.25 + i * 0.08}>
              <div className="rounded-2xl border-2 border-border bg-background p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <c.Icon size={16} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/70">{c.num}</span>
                </div>
                <h3 className="text-base font-extrabold text-foreground mb-2 leading-tight">
                  {c.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.body }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <div className="mt-16 border-l-4 border-accent pl-6 max-w-3xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed italic font-light">
              &ldquo;Consultancies give you a map drawn by someone who&apos;s never been to the
              country.{" "}
              <span className="not-italic font-semibold">
                We give you a GPS that updates in real time.
              </span>
              &rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── See it working — clickable demo ──────────────────────────────────── */}
    <section id="see-it" className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            See it working
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Walk the loop in three minutes.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-12">
            The four screens below open the actual product on{" "}
            <span className="text-foreground font-mono text-base">app.jobgraph.com</span>, populated
            with realistic mock data so you can build a mission, watch the calls complete, see the
            insights, build an agent, and watch the ROI land — end-to-end. Sign in with Google, or
            drop me a line and I&apos;ll send a guest login.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              href: `${APP_BASE}/try/missions`,
              Icon: PhoneCall,
              tag: "Step 1 · Launch",
              title: "Send the invites",
              body: "Add employees by name, pick your interviewer — Phil, Sarah, or Marcus — set the brief, hit launch. The platform sends email invites; employees choose their call time. Watch calls move queued → ringing → in progress → completed in real time.",
            },
            {
              href: `${APP_BASE}/try/insights`,
              Icon: Lightbulb,
              tag: "Step 2 · The wow moment",
              title: "See what they actually said",
              body: "Full transcripts, AI summaries, sentiment by department, pain points by frequency. This is where the employer reads something they genuinely didn't know. The insight that makes the ROI case obvious.",
            },
            {
              href: `${APP_BASE}/try/agents`,
              Icon: Sparkles,
              tag: "Step 3 · Automate",
              title: "Build an agent",
              body: "Pick an opportunity, the auto-generated spec drops in. The employees who said yes during their interview are pre-selected as pilot users. Hit build and watch it go live.",
            },
            {
              href: `${APP_BASE}/try/pilots`,
              Icon: Rocket,
              tag: "Step 4 · ROI",
              title: "Watch the numbers",
              body: "Hours-saved sparklines per pilot, NPS, projected annual savings, FTE not hired. The numbers stay live — every loop sharpens them.",
            },
          ].map((d, i) => (
            <FadeIn key={d.href} delay={0.25 + i * 0.08}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border-2 border-border bg-background p-6 hover:border-accent/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <d.Icon size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {d.tag}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {d.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{d.body}</p>
                <span className="text-xs font-semibold text-foreground inline-flex items-center gap-1 group-hover:text-accent transition-colors">
                  Open in new tab
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="text-sm text-muted-foreground mt-8 max-w-3xl">
            Frank — if you&apos;d rather see a fully provisioned tenant with QBN-flavoured portfolio
            data instead of the demo dataset, drop me a line and I&apos;ll set it up before our next
            call.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── The proof — Ministry of Justice ──────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            The proof
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 max-w-4xl">
            Ministry of Justice. 2,959 employees. Every operational role.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-16">
            We ran the platform across the most operationally fragile and politically scrutinised
            part of UK government. The numbers below are real, from a live workforce analysis. This
            is what the methodology produces when you actually deploy it.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "2,959", label: "Employees mapped" },
            { value: "644", label: "Tasks analysed" },
            { value: "£30M+", label: "Potential annual savings" },
            { value: "2.6 hrs", label: "Saved / worker / day" },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={0.25 + i * 0.08}>
              <div className="rounded-2xl border-2 border-border bg-background p-6 text-center md:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-foreground tabular-nums">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-2">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.55}>
          <p className="text-foreground text-xl md:text-2xl font-extrabold leading-tight max-w-3xl">
            We did it{" "}
            <em className="not-italic text-gradient">with</em> the workforce — interviewing every
            operational role, surfacing what people actually do, and building agents alongside the
            staff most affected. That&apos;s why it works in places other transformations stall.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* ── Where we are today ───────────────────────────────────────────────── */}
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

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              kpi: "£500k / yr",
              label: "DWP contract",
              detail:
                "Securing a recurring contract with the Department for Work and Pensions, building an AI unit + skills observatory for Skills England. Forward-deployed engineers embedded in the team.",
            },
            {
              kpi: "5+ warm",
              label: "Pipeline",
              detail:
                "DWP, Motability, ITV, UAE Government — more qualified pipeline than most Series A companies, built on top of the Decoded CDO/CHRO network across the FTSE 100.",
            },
            {
              kpi: "Gov → Asia",
              label: "Next frontier",
              detail:
                "The methodology has been proven in the hardest environment: heavy regulation, unionised workforces, public scrutiny. Asian banking is the natural next move.",
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

    {/* ── Academic foundation — Phil Brown ─────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Academic foundation
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 max-w-4xl">
            Professor Phillip Brown.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-light mb-16">
            Thirty years of research at Cardiff and Oxford. Seventeen books on work, skills, and the
            AI economy. Keynotes at the World Bank and the International Labour Organization. Phil
            is Executive Director at Jobgraph — his Digital Futures of Work programme is the
            academic rigour behind the platform, and his network opens doors that other vendors
            spend a decade trying to reach.
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
              body: "Skills frameworks miss most of what makes a workforce work — tacit knowledge, relationships, judgment, the unspoken way things get done. Jobgraph is the first tool built around that insight.",
            },
            {
              title: "Capability, not headcount",
              body: "His research reframes workforce planning around capability — what a person can actually do, in this organisation, in this context — not job titles or self-reported skill tags.",
            },
            {
              title: "A network the rest can&apos;t buy",
              body: "Phil opens doors at the World Bank, the ILO, and senior civil service that other vendors take a decade to build. Part of why Jobgraph is in the room six weeks in.",
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

    {/* ── Why QBN ──────────────────────────────────────────────────────────── */}
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
            the natural next market: same regulatory weight, same scale, much better unit economics
            — and Asia is where the volume is.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-8 md:p-10 mb-16 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              We&apos;re not strangers
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              Daniel spent years at <span className="font-extrabold">Amplyfi</span> — one of QBN&apos;s
              own portfolio companies. A lot of what Jobgraph does well is a direct result of what
              that chapter taught us about scaling AI inside large, regulated enterprises.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Will lived and worked in <span className="font-extrabold">Hong Kong</span> — knows the
              region, the banks, and the regulators first-hand. Between the two of us, the path
              into Asia banking isn&apos;t cold.
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

        <div className="grid md:grid-cols-3 gap-6">
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

    {/* ── The team ─────────────────────────────────────────────────────────── */}
    <section className="py-32 px-6 lg:px-10 bg-secondary/50 bg-grain">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Who you&apos;d be backing
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] mb-16 max-w-4xl">
            Two founders. One advisor. One thesis.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              initials: "WT",
              name: "Will Tarr",
              title: "Co-founder & CTO",
              bio: "<strong class=\"text-foreground\">Harvard-educated</strong> technical co-founder. Lived and worked in <strong class=\"text-foreground\">Hong Kong</strong> — knows the region, the banks, and the regulators first-hand. YC alum. Full-stack engineer who&apos;s shipped AI products at scale. Owns the platform end-to-end — the interview agent, the live graph, the autonomous workers, the simulation engine.",
            },
            {
              initials: "DJ",
              name: "Daniel James",
              title: "Co-founder & CEO",
              bio: "Built the Justice AI unit at MoJ. Previously Number 10 data capability. Spent years at <strong class=\"text-foreground\">Amplyfi</strong>, one of QBN&apos;s portfolio companies, where the lessons about scaling AI inside regulated enterprises were learned the hard way. Government AI from the inside out.",
            },
            {
              initials: "PB",
              name: "Professor Phillip Brown",
              title: "Executive Director",
              bio: "30 years of workforce research at Cardiff and Oxford. 17 books. Keynotes at the World Bank and ILO. His Digital Futures of Work programme is the academic foundation the platform is built on.",
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
            call. Thanks for reading this far.
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
