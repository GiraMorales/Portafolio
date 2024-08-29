import data from '../../Data/Data';
import './Education.css';

const template = () => {
  return `
    <section class="education" id="education">
      <h2>Educacion</h2>
      <h3>${data.education.degree}</h3>
      <h4>${data.education.university}</h4>
      <p>${data.education.honors}</p>
           <p>${data.education.graduationYear}</p>
     </br>
           <h3>Otros Cursos</h3>
      <ul id="relevantcourses">
      ${data.education.relevantCourses
        .map(
          (course) => `
      <li>
        <p>${course}</p>
      </li>
      `
        )
        .join('')}
      </ul>
    </section>
  `;
};

const Education = () => {
  return template();
};

export default Education;
