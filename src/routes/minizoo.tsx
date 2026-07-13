import { createFileRoute } from "@tanstack/react-router";
import { Bird, Heart, Leaf, MessageCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import miniZooImg from "../assets/mini-zoo.jpg";

const animals = [
  {
    icon: Horse,
    title: "Cavalos",
    description:
      "O nosso pequeno cavalo é uma das atrações preferidas dos hóspedes mais novos. Manso e habituado à presença de crianças, oferece momentos de proximidade com a natureza.",
  },
  {
    icon: Bird,
    title: "Ganços",
    description:
      "Elegantes e curiosos, os ganços passeiam pelo jardim com toda a calma. São parte da paisagem sonora e visual do mini zoológico.",
  },
  {
    icon: Duck,
    title: "Patos",
    description:
      "Os patos vivem junto ao pequeno lago, acompanhados pelos seus patinhos. Uma cena tranquila que encanta miúdos e graúdos.",
  },
];

export const Route = createFileRoute("/minizoo")({
  head: () => ({
    meta: [
      { title: "Mini Zoológico — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Visite o mini zoológico da Villa das Palmeiras: cavalos, ganços e patos num ambiente seguro e tranquilo em Moçambique. Ideal para famílias.",
      },
      { property: "og:title", content: "Mini Zoológico na Villa das Palmeiras" },
      {
        property: "og:description",
        content: "Cavalos, ganços e patos num canto verde e sereno do nosso refúgio em Moçambique.",
      },
      { property: "og:url", content: "/minizoo" },
      { property: "og:image", content: miniZooImg },
    ],
    links: [{ rel: "canonical", href: "/minizoo" }],
  }),
  component: Minizoo,
});

function Minizoo() {
  return (
    <>
      <PageHero
        kicker="Para toda a família"
        title="Mini Zoológico"
        subtitle="Um canto verde onde crianças e adultos se encontram com a natureza."
        image={miniZooImg}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src={miniZooImg}
              alt="Cavalo branco, ganços e patos no jardim tropical da Villa das Palmeiras"
              loading="lazy"
              width={1600}
              height={1067}
              className="rounded-2xl shadow-luxe object-cover w-full aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <SectionTitle
                align="left"
                kicker="Natureza em família"
                title="Um espaço para descobrir, respeitar e sorrir"
                description="O mini zoológico da Villa das Palmeiras nasceu da vontade de partilhar com os nossos hóspedes um pedacinho de vida animal. Num ambiente seguro, limpo e cuidado, crianças e adultos podem observar de perto os nossos amigos de quatro patas e penas."
              />
              <ul className="mt-8 grid gap-3 text-sm">
                {[
                  { icon: Heart, label: "Ambiente seguro e acolhedor para crianças" },
                  { icon: Leaf, label: "Jardim natural com sombra de palmeiras" },
                  { icon: Bird, label: "Animais bem cuidados e habituados à visita" },
                ].map((it) => (
                  <li key={it.label} className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                      <it.icon className="size-4" />
                    </span>
                    {it.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Os nossos animais"
              title="Conheça os habitantes do mini zoológico"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {animals.map((a, i) => (
              <Reveal key={a.title} delay={i * 120}>
                <article className="rounded-2xl bg-white p-8 h-full hover:shadow-luxe transition-shadow">
                  <span className="grid size-14 place-items-center rounded-full bg-[color:var(--forest)]/5 text-[color:var(--forest)]">
                    <a.icon className="size-6" />
                  </span>
                  <h3 className="heading-serif mt-6 text-2xl text-[color:var(--forest)]">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-luxe text-center">
          <Reveal>
            <span className="kicker">Visite-nos</span>
            <h2 className="heading-serif mt-4 text-3xl sm:text-5xl text-[color:var(--forest)]">
              Venha conhecer o mini zoológico
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Uma experiência tranquila e educativa para toda a família. Fale connosco pelo WhatsApp para saber mais sobre visitas e horários.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink("Olá! Gostaria de saber mais sobre o mini zoológico da Villa das Palmeiras.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="size-4" />
                Saber mais pelo WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
