'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Navbar } from '@/components/Navbar';

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
  {
    title: 'StudyNotion',
    description:
      'StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content.',
    tech: ['React.js', 'TypeScript', 'Mongodb', 'AWS', 'Node.js'],
    status:"April 2024 - May 2024",
    links: [
      { label: 'Github', url: 'https://github.com/Kunj05/Edtech-Project' },
      { label: 'Link', url: 'https://study-notion-ed-tech-kappa.vercel.app' },
      
    ],
  },
  {
  title: 'TraceSentry',
  description:
    'TraceSentry is a web-based platform that enables users to explore and manage their digital presence using OSINT tools, from IP tracking to data decoding, with a focus on privacy.',
  tech: ['Next.js', 'Gemini', 'OSINT', 'Privacy Tools'],
  status: 'Nov 2024 - Dec 2024',
  links: [
    { label: 'Github', url: 'https://github.com/Kunj05/TraceSentry' },
    { label: 'Live Demo', url: 'https://trace-sentry.vercel.app' },
  ],
},
  {
  title: 'LinkedIn Jobs Scraper',
  description:
    'A Python-based scraper for extracting job listings from LinkedIn, helping users to track and apply for relevant job opportunities efficiently.',
  tech: ['Python', 'BeautifulSoup', 'Selenium', 'LinkedIn API'],
  status: 'April 2024 - May 2024',
  links: [
    { label: 'Github', url: 'https://github.com/Kunj05/Linkedin-Jobs-Corn' },
  ],
}


];

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-black text-white pb-10">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 pt-[100px] sm:pt-[130px]">
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-center">
            Some dope stuff I've been hacking on 💻
          </h2>
          <p className="text-base sm:text-xl text-white/60 mt-2 text-center">
            I've been grindin' on all sorts of projects – from slick Full Stack
            WebApps to full-on AI Apps. Here's the collection of my builds.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            {projects.map((project, index) => (
              <div key={index} className="group h-full flex flex-col">
                {/* Top Part */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-t-xl p-6 sm:p-8 flex min-h-[160px] sm:min-h-[200px] relative flex-grow">
                  <Image
                    src="/github.png"
                    alt="Project Image"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 group-hover:opacity-100 transition-opacity absolute top-0 left-0 z-0"
                  />
                </div>

                {/* Bottom Part */}
                <div className="backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl p-4 space-y-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                      {project.status && (
                        <p className="text-green-400 text-xs sm:text-sm">
                          {project.status}
                        </p>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-white/60">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white/10 px-2 py-1 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="bg-white transition-colors rounded-[7px] px-2 sm:px-3 py-1 text-xs sm:text-sm flex items-center gap-1 text-black font-bold"
                        >
                          {link.label === 'Source' ? (
                            <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                          ) : (
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
