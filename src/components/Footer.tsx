import Link from "next/link";

const FOOTER_STYLES =
  "border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500";

const INNER_STYLES =
  "max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4";

const LINK_STYLES = "hover:text-slate-300 transition-colors";

export default function Footer() {
  return (
    <footer className={FOOTER_STYLES}>
      <div className={INNER_STYLES}>
        <p>© {new Date().getFullYear()} SeuProduto. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className={LINK_STYLES}>Política de Privacidade</Link>
          <Link href="/terms" className={LINK_STYLES}>Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
