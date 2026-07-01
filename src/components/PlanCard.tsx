import { Check } from "lucide-react";

interface PlanCardProps {
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  features: string[];
  buttonLabel: string;
  highlighted?: boolean;
  badge?: string;
  onButtonClick?: () => void;
}

const styles = {
  cardBase: "flex flex-col justify-between p-8 rounded-2xl text-left relative",
  cardDefault: "bg-background border border-border shadow-sm",
  cardHighlighted: "bg-background border-2 border-primary shadow-xl",
  badge: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
  name: "text-xl font-semibold text-foreground",
  description: "mt-2 text-sm text-muted-foreground",
  priceWrapper: "mt-6 flex items-baseline gap-1",
  price: "text-4xl font-bold tracking-tight text-foreground",
  priceSuffix: "text-sm font-semibold text-muted-foreground",
  featuresList: "mt-8 space-y-3 text-sm text-muted-foreground",
  featureItem: "flex items-center gap-3",
  checkDefault: "w-4 h-4 shrink-0 text-emerald-500",
  checkHighlighted: "w-4 h-4 shrink-0 text-primary",
  buttonBase: "mt-8 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-colors cursor-pointer",
  buttonDefault: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  buttonHighlighted: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
};

export default function PlanCard({
  name,
  description,
  price,
  priceSuffix,
  features,
  buttonLabel,
  highlighted = false,
  badge,
  onButtonClick,
}: PlanCardProps) {
  return (
    <div
      className={`${styles.cardBase} ${highlighted ? styles.cardHighlighted : styles.cardDefault}`}
    >
      {badge && (
        <span className={styles.badge}>
          {badge}
        </span>
      )}

      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{price}</span>
          <span className={styles.priceSuffix}>{priceSuffix}</span>
        </div>

        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <Check
                className={highlighted ? styles.checkHighlighted : styles.checkDefault}
              />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onButtonClick}
        className={`${styles.buttonBase} ${highlighted ? styles.buttonHighlighted : styles.buttonDefault}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
