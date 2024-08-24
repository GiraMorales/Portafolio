import './Header.css';

const template = () => {
  return `
  <header>
    <h1>Gira Morales Revelles</h1>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">Sobre mi</a>
        </li>
        <li>
          <a href="#education">Educación</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
      </ul>
    </nav>
  </header>
  `;
};

const Header = () => {
  return template();
};

export default Header;
