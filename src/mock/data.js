import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Daniyal Talat',
  subtitle: 'I am a Node.js back-end developer',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a self-motivated backend developer with a passion for all things JavaScript and a strong inclination towards employing the best practices for writing clean code and devising maintainable, and reusable architecture. ',
  paragraphTwo:
    'Bringing forth a research-oriented mindset in solving complex problems with a penchant for building secure APIs and functionally correct features of an application, my goal is to become an efficient software developer with the knowledge and expertise to provide solutions to complex and difficult problems',
  paragraphThree:
    'I am looking for back-end node.js positions in an organization that provides collaborative environment, and challenging tasks in order to hone my skills and increase my knowledge.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Social Media Backend APIs',
    info: 'Backend RESTFUL APIs for Social Media',
    info2: '',
    url: '',
    repo: 'https://github.com/daniyaldev2k20/social-media', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Chat Application',
    info: 'A chat application implemented using Socket.io',
    info2: '',
    url: '',
    repo: 'https://github.com/daniyaldev2k20/Real-time-chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'History Web Scraper',
    info:
      'Web scraper implemented in NodeJS which scrapes daily featured articles and biographies pertaining to history from Wikipedia',
    info2: '',
    url: '',
    repo: 'https://github.com/daniyaldev2k20/Simple-web-scraper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Natours Tour Application',
    info: 'Tour Application along with user management system. ',
    info2: '',
    url: '',
    repo: 'https://github.com/daniyaldev2k20/Tour-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'daniyaltalat733@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniyal-talat-b0a7761b6/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/daniyaldev2k20',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
