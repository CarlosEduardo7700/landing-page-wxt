interface SubheadlineProps {
  text: string;
}

const styles = {
  subheadline: "mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed",
};

export default function Subheadline({ text }: SubheadlineProps) {
  return <p className={styles.subheadline}>{text}</p>;
}
