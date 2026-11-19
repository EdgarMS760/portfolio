import sections from "./sections.es";

export default {
  ...sections,
  cv: "https://docs.google.com/document/d/1Owb9t1Hjiy7c1fdHGF5wEVEPNWx2AC6M/edit?usp=sharing&ouid=100567083380720697625&rtpof=true&sd=true",
  languageOptions: {
    es: "Español",
    en: "English"
  },
  projects: {
    title: 'Proyectos',
    detail: [
      {
        title: 'Studify',
        slug: 'Studify',
        shortDescription: 'Plataforma educativa full-stack: grupos, tareas, reportes, tiempo real con Firebase y un tutor con IA que guía sin dar la respuesta.',
        developWith: 'React, Node.js, Express, MongoDB, Firebase, OpenAI API.',
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
        shortDescription: 'App móvil nativa para compartir viajes y aventones, con su propia API REST, chat y borradores.',
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
        title: 'Instacat',
        slug: 'Instacat',
        shortDescription: 'Plataforma web tipo blog con la lógica de datos en MySQL: procedimientos, funciones, triggers y vistas.',
        developWith: 'Java, MySQL (procedures, functions, triggers y views), Tailwind CSS.',
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
      }
    ]
  }
};
