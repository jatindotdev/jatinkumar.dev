import { useLoaderData } from '@remix-run/react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

type Featured = {
  name: string;
  logo: string;
  projectUrl: string;
  description: string;
};

export const loader = async () => {
  const featured: Featured[] = [
    {
      name: 'Chat App - Web',
      logo: 'https://chat-withme.vercel.app/icons/apple-touch-icon.png',
      projectUrl: 'https://chat-withme.vercel.app',
      description:
        'A sleek and minimalistic chat app built with HTML, CSS, and JavaScript, powered by Firebase for seamless communication and a user-friendly interface.',
    },
    {
      name: 'Music Player - Deno',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg',
      projectUrl: 'https://music-player.deno.dev',
      description:
        'A Deno-powered music player with server-side query search and easy frontend integration for seamless listening experience.',
    },
  ];
  return { featured };
};

export default function Home() {
  const { featured } = useLoaderData<typeof loader>();
  return (
    <div className="main-wrapper">
      <div className="container mx-auto">
        <h1 className="container">
          Software Developer learning and building applications and interfaces.
        </h1>
        <div className="home-intro text-large content mt-l">
          <p>
            My name is Jatin and I am a student pursuing a Bachelor's degree in
            Computer Science. My specialty is in creating mobile and web-based
            applications with a strong emphasis on simplicity and usability,
            with a focus on building interfaces for the same.
          </p>
          <p>
            I am currently gaining knowledge and experience in{' '}
            <a
              href="http://flutter.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flutter
            </a>{' '}
            and{' '}
            <a
              href="https://developer.apple.com/xcode/swiftui/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swift UI
            </a>{' '}
            by building applications and contributing to open-source projects.
            Additionally, I am proficient in frontend and backend web
            development, utilizing frameworks such as{' '}
            <a
              href="http://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            and{' '}
            <a
              href="http://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{' '}
            for the frontend and{' '}
            <a
              href="http://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>{' '}
            and{' '}
            <a
              href="https://palletsprojects.com/p/flask/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flask
            </a>{' '}
            for the backend.
          </p>
          <p>
            I am passionate about open-source and enjoy exploring and learning
            from open-sourced repositories. I also contribute to them whenever I
            can. Additionally, I prefer to keep my own projects open-sourced.
          </p>
        </div>
        <div className="flex flex-wrap justify-start content-start items-center mt-l sm:justify-between gap-4">
          <ul className="home-links">
            <li>
              <a
                target="_blank"
                href="https://twitter.com/whynotjatin"
                title="Twitter"
                rel="noreferrer"
              >
                <TwitterIcon size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/p__jatin"
                title="Instagram"
                rel="noreferrer"
              >
                <InstagramIcon size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/jatindotdev"
                title="Github"
                rel="noreferrer"
              >
                <GithubIcon size={24} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="icon-link icon-link-github"
                href="https://linkedin.com/in/jatinnkumar"
                title="LinkedIn"
                rel="noreferrer"
              >
                <LinkedinIcon size={24} />
              </a>
            </li>
          </ul>
          <div className="space-x-2 flex">
            <button
              type="button"
              onClick={e => {
                const target = e.currentTarget;
                target.textContent = 'Copied!';
                target.disabled = true;
                navigator.clipboard.writeText('main.jatink@gmail.com');
                setTimeout(() => {
                  target.textContent = 'Email me';
                  target.disabled = false;
                }, 2000);
              }}
              className="btn"
            >
              Email me
            </button>
            <a
              href="https://cv.jatinkumar.dev"
              className="btn"
              rel="noreferrer"
            >
              My CV
            </a>
          </div>
        </div>
        <hr className="mt-xxl mb-xxl" />
        <div>
          <div className="heading-group">
            <h4>Featured projects</h4>
            <div className="sub-heading">
              A collection of some side projects that have shipped recently.
            </div>
          </div>
          <div className="home-featured-projects">
            {featured.map(project => (
              <a
                key={project.name}
                target="_blank"
                className="tile-project mb-xs"
                href={project.projectUrl}
                rel="noreferrer"
              >
                <div className="thumbnail">
                  <img
                    height="64"
                    width="64"
                    loading="lazy"
                    src={project.logo}
                    className="bg-white"
                    alt={project.name}
                  />
                </div>
                <div className="detail">
                  <span className="title">{project.name}</span>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
