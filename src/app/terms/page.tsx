import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | SeuProduto",
  description: "Leia os termos e condições de uso do nosso produto e extensão.",
};

const styles = {
  page: "min-h-screen bg-background text-foreground py-16 px-6",
  container: "max-w-3xl mx-auto",
  backLink: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group",
  backIcon: "w-4 h-4 group-hover:-translate-x-1 transition-transform",
  title: "text-3xl font-bold tracking-tight mb-2",
  lastUpdated: "text-sm text-muted-foreground mb-8",
  content: "space-y-6 text-base leading-relaxed text-muted-foreground",
  sectionBordered: "border-t border-border pt-6",
  sectionHeading: "text-xl font-semibold text-foreground mb-3",
  notAllowed: "mt-2 font-medium text-foreground",
  list: "list-disc pl-5 space-y-1",
  highlight: "text-foreground font-medium",
};

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        <Link 
          href="/" 
          className={styles.backLink}
        >
          <ArrowLeft className={styles.backIcon} />
          Voltar para a página inicial
        </Link>

        <h1 className={styles.title}>Termos de Uso</h1>
        <p className={styles.lastUpdated}>Última atualização: Junho de 2026</p>

        <div className={styles.content}>
          
          <section className={styles.sectionBordered}>
            <h2 className={styles.sectionHeading}>1. Aceitação dos Termos</h2>
            <p>
              Ao instalar a nossa extensão do Chrome ou utilizar o nosso site, você concorda expressamente em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, recomendamos que não utilize a ferramenta e remova a extensão do seu navegador.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>2. Uso Permitido e Licença</h2>
            <p>
              Concedemos a você uma licença limitada, revogável, não exclusiva e intransferível para utilizar a nossa extensão estritamente para fins pessoais ou operacionais internos do seu negócio, de acordo com as funcionalidades disponibilizadas.
            </p>
            <p className={styles.notAllowed}>Você concorda em NÃO:</p>
            <ul className={styles.list}>
              <li>Tentar fazer engenharia reversa, descompilar ou extrair o código-fonte da extensão.</li>
              <li>Usar a ferramenta para qualquer finalidade ilegal ou que viole as diretrizes da Chrome Web Store.</li>
              <li>Utilizar robôs ou scripts automatizados externos para sobrecarregar a infraestrutura do nosso serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>3. Cadastro e Segurança da Conta</h2>
            <p>
              Para acessar determinadas funcionalidades do MVP, pode ser necessário realizar um login via e-mail. Você é o único responsável por manter a segurança da sua sessão e por qualquer atividade que ocorra sob o seu acesso. Notifique-nos imediatamente se suspeitar de qualquer uso não autorizado.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>4. Limitação de Responsabilidade</h2>
            <p>
              O serviço é fornecido &ldquo;no estado em que se encontra&rdquo; (as-is), sem garantias de qualquer tipo, expressas ou implícitas. Por se tratar de um software independente, não nos responsabilizamos por quaisquer danos diretos, indiretos, lucros cessantes ou perda de dados decorrentes do uso ou da impossibilidade de uso da ferramenta, incluindo mudanças repentinas de layout em sites de terceiros que possam afetar o funcionamento temporário da extensão.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>5. Modificações no Serviço e nos Termos</h2>
            <p>
              Como o produto está em constante evolução, reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto da extensão ou do site a qualquer momento, sem aviso prévio. Também podemos atualizar estes Termos periodicamente. O uso contínuo da ferramenta após as alterações constituirá sua aceitação dos novos termos.
            </p>
          </section>

          <section className={styles.sectionBordered}>
            <h2 className={styles.sectionHeading}>6. Contato</h2>
            <p>
              Dúvidas sobre os Termos de Uso ou sugestões de melhoria podem ser encaminhadas diretamente para o e-mail: <span className={styles.highlight}>suporte@seuproduto.com</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}