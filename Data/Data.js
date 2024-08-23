const data = {
  name: 'Gira_Morales',
  address: 'Barcelona, España',
  email: 'gira.morales@gmail.com',
  avatar:
    'https://res.cloudinary.com/dvoady6dt/image/upload/v1724225245/Mi%20foto/nb3gyekokqaq2ug0kfru.png',
  aboutMe:
    'Soy una desarrolladora web en formación con un enfoque en Full Stack, donde he adquirido habilidades en Git, HTML, JavaScript, CSS ES6, y componentes. Mi formación técnica se complementa con cursos avanzados en diseño gráfico y multimedia, incluyendo Photoshop, Illustrator, Canva, y una introducción a Figma, así como conocimientos en animación 2D y 3D con herramientas como Premiere y After Effects.' +
    'Además, cuento con un curso en mantenimiento de ordenadores, un certificado avanzado en Paquete Office, y una sólida base técnica que se extiende a mi experiencia laboral en roles de procesamiento de datos y key management.',

  education: {
    degree: 'Full Stack Developer',
    university: 'The Power',
    graduationYear: 'Actualmente',
    honors: '',

    relevantCourses: [
      'Figma',
      'Inteligencia Artifical',
      'Adobe: Photoshop, Illustrator, Premier, After Effects',
      'Canva',
      'Maya',
      'Paquete Office'
    ]
  },
  workExperience: [
    {
      position: 'Operaria Maquinista',
      company: 'DS Smith',
      startDate: '2024',
      endDate: 'Actualmente',
      description:
        'Operaria en una empresa de cartón, haciendo cajas. Suministrar el cartón a la máquina, ajustar y controlar que la máquina.'
    },
    {
      position: 'Tecnica de procesamiento de datos',
      company: 'GyD Giesecke and Devrient',
      startDate: '2021',
      endDate: '2023',
      description:
        'Dar soporte a las incidencias en ocurren en los ordenadores de las máquinas de producción, crear Jobs de trabajo, y arreglarlos si tienen incidencias. Procesar datos, verificar que se creen correctamente, y controlar que los motores informáticos funciones correctamente.'
    }
  ],
  skills: [
    {
      icono:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724346420/iconos/io0hlhvtntjv5bknukzz.png',
      nombre: 'HTML5'
    },
    {
      icono:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724346419/iconos/me8eh92phuogvbrkivmo.png',
      nombre: 'CSS3'
    },
    {
      icono:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724346419/iconos/vxjddgla0eju8kyphcqa.png',
      nombre: 'JAVASCRIPT'
    },
    {
      icono:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724402274/iconos/nzekjmivjznvlda7zfis.png',
      nombre: 'SAP'
    },
    {
      icono:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724402274/iconos/mpecfmq3yuogdeyc9tmr.png',
      nombre: 'SQL'
    },
    {
      icono:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724402274/iconos/gei0yvli7ztwev3wv7ht.png',
      nombre: 'JIRA'
    }
  ],
  projects: [
    {
      title: 'LANDING PAGE',
      description:
        'Mi primer proyecto, con un buen uso de variables CSS, reutilización de estilos con el uso de clases, uso de Grid o Flex. Siendo una página FULL RESPONSIVE con buena semántica y accesibilidad. Uso de alguna meta etiqueta que mejore el SEO. La web contiene enlaces a los productos reales de una página web real y no mía',
      link: 'https://chimerical-stroopwafel-17a509.netlify.app/',
      preview:
        'https://res.cloudinary.com/dvoady6dt/image/upload/v1724339909/fotos/iawx0m10jzhugwqob9zp.png'
    },
    {
      title: 'E-COMMERCE CON FILTROS',
      description:
        'En este proyecto he aplicado los conocimientos de JavaScript y DOM para crear una página que responda a cambios aplicados por un usuario y sea totalmente funcional. Para ello, he hecho un "modal" que contenga el formulario de los filtros, para que podamos verlo u ocultarlo a nuestro gusto mediante un click. También, he puesto una serie de productos pintados (utilizando DOM y teniendo una estructura de objetos dentro de un array para un pintado sencillo y dinámico), que vayan cambiando según los filtros aplicados. Con un código limpio, claro y manteniendo las buenas prácticas.',
      link: 'hhttps://github.com/GiraMorales/Proyecto2.git',
      preview:
        'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'PORTFOLIO',
      description:
        'Este proyecto he realizado un portfolio atractivo para que las empresas puedan llegar a conocerme y ver los proyectos que he ido realizando y con código limpio, bien estructurado, y divido en componentes.',
      link: 'https://github.com/giramorales/proyecto3.git',
      preview:
        'https://images.unsplash.com/photo-1708447134657-2f3f600ee0df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
};

export default data;
