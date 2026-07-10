import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  href: string;
}

const styles = {
  button: "group inline-flex items-center gap-2 rounded-xl text-base font-semibold text-primary-foreground bg-primary/90 hover:bg-primary active:translate-y-0 transition-all transform px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5",
  icon: "w-4 h-4 transition-transform group-hover:translate-x-1",
};

export default function CtaButton({ href }: CtaButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      Usar Gratuitamente no Chrome
      <ArrowRight className={styles.icon} />
    </Link>
  );
}
