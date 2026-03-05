import styles from './Navbar.module.css';

const links = ['about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>MJ<span>.</span></a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}><a href={`#${l}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
  );
}
