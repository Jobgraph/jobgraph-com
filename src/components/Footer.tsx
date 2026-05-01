import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/70">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center mb-5">
            <img
              src="/jobgraph-lockup.png"
              alt="Jobgraph"
              className="h-8 w-auto invert brightness-0"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p className="text-sm text-background/50 max-w-sm leading-relaxed">
            We help organizations and individuals transform for the future of work through research-driven technology.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-background/40 uppercase tracking-widest mb-4">Navigate</h4>
          {[
            { to: "/research", label: "Research" },
            { to: "/talent", label: "Talent" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-1 text-sm text-background/60 hover:text-background transition-colors group"
            >
              {link.label}
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-background/40 uppercase tracking-widest mb-4">Connect</h4>
          <Link to="/login" className="block text-sm text-background/60 hover:text-background transition-colors">
            Platform
          </Link>
          <a href="https://www.linkedin.com/company/jobgraph/" target="_blank" rel="noopener noreferrer" className="block text-sm text-background/60 hover:text-background transition-colors">LinkedIn</a>
        </div>
      </div>

      <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-background/30">© {new Date().getFullYear()} Jobgraph. All rights reserved.</p>
        <p className="text-xs text-background/30">Making work better.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
