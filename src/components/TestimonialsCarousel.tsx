import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const styles = {
  emptyWrapper: "p-8 rounded-2xl border-2 border-dashed border-border text-center flex flex-col items-center justify-center min-h-[200px]",
  emptyText: "text-sm text-muted-foreground",
  carousel: "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
  card: "p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between flex-shrink-0 w-80 snap-start",
  stars: "flex gap-1 text-amber-500 mb-4",
  starIcon: "w-4 h-4 fill-current",
  content: "text-base text-foreground/90 italic",
  authorWrapper: "mt-6 border-t border-border pt-4",
  authorName: "text-sm font-semibold text-foreground",
  authorRole: "text-xs text-muted-foreground",
};

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  if (testimonials.length === 0) {
    return (
      <div className={styles.emptyWrapper}>
        <p className={styles.emptyText}>
          Gostou da extensão? Envie seu feedback para nós e apareça aqui!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      {testimonials.map((item) => (
        <div
          key={item.name}
          className={styles.card}
        >
          <div>
            <div className={styles.stars}>
              {Array.from({ length: item.stars }).map((_, i) => (
                <Star key={i} className={styles.starIcon} />
              ))}
            </div>
            <p className={styles.content}>
              &quot;{item.content}&quot;
            </p>
          </div>
          <div className={styles.authorWrapper}>
            <h4 className={styles.authorName}>{item.name}</h4>
            <p className={styles.authorRole}>{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
