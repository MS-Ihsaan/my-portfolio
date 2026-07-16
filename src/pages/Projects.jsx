import { useMemo, useState } from "react";
import { Github, ExternalLink, Search } from "lucide-react";
import PageHeader from "@/components/PageHeader.jsx";
import { projects, projectCategories } from "@/data/projects.js";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = category === "All" || p.categories.includes(category);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built."
        description="A growing collection of full-stack, frontend and backend projects - each one an opportunity to learn something new."
      />

      <section className="container-page">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, technologies…"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-surface-elevated text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  category === c
                    ? "bg-primary text-primary-foreground border-transparent shadow-md"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="card-surface p-12 text-center">
            <p className="text-muted-foreground">No projects match your filters yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((p) => (
              <article key={p.slug} className="card-surface overflow-hidden flex flex-col group">
                <div className="aspect-[16/10] overflow-hidden bg-surface">
                  <img src={p.image} alt={p.title} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {p.categories.slice(0, 3).map((c) => <span key={c} className="chip">{c}</span>)}
                  </div>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  {p.role && (
                    <p className="mt-3 text-xs text-muted-foreground border-l-2 border-primary pl-3 italic">
                      <span className="font-medium not-italic text-foreground">Role: </span>
                      {p.role}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-3">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-3">
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
