import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";
import stylesAbout from "../styles/about.module.css";
import Proyecto from "@/components/proyecto";
import Tecnologias from "@/components/tecnologias";

export default function Home({ proyectosFavoritos }) {
  console.log(proyectosFavoritos);
  return (
    <Layout
      title="Inicio"
      description="Portafolio, desarrollador, mis proyectos y mas"
    >
      <div className={stylesAbout.imagenFondo}>
        <main className={stylesAbout.contenedor}>
          <div className={stylesAbout.contenido}>
            <h1 className={stylesAbout.titulo}>Hola soy Aaron Salinas</h1>
            <p className={stylesAbout.descripcion}>
              Actual mente estoy estudiando React para poder trabajar como
              freelancer, aqui encontraras todos mis proyectos y su descripcion
            </p>
          </div>
        </main>
      </div>
      <main className="contenedor">
        <h1 className="heading">Mis proyectos favoritos</h1>
        <div className={styles.grid}>
          {proyectosFavoritos.map((proyecto) => (
            <Proyecto proyecto={proyecto} />
          ))}
        </div>
      </main>
      <Tecnologias />
    </Layout>
  );
}
