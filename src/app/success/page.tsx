import { Suspense } from 'react';
import { SuccessContent } from './SuccessContent';

const styles = {
  main: "min-h-screen bg-background flex items-center justify-center p-4",
  card: "bg-card p-8 md:p-12 rounded-2xl shadow-xl max-w-md w-full border border-border",
  suspenseFallback: "text-center text-muted-foreground",
};

export default function SuccessPage() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <Suspense fallback={
          <div className={styles.suspenseFallback}>Carregando dados da sessão...</div>
        }>
          <SuccessContent />
        </Suspense>

      </div>
    </main>
  );
}