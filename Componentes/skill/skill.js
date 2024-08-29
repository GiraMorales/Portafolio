const skill = [];

export const createSkillCard = (skill) => {
  return `
    <li>
      <img src=${skill.icono} alt=${skill.nombre} class="icono"/> 
      <h3>${skill.nombre}</h3>
    </li>
  `;
};
