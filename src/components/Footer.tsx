import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";
import { site, whatsappLink } from "../lib/site";
import logoImg from "@/assets/villa-das-palmeiras-logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--forest-deep)] text-white/85">
      <div className="container-luxe py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logoImg}
            alt="Villa das Palmeiras"
            className="h-14 w-auto rounded-sm"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-xs">
            Um refúgio elegante em Moçambique, onde o conforto, a gastronomia e a hospitalidade se unem para criar memórias inesquecíveis.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-full border border-white/15 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-full border border-white/15 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/", "Início"],
              ["/sobre", "Sobre"],
              ["/quartos", "Quartos"],
              ["/restaurante", "Restaurante"],
              ["/eventos", "Eventos"],
              ["/minizoo", "Mini Zoológico"],
              ["/conferencias", "Conferências"],
              ["/galeria", "Galeria"],
              ["/contactos", "Contactos"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/70 hover:text-[color:var(--gold)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">
            Contactos
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <span className="text-white/75">{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <a href={`tel:${site.phone}`} className="text-white/75 hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="size-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white"
              >
                {site.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 mt-0.5 text-[color:var(--gold)]" />
              <a href={`mailto:${site.email}`} className="text-white/75 hover:text-white break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.25em] uppercase text-[color:var(--gold)]">
            Horário
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 text-white/75">
                <span>{h.day}</span>
                <span className="text-white">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Villa das Palmeiras. Todos os direitos reservados.</p>
          <p>Moçambique</p>
        </div>
      </div>
    </footer>
  );
}
