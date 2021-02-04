import solarSystem1 from "./images/solar-system/solar-system1.jpg";
import solarSystem2 from "./images/solar-system/solar-system2.jpg";
import solarSystem3 from "./images/solar-system/solar-system3.jpg";
import solarSystem4 from "./images/solar-system/solar-system4.jpg";
import solarSystem5 from "./images/solar-system/solar-system5.jpg";

const projects = [
    {
        title: 'Solar System',
        gitHubLink: 'https://github.com/JavierHerreraM/solar-system',
        description: ['Es un website tipo infográfico del sistema solar con una animacion, da información acerca de cada planeta y datos como su circunferencia o masa.','La idea del proyecto era crear una animación de los planetas girando alrededor del sol, esto se logró usando la librería anime.js y también probar el uso de svgs para los planetas.', 'Tuve problemas con la animación de los planetas, se llamaba cada vez que se abría el home y causaba que se pegara la pagina, anime.js crea su propio requestAnimationFrame y cada vez que se montaba el component del home creaba un nuevo RAF.', 'Resolví esto desactivando el RAF de anime.js y creando yo uno para controlar la animación.'],
        flags: [ 'Sass', 'React', 'Anime.js', 'Single Page App'],
        images: [{imgUrl: solarSystem3, alt: 'Solar system page'}, {imgUrl: solarSystem2, alt: 'Solar system page'}, {imgUrl: solarSystem1, alt: 'Solar system page'}, {imgUrl: solarSystem4, alt: 'Solar system page'}, {imgUrl: solarSystem5, alt: 'Solar system page'}, ],
        btnLink: 'https://www.youtube.com/watch?v=T_FkEw27XJ0'
    },
]

export default projects;