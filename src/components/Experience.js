import styles from "./Experience.module.css";

const jobs = [
  {
    color: "cyan",
    period: "Sep 2024 — Present",
    company: "Everiday",
    title: "Founder",
    location: "Delhi, India",
    bullets: [
      "Founded and launched a <b>nutrition-tech consumer brand</b> focused on science-backed, nutrient-dense products",
      "Led <b>end-to-end product development</b> from ideation to market launch using engineering principles",
      "Developed <b>data-driven growth strategies</b> combining technical background with customer insights",
      "Managed cross-functional ops: product innovation, brand storytelling, supply chain, partnerships",
    ],
  },
  {
    color: "pink",
    period: "Jun 2023 — Aug 2024",
    company: "Flexmoney Technologies",
    title: "Software Development Engineer — SDE-1",
    location: "Mumbai, India",
    bullets: [
      "Delivered Telesales Platform Phase 1 in <b>under 2 weeks</b>, reducing dev time by 40%",
      "Built transaction history system improving <b>follow-up efficiency by 35%</b>",
      "Developed NTB checkout widget integrating pre-approved user flows to improve conversion rates",
      "Separated Transaction App from main Preact project, <b>reducing code complexity by 50%</b>",
      "Created <b>FM Component Library</b> ensuring consistent UI/UX across all products",
    ],
  },
  {
    color: "purple",
    period: "Oct 2021 — Jun 2023",
    company: "Apptware",
    title: "React Developer",
    location: "Pune, India",
    bullets: [
      "Built <b>Evaluate Us</b> — grammar assessment app with chatbot & real-time scoring",
      "Developed <b>Level Up</b> — employee performance platform with gamification features",
      "Created <b>Frontier</b> — access-controlled form system with automated report generation",
      "Contributed to <b>Stock Broking App</b> — investment & payment mobile application",
    ],
  },
  {
    color: "cyan",
    period: "Jul 2021 — Oct 2021",
    company: "Jyngle Technologies",
    title: "Full-Stack Developer",
    location: "Bangalore, India",
    bullets: [
      "Built <b>mobile e-commerce platform</b> connecting shopkeepers and customers",
      "Implemented full-stack solutions with <b>React Native + Firebase</b>",
      "Optimized app performance for seamless transaction flows",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <h2>
          Work <span>History</span>
        </h2>
        <div className={styles.line} />
        <p className={styles.eyebrow}>03 — Experience</p>
      </div>
      <div className={styles.timeline}>
        {jobs.map((j) => (
          <div key={j.title} className={`${styles.item} reveal`}>
            <div className={`${styles.dot} ${styles[j.color]}`} />
            <div className={styles.meta}>
              <span className={`${styles.period} ${styles[j.color]}`}>
                {j.period}
              </span>
              <span className={styles.company}>{j.company}</span>
            </div>
            <h3>{j.title}</h3>
            <p className={styles.loc}>📍 {j.location}</p>
            <ul className={styles.bullets}>
              {j.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
