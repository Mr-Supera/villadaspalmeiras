import { createFileRoute } from "@tanstack/react-router";
import { Presentation, Users, Wifi, Projector, Coffee, MessageCircle, Monitor, FileText, Clock, ShieldCheck } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { PageHero } from "./sobre";
import { whatsappLink } from "../lib/site";
import conferenciasImg from "../assets/conferencias.jpg";

const features = [
  {
    icon: Users,
    title: "Até 40 pessoas",
    description: "Configuração flexível em estilo auditório, escolar ou em U, conforme o tipo de evento.",
  },
  {
    icon: Projector,
    title: "Ecrã & projetor",
    description: "Equipamento de apresentação pronto a usar para reuniões, formações e workshops.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi de alta velocidade",
    description: "Ligação estável e gratuita para garantir a produtividade durante todo o evento.",
  },
  {
    icon: Coffee,
    title: "Coffee break & catering",
    description: "Pausas com café, snacks ou refeições completas servidas pelo nosso restaurante.",
  },
  {
    icon: Monitor,
    title: "Flip-chart & material",
    description: "Quadros, marcadores e blocos disponíveis para dinâmicas de grupo e brainstorming.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente privado e seguro",
    description: "Sala isolada com privacidade total para discussões confidenciais e encontros profissionais.",
  },
];

const useCases = [
  { icon: Presentation, title: "Reuniões empresariais" },
  { icon: FileText, title: "Apresentações e pitches" },
  { icon: Users, title: "Formações e workshops" },
  { icon: Clock, title: "Reuniões de meio-dia ou dia inteiro" },
];

export const Route = createFileRoute("/conferencias")({
  head: () => ({
    meta: [
      { title: "Sala de Conferências — Villa das Palmeiras" },
      {
        name: "description",
        content:
          "Sala de conferências e reuniões na Villa das Palmeiras, em Moçambique. Espaço privado, equipado e com catering para eventos corporativos memoráveis.",
      },
      { property: "og:title", content: "Sala de Conferências na Villa das Palmeiras" },
      {
        property: "og:description",
        content: "Espaço privado, equipado e com catering para reuniões, formações e workshops em Moçambique.",
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
    <>
      <PageHero
        kicker="Eventos corporativos"
        title="Sala de Conferências"
        subtitle="Reuniões, formações e workshops num espaço privado, equipado e com o conforto da Villa das Palmeiras."
        image={conferenciasImg}
      />

      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src={conferenciasImg}
              alt="Sala de conferências elegante com mesa de madeira, cadeiras de couro verde e ecrã de apresentação"
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
                kicker="Profissionalismo e conforto"
                title="Um espaço pensado para resultados"
                description="A nossa sala de conferências reúne elegância e funcionalidade. Com luz natural, ar condicionado, mobiliário confortável e equipamento de apoio, é o cenário ideal para reuniões produtivas, apresentações a clientes ou sessões de formação."
              />
              <ul className="mt-8 grid gap-3 text-sm">
                {[
                  { icon: Users, label: "Capacidade para até 40 participantes" },
                  { icon: Wifi, label: "Wi-Fi gratuito e fiável" },
                  { icon: Projector, label: "Projetor e ecrã disponíveis" },
                  { icon: Coffee, label: "Coffee break e refeições sob pedido" },
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
              kicker="Equipamento"
              title="Tudo o que precisa para o seu evento"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <article className="rounded-2xl bg-white p-8 h-full hover:shadow-luxe transition-shadow">
                  <span className="grid size-14 place-items-center rounded-full bg-[color:var(--forest)]/5 text-[color:var(--forest)]">
                    <f.icon className="size-6" />
                  </span>
                  <h3 className="heading-serif mt-6 text-2xl text-[color:var(--forest)]">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Ideal para"
              title="Reuniões, formações e muito mais"
              description="Seja qual for o formato do seu encontro profissional, adaptamos a sala às suas necessidades."
            />
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 100}>
                <div className="flex items-center gap-4 rounded-2xl border border-border p-6 bg-white hover:border-[color:var(--gold)] transition-colors">
                  <span className="grid size-12 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] shrink-0">
                    <u.icon className="size-5" />
                  </span>
                  <h3 className="font-medium text-[color:var(--forest)]">{u.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[color:var(--forest)] text-white">
        <div className="container-luxe text-center">
          <Reveal>
            <span className="kicker !text-[color:var(--gold-soft)]">Reserve já</span>
            <h2 className="heading-serif mt-4 text-3xl sm:text-5xl text-white">
              Planeie o seu próximo evento
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/80">
              Fale connosco pelo WhatsApp para conhecer a sala, ver disponibilidade e pedir um orçamento à medida.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink("Olá! Gostaria de saber mais sobre a Sala de Conferências da Villa das Palmeiras.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="size-4" />
                Solicitar orçamento
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
