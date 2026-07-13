import { createFileRoute } from "@tanstack/react-router";
import { Users, Wifi, Tv, Bath, Coffee, MessageCircle, Waves, Car, CalendarCheck } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import roomStandard from "../assets/room-standard.jpg";
import roomExecutivo from "../assets/room-executivo.jpg";
import roomCasaVerde from "../assets/room-casa-verde.jpg";

const includedAmenities = [
  { icon: Waves, label: "Piscina" },
  { icon: Car, label: "Estacionamento" },
  { icon: Coffee, label: "Pequeno-almoço" },
  { icon: Wifi, label: "WIFI" },
];

const standardFeatures = [
  { icon: Wifi, label: "Wi-Fi grátis" },
  { icon: Bath, label: "Casa de banho privada" },
  { icon: Tv, label: "TV" },
];

const rooms = [
  {
    name: "Quarto Standard",
    img: roomStandard,
    capacity: "2 pessoas",
    price: "6.500 MT",
    shortDesc: "Conforto e elegância essencial para a sua estadia.",
    desc: "Uma escolha prática e acolhedora, com todas as comodidades essenciais para uma estadia confortável.",
    amenities: includedAmenities,
    featured: true,
  },
  {
    name: "Quarto Executivo",
    img: roomExecutivo,
    capacity: "2 pessoas",
    price: "7.500 MT",
    shortDesc: "Espaço amplo e comodidades premium para quem viaja a negócios ou lazer.",
    desc: "Quarto amplo com área de trabalho, ideal para quem viaja a negócios ou prefere um espaço requintado.",
    amenities: includedAmenities,
    featured: true,
  },
  {
    name: "Casa Verde",
    img: roomCasaVerde,
    capacity: "2-3 pessoas",
    price: "8.500 MT",
    shortDesc: "A nossa opção mais exclusiva, com máxima privacidade e imersão na natureza.",
    desc: "Bungalow independente rodeado de jardim tropical, com varanda privada e atmosfera rústica e serena.",
    amenities: includedAmenities,
    featured: true,
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
      { property: "og:image", content: roomCasaVerde },
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
        image={roomCasaVerde}
      />

      <section className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Escolha o seu"
              title="Conforto em cada detalhe"
              description="Todos os quartos incluem Wi-Fi, ar condicionado, TV, casa de banho privada e pequeno-almoço."
            />
          </Reveal>

          <ul className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} as="li">
                <article className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[color:var(--border)] shadow-luxe transition-all duration-500 hover:-translate-y-1 hover:shadow-gold">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      width={1600}
                      height={1067}
                      className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[color:var(--forest)] text-xs font-medium shadow-sm">
                        <Users className="size-3.5 text-[color:var(--gold)]" />
                        {r.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6 sm:p-8">
                    <span className="kicker">Acomodação</span>
                    <h2 className="heading-serif mt-3 text-2xl sm:text-3xl text-[color:var(--forest)]">
                      {r.name}
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {r.shortDesc}
                    </p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-semibold text-[color:var(--forest)]">
                        {r.price}
                      </span>
                      <span className="text-sm text-muted-foreground">/ noite</span>
                    </div>

                    <div className="mt-6 pt-6 border-t border-[color:var(--border)]">
                      <p className="text-xs font-medium uppercase tracking-wider text-[color:var(--gold)] mb-3">
                        Incluído no preço
                      </p>
                      <ul className="grid grid-cols-2 gap-3">
                        {r.amenities.map((a) => (
                          <li key={a.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="grid size-8 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] shrink-0">
                              <a.icon className="size-4" />
                            </span>
                            {a.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-auto">
                      <a
                        href={whatsappLink(
                          `Olá! Gostaria de reservar o ${r.name} da Villa das Palmeiras por ${r.price}/noite.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold flex-1 text-sm"
                      >
                        <MessageCircle className="size-4" />
                        Reservar Agora
                      </a>
                      <a
                        href={whatsappLink(
                          `Olá! Gostaria de ver disponibilidade para o ${r.name} da Villa das Palmeiras.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-forest flex-1 text-sm"
                      >
                        <CalendarCheck className="size-4" />
                        Ver Disponibilidade
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal>
            <div className="rounded-2xl bg-[color:var(--forest)] text-white p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <span className="kicker !text-[color:var(--gold-soft)]">Informações</span>
                  <h2 className="heading-serif mt-4 text-2xl sm:text-3xl">
                    Tudo pensado para a sua estadia
                  </h2>
                  <p className="mt-4 text-white/80 leading-relaxed">
                    Todos os preços incluem acesso à piscina, estacionamento, pequeno-almoço e Wi-Fi.
                    Solicite já a sua disponibilidade e viva uma experiência inesquecível na Villa das Palmeiras.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {standardFeatures.map((f) => (
                    <div key={f.label} className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 text-center">
                      <span className="grid size-10 place-items-center rounded-full bg-[color:var(--gold)]/20 text-[color:var(--gold-soft)]">
                        <f.icon className="size-5" />
                      </span>
                      <span className="text-sm text-white/90">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
