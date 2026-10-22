import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { Lightbox } from "../components/Lightbox";

import galeriaHeroAsset from "../assets/galeria-hero.jpg.asset.json";
const heroImg = galeriaHeroAsset.url;
import sobreEdificio from "../assets/sobre-edificio.jpg.asset.json";
import contactosExterior from "../assets/contactos-exterior.jpg.asset.json";
import quartoStd1 from "../assets/quarto-standard-1.jpg.asset.json";
import quartoStd2 from "../assets/quarto-standard-2.jpg.asset.json";
import quartoStdVarandaFrontal from "../assets/quarto-standard-varanda-frontal.jpg.asset.json";
import quartoStdVarandaPrivada from "../assets/quarto-standard-varanda-privada.jpg.asset.json";
import quartoExec2 from "../assets/quarto-executivo-2.jpg.asset.json";
import quartoExec4 from "../assets/quarto-executivo-4.jpg.asset.json";
import quartoExec5 from "../assets/quarto-executivo-5.jpg.asset.json";
import quartoExec9 from "../assets/quarto-executivo-9.jpg.asset.json";
import quartoExecBanho from "../assets/quarto-executivo-casa-banho.jpg.asset.json";
import restauranteHero from "../assets/restaurant-hero.jpg.asset.json";
import pratos from "../assets/villa-das-palmeiras-pratos.png.asset.json";
import pratos2 from "../assets/villa-das-palmeiras-pratos-2.png.asset.json";
import pratos3 from "../assets/villa-das-palmeiras-pratos-3.png.asset.json";
import piscina1 from "../assets/piscina-img_0806-2.jpg.asset.json";
import piscina2 from "../assets/piscina-img_0807.jpg.asset.json";
import piscina3 from "../assets/piscina-img_0816.jpg.asset.json";
import piscina4 from "../assets/piscina-img_0817.jpg.asset.json";
import piscina5 from "../assets/piscina-img_0870.jpg.asset.json";
import piscinaSobre from "../assets/sobre-piscina.jpg.asset.json";
import villaPoolReal from "../assets/villa-pool-real.jpg.asset.json";
import villaPoolGarden from "../assets/villa-pool-garden.jpg.asset.json";
import villaGardenPool from "../assets/villa-garden-pool.jpg.asset.json";
import eventoBaloes from "../assets/evento-baloes.jpg.asset.json";
import eventoMesaPosta from "../assets/evento-mesa-posta.jpg.asset.json";
import eventoMesaDetalhe from "../assets/evento-mesa-detalhe.jpg.asset.json";
import eventoSalaoDecorado from "../assets/evento-salao-decorado.jpg.asset.json";
import eventoSalaoVazio from "../assets/evento-salao-vazio.jpg.asset.json";
import eventoPergula1 from "../assets/evento-pergula-1.webp.asset.json";
import eventoPergula2 from "../assets/evento-pergula-2.webp.asset.json";
import eventoArLivre from "../assets/evento-ar-livre.webp.asset.json";
import eventoInsuflavel from "../assets/evento-insuflavel.webp.asset.json";
import eventoMesaRosa from "../assets/evento-img_1567.webp.asset.json";
import eventoBilhar from "../assets/evento-img_1597.webp.asset.json";
import eventoBebida from "../assets/evento-img_1627.webp.asset.json";
import eventoPergulaFesta from "../assets/evento-img_1662.webp.asset.json";

type Cat = "Todos" | "Hotel" | "Quartos" | "Restaurante" | "Piscina" | "Eventos";

const items: { src: string; alt: string; cat: Exclude<Cat, "Todos"> }[] = [
  { src: heroImg, alt: "Villa das Palmeiras", cat: "Hotel" },
  { src: sobreEdificio.url, alt: "Edifício da Villa das Palmeiras", cat: "Hotel" },
  { src: contactosExterior.url, alt: "Exterior dos quartos", cat: "Hotel" },
  { src: quartoStd1.url, alt: "Quarto Standard", cat: "Quartos" },
  { src: quartoStd2.url, alt: "Quarto Standard", cat: "Quartos" },
  { src: quartoStdVarandaFrontal.url, alt: "Quarto Standard — varanda frontal", cat: "Quartos" },
  { src: quartoStdVarandaPrivada.url, alt: "Quarto Standard — varanda privada", cat: "Quartos" },
  { src: quartoExec2.url, alt: "Quarto Executivo", cat: "Quartos" },
  { src: quartoExec4.url, alt: "Quarto Executivo", cat: "Quartos" },
  { src: quartoExec5.url, alt: "Quarto Executivo", cat: "Quartos" },
  { src: quartoExec9.url, alt: "Quarto Executivo", cat: "Quartos" },
  { src: quartoExecBanho.url, alt: "Quarto Executivo — casa de banho", cat: "Quartos" },
  { src: restauranteHero.url, alt: "Restaurante", cat: "Restaurante" },
  { src: pratos.url, alt: "Pratos da Villa das Palmeiras", cat: "Restaurante" },
  { src: pratos2.url, alt: "Mariscos e saladas", cat: "Restaurante" },
  { src: pratos3.url, alt: "Seleção de pratos", cat: "Restaurante" },
  { src: piscina1.url, alt: "Piscina com mural marinho", cat: "Piscina" },
  { src: piscina2.url, alt: "Piscina e espreguiçadeiras", cat: "Piscina" },
  { src: piscina3.url, alt: "Piscina rodeada de palmeiras", cat: "Piscina" },
  { src: piscina4.url, alt: "Piscina e zona de convívio", cat: "Piscina" },
  { src: piscina5.url, alt: "Piscina ao sol", cat: "Piscina" },
  { src: piscinaSobre.url, alt: "Piscina da Villa das Palmeiras", cat: "Piscina" },
  { src: villaPoolReal.url, alt: "Piscina e jardim", cat: "Piscina" },
  { src: villaPoolGarden.url, alt: "Piscina e jardim tropical", cat: "Piscina" },
  { src: villaGardenPool.url, alt: "Jardim e piscina", cat: "Piscina" },
  { src: eventoBaloes.url, alt: "Decoração com balões", cat: "Eventos" },
  { src: eventoMesaPosta.url, alt: "Mesa posta para evento", cat: "Eventos" },
  { src: eventoMesaDetalhe.url, alt: "Detalhe da mesa", cat: "Eventos" },
  { src: eventoSalaoDecorado.url, alt: "Salão decorado", cat: "Eventos" },
  { src: eventoSalaoVazio.url, alt: "Salão de festas", cat: "Eventos" },
  { src: eventoPergula1.url, alt: "Pérgula para eventos", cat: "Eventos" },
  { src: eventoPergula2.url, alt: "Pérgula com mesas", cat: "Eventos" },
  { src: eventoArLivre.url, alt: "Evento ao ar livre", cat: "Eventos" },
  { src: eventoInsuflavel.url, alt: "Insuflável para crianças", cat: "Eventos" },
  { src: eventoMesaRosa.url, alt: "Mesa decorada em rosa na pérgula", cat: "Eventos" },
  { src: eventoBilhar.url, alt: "Mesa de bilhar no salão", cat: "Eventos" },
  { src: eventoBebida.url, alt: "Serviço de bebidas", cat: "Eventos" },
  { src: eventoPergulaFesta.url, alt: "Festa na pérgula com convidados", cat: "Eventos" },
];

const cats: Cat[] = ["Todos", "Hotel", "Quartos", "Restaurante", "Piscina", "Eventos"];


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
                  <img decoding="async"
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
