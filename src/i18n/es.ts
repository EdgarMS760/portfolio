export default {
  cv: "https://drive.google.com/file/d/1Ed-Nevixff0YTsZZPDzhOtHYAbee3WNW/view?usp=sharing",
  languageOptions: {
    es: "Español",
    en: "Inglés"
  },
  home: {
    title: '¡Bienvenido! Soy Edgar Martínez',
    description: 'Desarrollador full-stack, me encanta crear aplicaciones modernas y probar nuevas herramientas.',

  },
  projects: {
    title: 'Proyectos',
    detail: [
      {
        title: 'Studify',
        slug: 'Studify',
        shortDescription: 'Aplicación web educativa con gestión de grupos, tareas, reporteria y asistente IA.',
        developWith: 'React, Node.js, Express, MongoDB, Firebase, OpenAI api.',
        description: `Studify es una plataforma educativa pensada para estudiantes de educación básica. Es una alternativa amigable a herramientas como Microsoft Teams, enfocada en la interacción entre profesores y alumnos más jóvenes. Permite crear grupos, gestionar tareas, evaluaciones y asistencias, con autenticación mediante Google y funcionalidades en tiempo real gracias a Firebase. Además, integra un chatbot con IA (GPT-3.5 Turbo) que guía a los niños a resolver sus dudas sin dar respuestas directas, fomentando el pensamiento crítico. <br>El front-end está hecho con React, Tailwind y Material UI, mientras que el back-end utiliza Node.js, Express y MongoDB, asegurando una arquitectura moderna y escalable.`,
        color: '#EE3200',
        github: 'https://github.com/EdgarMS760/studify_front',
        web: 'https://studify-5e81f.web.app/',
        features: {
          general: [
            {
              title: 'Autenticación con Google',
              description: ' Inicia sesión o regístrate fácilmente con tu cuenta de Google, de forma segura y rápida.'
            },
            {
              title: 'Registro personalizado',
              description: ' Al registrarte puedes elegir si eres alumno o maestro, accediendo a funciones específicas.'
            },
            {
              title: 'Modo oscuro',
              description: ' Interfaz adaptable que cuida la vista, ideal para usar de noche o en ambientes con poca luz.'
            }
          ],

          student: [
            {
              title: 'Chatbot educativo con IA',
              description: 'Asistente integrado con OpenAI que guía paso a paso a los alumnos para resolver dudas fomentando el pensamiento crítico.'
            },
            {
              title: 'Calendario de tareas',
              description: 'Vista mensual que permite a los estudiantes visualizar fácilmente sus tareas próximas y vencidas.'
            },
            {
              title: 'Muro de grupo',
              description: 'Acceso al muro del grupo para ver anuncios, tareas y archivos'
            },
            {
              title: 'Lista de tareas organizada por estado',
              description: 'Vista clara de todas las tareas divididas entre próximas y expiradas para facilitar la organización.'
            },
            {
              title: 'entrega de tareas',
              description: 'Entrega tareas de forma sencilla adjuntando archivos directamente en la plataforma donde también podrá ver su calificación cuando el maestro la califique.'
            }
          ],
          teacher: [
            {
              title: 'Gestión de grupos',
              description: 'Creación, archivo y administración de grupos de clase con sus respectivos alumnos.'
            },
            {
              title: 'Publicación de materiales y tareas',
              description: 'Desde el muro, los docentes pueden asignar tareas, subir archivos y dejar instrucciones a sus estudiantes.'
            },
            {
              title: 'Reportes de desempeño y asistencia',
              description: 'Visualización de entregas, calificaciones, asistencia y evolución de cada estudiante.'
            },
            {
              title: 'Revisión y seguimiento de tareas',
              description: ' Visualiza las tareas entregadas. También puedes revisar entregas directamente en PDF, video o imagen.'
            },
            {
              title: 'Control de asistencia',
              description: 'Marca asistencia con un clic para cada estudiante.'
            }
          ]
        }
      },
      {
        title: 'UniTrip',
        slug: 'UniTrip',
        shortDescription: 'aplicacion móvil para compartir viajes.',
        developWith: 'Kotlin, Android Studio, Node.js, MySQL.',
        description:
          'UniTrip es una aplicación móvil para viajeros que desean compartir y descubrir experiencias de viaje o simplemente un aventón. Permite crear publicaciones, guardar borradores, editar contenido, buscar posts por usuario, titulo o descripcion, y chatear con otros usuarios para ponerse de acuerdo. La app incluye un sistema de autenticación con registro y login. Fue desarrollada con kotlin, utilizando android studio y para el back-end se utilizo node.js con mysql como base de datos.',
        github: 'https://github.com/EdgarMS760/UniTrip',
        web: '',
        features: [
          {
            title: 'Autenticación segura',
            description: 'Inicio de sesión y registro con validaciones, permitiendo a los usuarios acceder a su cuenta de forma rápida y segura.',
          },
          {
            title: 'publica y explora viajes',
            description: 'Crea, guarda como borrador y edita tus publicaciones de viaje con fotos y descripciones o Explora el feed general o busca por título, descripción o usuario para encontrar un buen viaje o aventón.',
          },
          {
            title: 'Chats con otros usuarios',
            description: 'Conversa directamente con otros usuarios mediante el sistema de mensajería.',
          },
          {
            title: 'Perfil personalizable',
            description: 'Edita tu información, foto de perfil y accede a todas tus publicaciones desde un solo lugar.',
          }
        ],
        color: '#6750A5'
      },
      {
        title: 'Tim Hortons',
        slug: 'TimHortons',
        shortDescription: 'Rediseño de la página de Tim Hortons México.',
        developWith: 'React, Flask, Python.',
        description:
          'Siguiendo principios y patrones UX/UI, se realizó un rediseño del sitio web de Tim Hortons México para mejorar la experiencia de usuario. Este rediseño se realizó utilizando React para el frontend, asegurando una interfaz dinámica y responsiva, y Python con el framework Flask para el backend para operaciones sencillas como autenticación y envío de correos electrónicos. El resultado es una plataforma más intuitiva y atractiva que facilita la navegación y mejora la interacción del usuario con los servicios y productos de Tim Hortons México.',
        github: 'https://github.com/EdgarMS760/interfaces',
        web: '',
        features: [
          {
            title: 'Inicio de sesión & Registro',
            description: 'Una experiencia de inicio de sesión sencilla, visualmente atractiva y centrada en el usuario.',
          },
          {
            title: 'Página de inicio renovada',
            description: 'Se mejoró la disposición visual, jerarquía tipográfica y llamadas a la acción para una navegación más clara.',
          },
          {
            title: 'Proceso de pago',
            description: 'Rápido, accesible y sin rodeos',
          },
        ],
        color: '#C8272D'
      },
      {
        title: 'instacat',
        slug: 'Instacat',
        shortDescription: 'plataforma web tipo blog',
        developWith: 'Java, MySQL(procedures, functions, triggers y views), Tailwind CSS.',
        description: 'InstaCat es una plataforma web tipo blog que te permite realizar publicaciones, editarlas y seguir a otros usuarios para ver sus perfiles. Para construir el sitio, se utilizó Tailwind CSS para el frontend, Java para la lógica de programación y MySQL para la base de datos.',
        github: 'https://github.com/EdgarMS760/MAD',
        web: '',
        features: [{
          title: `Feed principal`,
          description: `El feed principal de InstaCat es el corazón de la plataforma, diseñado para ofrecer una experiencia interactiva para los usuarios. Aquí puedes:
        <ul class="text-gray-600 dark:text-gray-300">
            <li><strong>Explorar publicaciones:</strong> Ver el contenido compartido por otros usuarios en un formato dinámico y visualmente atractivo.</li>
            <li><strong>Filtrar por categoría:</strong> Encuentra publicaciones que te interesen aplicando filtros basados en temas como gatos, tecnología, comida, deportes, entre otros.</li>
            <li><strong>Crear y editar publicaciones:</strong> Comparte tus propias experiencias, imágenes y pensamientos, con la posibilidad de modificar tus publicaciones en cualquier momento.</li>
            <li><strong>Interacción social:</strong> Puedes dar "me gusta" y comentar en las publicaciones para generar conversaciones y fortalecer la comunidad.</li>
        </ul>
        `,
        },
        {
          title: `Perfil de usuario`, description: `El perfil de usuario en InstaCat es el espacio donde cada usuario puede gestionar su información personal, conectar con otros y visualizar su actividad dentro de la plataforma. Aquí puedes:
        <ul class="text-gray-600 dark:text-gray-300">
            <li><strong>Datos personales:</strong> Se muestra tu foto de perfil, tu nombre de usuario, nombre completo, correo electrónico y edad, permitiendo que otros usuarios te conozcan mejor.</li>
            <li><strong>Edición de perfil:</strong> Puedes actualizar tus datos personales en cualquier momento, cambiando tu foto, nombre de usuario o correo según lo necesites.</li>
            <li><strong>Lista de seguidores:</strong> Visualiza a quién sigues y descubre sus perfiles y publicaciones.</li>
            <li><strong>Tus publicaciones:</strong> Accede a todo el contenido que has compartido en la plataforma, con la opción de editar o eliminar cualquier publicación.</li>
        </ul> `},
        {
          title: 'Perfil de amigos',
          description: `
          El perfil de amigos en InstaCat te permite conocer más sobre otros usuarios, interactuar con su contenido y gestionar tu conexión con ellos. Aquí puedes:
        <ul class="text-gray-600 dark:text-gray-300">
            <li><strong>Información del usuario:</strong> Visualiza la foto de perfil, nombre de usuario, nombre completo y otros datos públicos que el usuario haya compartido.</li>
            <li><strong>Seguir o dejar de seguir:</strong> Decide si quieres seguir a este usuario para ver sus publicaciones en tu feed o quitar el seguimiento si lo prefieres.</li>
            <li><strong>Ver publicaciones:</strong> Explora todo el contenido compartido por el usuario, incluyendo imágenes, textos y experiencias relacionadas con gatos.</li>
            <li><strong>Interacción:</strong> Comenta y da "me gusta" en sus publicaciones, fortaleciendo la comunidad y fomentando conversaciones.</li>
        </ul> `
        },
        {
          title: 'Busqueda avanzada',
          description: `
        La búsqueda avanzada en InstaCat permite a los usuarios encontrar publicaciones con mayor precisión, utilizando diferentes criterios de filtrado para obtener los resultados más relevantes. Aquí puedes:
        <ul class="text-gray-600 dark:text-gray-300">
            <li><strong>Búsqueda por contenido:</strong> Encuentra publicaciones que contengan palabras clave específicas dentro del título o el cuerpo del mensaje.</li>
            <li><strong>Búsqueda por categoría:</strong> Filtra publicaciones según temas específicos, como tecnología, moda, deportes, entre otros.</li>
            <li><strong>Búsqueda por rango de fechas:</strong> Localiza publicaciones realizadas dentro de un período determinado, desde una fecha específica hasta la actual.</li>
            <li><strong>Combinación de filtros:</strong> Usa todos los criterios juntos para realizar una búsqueda más detallada y obtener resultados precisos.</li>
        </ul>

        `
        }],
        color: '#A1C5E4'
      },

      {
        title: 'Faith Finder',
        slug: 'FaithFinder',
        shortDescription: 'Plataforma de búsqueda de versículos bíblicos.',
        developWith: '.NET, SQL Server(procedures, functions,triggers y views), C#.',
        description: 'Faith Finder es una aplicación de escritorio que permite buscar versículos de la Biblia mediante palabras clave. Ofrece un sistema de login y registro, filtros avanzados (idioma, versión, testamento, libro), historial de búsqueda, favoritos y descarga de capítulos en PDF. También cuenta con un panel administrativo para desbloquear cuentas bloqueadas. Fue desarrollada con .NET y SQL Server, utilizando procedimientos almacenados, triggers y vistas.',

        github: '',
        web: '',
        features: [
          {
            title: 'Login y favoritos',
            description: 'Ingreso seguro, favoritos personales e historial de búsqueda.',
          },
          {
            title: 'Filtros avanzados y busqueda',
            description: 'Busca cualquier palabra o filtra resultados por idioma, versión, testamento, libro, capítulo o versículo para una búsqueda precisa.',
          },
          {
            title: 'Gestión de usuarios',
            description: 'Panel administrativo para desbloquear cuentas bloqueadas por errores de contraseña.',
          },
          {
            title: 'Favoritos y PDF',
            description: 'Guarda versículos importantes y descarga capítulos completos en formato PDF.',
          }
        ],
        color: '#F6DFB4'
      }
    ]
  }
};

// {
//   title: 'ULearrning',
//   slug: 'ULearrning',
//   shortDescription: 'E-learning platform for instructors and students',
//   description:
//     'ULearrning es una plataforma educativa que permite a estudiantes e instructores interactuar con cursos en línea. Incluye funcionalidades de autenticación con bloqueo de cuentas tras múltiples intentos fallidos, gestión de cursos, reportes avanzados, perfiles editables, búsqueda de cursos con filtros y generación de certificados. También cuenta con un panel administrativo para moderar usuarios y categorías.',
//   github: '',
//   web: 'http://ulearrning.test/iniciar_sesion',
//   features: [
//     {
//       title: 'Inicio de sesión y registro seguro',
//       description: 'Autenticación con bloqueo tras 3 intentos fallidos y validación de contraseña con requisitos específicos.',
//     },
//     {
//       title: 'Panel de instructor',
//       description: 'Estadísticas generales, generación de reportes y administración de cursos activos/inactivos.',
//     },
//     {
//       title: 'Panel de estudiante',
//       description: 'Búsqueda avanzada de cursos, carrito de compras, historial, comentarios y generación de certificados.',
//     },
//     {
//       title: 'Gestión de perfiles',
//       description: 'Edición de datos personales, visualización de cursos y filtrado por parámetros avanzados.',
//     },
//     {
//       title: 'Panel de administración',
//       description: 'Gestión de categorías, activación/inactivación de usuarios y moderación de comentarios.',
//     }
//   ],
//   color: '#9A6BB5' // Puedes cambiar este color según el diseño de tu UI
// }