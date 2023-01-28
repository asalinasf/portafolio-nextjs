import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/proyecto.module.css";

const UrlProyecto = ({ proyecto }) => {
  const { nombre, descripcion, imagen, urlProyecto } = proyecto[0].attributes;

  console.log(proyecto);
  return (
    <Layout title={nombre}>
      <article className={`contenedor ${styles.containerProyecto}`}>
        <Image
          src={imagen.data[0].attributes.url}
          height={1000}
          width={1000}
          alt="imagen proyecto"
          className={styles.imagen}
        />
        <div className="contenido">
          <h1 className="heading">{nombre}</h1>
          <p>{descripcion}</p>
          <Link href={urlProyecto} target="_blank" className={styles.enlace}>
            Visitar Proyecto
          </Link>
        </div>
      </article>
    </Layout>
  );
};

// export async function getServerSideProps({ params: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/proyectos?filters[url]=${url}&populate=imagen`
//   );
//   const { data: proyecto } = await respuesta.json();

//   return {
//     props: {
//       proyecto,
//     },
//   };
// }

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/proyectos`);
  const { data } = await respuesta.json();

  console.log(data);

  const paths = data.map((proyecto) => ({
    params: {
      url: proyecto.attributes.url,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/proyectos?filters[url]=${url}&populate=imagen`
  );
  const { data: proyecto } = await respuesta.json();

  return {
    props: {
      proyecto,
    },
  };
}

export default UrlProyecto;
