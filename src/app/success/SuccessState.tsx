'use client';

import { useRouter } from 'next/navigation';

const styles = {
  wrapper: "text-center",
  iconWrapper: "w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce",
  icon: "w-8 h-8",
  title: "text-3xl font-extrabold text-foreground mb-2",
  subtitle: "text-muted-foreground mb-8 max-w-sm mx-auto",
  stepsBox: "bg-card border border-border rounded-xl p-4 mb-8 text-left text-sm text-foreground",
  stepsTitle: "font-semibold mb-1",
  stepsList: "list-decimal list-inside space-y-1 text-muted-foreground",
  button: "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 shadow-md transition",
};

export function SuccessState() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <h1 className={styles.title}>Você agora é Pro! 🚀</h1>
      <p className={styles.subtitle}>
        Sua assinatura foi confirmada com sucesso. Todas as funções premium já foram liberadas na sua extensão!
      </p>

      <div className={styles.stepsBox}>
        <p className={styles.stepsTitle}>Próximos passos:</p>
        <ol className={styles.stepsList}>
          <li>Abra a sua extensão no navegador.</li>
          <li>Caso as funções não apareçam, clique em &quot;Sair&quot; e faça Login novamente para atualizar o cache.</li>
        </ol>
      </div>

      <button
        onClick={() => router.push('/')}
        className={styles.button}
      >
        Ir para a Home
      </button>
    </div>
  );
}
