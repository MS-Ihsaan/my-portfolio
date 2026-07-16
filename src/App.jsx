import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const meta = {
  "/": {
    title: "Mohamad Sameel Ihsaan - Full-Stack Developer",
    desc: "Portfolio of Mohamad Sameel Ihsaan - Full-Stack Developer and BICT undergraduate at the University of Kelaniya.",
  },
  "/about": { title: "About - Mohamad Sameel Ihsaan", desc: "Background, education and career goals." },
  "/skills": { title: "Skills - Mohamad Sameel Ihsaan", desc: "Languages, frameworks, tools and disciplines." },
  "/services": { title: "Services - Mohamad Sameel Ihsaan", desc: "Full-stack development, APIs, responsive UIs and maintenance." },
  "/projects": { title: "Projects - Mohamad Sameel Ihsaan", desc: "Selected full-stack, frontend and backend projects." },
  "/contact": { title: "Contact - Mohamad Sameel Ihsaan", desc: "Get in touch for internships, freelance or collaborations." },
};

function useDocumentMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = meta[pathname] || meta["/"];
    document.title = m.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", m.desc);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
}

export default function App() {
  useDocumentMeta();
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
