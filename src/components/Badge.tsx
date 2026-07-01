import { Zap } from "lucide-react";

interface BadgeProps {
  label: string;
}

const styles = {
  badge: "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-6 animate-fade-in",
  icon: "w-3 h-3",
};

export default function Badge({ label }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <Zap className={styles.icon} /> {label}
    </div>
  );
}
