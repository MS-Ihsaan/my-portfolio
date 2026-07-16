import PageHeader from "@/components/PageHeader.jsx";
import { GraduationCap, Target, Layers, Boxes, Network, Database, Palette, Code } from "lucide-react";
import { site } from "@/data/site.js";

const interests = [
  { icon: Layers, title: "Full-Stack Development", desc: "End-to-end delivery from UI to database." },
  { icon: Boxes, title: "Software Architecture", desc: "Structuring systems for scale and clarity." },
  { icon: Network, title: "REST API Development", desc: "Designing predictable, well-typed APIs." },
  { icon: Palette, title: "UI / UX", desc: "Interfaces that feel intentional and useful." },
  { icon: Code, title: "System Analysis", desc: "Understanding problems before writing code." },
  { icon: Database, title: "Database Design", desc: "Modelling data that reflects the domain." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="A developer who cares about the whole system."
        description="I like software that's thoughtfully planned, cleanly built and genuinely useful-from the first user click all the way down to the database schema."
      />

      <section className="container-page grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm Mohamad Sameel Ihsaan, a Full-Stack Developer based in {site.location}. I'm currently
            pursuing a Bachelor of Information and Communication Technology at the {site.faculty},{" "}
            {site.university}, specialising in Software System Technology.
          </p>
          <p>
            My focus is on shipping complete, well-architected web applications. I enjoy working across
            the stack-designing React interfaces, building REST APIs and services in Node.js and
            Spring Boot, and modelling data with SQL and NoSQL databases.
          </p>
          <p>
            I'm looking for internships and graduate opportunities where I can keep growing as a
            Full-Stack Developer while contributing to products that put users first.
          </p>
        </div>

        <aside className="card-surface p-6">
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Target size={16} /> Career Goal
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            To build a career as a versatile, well-rounded software engineer - comfortable across the
            stack, thoughtful about architecture, and focused on shipping meaningful software solutions
            that solve real problems.
          </p>
        </aside>
      </section>

      <section className="container-page mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <GraduationCap className="text-primary" /> Education
        </h2>
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          <div className="relative">
            <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
            <div className="card-surface p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-display text-lg font-bold">Bachelor of Information and Communication Technology</h3>
                <span className="chip">2023 — 2027 (Expected)</span>
              </div>
              <p className="text-sm text-primary">Specialization: Software System Technology</p>
              <p className="mt-1 text-sm text-muted-foreground">{site.faculty}, {site.university}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Coursework across software engineering, database systems, algorithms, computer networks,
                system analysis and object-oriented programming, alongside independent full-stack projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Areas of interest</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-surface p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
