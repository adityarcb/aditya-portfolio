import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle/50 bg-background">
      {/* Gradient fade at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tighter text-foreground hover:text-accent-primary transition-colors"
            >
              aditya<span className="neon-text">.raj</span>
            </Link>
            <p className="text-foreground/30 text-sm mt-3 max-w-xs leading-relaxed">
              Transforming raw data into intelligent solutions. Data Science
              student & aspiring ML Engineer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-4">
              Navigate
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Projects", href: "/projects" },
                { name: "CV", href: "/cv" },
                { name: "Certifications", href: "/certifications" },
                { name: "Training", href: "/training" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/40 hover:text-accent-primary transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-mono text-foreground/30 tracking-widest uppercase mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://github.com/adityarcb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center text-foreground/40 hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/adityaa-raj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center text-foreground/40 hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aditya.raj60104@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center text-foreground/40 hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:underline"
            >
              Let&apos;s work together <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/20 text-xs font-mono">
            © {new Date().getFullYear()} Aditya Raj. Built with Next.js &
            passion.
          </p>
          <div className="flex items-center gap-2 text-xs text-foreground/20 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for internships
          </div>
        </div>
      </div>
    </footer>
  );
}
