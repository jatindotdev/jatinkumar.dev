type Project = {
  name: string
  description: string
  link: string
  src: string
  isVideo: boolean
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  points?: string[]
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'TinyBits',
    description:
      'A URL shortener powered by Golang and Remix for efficient link management',
    link: 'https://github.com/jatindotdev/tinybits',
    src: 'https://tinybits.vercel.app/cover.png',
    isVideo: false,
    id: 'project1',
  },
  {
    name: 'Live Resume Preview',
    description: 'Host and share your resume online with a live PDF preview.',
    link: 'https://github.com/jatindotdev/live-resume-preview',
    src: 'https://cv.jatinkumar.dev/cover.png',
    isVideo: false,
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'EmendoAI (US)',
    title: 'Software Development Engineer',
    start: 'April 2024',
    end: 'Present',
    link: 'https://emendo.ai',
    points: [
      'Engineering a **React Native** app for construction management, automating material tracking and ledger updates to save contractors **hours** of manual work.',
      'Developing services for **real-time** extraction and processing of receipts and documents, enhancing workflow efficiency.',
      'We are designing cost-effective **serverless architecture** using **AWS CDK**, reducing infrastructure costs while maintaining **scalability** and **high availability** for real-time data processing.',
    ],
    id: 'emendoai',
  },
  {
    company: 'Climec Labs',
    title: 'App Developer',
    start: 'Sep 2023',
    end: 'Dec 2023',
    link: 'https://climeclabs.com',
    points: [
      'Developed a **cross-platform IoT application** for air purifiers, enabling users to control devices, fan speed and monitor air quality in **real-time** through an intuitive interface.',
      'Implemented **data visualization dashboards** to display air quality metrics, helping users track performance and make informed decisions',
    ],
    id: 'climeclabs',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Hello there',
    description: 'A quick introduction to my blog and what to expect',
    link: '/blog/hello-there',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jatindotdev',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/whynotjatin',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jatinnkumar',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/p__jatin',
  },
  {
    label: 'Resume',
    link: 'https://cv.jatinkumar.dev',
  },
]

export const EMAIL = 'heyjatinn@gmail.com'
export const NAME = 'Jatin'
export const TITLE = 'Software Engineer'
export const DESCRIPTION =
  'Breaking things and fixing them back. Software Engineer, Designer, and a lot more.'
