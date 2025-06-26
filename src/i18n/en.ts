export default {
  cv: "https://drive.google.com/file/d/1xr7y79zusVpMXEPaag6pB9uxBwVz988b/view?usp=sharing",
  languageOptions: {
    es: "Spanish",
    en: "English"
  },
  home: {
    title: 'Welcome! I\'m Edgar Martinez',
    description: 'Full-stack developer, I love creating modern applications and testing new tools.',

  },
  projects: {
    title: 'Projects',
    detail: [
      {
        title: 'Studify',
        slug: 'Studify',
        shortDescription: 'Educational web app with group management, tasks, reporting, and AI assistant.',
        developWith: 'React, Node.js, Express, MongoDB, Firebase, OpenAI api.',
        description: `Studify is an educational platform designed for elementary and middle school students. It's a friendly alternative to tools like Microsoft Teams, focused on enhancing interaction between teachers and younger students. It allows teachers to create groups, manage tasks, evaluations, and attendance, with Google authentication and real-time functionality powered by Firebase. <br>The front-end is built with React, Tailwind, and Material UI, while the back-end uses Node.js, Express, and MongoDB, ensuring a modern and scalable architecture.`,
        color: '#EE3200',
        github: 'https://github.com/EdgarMS760/studify_front',
        web: 'https://studify-5e81f.web.app/',
        features: {
          general: [
            {
              title: 'Google Authentication',
              description: 'Sign in or register quickly and securely using your Google account.'
            },
            {
              title: 'Personalized Registration',
              description: 'When registering, you can choose whether you’re a student or a teacher, unlocking role-specific features.'
            },
            {
              title: 'Dark Mode',
              description: 'An eye-friendly interface that adapts to low-light environments — perfect for nighttime use.'
            }
          ],
          student: [
            {
              title: 'AI-Powered Educational Chatbot',
              description: 'An assistant powered by OpenAI that guides students step by step to solve questions, encouraging critical thinking instead of giving direct answers.'
            },
            {
              title: 'Task Calendar',
              description: 'A monthly view that helps students easily see upcoming and overdue assignments.'
            },
            {
              title: 'Group Wall',
              description: 'Access the group wall to view announcements, tasks, and shared files.'
            },
            {
              title: 'Organized Task List',
              description: 'Clear view of all tasks, sorted by upcoming and expired, to help with planning and organization.'
            },
            {
              title: 'Task Submission',
              description: 'Easily submit tasks by uploading files directly on the platform. Students can also see their grades once evaluated by the teacher.'
            }
          ],
          teacher: [
            {
              title: 'Group Management',
              description: 'Create, archive, and manage class groups with their respective students.'
            },
            {
              title: 'Publishing Materials and Assignments',
              description: 'From the group wall, teachers can assign homework, upload files, and leave instructions.'
            },
            {
              title: 'Performance and Attendance Reports',
              description: 'View student submissions, grades, attendance records, and individual progress.'
            },
            {
              title: 'Task Review and Tracking',
              description: 'Track submitted assignments and review them directly as PDFs, videos, or images.'
            },
            {
              title: 'Attendance Control',
              description: 'Quickly mark attendance with a single click for each student.'
            }
          ]
        }
      },
       {
        title: 'UniTrip',
        slug: 'UniTrip',
        shortDescription: 'Mobile app to share travel experiences.',
        developWith: 'Kotlin, Android Studio, Node.js, MySQL.',
        description:
          'UniTrip is a mobile application for travelers who want to share and discover travel experiences — or simply find a ride. It allows users to create posts, save drafts, edit content, search for posts by user, title, or description, and chat with others to coordinate plans. The app includes an authentication system with registration and login. It was developed in Kotlin using Android Studio, with a Node.js backend and MySQL as the database.',
        github: 'https://github.com/EdgarMS760/UniTrip',
        web: '',
        features: [
          {
            title: 'Secure authentication',
            description: 'Login and registration with validations, allowing users to access their accounts quickly and safely.',
          },
          {
            title: 'Post and explore trips',
            description: 'Create, save as draft, and edit your travel posts with photos and descriptions — or explore the main feed and search by title, description, or user to find a great trip or ride.',
          },
          {
            title: 'Chat with other users',
            description: 'Message other users directly through the built-in chat system to coordinate or connect.',
          },
          {
            title: 'Customizable profile',
            description: 'Edit your personal information, profile photo, and access all your posts in one place.',
          }
        ],
        color: '#6750A5'
      },
      {
        title: 'Tim Hortons',
        slug: 'TimHortons',
        shortDescription: 'Redesign of the Tim Hortons Mexico website.',
        developWith: 'React, Flask, Python.',
        description:
          'Following UX/UI principles and patterns, a redesign of the Tim Hortons Mexico website was carried out to improve the user experience. The redesign was implemented using React for the frontend, ensuring a dynamic and responsive interface, and Python with the Flask framework for the backend, handling basic operations such as authentication and email services. The result is a more intuitive and visually appealing platform that enhances navigation and user interaction with Tim Hortons Mexico’s products and services.',
        github: 'https://github.com/EdgarMS760/interfaces',
        web: '',
        features: [
          {
            title: 'Login & Register',
            description: 'A simple, visually appealing, and user-centric login experience.',
          },
          {
            title: 'Revamped homepage',
            description: 'Improved visual layout, typographic hierarchy, and clear calls-to-action for better navigation.',
          },
          {
            title: 'Checkout process',
            description: 'Fast, accessible, and straightforward.',
          },
        ],
        color: '#C8272D'
      },
      {
        title: 'instacat',
        slug: 'Instacat',
        developWith: 'Java, MySQL(procedures, functions, triggers and views), Tailwind CSS.',
        shortDescription: ' blog-like web platform.',
        description: 'InstaCat is a blog-like web platform that allows you to make posts, edit them and follow other users to view their profiles. To build the site, Tailwind CSS was used for the frontend, Java for the programming logic and MySQL for the database. With InstaCat, you can enjoy an engaging experience while sharing your posts and connecting with other users.',
        github: '',
        web: '',
        features: [{
          title: `Main Feed`,
          description: `The main feed of InstaCat is the heart of the platform, designed to offer an interactive experience for users. Here you can:
            <ul class="text-gray-600 dark:text-gray-300">
                <li><strong>Explore posts:</strong> View content shared by other users in a dynamic and visually appealing format.</li>
                <li><strong>Filter by category:</strong> Find posts that interest you by applying filters based on topics such as cats, technology, food, sports, among others.</li>
                <li><strong>Create and edit posts:</strong> Share your own experiences, images, and thoughts, with the option to modify your posts at any time.</li>
                <li><strong>Social interaction:</strong> You can "like" and comment on posts to spark conversations and strengthen the community.</li>
            </ul>
            `,
        },
        {
          title: `User Profile`,
          description: `The user profile on InstaCat is the space where each user can manage their personal information, connect with others, and view their activity within the platform. Here you can:
            <ul class="text-gray-600 dark:text-gray-300">
                <li><strong>Personal information:</strong> Your profile picture, username, full name, email, and age are displayed, allowing other users to get to know you better.</li>
                <li><strong>Profile editing:</strong> You can update your personal data at any time, changing your photo, username, or email as needed.</li>
                <li><strong>Followers list:</strong> See who you follow and explore their profiles and posts.</li>
                <li><strong>Your posts:</strong> Access all the content you’ve shared on the platform, with the option to edit or delete any post.</li>
            </ul>`,
        },
        {
          title: 'Friend Profile',
          description: `
            The friend profile on InstaCat allows you to learn more about other users, interact with their content, and manage your connection with them. Here you can:
            <ul class="text-gray-600 dark:text-gray-300">
                <li><strong>User information:</strong> View the profile picture, username, full name, and other public data shared by the user.</li>
                <li><strong>Follow or unfollow:</strong> Decide whether to follow this user to see their posts in your feed or unfollow them if you prefer.</li>
                <li><strong>View posts:</strong> Browse all the content shared by the user, including images, texts, and cat-related experiences.</li>
                <li><strong>Interaction:</strong> Comment and "like" their posts, helping to build community and encourage conversations.</li>
            </ul>`
        },
        {
          title: 'Advanced Search',
          description: `
          Advanced search on InstaCat allows users to find posts more precisely by using different filtering criteria to obtain the most relevant results. Here you can:
          <ul class="text-gray-600 dark:text-gray-300">
              <li><strong>Search by content:</strong> Find posts that contain specific keywords in the title or body of the message.</li>
              <li><strong>Search by category:</strong> Filter posts according to specific topics, such as technology, fashion, sports, among others.</li>
              <li><strong>Search by date range:</strong> Locate posts made within a specific period, from a chosen date to the present.</li>
              <li><strong>Combined filters:</strong> Use all the criteria together to perform a more detailed search and get accurate results.</li>
          </ul>
          `
        }
        ],

        color: '#A1C5E4'
      },
      
      {
        title: 'Faith Finder',
        slug: 'FaithFinder',
        shortDescription: 'Bible verse search platform.',
        developWith: '.NET, SQL Server(procedures, functions,triggers and views), C#.',
        description:
          'Faith Finder is a desktop application that lets users search Bible verses by typing keywords. It features login and registration, advanced filters (language, version, testament, book), search history, favorites, and PDF chapter download. It also includes an admin panel to unlock blocked accounts. Built with .NET and SQL Server using stored procedures, triggers, and views.',
        github: 'https://github.com/EdgarMS760/MAD',
        web: '',
        features: [
          {
            title: 'Smart search',
            description: 'Quickly find Bible verses just by typing a keyword.',
          },
          {
            title: 'Advanced filters',
            description: 'Filter results by language, version, testament, book, chapter, or verse for precise queries.',
          },
          {
            title: 'Favorites & PDF export',
            description: 'Save key verses and download full chapters as PDF.',
          },
          {
            title: 'User management',
            description: 'Admin panel to unlock accounts blocked due to password errors.',
          }
        ],
        color: '#F6DFB4'
      }

    ]
  }
};

//  {
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