import { createFileRoute } from "@tanstack/react-router";
import conferenciasImg from "../assets/conferencias.jpg";

export const Route = createFileRoute("/conferencias")({
  head: () => ({
    meta: [
      { title: "Sala de Conferências — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Sala de conferências e reuniões na Villa das Palmeiras, em Moçambique. Em breve, mais informações sobre este espaço.",
      },
      { property: "og:title", content: "Sala de Conferências na Villa das Palmeiras" },
      {
        property: "og:description",
        content: "Em breve, mais informações sobre a nossa sala de conferências em Moçambique.",
      },
      { property: "og:url", content: "/conferencias" },
      { property: "og:image", content: conferenciasImg },
    ],
    links: [{ rel: "canonical", href: "/conferencias" }],
  }),
  component: Conferencias,
});

function Conferencias() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[color:var(--cream)]">
      <div className="container-luxe text-center">
        <h1 className="heading-serif text-4xl sm:text-6xl text-[color:var(--forest)]">
          Brevemente
        </h1>
      </div>
    </section>
  );
}
