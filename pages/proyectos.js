import React from "react";
import Layout from "@/components/layout";
import Proyecto from "@/components/proyecto";
import styles from "../styles/grid.module.css";

const Proyectos = ({ proyectos }) => {
  return (
    <Layout
      title="Proyectos"
      description="Portafolio, desarrollador, mis proyectos y mas"
    >
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
};

export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/proyectos?populate=imagen`
  );

  const { data: proyectos } = await respuesta.json();
  console.log(proyectos);
  return {
    props: { proyectos },
  };
}
export default Proyectos;
