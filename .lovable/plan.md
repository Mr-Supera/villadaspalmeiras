# Villa das Palmeiras — Website Premium

Website institucional de luxo, multi-página, com foco em conversão por WhatsApp e formulário de contacto. Sem reservas online, sem pagamentos, sem painel administrativo.

## Identidade visual (fixa)

- Verde escuro `#184A35`, dourado `#C8A34D`, branco `#FFFFFF`, cinza claro `#F7F7F7`, texto `#222222`.
- Títulos: **Playfair Display** (serif elegante). Corpo: **Poppins**.
- Botões: cantos arredondados, sombra suave, hover dourado/verde com transição.
- Espaçamento amplo, fotografias grandes, animações suaves (fade-in, slide-up, scroll reveal).
- Tokens definidos em `src/styles.css` (Tailwind v4, `@theme`) e fontes via `<link>` no `__root.tsx`.

## Arquitetura de rotas (TanStack Start)

Cada secção é uma rota dedicada com `head()` próprio (title, description, OG, Twitter) — não apenas âncoras.

```
/                  Início (hero + destaques de cada secção)
/sobre             História, missão, visão, valores, diferenciais
/quartos           Galeria de quartos com características e CTA WhatsApp
/restaurante       Apresentação, ambiente, tipos de cozinha, CTA menu
/eventos           Cartões: casamentos, conferências, aniversários, etc.
/galeria           Galeria filtrável por categoria + lightbox
/contactos         Info, mapa Google embed, formulário
```

Depoimentos aparecem na home e em `/sobre`. Rodapé e header partilhados via `__root.tsx`.

## Componentes principais

- `Header` — logo + nav + botão dourado "Reservar pelo WhatsApp"; fixo ao rolar; menu hambúrguer mobile com animação slide.
- `Footer` — logo, descrição curta, links rápidos, redes sociais (ícones), contactos, mini-mapa, copyright.
- `WhatsAppFloat` — botão flutuante canto inferior direito, abre `wa.me` com mensagem pré-preenchida.
- `BackToTop` — surge após scroll.
- `Hero` — imagem full-width, overlay verde-escuro translúcido, título Playfair, dois CTAs.
- `SectionTitle` — pequeno kicker dourado + título serif (padrão de hotéis de luxo).
- `RoomCard`, `EventCard`, `TestimonialCard`, `FeatureCard`.
- `Lightbox` — galeria com navegação por teclado (setas, esc), zoom suave.
- `ContactForm` — validação Zod (nome, telefone, email, mensagem) com toast de sucesso. Sem backend: o envio chama `mailto:` ou um `createServerFn` simples que regista em consola (a decidir — ver pergunta abaixo).

## Conteúdos

Como não foram fornecidos textos finais nem fotografias, vou:
- Escrever copy em **português europeu/Moçambique**, tom sofisticado, fiel aos exemplos dados.
- Gerar imagens premium via `imagegen` (hotel exterior, lobby, quartos, restaurante, piscina, eventos, detalhes) — quality `standard`, salvas em `src/assets/`.
- Inserir dados de contacto placeholder claramente marcados (telefone, email, endereço, coordenadas do mapa) para o cliente substituir.

## Animação e performance

- Framer Motion para fade-in, slide-up e scroll reveal (variantes partilhadas, sem exagero).
- Imagens com `loading="lazy"` (exceto hero, que recebe `<link rel="preload">` no `head()` da home).
- Componentes pequenos e reutilizáveis, sem libs pesadas desnecessárias.

## SEO

- `head()` por rota com title/description únicos, OG e Twitter cards, canonical relativo.
- JSON-LD: `Hotel` + `LocalBusiness` no root, `Restaurant` em `/restaurante`, `EventVenue` em `/eventos`.
- `public/robots.txt` permissivo + `src/routes/sitemap[.]xml.ts` listando todas as rotas.
- Alt descritivo em todas as imagens.

## Acessibilidade

- Contraste AA (verde escuro/branco, dourado só em elementos grandes ou ícones).
- Foco visível, navegação por teclado no menu e lightbox, `aria-label` nos ícones sociais e botão WhatsApp.

## Stack

TanStack Start (já configurado) + TypeScript + Tailwind v4 + Framer Motion + lucide-react (ícones). React Router e React Icons listados no pedido não se aplicam — o template usa TanStack Router e usaremos `lucide-react` (já presente) por consistência.

## Fora de âmbito (confirmado)

Sem reservas online, sem painel admin, sem login, sem pagamentos, sem calendário, sem confirmação automática por email.

---

## Perguntas antes de implementar

1. **Número de WhatsApp e contactos reais** — qual número usar nos links `wa.me/...`, telefone, email e endereço? Se ainda não tiver, uso placeholders (`+258 XX XXX XXXX`) claramente marcados para substituir.
2. **Formulário de contacto** — como tratar o envio? Opções: (a) abrir cliente de email com `mailto:` pré-preenchido (zero backend); (b) ativar Lovable Cloud e gravar mensagens numa tabela; (c) enviar email via integração (ex.: Resend) mais tarde. Recomendo (a) pela simplicidade do âmbito atual.
3. **Logo** — tem ficheiro de logo para enviar, ou devo gerar um logotipo textual elegante "Villa das Palmeiras" com monograma dourado?
4. **Fotografias** — gero todas as imagens com IA (estilo hotel de luxo tropical, palmeiras, tons quentes) ou aguarda para enviar fotos reais depois?

Assim que responder a estes pontos, avanço com a implementação completa.