import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
        <a href='#sobre'>Sobre Mim</a>
        <a href='#projetos'>Projetos</a>
        <a href='#experiencia'>Experiências</a>
        <a href='#estudos'>Estudos</a>
          <a className={`${styles.menuItem} ${styles.dropdown}`}>
            <span>Contato</span>
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="https://github.com/Guilherme0112" target='_blank'>GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/guilherme-mendes-gomes/" target='_blank'>LinkedIn</a>
              </li>
              <li>
                <a href="mailto:guimendesmen124@gmail.com">Gmail</a>
              </li>
              <li>
                <a href="https://www.instagram.com/gui.espanhol" target='_blank'>Instagram</a>
              </li>
            </ul>
          </a>
    </header>
    );
}