import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.tag}>// Engineer · Founder · Builder</p>
      <h1 className={styles.name}>
        <span className={styles.line1}>Mayank</span>
        <span className={styles.line2}>Jain</span>
      </h1>
      <p className={styles.sub}>
        Engineer-turned-founder with <strong>3+ years</strong> building scalable fintech and consumer products.
        Currently building <strong>Everiday</strong> — a nutrition-tech brand.
        Full-stack, product-minded, systems thinker.
      </p>
      <div className={styles.cta}>
        <a href="#experience" className={styles.btnPrimary}>View Work</a>
        <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
      </div>
      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  );
}
