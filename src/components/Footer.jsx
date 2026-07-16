import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, site } from "@/data/site.js";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface text-sm">
      {/* Main Footer Layout */}
      <div className="container-page py-7 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        
        {/* Left Side: Brand Identity */}
        <div className="flex flex-col space-y-3 max-w-sm">
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg group">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow font-mono text-sm font-bold text-primary-foreground shadow-sm">
              MS
            </span>
            <span className="group-hover:text-primary transition-colors duration-200">
              {site.shortName}
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {site.tagline}
          </p>
        </div>

        {/* Right Side: Social Media & Outreach */}
        <div className="flex flex-col items-start md:items-end space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Connect
          </h4>
          <div className="flex gap-2">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
              <Github size={16} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
              <Mail size={16} />
            </a>
          </div>
          <a href={`mailto:${site.email}`} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors select-all">
            {site.email}
          </a>
        </div>
      </div>

      {/* Quick Links Middle Bar (Horizontal Row with Rounded Buttons) */}
      <div className="border-t border-border/50 bg-surface/30">
        <div className="container-page py-6 flex flex-col items-center">
          
          {/* Centered Heading with Bottom Padding */}
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4 text-center">
            Quick Links
          </h4>
          
          {/* Centered Horizontal Pill Group */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-1.5 text-xs font-medium rounded-full border border-border bg-surface-elevated text-muted-foreground hover:text-primary hover:border-primary hover:shadow-sm transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Sub-Footer / Copyright */}
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 {site.name}. All Rights Reserved.</span>
          <span className="opacity-75 font-mono text-[11px]">
            Built with React, JavaScript & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}