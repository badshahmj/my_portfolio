import styles from './Skills.module.css';

const skillsData = [
  { icon: '⚡', title: 'Languages', tags: [['Java','cyan'],['JavaScript','cyan'],['TypeScript','cyan'],['SQL','cyan']] },
  { icon: '🎨', title: 'Frontend',  tags: [['React','pink'],['Preact','pink'],['React Native','pink'],['HTML5','pink'],['CSS3','pink']] },
  { icon: '🔧', title: 'Backend',   tags: [['Node.js','purple'],['Express.js','purple'],['REST APIs','purple'],['Microservices','purple']] },
  { icon: '🗄️', title: 'Databases', tags: [['MongoDB','cyan'],['Firebase','cyan'],['MySQL','cyan'],['PostgreSQL','cyan']] },
  { icon: '🛠️', title: 'Tools & DevOps', tags: [['Git / GitHub','pink'],['Webpack','pink'],['npm','pink'],['Postman','pink']] },
  { icon: '🧠', title: 'Core Competencies', tags: [['DSA','purple'],['System Design','purple'],['UI/UX Dev','purple'],['Agile','purple']] },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <h2>Technical <span>Stack</span></h2>
        <div className={styles.line} />
        <p className={styles.eyebrow}>// 02 — Skills</p>
      </div>
      <div className={styles.grid}>
        {skillsData.map(s => (
          <div key={s.title} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <div className={styles.tags}>
              {s.tags.map(([label, color]) => (
                <span key={label} className={`${styles.tag} ${styles[color]}`}>{label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
