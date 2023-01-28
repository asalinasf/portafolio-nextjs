import Layout from "@/components/layout";
import Proyecto from "@/components/proyecto";
import styles from "../styles/grid.module.css";
import stylesAbout from "../styles/about.module.css";

export default function Home({ proyectos }) {
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
        <h1 className="heading">Mis proyectos</h1>
        <div className={styles.grid}>
          {proyectos?.map((proyecto) => (
            <Proyecto key={proyecto.id} proyecto={proyecto.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/proyectos?populate=imagen`
  );

  const { data: proyectos } = await respuesta.json();
  console.log(proyectos);
  return {
    props: { proyectos },
  };
}
