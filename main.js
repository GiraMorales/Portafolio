import './style.css';
import './dataStyle.css';
<<<<<<< HEAD
import './mediaStyles.css';
=======
import './mediaStyle.css';
>>>>>>> 5560fdea7136004bf5008cebae1d71ae4cca546c
import Header from './Componentes/Header/Header.js';
import Footer from './Componentes/Footer/Footer.js';
import { Main, addMainListeners } from './Componentes/Main/Main.js';
import { addAboutListeners } from './Componentes/AboutMe/AboutMe.js';

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
};

render();
addAboutListeners();
addMainListeners();
