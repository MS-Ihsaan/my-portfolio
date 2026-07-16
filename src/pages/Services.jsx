import PageHeader from "@/components/PageHeader.jsx";
import { Layers, Monitor, Server, Network, Smartphone, Wrench } from "lucide-react";

const services = [
  { icon: Layers, title: "Full-Stack Web Development", desc: "Complete web applications from frontend interfaces to backend services and databases - designed, built and shipped as one coherent product." },
  { icon: Monitor, title: "Frontend Development", desc: "Responsive, accessible and interactive interfaces built with React, Tailwind CSS and modern tooling." },
  { icon: Server, title: "Backend Development", desc: "Server-side applications with clean domain logic - authentication, business rules, integrations and persistence." },
  { icon: Network, title: "REST API Development", desc: "Well-structured, documented and scalable RESTful APIs using Node.js / Express and Spring Boot." },
  { icon: Smartphone, title: "Responsive Website Development", desc: "Mobile-first websites that look and behave beautifully on every device - from phones to large displays." },
  { icon: Wrench, title: "Web Application Maintenance", desc: "Bug fixing, feature enhancements, performance optimisation and ongoing support for existing apps." },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="How I can help."
        description="I work across the full stack - designing, building and maintaining web applications for individuals, startups and student teams."
      />

      <section className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="card-surface p-6 group">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-md mb-5 transition-transform group-hover:scale-110">
              <Icon size={20} />
            </div>
            <h2 className="font-display text-lg font-bold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
