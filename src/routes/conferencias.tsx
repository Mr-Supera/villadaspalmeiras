import { createFileRoute } from "@tanstack/react-router";
import { Users, Projector, Coffee } from "lucide-react";
import conferenciasImg from "../assets/conferencias.jpg";

export const Route = createFileRoute("/conferencias")({
  head: () => ({
    meta: [
      { title: "Sala de Conferências — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Sala de conferências e reuniões na Villa das Palmeiras, em Maputo, Moçambique. Um espaço versátil para reuniões, formações e eventos corporativos — em breve.",
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
    <section className="min-h-[70vh] flex items-center justify-center bg-[color:var(--cream)]">
      <div className="container-luxe text-center max-w-3xl">
        <span className="kicker !text-[color:var(--gold)]">Brevemente</span>
        <h1 className="heading-serif mt-4 text-4xl sm:text-6xl text-[color:var(--forest)]">
          Sala de Conferências
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[color:var(--ink)]/75 leading-relaxed">
          Estamos a preparar um espaço moderno e versátil para reuniões, formações e
          eventos corporativos na Villa das Palmeiras, em Maputo. Em breve irá
          encontrar aqui toda a informação sobre capacidade, equipamento e reservas.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[color:var(--forest)]/80">
          <span className="flex items-center gap-2 text-sm">
            <Users className="size-5" />
            Grupos e empresas
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Projector className="size-5" />
            Equipamento moderno
          </span>
          <span className="flex items-center gap-2 text-sm">
            <Coffee className="size-5" />
            Coffee breaks
          </span>
        </div>
      </div>
    </section>
  );
}
