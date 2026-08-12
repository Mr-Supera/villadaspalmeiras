import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, Cake, Briefcase, Utensils, GraduationCap, MessageCircle } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import eventosHeroAsset from "../assets/eventos-hero.webp.asset.json";
import eventWedding from "../assets/event-wedding.jpg";
import eventConference from "../assets/event-conference.jpg";
import eventBirthday from "../assets/event-birthday.jpg";

const events = [
  { icon: Heart, title: "Casamentos", text: "Cerimónias e receções inesquecíveis, ao ar livre ou em salão.", img: eventWedding },
  { icon: Briefcase, title: "Conferências", text: "Salas equipadas para encontros profissionais de qualquer dimensão.", img: eventConference },
  { icon: Cake, title: "Aniversários", text: "Celebrações únicas com decoração e gastronomia personalizadas.", img: eventBirthday },
  { icon: Users, title: "Eventos corporativos", text: "Lançamentos, galas, jantares de empresa — com serviço completo.", img: eventConference },
  { icon: Utensils, title: "Jantares", text: "Mesas privadas para celebrar em família ou com convidados especiais.", img: eventWedding },
  { icon: GraduationCap, title: "Formações", text: "Espaços confortáveis para sessões de formação e team-buildings.", img: eventConference },
];

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Casamentos, conferências, aniversários, eventos corporativos, jantares e formações. Espaço, equipa e atenção ao detalhe para celebrações memoráveis.",
      },
      { property: "og:title", content: "Eventos na Villa das Palmeiras" },
      { property: "og:description", content: "Espaços versáteis para celebrações inesquecíveis em Moçambique." },
      { property: "og:url", content: "/eventos" },
      { property: "og:image", content: eventosHeroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: Eventos,
});

function Eventos() {
  return (
    <>
      <PageHero
        kicker="Espaço para eventos"
        title="Celebrações memoráveis"
        subtitle="Do casamento dos seus sonhos à conferência empresarial — tornamos cada ocasião especial."
        image={eventosHeroAsset.url}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Tipos de evento"
              title="Um espaço, infinitas possibilidades"
              description="Salões versáteis, jardins floridos e uma equipa dedicada a transformar a sua visão em realidade."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-[color:var(--forest)]">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="size-full object-cover opacity-90 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <span className="grid size-11 place-items-center rounded-full bg-[color:var(--gold)] text-white">
                      <e.icon className="size-5" />
                    </span>
                    <h3 className="heading-serif mt-4 text-2xl">{e.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{e.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <a
                href={whatsappLink("Olá! Gostaria de solicitar um orçamento para um evento na Villa das Palmeiras.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="size-4" />
                Solicitar Orçamento
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
