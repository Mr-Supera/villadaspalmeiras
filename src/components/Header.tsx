import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink, site } from "../lib/site";
import { cn } from "../lib/utils";
import logoImg from "@/assets/villa-das-palmeiras-logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/quartos", label: "Quartos" },
  { to: "/restaurante", label: "Restaurante" },
  { to: "/eventos", label: "Eventos" },
  { to: "/minizoo", label: "Mini Zoológico" },
  { to: "/conferencias", label: "Conferências" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = router.state.location.pathname;

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
      className={`fixed inset-x-0 top-0 z-50 bg-[color:var(--forest)] transition-all duration-500 ${
        scrolled ? "shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label={`${site.name} — Início`}
        >
          <span className="flex items-center justify-center rounded-lg transition-colors duration-300 bg-[color:var(--forest)]">
            <img
              src={logoImg}
              alt="Villa das Palmeiras"
              className="h-10 sm:h-11 w-auto"
              loading="eager"
              decoding="async"
            />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  active ? "text-gold" : "text-white hover:text-gold"
                )}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            );
          })}
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
            open
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

