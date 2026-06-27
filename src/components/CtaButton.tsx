import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  href: string;
}

const BUTTON_STYLES = 
  "group inline-flex items-center gap-2 rounded-xl text-base font-semibold text-white " +
  "bg-indigo-600 hover:bg-indigo-500 active:translate-y-0 transition-all transform " +
  "px-8 py-4 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5";

const ICON_STYLES = "w-4 h-4 transition-transform group-hover:translate-x-1";

export default function CtaButton({ href }: CtaButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={BUTTON_STYLES}
    >
      Usar Gratuitamente no Chrome
      <ArrowRight className={ICON_STYLES} />
    </Link>
  );
}
