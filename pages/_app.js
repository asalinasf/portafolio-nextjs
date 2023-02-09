import "@/styles/globals.css";
import proyecto1 from "../public/img/proyecto1.png";
import proyecto2 from "../public/img/proyecto2.png";
import proyecto3 from "../public/img/proyecto3.png";
import proyecto4 from "../public/img/proyecto4.png";
import proyecto5 from "../public/img/proyecto5.png";
import proyecto6 from "../public/img/proyecto6.png";
import proyecto7 from "../public/img/proyecto7.png";
import proyecto8 from "../public/img/proyecto8.png";
import proyecto9 from "../public/img/proyecto9.png";
import proyecto10 from "../public/img/proyecto10.png";
import proyecto11 from "../public/img/proyecto11.png";
import proyecto12 from "../public/img/proyecto12.png";
import proyecto13 from "../public/img/proyecto13.png";
import proyecto14 from "../public/img/proyecto14.png";
import proyecto15 from "../public/img/proyecto15.png";
import proyecto16 from "../public/img/proyecto16.png";
import proyecto17 from "../public/img/proyecto17.png";
import proyecto18 from "../public/img/proyecto18.png";
import proyecto19 from "../public/img/proyecto19.png";
import proyecto20 from "../public/img/proyecto20.png";
import proyecto21 from "../public/img/proyecto21.png";
import proyecto22 from "../public/img/proyecto22.png";
import proyecto23 from "../public/img/proyecto23.png";
import proyecto24 from "../public/img/proyecto24.png";
import proyecto25 from "../public/img/proyecto25.png";
import proyecto26 from "../public/img/proyecto26.png";
import proyecto27 from "../public/img/proyecto27.png";

export default function App({ Component, pageProps }) {
  const proyectos = [
    {
      nombre: "Header basico",
      descripcion:
        "Este fue mi primer proyecto con html y css, en este proyecto aprendia a usar flexbox, a dar clases en html y a usar etiquetas como <div></div>, <ul></ul>, <li></li>",
      imagen: proyecto1,
      urlProyecto: "https://basicmenuas.netlify.app/",
      id: 1,
    },
    {
      nombre: "Pokemon Hover",
      descripcion:
        "Este proyecto, es sobre 5 pokemones y cuando tu pasas sobre ellos el mouse, se levantan y sacan un texto con su nombre, esto lo logre haciendo uso de un hover, esta fue la primera vez que use el metodo hover.",
      imagen: proyecto2,
      urlProyecto: "https://pokemonaaronsalinas.netlify.app/",
      id: 2,
    },
    {
      nombre: "Barra de busqueda",
      descripcion:
        "Este proyecto, es sobre una barra de busqueda parecida a la de Google, esta hecha con HTML y CSS, aprendí a usar mejor flexbox y usar sus propiedades, tambien aprendi a usar los inputs.",
      imagen: proyecto3,
      urlProyecto: "https://aaronsalinasbarra.netlify.app/",
      id: 3,
    },
    {
      nombre: "Pago de PayPal",
      descripcion:
        "Este proyecto, es sobre un pago de PayPal, esta hecha con HTML y CSS, aprendí a usar mejor flexbox y usar sus propiedades, tambien aprendi a usar las propiedades de background y mejorar mis habilidades con animaciones y hover.",
      imagen: proyecto4,
      urlProyecto: "https://pago-aaronsalinas.netlify.app/",
      id: 4,
    },
    {
      nombre: "Cartas de Pokemon",
      descripcion:
        "Este proyecto, es sobre unas cartas de pokemon, esta hecha con HTML y CSS, aprendí a usar mejor flexbox y ademas aprendi a poner fondos con imagenes usar sus propiedades, tambien aprendi usar las etiquetas <img /> y background con gradientes.",
      imagen: proyecto5,
      urlProyecto: "https://cartasaaronsalinas.netlify.app/",
      id: 5,
    },
    {
      nombre: "Navegación Animada",
      descripcion:
        "Este proyecto, es sobre una navegacion o menu, esta hecho con HTML y CSS, aprendí a usar flexbox, animaciones, before y after.",
      imagen: proyecto6,
      urlProyecto: "https://menuaaronsalinas.netlify.app/",
      id: 6,
    },
    {
      nombre: "Particulas",
      descripcion:
        "Este proyectos, es sobre unas particulas descendiendo desde la parte superior de la pantalla, esta  hecho con HTML y CSS, aprendí a usar el metodo keyframes para realizar todos esos circulos y les puse clases diferentes para que algunos fueran de distintos colores.",
      imagen: proyecto7,
      urlProyecto: "https://keyframesaaronsalinas.netlify.app/",
      id: 7,
    },
    {
      nombre: "Artículo Nike",
      descripcion:
        "Este proyectos, es sobre un articulo de Nike, esta  hecho con HTML y CSS, aprendí a usar animaciones, before, after y el metodo de border radios para las esquinas.",
      imagen: proyecto8,
      urlProyecto: "https://nikeaaronsalinas.netlify.app/",
      id: 8,
    },
    {
      nombre: "Pagina de Netflix",
      descripcion:
        "Este proyectos, es sobre una pagina de Netflix, esta  hecho con HTML y CSS, aprendí a usar animaciones etiqueda de video y a hacer unanavegacion profesional como la de Netflix.",
      imagen: proyecto9,
      urlProyecto: "https://netflix-aaronsalinas.netlify.app/",
      id: 9,
    },
    {
      nombre: "Lista de personajes",
      descripcion:
        "Este proyecto es sobre una lista de personajes, esta hecha con HTML y CSS, aprendí a hacer un fondo transparente con un difuminado, tambien aprendi a utilizar mejor los metodos before y after.",
      imagen: proyecto10,
      urlProyecto: "https://personajes-aaronsalinas.netlify.app/",
      id: 10,
    },
    {
      nombre: "Tienda de Cubos",
      descripcion:
        "Este proyecto se trata de una tienda de cubos, esta hecho con HTML y CSS, la hice inspirandome en la pagina TheCubicle y me quedo parecida, en mi opnion quedo bien y cuando hacer algo tu solo aprendes mas porque pones en práctica lo que ya sabes.",
      imagen: proyecto11,
      urlProyecto: "https://skube.netlify.app/",
      id: 11,
    },
    {
      nombre: "Targetas Personajes Marvel",
      descripcion:
        "Este proyecto se trata de tres targetas sobre personajes de Marvel entre ellos: Iron Man, Loki y Thor, tienen un aspecto muy moderno cuando pasas el mouse sobre ellas ",
      imagen: proyecto12,
      urlProyecto: "https://animacionaaron.netlify.app/",
      id: 12,
    },
    {
      nombre: "Login Moderno",
      descripcion:
        "Este proyecto se trata de un login moderno, esta hecho con HTML y CSS, aprendi a hacer un login moderno como este, y para esos cuadrados flotantes utilice before y after.",
      imagen: proyecto13,
      urlProyecto: "https://first-login-aaron.netlify.app/",
      id: 13,
    },
    {
      nombre: "Ondas",
      descripcion:
        "Este proyecto se trata de unas ondas, esta hecho en HTML y CSS, use los keyframes para hacer que se mevieran con una animacion y aprendi a usar los keyframes de una mejor forma y mas optima, afirmando mis conocimientos.",
      imagen: proyecto14,
      urlProyecto: "https://ondas-aaron.netlify.app/",
      id: 14,
    },
    {
      nombre: "Articulo Nike 2",
      descripcion:
        "Este proyecto se trata de un articulo de Nike, está hecho con HTML y CSS, aprendi a hacer una animación, de que un objeto este levitando, tambien aprendi a usar mejor las animaciones y gradientes.",
      imagen: proyecto15,
      urlProyecto: "https://nikepage-aaron.netlify.app/",
      id: 15,
    },
    {
      nombre: "Targeta de Musica",
      descripcion:
        "Este proyecto se trata de una targeta de musica, esta hecho con HTML y CSS, aprendi a usar las etiquetas de audio y hacer una targeta para reproducir alguna musica, tambien aprendi a hacer un gradiente rosado con morado.",
      imagen: proyecto16,
      urlProyecto: "https://audio-aaron.netlify.app/",
      id: 16,
    },
    {
      nombre: "Pagina de Turismo",
      descripcion:
        "Este proyecto se trata de una pagina de turismo, esta hecha con HTML y CSS, aprendi a hacer una pagina de turismo muy moderna y con buenos estilos aplicando todos mis conocimientos.",
      imagen: proyecto17,
      urlProyecto: "https://turismo-aaron.netlify.app/",
      id: 17,
    },
    {
      nombre: "Cartas Modernas",
      descripcion:
        "Este proyecto se trata de cartas modernas, esta hecho con HTML y CSS, apredí a hacer mejores animaciones con CSS y tambien agregar mejores transiciones.",
      imagen: proyecto18,
      urlProyecto: "https://cards-aaron.netlify.app/",
      id: 18,
    },
    {
      nombre: "Targetas Descriptivas",
      descripcion:
        "Este proyecto se trata de tres targetas descriptivas, esta hecho con HTML y CSS, aprendí a hacer animaciones, hover, backgrounds modernos y hacer botones que sean atractivos a la vista.",
      imagen: proyecto19,
      urlProyecto: "https://targetas-descriptivas.netlify.app/",
      id: 19,
    },
    {
      nombre: "Texto Iluminado",
      descripcion:
        "Este proyecto se trata de un texto iluminado, esta hecho con HTML y CSS, aprendí a hacer este tipo de hover, aplicando un shadow blanco y un background negro.",
      imagen: proyecto20,
      urlProyecto: "https://text-aaron.netlify.app/",
      id: 20,
    },
    {
      nombre: "Targetas 3d",
      descripcion:
        "Este proyecto se trata de targetas 3d de One Piece, est hecho con HTML y CSS, y aprendi a usar las propiedades 3d y esconder detras otro elemento, como un <div /> con texto",
      imagen: proyecto21,
      urlProyecto: "https://cards3d-aaron.netlify.app/",
      id: 21,
    },
    {
      nombre: "Targetas expandibles",
      descripcion:
        "Este proyecto se trata de targetas expandibles con un fondo degradado, esta hecho con HTML, JavaScript y CSS, y aprendi a usar los onClick() y los buttons, agregue un before y after en la targeta y agregue una animación cuando abres otra targeta.",
      imagen: proyecto22,
      urlProyecto: "https://targetas-espandibles-aaron.netlify.app/",
      id: 22,
    },
    {
      nombre: "Replica de Imagen",
      descripcion:
        "Este proyecto es una replica de una imagen que vi, esta hecho con HTML y CSS, osea que solo es el diseño pero me quedo igual, además añadi que sea resposive y aprendi mucho mas de lo que ya sabia ya que puse en práctica todos mis conocimientos sobre CSS.",
      imagen: proyecto23,
      urlProyecto: "https://splitter-aaron.netlify.app/",
      id: 23,
    },
    {
      nombre: "Citas veterinaria",
      descripcion:
        "Este proyecto es una pagina para que una veterinaria tenga el seguimiento para sus pacientes, esta hecha con React, las tecnologias usadas son: HTML, JavaScript, CSS, JSX, Vite y mas, aprendi a usar react, como las variables de estado hooks y mas, este fue mi primer proyecto con React. ",
      imagen: proyecto24,
      urlProyecto: "https://citas-react-aaron.netlify.app/",
      id: 24,
    },
    {
      nombre: "Planificador de Gastos",
      descripcion:
        "Este proyecto se trata de una pagina para planificar tus gastos, esta hecho con Ract, las tecnologias usadas son: HTML, JavaScript, CSS, JSX, Vite y mas, aprendi a usar react, como las variables de estado hooks y librerias para React como en este caso use una para hacer una rueda de porcentaje.",
      imagen: proyecto25,
      urlProyecto: "https://planificador-de-gastos-react-vite.netlify.app/",
      id: 25,
    },
    {
      nombre: "Cotizar Criptomonedas",
      descripcion:
        "Este proyecto se  trata de una pagina para cotizar criptomonedas al instante, esta hecho con React, las tecnologias usadas son: React, JavaScript, HTML, CSS Next.js. aprendi a usar y crear tus propios hooks, también aprendi a conectarme a  una API y poner imagenes en React.",
      imagen: proyecto26,
      urlProyecto: "https://cotiza-criptos-react-salinas.netlify.app/",
      id: 26,
    },
    {
      nombre: "Cotizar Seguro de Auto",
      descripcion:
        "Este proyecto se trata de una pagina web para cotizar seguros de autos,esta hecho con React, las tecnologias usadas son: React, JavaScript, HTML, CSS Next.js . Aprendí a conectarme a una API y a usar AXIOS para conectarte a una API.",
      imagen: proyecto27,
      urlProyecto: "https://cotizador-seguro-aaron.netlify.app/",
      id: 27,
    },
  ];

  const proyectosFavoritos = [
    {
      nombre: "Citas veterinaria",
      descripcion:
        "Este proyecto es una pagina para que una veterinaria tenga el seguimiento para sus pacientes, esta hecha con React, las tecnologias usadas son: HTML, JavaScript, CSS, JSX, Vite y mas, aprendi a usar react, como las variables de estado hooks y mas, este fue mi primer proyecto con React. ",
      imagen: proyecto24,
      urlProyecto: "https://citas-react-aaron.netlify.app/",
      id: 1,
    },
    {
      nombre: "Planificador de Gastos",
      descripcion:
        "Este proyecto se trata de una pagina para planificar tus gastos, esta hecho con Ract, las tecnologias usadas son: HTML, JavaScript, CSS, JSX, Vite y mas, aprendi a usar react, como las variables de estado hooks y librerias para React como en este caso use una para hacer una rueda de porcentaje.",
      imagen: proyecto25,
      urlProyecto: "https://planificador-de-gastos-react-vite.netlify.app/",
      id: 2,
    },
    {
      nombre: "Cotizar Seguro de Auto",
      descripcion:
        "Este proyecto se trata de una pagina web para cotizar seguros de autos,esta hecho con React, las tecnologias usadas son: React, JavaScript, HTML, CSS Next.js . Aprendí a conectarme a una API y a usar AXIOS para conectarte a una API.",
      imagen: proyecto27,
      urlProyecto: "https://cotizador-seguro-aaron.netlify.app/",
      id: 3,
    },
    {
      nombre: "Cotizar Criptomonedas",
      descripcion:
        "Este proyecto se  trata de una pagina para cotizar criptomonedas al instante, esta hecho con React, las tecnologias usadas son: React, JavaScript, HTML, CSS Next.js. aprendi a usar y crear tus propios hooks, también aprendi a conectarme a  una API y poner imagenes en React.",
      imagen: proyecto26,
      urlProyecto: "https://cotiza-criptos-react-salinas.netlify.app/",
      id: 4,
    },
    {
      nombre: "Tienda de Cubos",
      descripcion:
        "Este proyecto se trata de una tienda de cubos, esta hecho con HTML y CSS, la hice inspirandome en la pagina TheCubicle y me quedo parecida, en mi opnion quedo bien y cuando hacer algo tu solo aprendes mas porque pones en práctica lo que ya sabes.",
      imagen: proyecto11,
      urlProyecto: "https://skube.netlify.app/",
      id: 5,
    },
    {
      nombre: "Targetas Personajes Marvel",
      descripcion:
        "Este proyecto se trata de tres targetas sobre personajes de Marvel entre ellos: Iron Man, Loki y Thor, tienen un aspecto muy moderno cuando pasas el mouse sobre ellas ",
      imagen: proyecto12,
      urlProyecto: "https://animacionaaron.netlify.app/",
      id: 6,
    },
  ];

  return (
    <Component
      {...pageProps}
      proyectos={proyectos}
      proyectosFavoritos={proyectosFavoritos}
    />
  );
}
