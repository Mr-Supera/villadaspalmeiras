import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { BackToTop } from "../components/BackToTop";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="heading-serif text-7xl text-[color:var(--forest)]">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="heading-serif text-3xl text-[color:var(--forest)]">
          Algo correu mal
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Não foi possível carregar esta página. Pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold"
          >
            Tentar de novo
          </button>
          <a href="/" className="btn-forest">
            Página inicial
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Villa das Palmeiras",
  description:
    "Hotel boutique, restaurante e espaço para eventos em Moçambique. Conforto, gastronomia e hospitalidade num único refúgio.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MZ",
    addressLocality: "Maputo",
    streetAddress: "Av. das Palmeiras",
  },
  telephone: "+258 84 000 0000",
  priceRange: "$$$",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina" },
    { "@type": "LocationFeatureSpecification", name: "Restaurante" },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi" },
    { "@type": "LocationFeatureSpecification", name: "Ar condicionado" },
    { "@type": "LocationFeatureSpecification", name: "Espaço para eventos" },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#184A35" },
      { name: "author", content: "Villa das Palmeiras" },
      { property: "og:site_name", content: "Villa das Palmeiras" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_MZ" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Villa Das Palmeiras" },
      { property: "og:title", content: "Villa Das Palmeiras" },
      { name: "twitter:title", content: "Villa Das Palmeiras" },
      { name: "description", content: "Eventos, Restaurante e Hospedagem na KaTembe" },
      { property: "og:description", content: "Eventos, Restaurante e Hospedagem na KaTembe" },
      { name: "twitter:description", content: "Eventos, Restaurante e Hospedagem na KaTembe" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/89b931bb-9cb4-4e77-a35f-484188b859bc" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/89b931bb-9cb4-4e77-a35f-484188b859bc" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </QueryClientProvider>
  );
}
