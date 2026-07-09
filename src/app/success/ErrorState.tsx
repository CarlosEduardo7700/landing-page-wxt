'use client';

import { useRouter } from 'next/navigation';

interface ErrorStateProps {
  errorMessage: string;
}

const styles = {
  wrapper: "text-center",
  iconWrapper: "w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-4",
  icon: "w-8 h-8",
  title: "text-2xl font-bold text-foreground mb-2",
  message: "text-destructive mb-6",
  button: "px-6 py-2 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition",
};

export function ErrorState({ errorMessage }: ErrorStateProps) {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>

      <div className={styles.iconWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>

      <h1 className={styles.title}>Ops! Algo deu errado</h1>
      <p className={styles.message}>{errorMessage}</p>

      <button
        onClick={() => router.push('/')}
        className={styles.button}
      >
        Voltar para a Home
      </button>
    </div>
  );
}
