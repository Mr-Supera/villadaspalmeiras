import { createFileRoute } from "@tanstack/react-router";
import { Users, Wifi, Bath, Coffee, MessageCircle, Waves, Car, Tv, Wind, DoorOpen } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { ImageSlideshow } from "../components/ImageSlideshow";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import roomExecutivo from "../assets/quarto-executivo-9.jpg.asset.json";
import qStandard1 from "../assets/quarto-standard-1.jpg.asset.json";
import qStandard2 from "../assets/quarto-standard-2.jpg.asset.json";
import qStandardVarandaFrontal from "../assets/quarto-standard-varanda-frontal.jpg.asset.json";
import qStandardVarandaPrivada from "../assets/quarto-standard-varanda-privada.jpg.asset.json";
import qExec2 from "../assets/quarto-executivo-2.jpg.asset.json";
import qExec4 from "../assets/quarto-executivo-4.jpg.asset.json";
import qExec5 from "../assets/quarto-executivo-5.jpg.asset.json";
import qExecCasaBanho from "../assets/quarto-executivo-casa-banho.jpg.asset.json";

const includedAmenities = [
  { icon: Waves, label: "Piscina" },
  { icon: Car, label: "Estacionamento" },
  { icon: Coffee, label: "Pequeno-almoço" },
  { icon: Wifi, label: "Wi-Fi grátis" },
  { icon: Bath, label: "Casa de banho privada" },
  { icon: Tv, label: "TV" },
  { icon: Wind, label: "Ar condicionado" },
  { icon: Users, label: "Serviço de quarto" },
];

const rooms = [
  {
    name: "Quarto Standard",
    images: [
      { src: qStandard1.url, alt: "Quarto Standard — vista geral" },
      { src: qStandard2.url, alt: "Quarto Standard — cama de casal" },
      { src: qStandardVarandaFrontal.url, alt: "Quarto Standard — varanda frontal" },
      { src: qStandardVarandaPrivada.url, alt: "Quarto Standard — varanda privada" },
    ],
    capacity: "2 pessoas",
    price: "6.500 MT",
    tagline: "Conforto essencial",
    desc: "Uma escolha prática e acolhedora, com todas as comodidades essenciais para uma estadia tranquila. Ambiente sereno, luz natural e um cuidado atento a cada detalhe — ideal para descansar após um dia a explorar Maputo e KaTembe.",
  },
  {
    name: "Quarto Executivo",
    images: [
      { src: qExec5.url, alt: "Quarto Executivo — cama king size" },
      { src: qExec2.url, alt: "Quarto Executivo — vista para a varanda" },
      { src: qExecCasaBanho.url, alt: "Quarto Executivo — vista da casa de banho" },
      { src: qExec4.url, alt: "Quarto Executivo — área de estar" },
    ],
    capacity: "2 pessoas",
    price: "7.500 MT",
    tagline: "Espaço amplo e requintado",
    desc: "Quarto generoso, pensado para quem viaja a negócios ou procura mais espaço para relaxar. Área de trabalho confortável, acabamentos elegantes e uma atmosfera que combina modernidade com o carinho da hospitalidade moçambicana.",
  },
];

export const Route = createFileRoute("/quartos")({
  head: () => ({
    meta: [
      { title: "Quartos & Suítes — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Quarto Standard e Quarto Executivo com Wi-Fi, ar condicionado, TV, casa de banho privada, piscina e pequeno-almoço incluídos. Reserve pelo WhatsApp.",
      },
      { property: "og:title", content: "Quartos da Villa das Palmeiras" },
      { property: "og:description", content: "Duas opções de acomodação elegantes num refúgio entre palmeiras." },
      { property: "og:url", content: "/quartos" },
      { property: "og:image", content: roomExecutivo.url },
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
        image={roomExecutivo.url}
      />

      <section className="py-20 sm:py-28 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Escolha o seu"
              title="Duas formas de viver a Villa"
              description="Duas acomodações cuidadosamente pensadas — cada uma com o seu carácter, todas com o mesmo cuidado."
            />
          </Reveal>
        </div>
      </section>

      {rooms.map((r, i) => {
        const reverse = i % 2 === 1;
        const bg = i % 2 === 0 ? "bg-white" : "bg-[color:var(--cream)]";
        return (
          <section key={r.name} className={`py-20 sm:py-28 ${bg}`}>
            <div className="container-luxe">
              <div
                className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-luxe aspect-[4/3]">
                      <ImageSlideshow images={r.images} intervalMs={3000} className="size-full" />
                    </div>
                    <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[color:var(--gold)] text-white px-6 py-4 rounded-xl shadow-gold">
                      <div className="text-xs uppercase tracking-widest opacity-90">Desde</div>
                      <div className="text-2xl font-semibold heading-serif">{r.price}<span className="text-sm font-normal opacity-90"> / noite</span></div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div>
                    <span className="kicker">{r.tagline}</span>
                    <h2 className="heading-serif mt-4 text-3xl sm:text-4xl md:text-5xl text-[color:var(--forest)]">
                      {r.name}
                    </h2>
                    <div className="mt-5 h-px w-16 bg-[color:var(--gold)]" aria-hidden />

                    <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-semibold text-[color:var(--forest)] heading-serif">
                          {r.price}
                        </span>
                        <span className="text-sm text-muted-foreground">/ noite</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[color:var(--forest)]/5 text-[color:var(--forest)] text-xs font-medium">
                        <Users className="size-3.5 text-[color:var(--gold)]" />
                        {r.capacity}
                      </span>
                    </div>

                    <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {r.desc}
                    </p>

                    <div className="mt-8">
                      <p className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)] mb-4">
                        Incluído no preço
                      </p>
                      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                        {includedAmenities.map((a) => (
                          <li key={a.label} className="flex items-center gap-3 text-sm text-[color:var(--foreground)]">
                            <span className="grid size-9 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] shrink-0">
                              <a.icon className="size-4" />
                            </span>
                            <span className="min-w-0">{a.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10">
                      <a
                        href={whatsappLink(
                          `Olá! Gostaria de reservar o ${r.name} da Villa das Palmeiras (${r.price}/noite).`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold text-base px-8 py-4"
                      >
                        <MessageCircle className="size-5" />
                        Reservar o quarto
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* INFO SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-luxe">
          <Reveal>
            <div className="rounded-2xl bg-[color:var(--forest)] text-white p-8 sm:p-12 text-center">
              <span className="kicker !text-[color:var(--gold-soft)]">Fale connosco</span>
              <h2 className="heading-serif mt-4 text-2xl sm:text-3xl">
                Pronto para viver a Villa das Palmeiras?
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed max-w-2xl mx-auto">
                Consulte a disponibilidade e receba resposta imediata pelo WhatsApp.
                A nossa equipa está pronta para preparar cada detalhe da sua estadia.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={whatsappLink("Olá! Gostaria de consultar disponibilidade na Villa das Palmeiras.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="size-5" />
                  Reservar pelo WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
