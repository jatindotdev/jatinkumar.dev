import { useLoaderData } from '@remix-run/react';

type Projects = {
  name: string;
  logo: string;
  imageUrl: string;
  projectUrl: string;
  sourceUrl: string;
  description: string;
};

export const loader = async () => {
  const projects: Projects[] = [
    {
      name: 'Chat App - Web',
      logo: 'https://chat-withme.vercel.app/icons/apple-touch-icon.png',
      imageUrl: 'https://cdn.jsdelivr.net/gh/jatindotdev/chat-app/public/cover.png',
      projectUrl: 'https://chat-withme.vercel.app',
      sourceUrl: 'https://github.com/codewjatin/chat-app',
      description:
        'A sleek and minimalistic chat app built with HTML, CSS, and JavaScript, powered by Firebase for seamless communication and a user-friendly interface.',
    },
    {
      name: 'Music Player - Deno',
      logo: 'https://deno.land/logo.svg',
      imageUrl:
        'https://cdn.jsdelivr.net/gh/jatindotdev/deno-music-player/assets/cover.png',
      projectUrl: 'https://music-player.deno.dev',
      sourceUrl: 'https://github.com/codewjatin/deno-music-player',
      description:
        'A Deno-powered music player with server-side query search and easy frontend integration for seamless listening experience.',
    },
  ];

  return { projects };
};

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <div className="main-wrapper">
      <div className="container mx-auto content">
        <h1 className="page-title">Projects</h1>
        <div>
          -- Follow me on GitHub :){' '}
          <a
            href={'https://github.com/jatindotdev?repositories'}
            className="btn project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jatindotdev
          </a>
        </div>
        <br />
        <div className="page-sub-heading">
          I have developed a variety of projects as part of my learning process, all
          open-sourced on my GitHub profile. I have shared some of these projects for
          others to view. I am always looking for ways to improve and expand my skills as
          a developer. b
        </div>
        <hr className="mt-xl mb-xxl" />
      </div>
      <div className="container-slim mx-auto content">
        {projects.map(project => {
          const description = project.description.split('\n\n');
          const projectUrl = new URL(project.projectUrl).hostname;
          return (
            <div key={project.name} className="project-container mb-xxl">
              <div className="inset-image project-image mb-m">
                <img
                  alt={project.name}
                  loading="lazy"
                  width={880}
                  height={495}
                  src={project.imageUrl}
                />
              </div>
              <h4 className="project-title">{project.name}</h4>
              {description.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a
                href={project.projectUrl}
                className="btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectUrl}
                <i className="icon icon-external-link"></i>
              </a>
              <a
                href={project.sourceUrl}
                className="btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {new URL(project.sourceUrl).pathname.slice(1)}
                <i className="icon icon-external-link"></i>
              </a>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto">
        <hr className="mt-xxl mb-xxl" />
      </div>
      <div className="container-slim mx-auto">
        <div className="heading-group mb-m">
          <h4 className="mb-s">Acknowledgments</h4>
          <div className="sub-heading mb-s">
            I'd like to extend my gratitude to all the developers who have put in hard
            work to create resources for others to learn from and build stunning websites,
            as well as to contribute to open-source projects.
          </div>
          <p>
            The sharing of knowledge and collaboration in the open-source community is a
            fantastic way to advance technology. Keep up the good work and continue making
            contributions!
          </p>
        </div>
      </div>
    </div>
  );
}
