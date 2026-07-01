import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | SeuProduto",
  description: "Entenda como lidamos com os seus dados de forma segura e transparente.",
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
  list: "list-disc pl-5 space-y-1",
  highlight: "text-foreground font-medium",
  sensitive: "underline decoration-destructive text-foreground font-medium",
};

export default function PrivacyPolicy() {
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

        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.lastUpdated}>Última atualização: Junho de 2026</p>

        <div className={styles.content}>
          
          <section className={styles.sectionBordered}>
            <h2 className={styles.sectionHeading}>1. Informações Gerais</h2>
            <p>
              A sua privacidade é uma prioridade absoluta para nós. Esta Política de Privacidade explica como o nosso produto (incluindo a extensão para navegador e a landing page) lida com as suas informações. Como um produto focado na transparência, coletamos apenas o mínimo necessário para entregar o valor da ferramenta.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>2. Coleta de Dados</h2>
            <p className="mb-2">
              Diferente de ferramentas complexas, nós desenhamos nossa extensão para respeitar seu ambiente de navegação:
            </p>
            <ul className={styles.list}>
              <li><strong className={styles.highlight}>Dados de Autenticação:</strong> Se você optar por criar uma conta, guardamos apenas seu e-mail de forma segura para gerenciar seu acesso.</li>
              <li><strong className={styles.highlight}>Dados de Uso:</strong> Coletamos dados estatísticos e anônimos de cliques para entender quais funções são mais utilizadas e melhorar o produto.</li>
              <li><strong className={styles.highlight}>Dados Sensíveis:</strong> Nós <span className={styles.sensitive}>NÃO</span> coletamos, armazenamos ou temos acesso a senhas, informações de cartão de crédito ou histórico de navegação pessoal.</li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>3. Permissões da Extensão</h2>
            <p>
              A extensão do Chrome solicita apenas as permissões estritamente necessárias para o seu funcionamento técnico (como ler os dados específicos da página onde ela atua para executar a automação). Ela nunca roda em segundo plano em sites não autorizados.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>4. Compartilhamento de Dados</h2>
            <p>
              Nós não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros sob nenhuma circunstância. Os dados técnicos de funcionamento são processados de forma criptografada em nossos servidores de nuvem confiáveis.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>5. Seus Direitos</h2>
            <p>
              Você tem total controle sobre seus dados. A qualquer momento, você pode remover a extensão do seu navegador ou entrar em contato conosco para solicitar a exclusão definitiva do seu e-mail e de qualquer dado associado à sua conta.
            </p>
          </section>

          <section className={styles.sectionBordered}>
            <h2 className={styles.sectionHeading}>6. Contato</h2>
            <p>
              Se você tiver qualquer dúvida sobre esta Política ou sobre o tratamento dos seus dados, sinta-se à vontade para mandar um e-mail direto para o desenvolvedor em: <span className={styles.highlight}>suporte@seuproduto.com</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}