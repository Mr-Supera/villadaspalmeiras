import { createFileRoute } from "@tanstack/react-router";
import { Users, Wifi, Snowflake, Tv, Bath, Coffee, MessageCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import roomSuite from "../assets/room-suite.jpg";
import roomDouble from "../assets/room-double.jpg";
import roomSingle from "../assets/room-single.jpg";
import roomFamily from "../assets/room-family.jpg";
import roomStandard from "../assets/room-standard.jpg";
import roomExecutivo from "../assets/room-executivo.jpg";
import roomCasaVerde from "../assets/room-casa-verde.jpg";

const features = [
  { icon: Wifi, label: "Wi-Fi grátis" },
  { icon: Snowflake, label: "Ar condicionado" },
  { icon: Tv, label: "TV" },
  { icon: Bath, label: "Casa de banho privada" },
  { icon: Coffee, label: "Pequeno-almoço" },
];

const rooms = [
  {
    name: "Suíte de Luxo",
    img: roomSuite,
    capacity: "2 pessoas",
    desc: "A nossa suíte mais espaçosa — cama king-size, sala de estar, varanda privada e vista para o jardim tropical.",
  },
  {
    name: "Quarto Duplo",
    img: roomDouble,
    capacity: "2 pessoas",
    desc: "Confortável e elegante, com duas camas e toda a comodidade para uma estadia tranquila.",
  },
  {
    name: "Quarto Individual",
    img: roomSingle,
    capacity: "1 pessoa",
    desc: "Pensado para quem viaja sozinho, com secretária de trabalho e iluminação natural.",
  },
  {
    name: "Quarto Familiar",
    img: roomFamily,
    capacity: "4 pessoas",
    desc: "Amplo e versátil, ideal para famílias que procuram conforto e espaço para todos.",
  },
];

export const Route = createFileRoute("/quartos")({
  head: () => ({
    meta: [
      { title: "Quartos — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Suítes e quartos elegantes com ar condicionado, Wi-Fi, TV, casa de banho privada e pequeno-almoço. Reserve pelo WhatsApp.",
      },
      { property: "og:title", content: "Quartos da Villa das Palmeiras" },
      { property: "og:description", content: "Suítes confortáveis num refúgio entre palmeiras." },
      { property: "og:url", content: "/quartos" },
      { property: "og:image", content: roomSuite },
    ],
    links: [{ rel: "canonical", href: "/quartos" }],
  }),
  component: Quartos,
});

function Quartos() {
  return (
    <>
      <PageHero
        kicker="Hospedagem"
        title="Quartos & Suítes"
        subtitle="Espaços luminosos e silenciosos, com tudo o que precisa para descansar verdadeiramente."
        image={roomSuite}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Escolha o seu"
              title="Conforto em cada detalhe"
              description="Todos os quartos incluem Wi-Fi, ar condicionado, TV, casa de banho privada e pequeno-almoço."
            />
          </Reveal>

          <ul className="mt-16 grid gap-10">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} as="li">
                <article
                  className={`grid gap-8 lg:grid-cols-2 items-center bg-white rounded-2xl overflow-hidden border border-border ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden lg:aspect-auto aspect-[4/3] group">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      width={1600}
                      height={1067}
                      className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 sm:p-12">
                    <span className="kicker">Quarto</span>
                    <h2 className="heading-serif mt-3 text-3xl sm:text-4xl text-[color:var(--forest)]">
                      {r.name}
                    </h2>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="size-4 text-[color:var(--gold)]" /> {r.capacity}
                    </p>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{r.desc}</p>

                    <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                      {features.map((f) => (
                        <li key={f.label} className="flex items-center gap-2">
                          <f.icon className="size-4 text-[color:var(--gold)]" />
                          {f.label}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappLink(`Olá! Gostaria de pedir informações sobre o ${r.name} da Villa das Palmeiras.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold mt-8 text-sm"
                    >
                      <MessageCircle className="size-4" />
                      Pedir Informações
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
