// Objeto de traducciones
const translations = {
    en: {
        "About Me": "About Me",
        "Projects": "Projects",
        "Skills": "Skills",
        "Contact": "Contact",
        "Hello, My name is..": "Hello, My name is..",
        "Available to Work": "Available to Work",
        "I am a Computer Systems Engineering student at UPT Tulancingo.": "I am a Computer Systems Engineering student at UPT Tulancingo.",
        "I am passionate about technology, software development, and automation. I am always learning new tools and programming languages. I am the creator of": "I am passionate about technology, software development, and automation. I am always learning new tools and programming languages. I am the creator of",
        "an educational platform for school management, and I have experience in functional projects with modern design.": "an educational platform for school management, and I have experience in functional projects with modern design.",
        "Programming Languages": "Programming Languages",
        "Frameworks and Tools": "Frameworks and Tools",
        "My projects": "My projects",
        "EduSphere is an educational platform for school management, designed to facilitate the administration of courses, grades, and educational resources.": "EduSphere is an educational platform for school management, designed to facilitate the administration of courses, grades, and educational resources.",
        "SafeAlert is a mobile application for reporting emergencies in real time, with notifications to trusted contacts and local authorities.": "SafeAlert is a mobile application for reporting emergencies in real time, with notifications to trusted contacts and local authorities.",
        "System for managing information in penitentiary centers, with modules for inmate registration, visits, and reports.": "System for managing information in penitentiary centers, with modules for inmate registration, visits, and reports.",
        "Customization and extension of the Moodle platform to adapt it to the specific needs of an educational institution.": "Customization and extension of the Moodle platform to adapt it to the specific needs of an educational institution.",
        "View Code": "View Code",
        "More Information": "More Information",
        "Close": "Close",
        "EduSphere": "EduSphere",
        "SafeAlert": "SafeAlert",
        "Penitentiary System": "Penitentiary System",
        "Moodle Custom": "Moodle Custom",
        "Main Features:": "Main Features:",
        "Student and teacher registration.": "Student and teacher registration.",
        "Course and grade management.": "Course and grade management.",
        "Intuitive and responsive interface.": "Intuitive and responsive interface.",
        "Developed with HTML, CSS, JavaScript, and PHP.": "Developed with HTML, CSS, JavaScript, and PHP.",
        "Real-time notifications.": "Real-time notifications.",
        "Integration with Firebase for authentication and database.": "Integration with Firebase for authentication and database.",
        "Developed with Flutter and Django.": "Developed with Flutter and Django.",
        "User-friendly and easy-to-use interface.": "User-friendly and easy-to-use interface.",
        "System designed for managing information in penitentiary centers, facilitating inmate registration, visits, and report generation.": "System designed for managing information in penitentiary centers, facilitating inmate registration, visits, and report generation.",
        "Inmate registration and tracking.": "Inmate registration and tracking.",
        "Visit and permission management.": "Visit and permission management.",
        "Statistical report generation.": "Statistical report generation.",
        "Developed with Java and MySQL.": "Developed with Java and MySQL.",
        "Customization of the Moodle platform to adapt it to the needs of an educational institution, adding specific functionalities.": "Customization of the Moodle platform to adapt it to the needs of an educational institution, adding specific functionalities.",
        "Integration of new modules.": "Integration of new modules.",
        "User interface adaptation.": "User interface adaptation.",
        "Optimization for course and user management.": "Optimization for course and user management.",
        "Developed with PHP and MySQL.": "Developed with PHP and MySQL.",
        "I am José Luis Curiel López, a Computer Systems Engineering student at UPT Tulancingo. I am passionate about software development, creating technological solutions, and continuous learning.": "I am José Luis Curiel López, a Computer Systems Engineering student at UPT Tulancingo. I am passionate about software development, creating technological solutions, and continuous learning.",
        "I have experience in web and mobile application development, as well as in the implementation of management systems. My goal is to contribute to innovative projects and continue growing professionally in the technological field.": "I have experience in web and mobile application development, as well as in the implementation of management systems. My goal is to contribute to innovative projects and continue growing professionally in the technological field.",
        "I am currently looking for opportunities to apply my knowledge and skills in a professional environment, where I can learn and collaborate on challenging projects.": "I am currently looking for opportunities to apply my knowledge and skills in a professional environment, where I can learn and collaborate on challenging projects."
    },
    es: {
        "About Me": "Sobre mí",
        "Projects": "Proyectos",
        "Skills": "Habilidades",
        "Contact": "Contacto",
        "Hello, My name is..": "Hola, mi nombre es..",
        "Available to Work": "Disponible para trabajar",
        "I am a Computer Systems Engineering student at UPT Tulancingo.": "Soy estudiante de Ingeniería en Sistemas Computacionales en la UPT Tulancingo.",
        "I am passionate about technology, software development, and automation. I am always learning new tools and programming languages. I am the creator of": "Me apasiona la tecnología, el desarrollo de software y la automatización. Siempre estoy aprendiendo nuevas herramientas y lenguajes de programación. Soy creador de",
        "an educational platform for school management, and I have experience in functional projects with modern design.": "una plataforma educativa para gestión escolar, y tengo experiencia en proyectos funcionales con diseño moderno.",
        "Programming Languages": "Lenguajes de Programación",
        "Frameworks and Tools": "Frameworks y Herramientas",
        "My projects": "Mis proyectos",
        "EduSphere is an educational platform for school management, designed to facilitate the administration of courses, grades, and educational resources.": "EduSphere es una plataforma educativa para la gestión escolar, diseñada para facilitar la administración de cursos, calificaciones y recursos educativos.",
        "SafeAlert is a mobile application for reporting emergencies in real time, with notifications to trusted contacts and local authorities.": "SafeAlert es una aplicación móvil para reportar emergencias en tiempo real, con notificaciones a contactos de confianza y autoridades locales.",
        "System for managing information in penitentiary centers, with modules for inmate registration, visits, and reports.": "Sistema para la gestión de información en centros penitenciarios, con módulos para registro de internos, visitas y reportes.",
        "Customization and extension of the Moodle platform to adapt it to the specific needs of an educational institution.": "Personalización y extensión de la plataforma Moodle para adaptarla a las necesidades específicas de una institución educativa.",
        "View Code": "Ver Código",
        "More Information": "Más Información",
        "Close": "Cerrar",
        "EduSphere": "EduSphere",
        "SafeAlert": "SafeAlert",
        "Penitentiary System": "Sistema Penitenciario",
        "Moodle Custom": "Moodle Personalizado",
        "Main Features:": "Características principales:",
        "Student and teacher registration.": "Registro de estudiantes y profesores.",
        "Course and grade management.": "Gestión de cursos y calificaciones.",
        "Intuitive and responsive interface.": "Interfaz intuitiva y responsive.",
        "Developed with HTML, CSS, JavaScript, and PHP.": "Desarrollado con HTML, CSS, JavaScript y PHP.",
        "Real-time notifications.": "Notificaciones en tiempo real.",
        "Integration with Firebase for authentication and database.": "Integración con Firebase para autenticación y base de datos.",
        "Developed with Flutter and Django.": "Desarrollado con Flutter y Django.",
        "User-friendly and easy-to-use interface.": "Interfaz amigable y fácil de usar.",
        "System designed for managing information in penitentiary centers, facilitating inmate registration, visits, and report generation.": "Sistema diseñado para la gestión de información en centros penitenciarios, facilitando el registro de internos, visitas y generación de reportes.",
        "Inmate registration and tracking.": "Registro y seguimiento de internos.",
        "Visit and permission management.": "Gestión de visitas y permisos.",
        "Statistical report generation.": "Generación de reportes estadísticos.",
        "Developed with Java and MySQL.": "Desarrollado con Java y MySQL.",
        "Customization of the Moodle platform to adapt it to the needs of an educational institution, adding specific functionalities.": "Personalización de la plataforma Moodle para adaptarla a las necesidades de una institución educativa, añadiendo funcionalidades específicas.",
        "Integration of new modules.": "Integración de nuevos módulos.",
        "User interface adaptation.": "Adaptación de la interfaz de usuario.",
        "Optimization for course and user management.": "Optimización para gestión de cursos y usuarios.",
        "Developed with PHP and MySQL.": "Desarrollado con PHP y MySQL.",
        "I am José Luis Curiel López, a Computer Systems Engineering student at UPT Tulancingo. I am passionate about software development, creating technological solutions, and continuous learning.": "Soy José Luis Curiel López, estudiante de Ingeniería en Sistemas Computacionales en la UPT Tulancingo. Me apasiona el desarrollo de software, la creación de soluciones tecnológicas y el aprendizaje continuo.",
        "I have experience in web and mobile application development, as well as in the implementation of management systems. My goal is to contribute to innovative projects and continue growing professionally in the technological field.": "Tengo experiencia en el desarrollo de aplicaciones web y móviles, así como en la implementación de sistemas de gestión. Mi objetivo es contribuir en proyectos innovadores y seguir creciendo profesionalmente en el ámbito tecnológico.",
        "I am currently looking for opportunities to apply my knowledge and skills in a professional environment, where I can learn and collaborate on challenging projects.": "Actualmente busco oportunidades para aplicar mis conocimientos y habilidades en un entorno profesional, donde pueda aprender y colaborar en proyectos desafiantes."
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Evento para el botón de traducción
document.getElementById("translateBtn").addEventListener("click", function() {
    const currentLang = this.textContent.trim();
    const newLang = currentLang === "ES" ? "EN" : "ES";
    this.textContent = newLang;
    changeLanguage(newLang.toLowerCase());
});
