import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.glow} />
        <p className={`${styles.eyebrow} reveal`}>05 — Contact</p>
        <h2 className="reveal">
          Let's <span>Build</span>
          <br />
          Together
        </h2>
        <a
          href="mailto:mayankjain8377978348@gmail.com"
          className={`${styles.email} reveal`}
        >
          mayankjain8377978348@gmail.com →
        </a>
        <div className={`${styles.links} reveal`}>
          <a href="tel:+918377978348" className={styles.link}>
            📞 +91-8377978348
          </a>
          <a
            href="https://linkedin.com/in/mayankjain-885801173"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            💼 LinkedIn
          </a>
          <a
            href="mailto:mayankjain8377978348@gmail.com"
            className={styles.link}
          >
            ✉️ Email Me
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>© 2026 Mayank Jain — All Rights Reserved</p>
        <p className={styles.location}>Delhi, India</p>
      </footer>
    </>
  );
}
