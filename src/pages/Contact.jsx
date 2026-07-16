import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, FileText, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import PageHeader from "@/components/PageHeader.jsx";
import { site } from "@/data/site.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  
  // 1. State to manage popup modal visibility and type
  const [popup, setPopup] = useState({ isOpen: false, type: "success", title: "", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Contact form isn't configured yet. Please email me directly.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio enquiry",
          message: form.message,
        },
        { publicKey },
      );
      
      // 2. Trigger success popup modal
      setPopup({
        isOpen: true,
        type: "success",
        title: "Message Sent Successfully!",
        message: "Thank you for reaching out. I'll get back to you as soon as possible!",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      
      // 3. Trigger error popup modal
      setPopup({
        isOpen: true,
        type: "error",
        title: "Sending Failed",
        message: "Something went wrong. Please try again or email me directly at " + site.email,
      });
    } finally {
      setSending(false);
    }
  };

  const contactCards = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Github, label: "GitHub", value: "MS-Ihsaan", href: site.github },
    { icon: Linkedin, label: "LinkedIn", value: "ihsan-sameel", href: site.linkedin },
    { icon: FileText, label: "Resume", value: "Coming Soon" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together."
        description="Have an internship, project or collaboration in mind? Send a message - I read every one."
      />

      <section className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} className="card-surface p-6 md:p-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider" htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/40" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider" htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/40" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider" htmlFor="subject">Subject</label>
            <input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/40" placeholder="What's this about?" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider" htmlFor="message">Message</label>
            <textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 w-full rounded-lg border border-border bg-surface-elevated px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/40 resize-none" placeholder="Tell me a little about your project…" />
          </div>
          <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
            {sending ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send Message</>}
          </button>
        </form>

        <aside className="space-y-4">
          {contactCards.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="card-surface p-5 flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">{inner}</a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </aside>
      </section>

      {/* 4. Popup Modal Overlay and Dialog Markup */}
      {popup.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="card-surface max-w-md w-full p-6 text-center shadow-xl scale-in duration-200 flex flex-col items-center">
            {popup.type === "success" ? (
              <CheckCircle2 className="text-green-500 mb-4" size={48} />
            ) : (
              <XCircle className="text-destructive mb-4" size={48} />
            )}
            
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {popup.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-6">
              {popup.message}
            </p>
            
            <button
              onClick={() => setPopup((p) => ({ ...p, isOpen: false }))}
              className="btn-primary px-5 py-2 text-sm w-full sm:w-auto"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}