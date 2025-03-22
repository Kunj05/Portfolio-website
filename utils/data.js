import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiGit,
  SiLinux,
  SiGraphql,
  SiRedis,
  SiRust,
  SiKubernetes,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Linkedin, User } from 'lucide-react';

const techStack1 = [
  { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} /> },
  { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
  { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
  { name: 'React', icon: <SiReact style={{ color: '#61DAFB' }} /> },
  { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#000000' }} /> },
  { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
  { name: 'Go', icon: <SiGo style={{ color: '#00ADD8' }} /> },
  { name: 'Docker', icon: <SiDocker style={{ color: '#2496ED' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791' }} /> },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
  { name: 'AWS', icon: <FaAws style={{ color: '#FF9900' }} /> },
  { name: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} /> },

];

const techStack2 = [
  { name: 'Supabase', icon: <SiSupabase style={{ color: '#3ECF8E' }} /> },
  { name: 'Tailwind', icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
  { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
  { name: 'Linux', icon: <SiLinux style={{ color: '#FCC624' }} /> },
      { name: 'GraphQL', icon: <SiGraphql style={{ color: '#E10098' }} /> },
  { name: 'Redis', icon: <SiRedis style={{ color: '#DC382D' }} /> },
  { name: 'Rust', icon: <SiRust style={{ color: '#000000' }} /> },
  { name: 'Kubernetes', icon: <SiKubernetes style={{ color: '#326CE5' }} /> },
];

// Projects
const projects = [
  {
    title: 'Deployer',
    description:
      'Deployer is a Vercel-like platform for building, deploying, and optimizing web apps with high-concurrency traffic handling and streamlined deployment.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'AWS', 'Node.js'],
    status:"May 2024 - July 2024",
    links: [{ label: 'Github', url: 'https://github.com/Kunj05/Deployer-Vercel_Clone' }],
  },
  {
  title: 'DocChat',
  description:
    'The PDF AI Reader is a platform that allows users to upload multiple PDFs and interact with them using AI-powered chat to extract and analyze content from the documents.',
  tech: ['LangChain', 'Streamlit', 'OpenAI','Python'],
  status: 'Jan 2025 - Jan 2025',
  links: [
    { label: 'Github', url: 'https://github.com/yourusername/pdf-ai-reader' },
    { label: 'Live Demo', url: 'https://pdf-ai-reader.streamlit.app' },
  ],
},
];



// Export everything
export {
  techStack1,
  techStack2,
  projects
};
