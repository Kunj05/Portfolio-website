'use client';

import {
  MapPin,
  Clock,
  ExternalLink,
  Link as LinkIcon,
  Linkedin,
  Code,
  User,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { FaXTwitter } from 'react-icons/fa6';
import { Navbar } from '@/components/Navbar';
import { projects, techStack1, techStack2 } from '@/utils/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const socialLinks = {
    topRow: [
      {
        title: 'GitHub',
        subtitle: '(Github)',
        value: 'Grinding Hard',
        bgImage: '/tools.png',
        url: 'https://github.com/Kunj05',
      },
      {
        title: 'Coding Stats',
        subtitle: '(leetcode)',
        value: '600',
        prefix: '</>',
        bgImage: '/leetcode.png',
        leetcode: true,
        url: 'https://leetcode.com/u/kc05',
      },
    ],
    bottomRow: [
      {
        title: 'LinkedIn',
        subtitle: '(serious stuff 🔥)',
        icon: <Linkedin className="w-6 h-6" />,
        url: 'https://www.linkedin.com/in/kunj-chandak',
        bgColor: 'from-blue-500/20',
      },
      {
        title: 'Twitter',
        subtitle: '(share memes ;)',
        icon: <FaXTwitter className="w-6 h-6" />,
        url: 'https://x.com/KunjChandak13',
        bgColor: 'blue-200',
      },
      {
        title: 'Discord',
        subtitle: '@kunj.exe',
        status: 'offline 離',
        icon: <User className="w-6 h-6" />,
        url: '#',
        bgColor: 'from-purple-500/20',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-#121212 text-white pb-10">
      <Spotlight
        className="fixed -top-70 left-0 md:left-60 md:-top-0"
        fill="white"
      />
      <Navbar />

      <div className="max-w-[700px] mx-auto px-4 sm:px-6 pt-[100px] sm:pt-[130px]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-0">
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold flex items-center justify-center sm:justify-start gap-3">
              や, I'm Kunj <span className="text-3xl sm:text-4xl">🐼</span>
            </h1>
            <p className="text-base sm:text-lg text-white/60">dev | Kunj05</p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm">
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-[9px]">
                <MapPin className="w-4 h-4" /> Maharashtra, India
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-[9px]">
                <Clock className="w-4 h-4" /> {currentTime}
              </span>
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-white/20 rounded-[9px]"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                ✨ Resume
              </Badge>
            </div>
          </div>

          <Image
            src="https://github.com/shadcn.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">About • 約</h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            I'm Kunj Chandak, a dev who's all about building products that hit
            different and solve real-world problems. Always on the grind,
            exploring new tech, and dropping fresh ideas to make an impact where
            it counts. Always vibin' with new tech and dropping my work on the
            block to keep the ecosystem{' '}
            <span className="underline text-light-blue-400">lit</span>.
          </p>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed mt-4">
            When I'm not coding, I'm binging epic series like{' '}
            <a href="https://www.imdb.com/title/tt0993846/">
              <span className="underline text-white">
                The Wolf of Wall Street ,
              </span>
            </a>{' '}
            <a href="https://www.imdb.com/title/tt11912196/">
              {' '}
              <span className="underline text-white">Asur</span>{' '}
            </a>
            , playin' games, or just vibing with some tunes. Catch me out here
            building and dreaming big!
          </p>
        </section>

        <section className="group mt-8 sm:mt-12 space-y-4 overflow-hidden relative">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Tech Stack • テック</h2>
          <div className="flex whitespace-nowrap animate-scroll">
            {techStack1.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="px-3 sm:px-4 py-2 rounded-full text-base sm:text-lg flex items-center gap-2 hover:bg-white/15 transition-colors mx-2 shadow-lg border-neutral-700 bg-neutral-800 text-neutral-50"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>

          <div className="flex whitespace-nowrap animate-scroll-reverse">
            {techStack2.reverse().map((tech, index) => (
              <div
                key={`${tech.name}-reverse-${index}`}
                className="px-3 sm:px-4 py-2 rounded-full text-base sm:text-lg flex items-center gap-2 hover:bg-white/15 transition-colors mx-2 shadow-lg border-neutral-700 bg-neutral-800 text-neutral-50"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-20 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Social Links • シク
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.topRow.map((link, index) => (
              <a href={link.url} key={index}>
                <div className="relative group overflow-hidden rounded-xl h-[180px] sm:h-[200px]">
                  <div className="absolute inset-0">
                    <Image
                      src={link.bgImage}
                      alt="Background"
                      width={500}
                      height={500}
                      className="object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                  </div>

                  <div className="relative z-10 p-4 sm:p-6 backdrop-blur-sm bg-black/20 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold mb-2">
                        {link.prefix} {link.value}
                      </div>
                      <p className="text-sm sm:text-base text-white/60">
                        {link.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.bottomRow.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-b ${link.bgColor} to-transparent h-[80px] sm:h-[100px]`}
              >
                <div className="relative z-10 p-3 sm:p-4 backdrop-blur-sm bg-black/20 h-full">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="text-white/60 group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-medium">
                        {link.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60">
                        {link.subtitle}
                      </p>
                      {link.status && (
                        <p className="text-xs sm:text-sm text-red-400 mt-1">
                          {link.status}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="flex items-center justify-center gap-2 text-center">
            <Badge variant="outline" className="bg-white/5">
              Epic Builds ⚡
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-center">
            Some of my cool shits
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 text-center">
            I've been buildin' some dope stuff, from stunning apps to AI tools
            and more. Here's a taste of my recent builds – checkout more on my{' '}
            <a href="#" className="text-blue-400 hover:underline">
              projects page
            </a>
            .
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
            {projects.map((project, index) => (
              <div key={index} className="group h-full flex flex-col">
                {/* Top Part: Image */}
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-t-xl p-6 sm:p-8 min-h-[160px] sm:min-h-[200px] flex-grow relative">
  <Image
    src="/github.png"
    alt="Github"
    width={500}
    height={500}
    className="opacity-80 group-hover:opacity-100 transition-opacity absolute top-0 left-0 z-0 sm:w-full sm:h-full object-cover"
  />
</div>



                {/* Bottom Part: Content */}
                <div className="backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl p-4 space-y-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="mb-1">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {project.title}
                      </h3>
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
        </section>

        <section id="reach" className="mt-24 sm:mt-32 text-center space-y-6">
          <Link href="#reach" passHref>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full">
              <span className="bg-white text-black py-1 px-3 rounded-[6px]">
                Connect 💝
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold">Say Hello 👋</h2>

            <p className="text-base sm:text-lg text-white/60 max-w-[600px] mx-auto">
              Let's vibe and create something epic together. Hit me up if you're
              down to collab or explore new opportunities. Slide into my DMs on{' '}
              <a
                href="https://x.com/KunjChandak13"
                className="text-white underline underline-offset-4"
              >
                X/Twitter
              </a>{' '}
              or{' '}
              <a
                href="mailto:kunjchandak511@gmail.com"
                className="text-white underline underline-offset-4"
              >
                kunjchandak511@gmail.com
              </a>
              . Let's make moves!
            </p>
            <div className="flex justify-center items-center p-4">
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/Kunj05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kunj-chandak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a
                  href="https://x.com/KunjChandak13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  <FaXTwitter className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
