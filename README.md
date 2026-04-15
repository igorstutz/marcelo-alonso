# Dr. Marcelo Alonso — Site Institucional

Site moderno em Next.js 14 + Tailwind CSS + Framer Motion para o cirurgião plástico Dr. Marcelo Alonso (Barra da Tijuca — RJ).

Substitui o site WordPress anterior com uma experiência mais rápida, interativa e alinhada à identidade visual azul/branco.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** (cores da marca configuradas em `tailwind.config.ts`)
- **Framer Motion** (animações e scroll reveals)
- **Lucide React** (ícones)
- Fontes **Playfair Display** + **Inter** via `next/font`

## Estrutura

```
app/              # Rotas (App Router)
  layout.tsx      # Layout raiz com fontes, Navbar, Footer, WhatsApp flutuante
  page.tsx        # Home (monta todas as seções)
  globals.css     # Tailwind + utilities
components/       # Seções e elementos reutilizáveis
  Navbar.tsx
  Hero.tsx
  About.tsx
  Procedures.tsx  # Tabs interativas por categoria
  Differentials.tsx
  Location.tsx    # Inclui mapa Google embed
  Contact.tsx
  Footer.tsx
  WhatsAppButton.tsx
lib/data.ts       # Dados: contatos, procedimentos, diferenciais
public/images/    # Logo e fotos (baixadas do site atual)
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Em https://vercel.com/new, importe o repositório.
3. Framework preset: **Next.js** (auto-detectado). Sem variáveis de ambiente.
4. Clique em Deploy.

Alternativa via CLI:

```bash
npm i -g vercel
vercel
```

## Conteúdo editável rapidamente

Praticamente todo o conteúdo textual está em `lib/data.ts`:

- **Telefone / WhatsApp / e-mail / endereço** → objeto `contact`
- **Procedimentos** (4 categorias + itens) → array `procedureCategories`
- **Diferenciais** → array `differentials`

Trocar imagens: substituir arquivos em `public/images/` mantendo os nomes (`logo.png`, `dr-marcelo.jpg`).

## Personalização da marca

Cores em `tailwind.config.ts` sob `theme.extend.colors.brand` (paleta azul 50–950). Alterando ali, toda a UI acompanha.
