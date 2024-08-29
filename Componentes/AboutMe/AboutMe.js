import data from '../../Data/Data.js';
import './AboutMe.css';

const skill = [];

const template = () => {
  // Función para crear el HTML de una tarjeta de habilidad
  const createSkillCard = (skill) => {
    return `
      <li>
        <img src=${skill.icono} alt=${skill.nombre} class="icono"/> 
        <h3>${skill.nombre}</h3>
      </li>
    `;
  };
  return `
    <section class="aboutme" id="aboutme">
      <h2>Sobre mi</h2>
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <ul>
        ${data.skills.map(createSkillCard).join('')}
        </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href=${`mailto:${data.email}>@ Para ponerse en contacto conmigo haz click aquí @</a>`}
    </section>
  `;
};

export const AboutMe = () => {
  return template();
};

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar');

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'));
};
