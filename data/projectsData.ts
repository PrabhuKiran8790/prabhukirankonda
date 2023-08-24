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
    description: `Created a handy PDF Assistant tool. It utilizes OpenAI's LLM to provide accurate answers to user questions based on uploaded PDF files. I've made it user-friendly with a straightforward web interface using StreamLit. For added security, I've integrated Firebase authentication, and I've also used Firebase's real-time database for instant updates across devices. Plus, there's a guest mode for easy use without authentication requirements, and I've deployed it using Docker for effortless setup.`,
    imgSrc: '/static/images/PDF_Assistant.png',
    href: 'https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker',
    techStack: ['Python', 'Streamlit', 'Docker', 'Firebase'],
  },
]

export default projectsData
