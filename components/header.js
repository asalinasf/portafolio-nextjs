import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <header className={`${styles.header}`}>
      <a href="/" className={styles.logoEnlace}>
        <h1 className={`${styles.logo}`}>Aaron-Salinas</h1>
      </a>
      <nav className={styles.navegacion}>
        <Link
          href="/"
          className={router.pathname === "/" ? styles.active : styles.enlace}
        >
          Inicio
        </Link>
        <Link
          href="/about"
          className={
            router.pathname === "/about" ? styles.active : styles.enlace
          }
        >
          About
        </Link>
        <Link
          href="/proyectos"
          className={
            router.pathname === "/proyectos" ? styles.active : styles.enlace
          }
        >
          Proyectos
        </Link>
        <Link href="https://github.com/asalinasf" target="_blank">
          <AiOutlineGithub className={styles.github} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
