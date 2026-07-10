import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const styles = {
  card: "bg-card/60 border border-border/80 rounded-2xl p-6 hover:border-primary/30 transition-colors",
  iconWrapper: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4",
  icon: "w-5 h-5",
  title: "text-lg font-semibold text-foreground mb-2",
  description: "text-muted-foreground text-sm leading-relaxed",
};

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
