import { createFileRoute } from "@tanstack/react-router";
import { Heart, Eye, Compass, Leaf, Smile, UtensilsCrossed, Sparkles, BedDouble, ShieldCheck, MapPin } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import aboutImgAsset from "../assets/sobre-piscina.jpg.asset.json";
const aboutImg = aboutImgAsset.url;
import lobbyImgAsset from "../assets/sobre-edificio.jpg.asset.json";
const lobbyImg = lobbyImgAsset.url;

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Conheça a história, missão, visão e valores da Villa das Palmeiras — um refúgio em Moçambique dedicado à hospitalidade e ao bem-estar.",
      },
      { property: "og:title", content: "Sobre a Villa das Palmeiras" },
      { property: "og:description", content: "História, missão, visão e valores do nosso refúgio em Moçambique." },
      { property: "og:url", content: "/sobre" },
      { property: "og:image", content: aboutImg },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero
        kicker="A nossa essência"
        title="Hospitalidade entre palmeiras"
        subtitle="Mais do que um hotel — um lugar onde cada detalhe é pensado para o seu bem-estar."
        image={aboutImg}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src={lobbyImg}
              alt="Vista exterior da Villa das Palmeiras rodeada de jardim tropical"
              loading="lazy"
              width={1600}
              height={1067}
              className="rounded-2xl shadow-luxe object-cover w-full aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <SectionTitle
                align="left"
                kicker="A nossa história"
                title="Um refúgio nascido do detalhe"
                description="Inspirada pela serenidade das palmeiras e pela calorosa hospitalidade moçambicana, a Villa das Palmeiras foi pensada para acolher quem procura conforto, gastronomia e celebrações memoráveis. Cada espaço resulta de uma escolha cuidada — desde o desenho dos quartos ao serviço atento da nossa equipa."
              />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Recebemos hóspedes em viagens de lazer, encontros familiares, retiros corporativos e celebrações únicas. Acreditamos que a verdadeira hospitalidade está nos pequenos gestos — e é isso que nos move todos os dias.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Princípios"
              title="Missão, visão e valores"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Compass,
                kicker: "Missão",
                title: "Acolher com excelência",
                text: "Oferecer experiências de hospedagem, gastronomia e eventos que superem expectativas, com atenção genuína a cada hóspede.",
              },
              {
                icon: Eye,
                kicker: "Visão",
                title: "Referência em Moçambique",
                text: "Ser reconhecida como um espaço de eleição para descanso, celebrações e encontros, pela qualidade, conforto e atendimento.",
              },
              {
                icon: Heart,
                kicker: "Valores",
                title: "Cuidado, autenticidade, detalhe",
                text: "Respeito pelas pessoas, paixão pelo que fazemos e atenção ao detalhe que transforma cada estadia numa memória.",
              },
            ].map((v, i) => (
              <Reveal key={v.kicker} delay={i * 120}>
                <div className="rounded-2xl bg-white p-8 h-full hover:shadow-luxe transition-shadow">
                  <span className="grid size-12 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                    <v.icon className="size-5" />
                  </span>
                  <p className="kicker mt-6">{v.kicker}</p>
                  <h3 className="heading-serif mt-2 text-2xl text-[color:var(--forest)]">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Diferenciais"
              title="Porquê escolher a Villa das Palmeiras"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Leaf, title: "Ambiente tranquilo", text: "Jardins, palmeiras e silêncio para descansar verdadeiramente." },
              { icon: Smile, title: "Atendimento atencioso", text: "Uma equipa que conhece o seu nome e antecipa o que precisa." },
              { icon: UtensilsCrossed, title: "Restaurante próprio", text: "Cozinha nacional e internacional, sempre fresca e cuidada." },
              { icon: Sparkles, title: "Espaço para eventos", text: "Salões versáteis para casamentos, conferências e celebrações." },
              { icon: BedDouble, title: "Quartos confortáveis", text: "Ar condicionado, Wi-Fi, TV e camas pensadas para o descanso." },
              { icon: ShieldCheck, title: "Segurança 24h", text: "Vigilância permanente para a tranquilidade dos nossos hóspedes." },
              { icon: MapPin, title: "Localização privilegiada", text: "Acessos fáceis e arredores que convidam a explorar." },
              { icon: Heart, title: "Detalhes que importam", text: "Pequenos toques que fazem a diferença no seu dia." },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="rounded-2xl border border-border p-6 h-full bg-white hover:border-[color:var(--gold)] transition-colors">
                  <span className="grid size-11 place-items-center rounded-full bg-[color:var(--forest)] text-white">
                    <d.icon className="size-5" />
                  </span>
                  <h3 className="heading-serif mt-5 text-xl text-[color:var(--forest)]">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 text-white overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        width={1600}
        height={1067}
      />
      <div className="absolute inset-0 bg-[color:var(--forest-deep)]/75" aria-hidden />
      <div className="relative container-luxe text-center">
        <span className="kicker !text-[color:var(--gold-soft)]">{kicker}</span>
        <h1 className="heading-serif mt-4 text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}
