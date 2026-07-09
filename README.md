# Landing Page WXT

Landing page para uma extensão de navegador (WXT), com integração de pagamentos via **Stripe** e gerenciamento de usuários via **Supabase**. Construída com **Next.js 16**, **React 19** e **Tailwind CSS v4**.

---

## Stack

| Tecnologia | Uso |
|---|---|
| Next.js 16 (App Router) | Framework principal |
| React 19 | UI |
| TypeScript | Tipagem |
| Tailwind CSS v4 | Estilização via CSS variables |
| Stripe | Checkout e verificação de pagamento |
| Supabase | Banco de dados e autenticação |
| Lucide React | Ícones |

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx                  # Landing page principal
│   ├── layout.tsx                # Layout raiz (fontes, metadata)
│   ├── globals.css               # Design tokens (CSS variables + Tailwind theme)
│   │
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts          # POST /api/checkout — cria sessão Stripe
│   │   └── verify-checkout/
│   │       └── route.ts          # GET /api/verify-checkout — verifica pagamento e atualiza Supabase
│   │
│   ├── success/
│   │   ├── page.tsx              # Página de retorno após pagamento
│   │   ├── SuccessContent.tsx    # Orquestra os estados da página de sucesso
│   │   ├── verifyPayment.ts      # Função que chama /api/verify-checkout
│   │   ├── LoadingState.tsx      # UI: verificando pagamento
│   │   ├── ErrorState.tsx        # UI: erro na verificação
│   │   └── SuccessState.tsx      # UI: pagamento confirmado
│   │
│   ├── privacy/page.tsx          # Política de privacidade
│   ├── terms/page.tsx            # Termos de uso
│   └── reset-password/page.tsx   # Redefinição de senha
│
├── components/
│   ├── Badge.tsx                 # Badge de destaque (hero)
│   ├── BenefitCard.tsx           # Card de benefício com ícone
│   ├── CtaButton.tsx             # Botão principal de CTA
│   ├── DemoVideo.tsx             # Seção de vídeo demo
│   ├── Footer.tsx                # Rodapé
│   ├── Headline.tsx              # Título principal do hero
│   ├── MicroCopy.tsx             # Texto de apoio abaixo do CTA
│   ├── PlanCard.tsx              # Card de plano de preço
│   ├── Subheadline.tsx           # Subtítulo do hero
│   └── TestimonialsCarousel.tsx  # Carrossel de depoimentos
│
└── data/
    └── testimonials.ts           # Dados dos depoimentos
```

---

## Fluxo de Pagamento

```
Extensão (browser)
    │
    ▼
POST /api/checkout          → Cria sessão Stripe Checkout
    │                          (salva userId como client_reference_id)
    ▼
Stripe Checkout Page
    │
    ▼ (pagamento aprovado)
/success?session_id=xxx
    │
    ▼
GET /api/verify-checkout    → Verifica sessão no Stripe
    │                          Se pago: atualiza profiles.is_pro = true no Supabase
    ▼
SuccessState / ErrorState
```

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz com:

```env
# Stripe
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PRICE_ID=price_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

---

## Comandos

```bash
# Desenvolvimento (porta 3001)
npm run dev

# Build de produção
npm run build

# Iniciar em produção
npm start

# Lint
npm run lint
```

---

## Design System

Os estilos seguem um sistema de tokens via CSS variables definidas em `globals.css` e mapeadas no `@theme` do Tailwind:

- `bg-background` / `text-foreground` — cores base
- `bg-card` / `border-border` — superfícies e bordas
- `bg-primary` / `text-primary-foreground` — ação principal
- `text-muted-foreground` — textos secundários
- `bg-destructive` / `text-destructive` — estados de erro

Suporte a **dark mode** automático via `@media (prefers-color-scheme: dark)`.

