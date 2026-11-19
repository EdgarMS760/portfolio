import sections from "./sections.en";

export default {
  ...sections,
  cv: "https://docs.google.com/document/d/1cSkNfA-QrPJeIVfVIHlNcBbVW-0JO0X9/edit?usp=sharing&ouid=100567083380720697625&rtpof=true&sd=true",
  languageOptions: {
    es: "Español",
    en: "English"
  },
  projects: {
    title: 'Projects',
    detail: [
      {
        title: 'Studify',
        slug: 'Studify',
        shortDescription: 'Full-stack education platform: groups, assignments, reports, real-time updates with Firebase and an AI tutor that guides instead of giving answers.',
        developWith: 'React, Node.js, Express, MongoDB, Firebase, OpenAI API.',
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
        shortDescription: 'Native mobile app to share trips and rides, with its own REST API, chat and drafts.',
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
        title: 'Instacat',
        slug: 'Instacat',
        developWith: 'Java, MySQL (procedures, functions, triggers and views), Tailwind CSS.',
        shortDescription: 'Blog-style web platform with the data logic in MySQL: stored procedures, functions, triggers and views.',
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
      }
    ]
  }
};
