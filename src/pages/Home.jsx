import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Download, Code2, LayoutGrid, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { site } from "@/data/site.js";
import { projects } from "@/data/projects.js";
import { skillLogos } from "@/data/skills.js";

const stats = [
  { label: "Projects Completed", value: "6+" },
  { label: "Technologies Learned", value: "18+" },
  { label: "GitHub Repositories", value: "20+" },
  { label: "Years of Study", value: "3" },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" aria-hidden />
        <div className="absolute top-40 -left-24 h-96 w-96 rounded-full bg-primary-glow/15 blur-3xl animate-blob" aria-hidden />

        <div className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28 grid gap-12 md:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-5">
              <span className="h-px w-8 bg-primary" />
              Available for internships & projects
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Mohamad Sameel{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Ihsaan
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-foreground">Full-Stack Developer</p>
            <p className="mt-1 text-sm md:text-base text-muted-foreground">
              {site.degree} · {site.faculty} · {site.university}
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              I'm a Full-Stack Developer and BICT student passionate about building web applications
              end-to-end from front-end interfaces to backend architecture. I enjoy the systems
              thinking side of development: planning, analysis, and structuring projects for real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">Contact Me</Link>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="btn-outline opacity-60 cursor-not-allowed"
              >
                <Download size={16} /> Resume (Coming Soon)
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated hover:text-primary hover:border-primary transition-colors">
                <Github size={16} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated hover:text-primary hover:border-primary transition-colors">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-elevated hover:text-primary hover:border-primary transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-primary-glow/20 rounded-3xl blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-lg bg-surface-elevated w-64 h-64 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem]">
                <img src={profileImg} alt="Mohamad Sameel Ihsaan" className="-translate-y-7"/>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-card border border-border px-4 py-3 shadow-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-surface p-5 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary-glow bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <Sparkles size={12} /> Selected work
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
          <Link to="/projects" className="hidden sm:inline-flex text-sm font-medium text-primary hover:underline">
            View All Projects →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <article key={p.slug} className="card-surface overflow-hidden group flex flex-col">
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img src={p.image} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                <div className="mt-5 flex gap-2">
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-3">Live Demo</a>}
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-3"><Github size={14}/> Code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
            <Code2 size={12} /> Tech Stack
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Tools I work with</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            A pragmatic stack focused on scalable full-stack delivery — frontend, backend and database.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {skillLogos.map((s) => (
            <div key={s} className="card-surface p-4 text-center">
              <div className="text-xs sm:text-sm font-medium truncate">{s}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/skills" className="btn-outline">
            <LayoutGrid size={16} /> See full skill breakdown
          </Link>
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-surface to-primary-glow/10 p-8 md:p-12">
          <div className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold">Have a project in mind?</h3>
              <p className="mt-2 text-muted-foreground">
                I'm open to internships, freelance work and collaborations on full-stack products.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="btn-primary">
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
