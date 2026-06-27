import Link from "next/link";

const FOOTER_STYLES =
  "bg-background border-t border-border/60 py-8 px-6 " +
  "text-sm text-muted-foreground selection:bg-primary selection:text-primary-foreground";

const INNER_STYLES =
  "max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4";

const COPYRIGHT_STYLES = "text-muted-foreground text-xs";

const NAV_STYLES = "flex gap-6";

const LINK_STYLES =
  "text-muted-foreground hover:text-foreground transition-colors duration-200";

export default function Footer() {
  return (
    <footer className={FOOTER_STYLES}>
      <div className={INNER_STYLES}>
        <p className={COPYRIGHT_STYLES}>
          © {new Date().getFullYear()} SeuProduto. Todos os direitos reservados.
        </p>
        <nav className={NAV_STYLES}>
          <Link href="/privacy" className={LINK_STYLES}>Política de Privacidade</Link>
          <Link href="/terms" className={LINK_STYLES}>Termos de Uso</Link>
        </nav>
      </div>
    </footer>
  );
}
