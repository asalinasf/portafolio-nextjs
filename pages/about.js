import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <Layout
      title="About"
      description="Portafolio, desarrollador, mis proyectos y mas"
    >
      <div className={styles.imagenFondo}>
        <main className={styles.contenedor}>
          <div className={styles.contenido}>
            <h1 className={styles.titulo}>Hola soy Aaron Salinas</h1>
            <p className={styles.descripcion}>
              Actual mente estoy estudiando React para poder trabajar como
              freelancer, aqui encontraras todos mis proyectos y su descripcion
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
