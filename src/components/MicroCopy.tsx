import { ShieldCheck } from "lucide-react";

interface MicroCopyProps {
  text: string;
}

const styles = {
  wrapper: "mt-3 text-xs text-muted-foreground flex items-center gap-1",
  icon: "w-3.5 h-3.5 text-emerald-500",
};

export default function MicroCopy({ text }: MicroCopyProps) {
  return (
    <p className={styles.wrapper}>
      <ShieldCheck className={styles.icon} /> {text}
    </p>
  );
}
