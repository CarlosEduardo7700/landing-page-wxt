interface HeadlineProps {
  text: string;
}

const HEADLINE_STYLES =
  "text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl " +
  "bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.15]";

export default function Headline({ text }: HeadlineProps) {
  return <h1 className={HEADLINE_STYLES}>{text}</h1>;
}
