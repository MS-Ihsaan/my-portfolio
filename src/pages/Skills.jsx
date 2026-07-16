import PageHeader from "@/components/PageHeader.jsx";
import { skillGroups } from "@/data/skills.js";

export default function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools, languages and disciplines."
        description="A pragmatic mix of frontend, backend and software engineering fundamentals - the toolkit I use to build full-stack products."
      />

      <section className="container-page grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="card-surface p-6">
            <h2 className="font-display text-lg font-bold mb-5">{group.title}</h2>
            <ul className="space-y-4">
              {group.skills.map((s) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
