import { ShieldCheck } from "lucide-react";

interface MicroCopyProps {
  text: string;
}

const WRAPPER_STYLES = "mt-3 text-xs text-muted-foreground flex items-center gap-1";

const ICON_STYLES = "w-3.5 h-3.5 text-emerald-500";

export default function MicroCopy({ text }: MicroCopyProps) {
  return (
    <p className={WRAPPER_STYLES}>
      <ShieldCheck className={ICON_STYLES} /> {text}
    </p>
  );
}
