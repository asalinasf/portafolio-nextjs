import Image from "next/image";
import styles from "../styles/proyecto.module.css";
import Link from "next/link";

const Proyecto = ({ proyecto }) => {
  const { nombre, descripcion, imagen, urlProyecto } = proyecto;

  return (
    <div className={styles.container}>
      <Image
        src={imagen}
        width={500}
        height={500}
        alt="Imagen proyecto"
        className={styles.imagen}
      />
      <div className={styles.contenido}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <Link className={styles.enlace} href={urlProyecto} target="_blank">
          Visitar Proyecto
        </Link>
      </div>
    </div>
  );
};

export default Proyecto;
