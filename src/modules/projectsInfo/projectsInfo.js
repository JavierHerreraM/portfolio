import solarSystem1 from "./images/solar-system/solar-system1.jpg";
import solarSystem2 from "./images/solar-system/solar-system2.jpg";
import solarSystem3 from "./images/solar-system/solar-system3.jpg";
import solarSystem4 from "./images/solar-system/solar-system4.jpg";
import solarSystem5 from "./images/solar-system/solar-system5.jpg";

import restApi1 from "./images/rest-api/rest-api1.jpg"
import restApi2 from "./images/rest-api/rest-api2.jpg"
import restApi3 from "./images/rest-api/rest-api3.jpg"

import endpoint1 from './images/endpoint/endpoint1.jpg'
import endpoint2 from './images/endpoint/endpoint2.jpg'
import endpoint3 from './images/endpoint/endpoint3.jpg'
import endpoint4 from './images/endpoint/endpoint4.jpg'

// import workInProcess from "./images/rest-api/work-in-process.png";

// * Each project has a title, link to the github repo, a description of what it does and info about it, flags that are 
// * the technologies used, images and the link to the page
const projects = [
    {
        title: 'ENDPOINT',
        gitHubLink: 'https://github.com/JavierHerreraM/Endpoint',
        description: ['Endpoint es una interfaz gráfica para interactuar de manera más sencilla con mi otro proyecto RESTful API.', 'Contiene la documentación con ejemplos y permite el poder manipular a gusto la lista de usuarios. Surgió de la idea de crear un proyecto acompañante del otro proyecto y así hacer todo el paso desde bases de datos y backend hasta el frontend junto con el diseño.', 'A diferencia de otros proyectos que he hecho esta vez decidí implementar Bootstrap para usarlo de base en el layout y modificar lo que necesitara con Sass, esto trajo problemas con la navegación al hacer la página una SPA; termine optando por hacer el esqueleto y la funcionalidad de la navegación y utilizando Bootstrap para darle los estilos.'],
        flags: [ 'Javascript ES6+', 'React', 'Single Page App', 'Bootstrap', 'Sass', 'Axios', 'GitHub'],
        images: [{imgUrl: endpoint1, alt: 'Endpoint website'}, {imgUrl: endpoint2, alt: 'Users dashboard'}, {imgUrl: endpoint3, alt: 'User panel'}, {imgUrl: endpoint4, alt: 'Documentation'}, ],
        btnLink: 'https://endpoint-javier-herrera.netlify.app/'
    },
    {
        title: 'RESTful API',
        gitHubLink: 'https://github.com/JavierHerreraM/RESTful-API',
        description: ['Es un REST API para realizar operaciones C.R.U.D.', 'Se basa en un modelo de usuario con cinco propiedades: username, nombre, apellido, edad y correo electrónico. De base viene con 10 usuarios pre creados que son totalmente modificables.', 'Está hecha con Express para el servidor y MongoDB para la base de datos, también utiliza librerías como Joi para la validación de datos o Jest para hacer unit e integration testing.', 'Puede encontrar la documentación en el GitHub del proyecto o utilizar la interfaz gráfica Endpoint que diseñe para facilitar el uso de esta API.'],
        flags: [ 'Javascript ES6+', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Rest API', 'Jest', 'GitHub'],
        images: [{imgUrl: restApi1, alt: 'RESTful API'}, {imgUrl: restApi2, alt: 'Requests code'}, {imgUrl: restApi3, alt: 'Documentation'}],
        btnLink: 'https://endpoint-javier-herrera.netlify.app/'
    },
    {
        title: 'Solar System',
        gitHubLink: 'https://github.com/JavierHerreraM/solar-system',
        description: ['Es un sitio web tipo infográfico del sistema solar con animacion, da información acerca de cada planeta y datos interesantes.','La idea del proyecto era crear una animación de los planetas girando alrededor del sol, esto lo logre usando la librería anime.js y también probar el uso de svgs para los planetas.', 'Tuve problemas con la animación de los planetas, se llamaba cada vez que se abría el home y causaba que se pegara la pagina, anime.js crea su propio requestAnimationFrame y cada vez que se montaba el component del home creaba un nuevo RAF.', 'Resolví esto desactivando el RAF de anime.js y creando yo uno para controlar la animación.'],
        flags: [ 'Javascript ES6+', 'Sass', 'React', 'Anime.js', 'Single Page App'],
        images: [{imgUrl: solarSystem3, alt: 'Solar system page'}, {imgUrl: solarSystem2, alt: 'Solar system page'}, {imgUrl: solarSystem1, alt: 'Solar system page'}, {imgUrl: solarSystem4, alt: 'Solar system page'}, {imgUrl: solarSystem5, alt: 'Solar system page'}, ],
        btnLink: 'https://solar-system-javier-herrera.netlify.app/'
    }
]

export default projects;