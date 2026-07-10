const styles = {
  wrapper: "text-center",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4",
  title: "text-2xl font-bold text-foreground mb-2",
  subtitle: "text-muted-foreground",
};

export function LoadingState() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
      <h1 className={styles.title}>Confirmando seu pagamento...</h1>
      <p className={styles.subtitle}>Aguarde alguns segundos enquanto ativamos sua conta Pro.</p>
    </div>
  );
}
