import { createFileRoute } from "@tanstack/react-router";
import { Utensils, Wine, Trees, Users, MessageCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import restaurantImg from "../assets/restaurant.jpg";
import restaurantOutdoor from "../assets/restaurant-outdoor.jpg";
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
            <img
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
                  href={whatsappLink("Olá! Gostaria de receber o menu do restaurante da Villa das Palmeiras.")}
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
        <div className="container-luxe grid gap-6 md:grid-cols-2">
          <Reveal>
            <img
              src={restaurantImg}
              alt="Sala interior do restaurante com toalhas brancas e velas"
              loading="lazy"
              width={1600}
              height={1067}
              className="rounded-2xl object-cover w-full aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={150}>
            <img
              src={restaurantOutdoor}
              alt="Esplanada exterior do restaurante com vista para o mar"
              loading="lazy"
              width={1600}
              height={1067}
              className="rounded-2xl object-cover w-full aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
