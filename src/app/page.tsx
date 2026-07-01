import { CheckCircle2, MessageSquare, Zap } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import PlanCard from "@/components/PlanCard";
import CtaButton from "@/components/CtaButton";
import Badge from "@/components/Badge";
import Headline from "@/components/Headline";
import Subheadline from "@/components/Subheadline";
import MicroCopy from "@/components/MicroCopy";

const CHROME_STORE_LINK = "https://chromewebstore.google.com/";

const PAGE_WRAPPER_STYLES =
  "bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground";

const HERO_SECTION_STYLES =
  "relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center justify-center min-h-[70vh]";

const CTA_WRAPPER_STYLES = "mt-10 flex flex-col sm:flex-row items-center gap-4";

const BENEFITS_SECTION_STYLES =
  "border-t border-card bg-card/30 py-20 px-6";

const BENEFITS_INNER_STYLES = "max-w-5xl mx-auto";

const BENEFITS_TITLE_WRAPPER_STYLES = "text-center mb-12";

const BENEFITS_TITLE_STYLES =
  "text-2xl sm:text-3xl font-bold text-foreground tracking-tight";

const BENEFITS_GRID_STYLES = "grid grid-cols-1 md:grid-cols-3 gap-8";

const PRICING_SECTION_STYLES =
  "py-24 px-6 border-t border-border bg-card/30";

const PRICING_INNER_STYLES = "max-w-5xl mx-auto text-center";

const PRICING_TITLE_STYLES =
  "text-3xl font-bold tracking-tight text-foreground sm:text-4xl";

const PRICING_SUBTITLE_STYLES =
  "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto";

const PRICING_GRID_STYLES =
  "mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto";

export default function Home() {
  return (
    <div className={PAGE_WRAPPER_STYLES}>
      
      <section className={HERO_SECTION_STYLES}>
        
        <Badge label="Produtividade Máxima" />

        <Headline text="Automatize tarefas repetitivas direto do seu navegador" />

        <Subheadline text="Pare de perder horas copiando e colando dados manualmente. Nossa extensão faz o trabalho duro para você em um único clique, direto nas páginas que você já usa." />

        <div className={CTA_WRAPPER_STYLES}>
          <CtaButton href={CHROME_STORE_LINK} />
        </div>

        <MicroCopy text="Setup em 30 segundos • Não requer cartão de crédito" />

      </section>

      <section className={BENEFITS_SECTION_STYLES}>
        <div className={BENEFITS_INNER_STYLES}>
          
          <div className={BENEFITS_TITLE_WRAPPER_STYLES}>
            <h2 className={BENEFITS_TITLE_STYLES}>
              Por que usar nosso produto?
            </h2>
          </div>

          <div className={BENEFITS_GRID_STYLES}>
            <BenefitCard
              icon={CheckCircle2}
              title="Economia de Tempo"
              description="Transforme processos lentos de 15 minutos em cliques instantâneos que rodam em background."
            />
            <BenefitCard
              icon={Zap}
              title="Integração Nativa"
              description="Funciona direto na página que você está navegando, sem precisar abrir outras abas ou softwares pesados."
            />
            <BenefitCard
              icon={MessageSquare}
              title="Suporte Integrado"
              description="Reporte bugs ou sugira melhorias direto pela extensão. Criado para evoluir com o seu feedback."
            />
          </div>
        </div>
      </section>

      <section className={PRICING_SECTION_STYLES}>
        <div className={PRICING_INNER_STYLES}>
          
          <h2 className={PRICING_TITLE_STYLES}>
            Preço simples, sem surpresas
          </h2>
          <p className={PRICING_SUBTITLE_STYLES}>
            Comece a usar gratuitamente hoje mesmo e escale conforme a sua necessidade.
          </p>

          {/* Grid de Planos */}
          <div className={PRICING_GRID_STYLES}>

            <PlanCard
              name="Plano Free"
              description="Perfeito para testar e validar o seu fluxo de trabalho."
              price="R$ 0"
              priceSuffix="/para sempre"
              features={[
                "Até X automações por dia",
                "Acesso completo à extensão",
                "Suporte por e-mail",
              ]}
              buttonLabel="Instalar Extensão"
            />

            <PlanCard
              name="Plano Pro"
              description="Para quem precisa de poder total e automação sem limites."
              price="R$ 29"
              priceSuffix="/mês"
              features={[
                "<strong class='text-foreground'>Automações ilimitadas</strong>",
                "Filtros e configurações avançadas",
                "Suporte prioritário via WhatsApp",
                "Atualizações de recursos exclusivas",
              ]}
              buttonLabel="Entrar na Lista de Espera"
              highlighted
              badge="Em Breve"
            />

          </div>

        </div>
      </section>

    </div>
  );
}