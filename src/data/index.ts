import type { Project, SkillsData } from '@/types'

// PROJECTS
export const projects: Project[] = [
  {
    id: 1,
    title: 'Markdown Preview App',
    description: 'A React app that converts markdown into live preview.',
    image: '/images/projects/markdown.png',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/your-username/markdown-app',
    liveUrl: 'https://markdown-vue-js-ts-assessment-8fef.vercel.app/',
    category: 'Frontend',
    featured: true,
  },
  {
    id: 2,
    title: 'QuickServe',
    description: 'A fast food ordering UI built for speed and usability.',
    image: '/images/projects/quickserve.png',
    technologies: ['React', 'Tailwind'],
    githubUrl: 'https://github.com/your-username/quickserve',
    liveUrl: 'https://quickserve-wzr9.vercel.app/',
    category: 'Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A clean blog UI that fetches and displays articles.',
    image: '/images/projects/blog.png',
    technologies: ['React', 'API'],
    githubUrl: 'https://github.com/your-username/blog-app',
    liveUrl: 'https://blog-fe3mj5n6z-kingsley-ebukas-projects.vercel.app/',
    category: 'Frontend',
    featured: false,
  },
]

// SKILLS
export const skills: SkillsData = {
  languages: [
    { name: 'JavaScript', level: 'Advanced', icon: '🟨' },
    { name: 'TypeScript', level: 'Intermediate', icon: '🔷' },
  ],
  backend: [
    { name: 'Node.js', level: 'Intermediate', icon: '🟩' },
    { name: 'Express', level: 'Intermediate', icon: '🚀' },
  ],
  databases: [
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
  ],
  tools: [
    { name: 'Git', level: 'Advanced', icon: '🔧' },
    { name: 'Docker', level: 'Beginner', icon: '🐳' },
  ],
}