const styles = {
  wrapper: "space-y-4",
  videoContainer: "border border-border bg-card rounded-2xl overflow-hidden shadow-xl aspect-video relative flex items-center justify-center",
  video: "w-full h-full object-cover",
  caption: "text-xs text-center text-muted-foreground",
};

export default function DemoVideo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <video
          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>
      <p className={styles.caption}>
        Demonstração visual do funcionamento da extensão dentro do ecossistema do navegador.
      </p>
    </div>
  );
}
