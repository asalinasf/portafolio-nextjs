import Image from "next/image";
import styles from "../styles/about.module.css";
import Tecnologias from "@/components/tecnologias";
import Layout from "@/components/layout";

const About = () => {
  return (
    <Layout
      title="About"
      description="Portafolio, desarrollador, mis proyectos y mas"
    >
      <div className={styles.imagenFondo}>
        <main>
          <div className={styles.contenido}>
            <h1 className={styles.titulo}>Hola soy Aaron Salinas</h1>
            <p className={styles.descripcion}>
              Actual mente estoy estudiando React para poder trabajar como
              freelancer, aqui encontraras todos mis proyectos y su descripcion
            </p>
          </div>
        </main>
      </div>
      <Tecnologias />
    </Layout>
  );
};

export default About;
