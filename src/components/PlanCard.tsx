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

const CARD_BASE_STYLES =
  "flex flex-col justify-between p-8 rounded-2xl text-left relative";

const CARD_DEFAULT_STYLES = "bg-background border border-border shadow-sm";

const CARD_HIGHLIGHTED_STYLES = "bg-background border-2 border-primary shadow-xl";

const BADGE_STYLES =
  "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider";

const NAME_STYLES = "text-xl font-semibold text-foreground";

const DESCRIPTION_STYLES = "mt-2 text-sm text-muted-foreground";

const PRICE_WRAPPER_STYLES = "mt-6 flex items-baseline gap-1";

const PRICE_STYLES = "text-4xl font-bold tracking-tight text-foreground";

const PRICE_SUFFIX_STYLES = "text-sm font-semibold text-muted-foreground";

const FEATURES_LIST_STYLES = "mt-8 space-y-3 text-sm text-muted-foreground";

const FEATURE_ITEM_STYLES = "flex items-center gap-3";

const CHECK_DEFAULT_STYLES = "w-4 h-4 shrink-0 text-emerald-500";

const CHECK_HIGHLIGHTED_STYLES = "w-4 h-4 shrink-0 text-primary";

const BUTTON_BASE_STYLES =
  "mt-8 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-colors cursor-pointer";

const BUTTON_DEFAULT_STYLES =
  "bg-secondary text-secondary-foreground hover:bg-secondary/80";

const BUTTON_HIGHLIGHTED_STYLES =
  "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20";

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
      className={`${CARD_BASE_STYLES} ${highlighted ? CARD_HIGHLIGHTED_STYLES : CARD_DEFAULT_STYLES}`}
    >
      {badge && (
        <span className={BADGE_STYLES}>
          {badge}
        </span>
      )}

      <div>
        <h3 className={NAME_STYLES}>{name}</h3>
        <p className={DESCRIPTION_STYLES}>{description}</p>
        <div className={PRICE_WRAPPER_STYLES}>
          <span className={PRICE_STYLES}>{price}</span>
          <span className={PRICE_SUFFIX_STYLES}>{priceSuffix}</span>
        </div>

        <ul className={FEATURES_LIST_STYLES}>
          {features.map((feature, index) => (
            <li key={index} className={FEATURE_ITEM_STYLES}>
              <Check
                className={highlighted ? CHECK_HIGHLIGHTED_STYLES : CHECK_DEFAULT_STYLES}
              />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onButtonClick}
        className={`${BUTTON_BASE_STYLES} ${highlighted ? BUTTON_HIGHLIGHTED_STYLES : BUTTON_DEFAULT_STYLES}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
