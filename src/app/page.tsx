import { CheckCircle2, MessageSquare, Zap } from "lucide-react";
import BenefitCard from "@/components/BenefitCard";
import PlanCard from "@/components/PlanCard";
import CtaButton from "@/components/CtaButton";
import Badge from "@/components/Badge";
import Headline from "@/components/Headline";
import Subheadline from "@/components/Subheadline";
import MicroCopy from "@/components/MicroCopy";
import DemoVideo from "@/components/DemoVideo";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { testimonials } from "@/data/testimonials";

const CHROME_STORE_LINK = "https://chromewebstore.google.com/";

const styles = {
  pageWrapper: "bg-background text-foreground min-h-screen font-sans selection:bg-primary selection:text-primary-foreground",
  heroSection: "relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center justify-center min-h-[70vh]",
  ctaWrapper: "mt-10 flex flex-col sm:flex-row items-center gap-4",
  benefitsSection: "border-t border-card bg-card/30 py-20 px-6",
  benefitsInner: "max-w-5xl mx-auto",
  benefitsTitleWrapper: "text-center mb-12",
  benefitsTitle: "text-2xl sm:text-3xl font-bold text-foreground tracking-tight",
  benefitsGrid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  pricingSection: "py-24 px-6 border-t border-border bg-card/30",
  pricingInner: "max-w-5xl mx-auto text-center",
  pricingTitle: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
  pricingSubtitle: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto",
  pricingGrid: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto",
  demoSection: "py-24 px-6 border-t border-border bg-background",
  demoInner: "max-w-5xl mx-auto",
  demoTitleWrapper: "text-center max-w-2xl mx-auto mb-16",
  demoTitle: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
  demoSubtitle: "mt-4 text-lg text-muted-foreground",
  demoContent: "flex flex-col gap-12",
};

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.heroSection}>
        
        <Badge label="Produtividade Máxima" />

        <Headline text="Automatize tarefas repetitivas direto do seu navegador" />

        <Subheadline text="Pare de perder horas copiando e colando dados manualmente. Nossa extensão faz o trabalho duro para você em um único clique, direto nas páginas que você já usa." />

        <div className={styles.ctaWrapper}>
          <CtaButton href={CHROME_STORE_LINK} />
        </div>

        <MicroCopy text="Setup em 30 segundos • Não requer cartão de crédito" />

      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.benefitsInner}>
          
          <div className={styles.benefitsTitleWrapper}>
            <h2 className={styles.benefitsTitle}>
              Por que usar nosso produto?
            </h2>
          </div>

          <div className={styles.benefitsGrid}>
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

      <section className={styles.demoSection}>
        <div className={styles.demoInner}>
          
          <div className={styles.demoTitleWrapper}>
            <h2 className={styles.demoTitle}>
              Veja a ferramenta em ação
            </h2>
            <p className={styles.demoSubtitle}>
              Entenda como a extensão funciona em tempo real e o que os primeiros usuários estão achando.
            </p>
          </div>

          <div className={styles.demoContent}>
            
            <DemoVideo />

            <TestimonialsCarousel testimonials={testimonials} />

          </div>

        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={styles.pricingInner}>
          
          <h2 className={styles.pricingTitle}>
            Preço simples, sem surpresas
          </h2>
          <p className={styles.pricingSubtitle}>
            Comece a usar gratuitamente hoje mesmo e escale conforme a sua necessidade.
          </p>

          <div className={styles.pricingGrid}>

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