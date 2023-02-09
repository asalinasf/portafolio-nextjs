import styles from "../styles/about.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript, DiCss3, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
const Tecnologias = () => {
  return (
    <main className={styles.contenedor}>
      <div className={styles.contenedorTec}>
        <h1 className={styles.tituloTec}>
          Tecnologías que domino y estoy estudiando
        </h1>
        <div className={styles.contenidoTec}>
          <div className={styles.contenedorTecImg}>
            <AiFillHtml5 className={styles.html} />
            <h3>HTML</h3>
          </div>
          <div className={styles.contenedorTecImg}>
            <DiCss3 className={styles.css} />
            <h3>CSS</h3>
          </div>
          <div className={styles.contenedorTecImg}>
            <DiJavascript className={styles.js} />
            <h3>JavaScript</h3>
          </div>
          <div className={styles.contenedorTecImg}>
            <DiReact className={styles.react} />
            <h3>React</h3>
          </div>
          <div className={styles.contenedorTecImg}>
            <TbBrandNextjs className={styles.next} />
            <h3>Next.js</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tecnologias;
