import { createFileRoute } from "@tanstack/react-router";
import { Utensils, Wine, Trees, Users, MessageCircle, Star, Award, Sparkles, Leaf, HeartHandshake } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import restaurantImgAsset from "../assets/villa-das-palmeiras-pratos-3.png.asset.json";
const restaurantImg = restaurantImgAsset.url;

import restaurantDishesAsset from "../assets/villa-das-palmeiras-pratos-2.png.asset.json";
const restaurantDishes = restaurantDishesAsset.url;


export const Route = createFileRoute("/restaurante")({
  head: () => ({
    meta: [
      { title: "Restaurante — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Cozinha nacional e internacional num ambiente acolhedor. Sala interior elegante e esplanada à sombra das palmeiras.",
      },
      { property: "og:title", content: "Restaurante da Villa das Palmeiras" },
      { property: "og:description", content: "Sabores que contam histórias, em ambiente familiar." },
      { property: "og:url", content: "/restaurante" },
      { property: "og:image", content: restaurantImg },
    ],
    links: [{ rel: "canonical", href: "/restaurante" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Villa das Palmeiras — Restaurante",
          servesCuisine: ["Moçambicana", "Internacional"],
          priceRange: "$$",
          acceptsReservations: "True",
        }),
      },
    ],
  }),
  component: Restaurante,
});

function Restaurante() {
  return (
    <>
      <PageHero
        kicker="O nosso restaurante"
        title="Sabores que contam histórias"
        subtitle="Cozinha nacional e internacional, num ambiente quente e familiar."
        image={restaurantImg}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img decoding="async"
              src={restaurantDishes}
              alt="Seleção de pratos moçambicanos e internacionais do restaurante da Villa das Palmeiras"
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
                kicker="Cozinha & ambiente"
                title="Uma mesa para cada momento"
                description="Da refeição em família ao jantar romântico, da pausa rápida ao encontro de amigos — temos sempre um lugar para si. Trabalhamos com produtos frescos e técnicas que valorizam cada ingrediente."
              />
              <ul className="mt-8 grid gap-3 text-sm">
                {[
                  { icon: Users, label: "Ambiente familiar e acolhedor" },
                  { icon: Utensils, label: "Comida nacional e internacional" },
                  { icon: Wine, label: "Carta de bebidas selecionada" },
                  { icon: Trees, label: "Área ao ar livre à sombra das palmeiras" },
                ].map((it) => (
                  <li key={it.label} className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                      <it.icon className="size-4" />
                    </span>
                    {it.label}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://villa-menu-flow.base44.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="size-4" />
                  Ver Menu
                </a>
                <a
                  href={whatsappLink("Olá! Gostaria de reservar uma mesa no restaurante da Villa das Palmeiras.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-forest"
                >
                  Reservar mesa
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              align="center"
              kicker="Porque escolher-nos"
              title="Compromisso com a excelência"
              description="Cada detalhe é pensado para oferecer uma experiência gastronómica inesquecível, do primeiro ao último momento."
            />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Star, title: "Serviço de excelência", description: "Atendimento atencioso e personalizado para cada hóspede." },
              { icon: Award, title: "Chefe de cozinha nota 5", description: "Pratos elaborados por um chef experiente e apaixonado pela gastronomia." },
              { icon: Sparkles, title: "Limpeza impecável", description: "Ambientes cuidados e higienizados segundo os mais altos padrões." },
              { icon: Leaf, title: "Ingredientes frescos", description: "Produtos seleccionados e locais que valorizam o sabor autêntico." },
              { icon: HeartHandshake, title: "Ambiente acolhedor", description: "Um espaço familiar e tranquilo, ideal para qualquer ocasião." },
              { icon: Wine, title: "Carta de bebidas refinada", description: "Vinhos, cocktails e bebidas que harmonizam perfeitamente com a refeição." },
            ].map((it) => (
              <Reveal key={it.title} delay={100}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-subtle">
                  <span className="grid size-12 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                    <it.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-[color:var(--forest)]">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--gray)]">{it.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
