import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { Lightbox } from "../components/Lightbox";

import galeriaHeroAsset from "../assets/galeria-hero.jpg.asset.json";
const heroImg = galeriaHeroAsset.url;
import roomSuite from "../assets/room-suite.jpg";
import roomDouble from "../assets/room-double.jpg";
import roomSingle from "../assets/room-single.jpg";
import roomFamily from "../assets/room-family.jpg";
import restaurantImg from "../assets/restaurant.jpg";
import restaurantOutdoor from "../assets/restaurant-outdoor.jpg";
import foodImg from "../assets/food.jpg";
import poolImg from "../assets/pool.jpg";
import gardenImg from "../assets/garden.jpg";
import lobbyImg from "../assets/lobby.jpg";
import eventWedding from "../assets/event-wedding.jpg";
import eventConference from "../assets/event-conference.jpg";
import eventBirthday from "../assets/event-birthday.jpg";

type Cat = "Todos" | "Hotel" | "Quartos" | "Restaurante" | "Piscina" | "Eventos" | "Exterior";

const items: { src: string; alt: string; cat: Exclude<Cat, "Todos"> }[] = [
  { src: heroImg, alt: "Villa das Palmeiras ao pôr do sol", cat: "Hotel" },
  { src: lobbyImg, alt: "Lobby principal", cat: "Hotel" },
  { src: roomSuite, alt: "Suíte de Luxo", cat: "Quartos" },
  { src: roomDouble, alt: "Quarto Duplo", cat: "Quartos" },
  { src: roomSingle, alt: "Quarto Individual", cat: "Quartos" },
  { src: roomFamily, alt: "Quarto Familiar", cat: "Quartos" },
  { src: restaurantImg, alt: "Restaurante interior", cat: "Restaurante" },
  { src: restaurantOutdoor, alt: "Esplanada do restaurante", cat: "Restaurante" },
  { src: foodImg, alt: "Prato gourmet", cat: "Restaurante" },
  { src: poolImg, alt: "Piscina ao pôr do sol", cat: "Piscina" },
  { src: eventWedding, alt: "Casamento ao ar livre", cat: "Eventos" },
  { src: eventConference, alt: "Sala de conferências", cat: "Eventos" },
  { src: eventBirthday, alt: "Salão de festas", cat: "Eventos" },
  { src: gardenImg, alt: "Jardim tropical", cat: "Exterior" },
];

const cats: Cat[] = ["Todos", "Hotel", "Quartos", "Restaurante", "Piscina", "Eventos", "Exterior"];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Explore a galeria da Villa das Palmeiras: hotel, quartos, restaurante, piscina, eventos e exterior.",
      },
      { property: "og:title", content: "Galeria da Villa das Palmeiras" },
      { property: "og:description", content: "Imagens do nosso hotel, restaurante e eventos." },
      { property: "og:url", content: "/galeria" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  const [filter, setFilter] = useState<Cat>("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "Todos" ? items : items.filter((i) => i.cat === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        kicker="Galeria"
        title="Imagens que falam por nós"
        subtitle="Explore os espaços que tornam a Villa das Palmeiras um refúgio único."
        image={heroImg}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle kicker="Filtrar" title="Por categoria" />
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2 rounded-full text-sm transition-colors border ${
                    filter === c
                      ? "bg-[color:var(--forest)] text-white border-[color:var(--forest)]"
                      : "bg-white text-[color:var(--forest)] border-border hover:border-[color:var(--gold)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, i) => (
              <Reveal key={img.src + i} delay={i * 40}>
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full aspect-[4/5] overflow-hidden rounded-2xl"
                  aria-label={`Ampliar imagem: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="size-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-4 left-4 right-4 text-left text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          images={filtered.map((i) => ({ src: i.src, alt: i.alt }))}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      )}
    </>
  );
}
