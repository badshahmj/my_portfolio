import styles from './Projects.module.css';

const projects = [
  { num:'01', title:'Everiday', desc:'Nutrition-tech consumer brand. Led everything from product R&D to go-to-market strategy using engineering principles.', tags:[['Founder','cyan'],['Product','pink'],['Strategy','purple']] },
  { num:'02', title:'Telesales Platform', desc:'Role-based fintech telesales platform with real-time agent-customer credit application flows. Phase 1 shipped in under 2 weeks.', tags:[['Preact','cyan'],['Node.js','pink'],['RBAC','purple']] },
  { num:'03', title:'FM Component Library', desc:'Unified component library establishing consistent UI/UX standards across all Flexmoney products.', tags:[['React','cyan'],['Design System','pink']] },
  { num:'04', title:'Level Up', desc:'Employee performance tracking platform with gamification, multiple dashboard skins, and team challenge creation for managers.', tags:[['React','cyan'],['Gamification','pink'],['Dashboard','purple']] },
  { num:'05', title:'Evaluate Us', desc:'Grammar assessment application with custom chatbot integration, interactive UI, and real-time scoring system.', tags:[['React','cyan'],['Chatbot','pink'],['Real-time','purple']] },
  { num:'06', title:'E-Commerce Mobile App', desc:'Full-stack mobile platform connecting shopkeepers and customers. Built frontend interfaces and backend database architecture end-to-end.', tags:[['React Native','cyan'],['Firebase','pink'],['Full-Stack','purple']] },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <h2>Featured <span>Projects</span></h2>
        <div className={styles.line} />
        <p className={styles.eyebrow}>// 04 — Work</p>
      </div>
      <div className={styles.grid}>
        {projects.map(p => (
          <div key={p.num} className={`${styles.card} reveal`}>
            <div className={styles.num}>{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map(([label, color]) => (
                <span key={label} className={`${styles.tag} ${styles[color]}`}>{label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
