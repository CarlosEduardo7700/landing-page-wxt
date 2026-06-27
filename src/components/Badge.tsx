import { Zap } from "lucide-react";

interface BadgeProps {
  label: string;
}

const BADGE_STYLES =
  "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium " +
  "text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6 animate-fade-in";

const ICON_STYLES = "w-3 h-3";

export default function Badge({ label }: BadgeProps) {
  return (
    <div className={BADGE_STYLES}>
      <Zap className={ICON_STYLES} /> {label}
    </div>
  );
}
