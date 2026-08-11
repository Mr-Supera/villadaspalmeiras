import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { site, whatsappLink } from "../lib/site";
import lobbyImg from "../assets/lobby.jpg";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Fale connosco. Telefone, WhatsApp, email, endereço, horário e formulário de contacto da Villa das Palmeiras.",
      },
      { property: "og:title", content: "Contactos — Villa das Palmeiras" },
      { property: "og:description", content: "Como nos encontrar e como nos contactar." },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: Contactos,
});

const schema = z.object({
  name: z.string().trim().min(2, "Indique o seu nome.").max(100),
  phone: z.string().trim().min(6, "Indique um telefone válido.").max(30),
  email: z.string().trim().email("Email inválido.").max(255),
  message: z.string().trim().min(10, "A mensagem deve ter pelo menos 10 caracteres.").max(1000),
});

function Contactos() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        errs[iss.path[0] as string] = iss.message;
      });
      setErrors(errs);
      setSubmitting(false);
      return;
    }
    setErrors({});
    // Abrir cliente de email pré-preenchido (sem backend)
    const subject = encodeURIComponent(`Contacto via website — ${result.data.name}`);
    const body = encodeURIComponent(
      `Nome: ${result.data.name}\nTelefone: ${result.data.phone}\nEmail: ${result.data.email}\n\n${result.data.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSent(true);
      setSubmitting(false);
    }, 300);
  };

  return (
    <>
      <PageHero
        kicker="Fale connosco"
        title="Contactos"
        subtitle="Estamos disponíveis para esclarecer qualquer dúvida e ajudar a planear a sua estadia."
        image={lobbyImg}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionTitle
                align="left"
                kicker="Informações"
                title="Como nos encontrar"
              />

              <ul className="mt-10 space-y-6">
                {[
                  { icon: MapPin, label: "Endereço", value: site.address },
                  { icon: Phone, label: "Telefone", value: site.phone, href: `tel:${site.phone}` },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: site.whatsappDisplay,
                    href: whatsappLink(),
                    external: true,
                  },
                  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                ].map((it) => (
                  <li key={it.label} className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[color:var(--forest)] text-white">
                      <it.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="kicker">{it.label}</p>
                      {it.href ? (
                        <a
                          href={it.href}
                          target={it.external ? "_blank" : undefined}
                          rel={it.external ? "noopener noreferrer" : undefined}
                          className="mt-1 block text-[color:var(--forest)] hover:text-[color:var(--gold)] transition-colors break-words"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[color:var(--forest)] break-words">{it.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl bg-[color:var(--cream)] p-6">
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-[color:var(--gold)]" />
                  <p className="kicker !text-[color:var(--forest)]">Horário</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-[color:var(--forest)] font-medium">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl bg-white border border-border p-8 sm:p-10 shadow-luxe">
              {sent ? (
                <div className="text-center py-10">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                    <CheckCircle2 className="size-8" />
                  </span>
                  <h3 className="heading-serif mt-6 text-2xl text-[color:var(--forest)]">
                    Obrigado pelo seu contacto.
                  </h3>
                  <p className="mt-2 text-muted-foreground">Responderemos brevemente.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <h3 className="heading-serif text-2xl text-[color:var(--forest)]">
                    Envie-nos uma mensagem
                  </h3>
                  <Field label="Nome" name="name" error={errors.name} />
                  <Field label="Telefone" name="phone" type="tel" error={errors.phone} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Mensagem" name="message" textarea error={errors.message} />
                  <button type="submit" disabled={submitting} className="btn-gold w-full sm:w-auto">
                    <Send className="size-4" />
                    {submitting ? "A enviar..." : "Enviar"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[16/9] bg-[color:var(--cream)]">
              <iframe
                title="Localização da Villa das Palmeiras"
                src={site.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={site.mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MapPin className="size-4" />
                Abrir no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/20 transition";
  return (
    <label className="block">
      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} required aria-invalid={!!error} />
      ) : (
        <input name={name} type={type} className={cls} required aria-invalid={!!error} />
      )}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
