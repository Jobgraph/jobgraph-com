import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import SEO from "@/components/SEO";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <SEO title="Contact — Jobgraph" description="Get in touch with Jobgraph." />
      <section className="pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Contact</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-[1.1]">Let's talk.</h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-12">
                Get in touch to learn more about Jobgraph or to discuss partnership and talent opportunities.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">hello@jobgraph.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">London, UK</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right">
            {submitted ? (
              <div className="bg-secondary rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <ArrowRight size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-card rounded-3xl p-8 md:p-10 shadow-sm space-y-5"
              >
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5 group w-full justify-center"
                >
                  Send message
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
