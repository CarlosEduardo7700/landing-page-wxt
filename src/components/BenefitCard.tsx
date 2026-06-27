import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CARD_STYLES =
  "bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 " +
  "hover:border-indigo-500/30 transition-colors";

const ICON_WRAPPER_STYLES =
  "w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4";

const ICON_STYLES = "w-5 h-5";

const TITLE_STYLES = "text-lg font-semibold text-white mb-2";

const DESCRIPTION_STYLES = "text-slate-400 text-sm leading-relaxed";

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className={CARD_STYLES}>
      <div className={ICON_WRAPPER_STYLES}>
        <Icon className={ICON_STYLES} />
      </div>
      <h3 className={TITLE_STYLES}>{title}</h3>
      <p className={DESCRIPTION_STYLES}>{description}</p>
    </div>
  );
}
