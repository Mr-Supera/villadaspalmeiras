import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { PartyPopper, Trees, DoorClosed, Sparkles, MessageCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
const Lightbox = lazy(() => import("../components/Lightbox").then((m) => ({ default: m.Lightbox })));
import { whatsappLink } from "../lib/site";
import eventosHeroAsset from "../assets/eventos-hero.webp.asset.json";
import imgBaloes from "../assets/evento-baloes.jpg.asset.json";
import imgMesaPosta from "../assets/evento-mesa-posta.jpg.asset.json";
import imgSalaoVazio from "../assets/evento-salao-vazio.jpg.asset.json";
import imgMesaDetalhe from "../assets/evento-mesa-detalhe.jpg.asset.json";
import imgSalaoDecorado from "../assets/evento-salao-decorado.jpg.asset.json";
import imgPergula1 from "../assets/evento-pergula-1.webp.asset.json";
import imgPergula2 from "../assets/evento-pergula-2.webp.asset.json";
import imgInsuflavel from "../assets/evento-insuflavel.webp.asset.json";
import imgArLivre from "../assets/evento-ar-livre.webp.asset.json";

const spaces = [
  {
    icon: PartyPopper,
    title: "Salão de Festas",
    text: "Amplo e aconchegante, acomoda confortavelmente até 400 pessoas e conta com 2 bares integrados.",
  },
  {
    icon: Trees,
    title: "Área ao Ar Livre e Pérgula",
    text: "Ambientes externos ideais para cerimónias, receções e eventos ao ar livre.",
  },
  {
    icon: DoorClosed,
    title: "Sala Privada",
    text: "Espaço reservado para reuniões ou comemorações mais íntimas.",
  },
  {
    icon: Sparkles,
    title: "Infraestrutura",
    text: "Casas de banho modernas, bem equipadas e impecavelmente limpas.",
  },
];

/** Scattered collage: varying spans, rotations and subtle overlaps. */
const photos = [
  { src: imgSalaoVazio.url, alt: "Salão de festas com teto de colmo", cls: "sm:col-span-7 aspect-[4/3]", rot: "-rotate-2", mt: "" },
  { src: imgMesaDetalhe.url, alt: "Mesa posta com detalhes dourados", cls: "sm:col-span-5 aspect-[4/5]", rot: "rotate-2", mt: "sm:mt-12 sm:-ml-4" },
  { src: imgSalaoDecorado.url, alt: "Salão decorado para evento", cls: "sm:col-span-6 aspect-[3/2]", rot: "rotate-1", mt: "sm:-mt-6" },
  { src: imgPergula1.url, alt: "Pérgula com mesas preparadas", cls: "sm:col-span-4 aspect-[2/3]", rot: "-rotate-3", mt: "sm:mt-10" },
  { src: imgBaloes.url, alt: "Arco de balões na entrada do salão", cls: "sm:col-span-2 aspect-square", rot: "rotate-3", mt: "sm:mt-24" },
  { src: imgArLivre.url, alt: "Área ao ar livre com pérgula de madeira", cls: "sm:col-span-7 aspect-[16/10]", rot: "rotate-1", mt: "sm:-mt-10" },
  { src: imgMesaPosta.url, alt: "Mesa comprida com decoração floral", cls: "sm:col-span-5 aspect-[5/4]", rot: "-rotate-2", mt: "sm:mt-14 sm:-ml-3" },
  { src: imgPergula2.url, alt: "Buffet e mesas sob a pérgula", cls: "sm:col-span-6 aspect-[3/2]", rot: "-rotate-1", mt: "sm:-mt-4" },
  { src: imgInsuflavel.url, alt: "Insuflável no jardim para festas infantis", cls: "sm:col-span-6 aspect-[3/2]", rot: "rotate-2", mt: "sm:mt-8" },
];

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Espaços versáteis para eventos na Villa das Palmeiras: salão de festas até 400 pessoas com 2 bares, área ao ar livre com pérgula e sala privada.",
      },
      { property: "og:title", content: "Eventos na Villa das Palmeiras" },
      { property: "og:description", content: "Espaços versáteis para celebrações inesquecíveis em Moçambique." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/eventos" },
      { property: "og:image", content: eventosHeroAsset.url },
      { name: "twitter:image", content: eventosHeroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: Eventos,
});

function Eventos() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <PageHero
        kicker="Espaço para eventos"
        title="Celebrações memoráveis"
        subtitle="Contamos com vários espaços versáteis para a realização de eventos na Villa Das Palmeiras."
        image={eventosHeroAsset.url}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Os nossos espaços"
              title="Um espaço para cada ocasião"
              description="Contamos com vários espaços versáteis para a realização de eventos na Villa Das Palmeiras."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-[color:var(--cream)] p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-[color:var(--gold)] text-white">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="heading-serif mt-4 text-2xl text-[color:var(--forest)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle kicker="Galeria" title="Momentos na Villa" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-12 sm:gap-6">
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 4) * 70} className={`${p.cls} ${p.mt}`}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Ampliar imagem: ${p.alt}`}
                  className={`group block h-full w-full overflow-hidden rounded-2xl shadow-[var(--shadow-luxe)] transition-transform duration-500 ${p.rot} hover:rotate-0 hover:z-10 relative`}
                >
                  <img height={1067} width={1600} decoding="async"
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {p.alt}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <a
                href={whatsappLink("Olá! Gostaria de solicitar um orçamento para um evento na Villa das Palmeiras.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="size-4" />
                Solicitar Orçamento
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {lightbox !== null && (
        <Suspense fallback={null}>
          <Lightbox
            images={photos.map((p) => ({ src: p.src, alt: p.alt }))}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onIndexChange={setLightbox}
          />
        </Suspense>
      )}
    </>
  );
}
