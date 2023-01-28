import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="contenedor">
        <nav className={styles.navegacion}>
          <Link href="/" className={styles.enlace}>
            Inicio
          </Link>
          <Link href="/about" className={styles.enlace}>
            About
          </Link>
          <Link href="/proyectos" className={styles.enlace}>
            Proyectos
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
