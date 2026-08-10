import { createFileRoute } from "@tanstack/react-router";
import { Bird, Heart, Leaf, MessageCircle, Rabbit, Egg, Trees } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import miniZooImgAsset from "../assets/animais-villa-das-palmeiras.png.asset.json";
import poneisAsset from "../assets/zoo-img_0760.jpg.asset.json";
import periquitoAsset from "../assets/zoo-img_0826.png.asset.json";
import sagui1Asset from "../assets/zoo-img_0828.webp.asset.json";
import arasAsset from "../assets/zoo-img_0831.webp.asset.json";
import avestruzAsset from "../assets/zoo-img_0832.webp.asset.json";
import cabritosAsset from "../assets/zoo-img_0861.jpg.asset.json";
import lagoAsset from "../assets/zoo-img_0864.jpg.asset.json";
const miniZooImg = miniZooImgAsset.url;

const gallery = [
  { url: poneisAsset.url, alt: "Póneis a pastar no jardim da Villa das Palmeiras", span: "sm:col-span-2 sm:row-span-2" },
  { url: sagui1Asset.url, alt: "Sagui num poleiro de madeira no mini zoológico", span: "" },
  { url: periquitoAsset.url, alt: "Periquito amarelo junto aos ninhos de madeira", span: "" },
  { url: arasAsset.url, alt: "Araras azuis e amarelas no viveiro", span: "sm:row-span-2" },
  { url: cabritosAsset.url, alt: "Cabritos ao sol no recinto da quinta", span: "sm:col-span-2" },
  { url: avestruzAsset.url, alt: "Avestruz a caminhar no recinto", span: "" },
  { url: lagoAsset.url, alt: "Patos e gansos junto ao lago do mini zoológico", span: "sm:col-span-2" },
];

const animals = [
  {
    icon: Heart,
    title: "Póneis",
    description:
      "Os nossos póneis são uma das atrações preferidas dos hóspedes mais novos. Mansos e habituados à presença de crianças, oferecem momentos de proximidade com a natureza.",
  },
  {
    icon: Bird,
    title: "Araras e periquitos",
    description:
      "Um viveiro cheio de cor e som: araras azuis e amarelas e periquitos que acompanham as manhãs com o seu chilrear.",
  },
  {
    icon: Rabbit,
    title: "Saguis",
    description:
      "Curiosos e ágeis, os saguis saltam entre os troncos do seu recinto sombreado. Observá-los é um pequeno espetáculo.",
  },
  {
    icon: Bird,
    title: "Avestruzes",
    description:
      "Imponentes e serenas, as avestruzes percorrem o seu espaço amplo — uma presença sempre surpreendente para quem visita.",
  },
  {
    icon: Trees,
    title: "Cabritos",
    description:
      "O rebanho de cabritos vive num recinto amplo e cuidado, entre a sombra das árvores e o calor do fim de tarde.",
  },
  {
    icon: Egg,
    title: "Patos e gansos",
    description:
      "Junto ao pequeno lago, patos e gansos convivem em harmonia. Uma cena tranquila que encanta miúdos e graúdos.",
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
