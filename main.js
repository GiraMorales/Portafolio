import './style.css';
import './dataStyle.css';
import './mediaStyle.css';
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
