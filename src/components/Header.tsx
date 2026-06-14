import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink, site } from "../lib/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/quartos", label: "Quartos" },
  { to: "/restaurante", label: "Restaurante" },
  { to: "/eventos", label: "Eventos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label={`${site.name} — Início`}
        >
          <Logo scrolled={scrolled} />
          <div className="leading-tight">
            <div
              className={`heading-serif text-lg sm:text-xl tracking-tight transition-colors ${
                scrolled ? "text-[color:var(--forest)]" : "text-white"
              }`}
            >
              Villa das Palmeiras
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.25em] transition-colors ${
                scrolled ? "text-[color:var(--gold)]" : "text-white/80"
              }`}
            >
              Hotel · Restaurante · Eventos
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors relative py-1 ${
                scrolled ? "text-[color:var(--foreground)]" : "text-white"
              } hover:text-[color:var(--gold)]`}
              activeProps={{
                className: "text-[color:var(--gold)]",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            <MessageCircle className="size-4" />
            Reservar pelo WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex items-center justify-center rounded-full size-11 transition-colors ${
            scrolled || open
              ? "text-[color:var(--forest)] bg-[color:var(--cream)]"
              : "text-white bg-white/10 backdrop-blur"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav
          className="container-luxe flex flex-col gap-1 pt-8"
          aria-label="Navegação móvel"
        >
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="heading-serif text-2xl py-3 border-b border-border text-[color:var(--forest)] hover:text-[color:var(--gold)] transition-colors"
              style={{
                animation: open
                  ? `reveal-up 0.5s ${i * 60}ms cubic-bezier(0.22,1,0.36,1) both`
                  : undefined,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 self-start"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="size-4" />
            Reservar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Logo({ scrolled }: { scrolled: boolean }) {
  const color = scrolled ? "var(--forest)" : "#fff";
  const accent = "var(--gold)";
  return (
    <span
      className="grid size-11 place-items-center rounded-full transition-colors"
      style={{
        background: scrolled ? "var(--cream)" : "rgba(255,255,255,0.12)",
        backdropFilter: "blur(4px)",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="size-6" fill="none">
        <path
          d="M16 4c-1 4-4 6-7 7 3 0 6 1 7 4 1-3 4-4 7-4-3-1-6-3-7-7Z"
          fill={accent}
        />
        <path
          d="M16 14v14M12 28h8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
