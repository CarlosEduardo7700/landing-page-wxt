import Link from "next/link";

const styles = {
  footer: "bg-background border-t border-border/60 py-8 px-6 text-sm text-muted-foreground selection:bg-primary selection:text-primary-foreground",
  inner: "max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",
  copyright: "text-muted-foreground text-xs",
  nav: "flex gap-6",
  link: "text-muted-foreground hover:text-foreground transition-colors duration-200",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} SeuProduto. Todos os direitos reservados.
        </p>
        <nav className={styles.nav}>
          <Link href="/privacy" className={styles.link}>Política de Privacidade</Link>
          <Link href="/terms" className={styles.link}>Termos de Uso</Link>
        </nav>
      </div>
    </footer>
  );
}
