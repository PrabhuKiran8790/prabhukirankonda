const projectsData = [
  {
    title: 'Full Stack Todo App',
    description: `Created a Todo application using SvelteKit, FastAPI, and PostgreSQL. It features JWT-based authentication for security and includes task categorization into sections like current todos, upcoming, overdue, and completed. Users can easily update, delete, and mark tasks as complete.`,
    imgSrc: '/static/images/svelte-todo.png',
    href: 'https://sveltekit-todo-prabhu.vercel.app/',
    techStack: ['Svelte', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    title: 'PDF Assistant: AI Powered Q&A for PDFs',
    description: `Built a PDF Assistant tool using OpenAI's LLM to answer questions from uploaded PDF files. It has a user-friendly web interface with StreamLit, Firebase authentication for security, real-time updates via Firebase, a guest mode for no authentication, and easy Docker deployment.`,
    imgSrc: '/static/images/PDF_Assistant.png',
    href: 'https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker',
    techStack: ['Python', 'Streamlit', 'Docker', 'Firebase'],
  },
  {
    title: 'College Student API: FastAPI with MongoDB',
    description: `Developed a high-performance API using FastAPI and MongoDB Cloud Database for managing college student information. It includes CRUD operations and secure data handling. The API is deployed with Docker for easy setup and scalability.`,
    imgSrc: '/static/images/FastAPI_MongDB.png',
    href: 'https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB',
    techStack: ['Python', 'FastAPI', 'MongoDB', 'Docker'],
  },
]

export default projectsData
