import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, BedDouble, UtensilsCrossed, Sparkles, Wifi, Snowflake, ShieldCheck, MapPin, Star, ArrowRight, Presentation } from "lucide-react";

import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { whatsappLink } from "../lib/site";

import villaPromoAsset from "../assets/villa-promo.webm.asset.json";
import heroPosterAsset from "../assets/hero-poster.jpg.asset.json";
const heroImg = heroPosterAsset.url;
import roomSuiteAsset from "../assets/villa-room-real.png.asset.json";
const roomSuite = roomSuiteAsset.url;
import restaurantAsset from "../assets/villa-das-palmeiras-pratos-3.png.asset.json";
const restaurantImg = restaurantAsset.url;
import eventWedding from "../assets/event-wedding.jpg";
import eventVideoAsset from "../assets/villa-wedding-promo.webm.asset.json";
import poolAsset from "../assets/villa-pool-garden.jpg.asset.json";
const poolImg = poolAsset.url;
import gardenAsset from "../assets/villa-garden-pool.jpg.asset.json";
const gardenImg = gardenAsset.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Villa das Palmeiras — Hotel e Eventos em Moçambique" },
      {
        name: "description",
        content:
          "Hotel boutique em Moçambique com restaurante e espaço para eventos. Descanse, celebre e crie memórias inesquecíveis na Villa das Palmeiras.",
      },
      { property: "og:title", content: "Villa das Palmeiras — Hotel de Luxo em Moçambique" },
      {
        property: "og:description",
        content: "Quartos elegantes, gastronomia refinada e eventos memoráveis. Reserve pelo WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
          className="absolute inset-0 size-full object-cover"
          aria-label="Piscina da Villa das Palmeiras rodeada de jardim tropical e palmeiras"
        >
          <source src={villaPromoAsset.url} type="video/webm" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[color:var(--forest-deep)]/70 via-[color:var(--forest-deep)]/40 to-[color:var(--forest-deep)]/80"
          aria-hidden
        />


        <div className="relative container-luxe text-center pt-24 pb-16">
          <span className="kicker !text-[color:var(--gold-soft)] animate-fade-soft">
            Moçambique
          </span>
          <h1 className="heading-serif mt-5 text-4xl sm:text-6xl md:text-7xl text-white animate-fade-soft [animation-delay:120ms]">
            Bem-vindo à<br />
            <em className="not-italic text-[color:var(--gold-soft)]">Villa das Palmeiras</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed animate-fade-soft [animation-delay:240ms]">
            O lugar perfeito para descansar, celebrar e criar memórias inesquecíveis.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-soft [animation-delay:360ms]">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="size-4" />
              Reservar via WhatsApp
            </a>
            <Link to="/quartos" className="btn-outline-light">
              Explorar Quartos
            </Link>
          </div>
        </div>

        <a
          href="#destaques"
          aria-label="Descer para destaques"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-fade-soft [animation-delay:600ms]"
        >
          <span className="block w-px h-12 bg-white/40 mx-auto" />
          <span className="block mt-2 text-[10px] tracking-[0.3em] uppercase">Descer</span>
        </a>
      </section>

      {/* DESTAQUES */}
      <section id="destaques" className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Uma experiência completa"
              title="Tudo o que precisa, num só lugar"
              description="Hospedagem confortável, restaurante de qualidade e um espaço versátil para eventos memoráveis — sempre com o atendimento atencioso pelo qual somos reconhecidos."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BedDouble,
                title: "Quartos elegantes",
                text: "Suítes confortáveis com ar condicionado, Wi-Fi, TV e pequeno-almoço incluído.",
                to: "/quartos",
              },
              {
                icon: UtensilsCrossed,
                title: "Restaurante",
                text: "Sabores moçambicanos e internacionais, num ambiente acolhedor para toda a família.",
                to: "/restaurante",
              },
              {
                icon: Sparkles,
                title: "Espaço para eventos",
                text: "Casamentos, aniversários e jantares — tornamos cada ocasião especial.",
                to: "/eventos",
              },
              {
                icon: Presentation,
                title: "Sala de Conferências",
                text: "Espaço privado, equipado e com catering para reuniões, formações e workshops.",
                to: "/conferencias",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <Link
                  to={f.to}
                  className="group block rounded-2xl bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-[color:var(--forest)]/5 text-[color:var(--forest)] group-hover:bg-[color:var(--gold)] group-hover:text-white transition-colors">
                    <f.icon className="size-6" />
                  </span>
                  <h3 className="heading-serif mt-6 text-2xl text-[color:var(--forest)]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--gold)]">
                    Descobrir
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE — preview */}
      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={gardenImg}
                alt="Jardim tropical da Villa das Palmeiras com palmeiras e flores"
                loading="lazy"
                width={1600}
                height={1067}
                className="rounded-2xl shadow-luxe object-cover w-full aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-[color:var(--forest)] text-white p-8 rounded-2xl max-w-xs">
                <p className="kicker !text-[color:var(--gold-soft)]">Desde 2023</p>
                <p className="heading-serif mt-2 text-2xl leading-tight">
                  Hospitalidade que sentimos como sua.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <SectionTitle
                align="left"
                kicker="A nossa história"
                title="Um refúgio à sombra das palmeiras"
                description="A Villa das Palmeiras nasceu do desejo de criar um espaço onde a tranquilidade do ambiente, a excelência do serviço e o sabor da cozinha se encontram. Cada detalhe foi pensado para que cada estadia seja uma celebração."
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Wifi, label: "Wi-Fi rápido" },
                  { icon: Snowflake, label: "Ar condicionado" },
                  { icon: ShieldCheck, label: "Segurança 24h" },
                  { icon: MapPin, label: "Localização privilegiada" },
                ].map((it) => (
                  <div key={it.label} className="flex items-center gap-3 text-sm">
                    <span className="grid size-9 place-items-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)]">
                      <it.icon className="size-4" />
                    </span>
                    {it.label}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/sobre" className="btn-forest">
                  Conhecer a Villa
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUARTOS preview */}
      <section className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              kicker="Hospedagem"
              title="Quartos para descansar como em casa"
              description="Espaços luminosos e silenciosos, com tudo o que precisa para uma estadia perfeita."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] group">
                <img
                  src={roomSuite}
                  alt="Suíte Villa das Palmeiras"
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <span className="kicker !text-[color:var(--gold-soft)]">Premium</span>
                  <h3 className="heading-serif mt-2 text-3xl">Suíte de Luxo</h3>
                  <p className="mt-2 text-sm text-white/80 max-w-md">
                    Cama king-size, varanda privada e vista sobre o jardim tropical.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] group">
                <img
                  src={poolImg}
                  alt="Piscina rodeada de palmeiras"
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <span className="kicker !text-[color:var(--gold-soft)]">Lazer</span>
                  <h3 className="heading-serif mt-2 text-3xl">Piscina & Jardim</h3>
                  <p className="mt-2 text-sm text-white/80 max-w-md">
                    Um oásis tropical para começar ou terminar o dia com tranquilidade.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <Link to="/quartos" className="btn-gold">
                Ver todos os quartos
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESTAURANTE preview */}
      <section className="relative py-24 sm:py-32 text-white overflow-hidden">
        <img
          src={restaurantImg}
          alt="Seleção de pratos do restaurante da Villa das Palmeiras"
          loading="lazy"
          width={1600}
          height={1067}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--forest-deep)]/80" aria-hidden />
        <div className="relative container-luxe text-center">
          <Reveal>
            <SectionTitle
              light
              kicker="O nosso restaurante"
              title="Sabores que contam histórias"
              description="Pratos nacionais e internacionais, frescos e cuidadosamente preparados, num ambiente quente e familiar."
            />
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/restaurante" className="btn-gold">
                Conhecer o restaurante
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVENTOS preview */}
      <section className="py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <div>
              <SectionTitle
                align="left"
                kicker="Eventos"
                title="Celebrações inesquecíveis"
                description="Do casamento dos seus sonhos à conferência empresarial — temos o espaço, a equipa e a atenção ao detalhe para tornar tudo memorável."
              />
              <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {["Casamentos", "Conferências", "Aniversários", "Eventos corporativos", "Jantares", "Formações"].map(
                  (e) => (
                    <li key={e} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[color:var(--gold)]" />
                      {e}
                    </li>
                  )
                )}
              </ul>
              <div className="mt-10">
                <Link to="/eventos" className="btn-forest">
                  Solicitar Orçamento
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <video
              src={eventVideoAsset.url}
              autoPlay
              muted
              loop
              playsInline
              poster={eventWedding}
              aria-label="Mesa de casamento decorada à luz de velas"
              className="rounded-2xl shadow-luxe object-cover w-full aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 sm:py-32 bg-[color:var(--forest)] text-white">
        <div className="container-luxe">
          <Reveal>
            <SectionTitle
              light
              kicker="Hóspedes felizes"
              title="O que dizem sobre nós"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { name: "Ana M.", text: "Excelente atendimento e ambiente maravilhoso. Voltarei certamente." },
              { name: "Carlos S.", text: "O melhor espaço para descansar. Tudo impecável, da comida aos quartos." },
              { name: "Beatriz F.", text: "Fizemos o nosso casamento aqui e foi simplesmente perfeito. Recomendo!" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="rounded-2xl bg-white/5 backdrop-blur p-8 border border-white/10 h-full">
                  <div className="flex gap-1 text-[color:var(--gold)]">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="heading-serif mt-5 text-xl leading-snug">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-white/70">— {t.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 sm:py-32 bg-[color:var(--cream)]">
        <div className="container-luxe text-center">
          <Reveal>
            <span className="kicker">Reserve a sua estadia</span>
            <h2 className="heading-serif mt-4 text-3xl sm:text-5xl text-[color:var(--forest)]">
              Pronto para descansar entre palmeiras?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Fale connosco pelo WhatsApp e receba todas as informações sobre disponibilidade, valores e experiências.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="size-4" />
                Reservar pelo WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
