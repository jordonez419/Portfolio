import ReactGA from 'react-ga4'; // Google Analytics

/////////////////////////////
// Skills Icons Images SVG //
////////////////////////////
import htmlIcon from '/icons/htmlIcon.svg';
import cssIcon from '/icons/cssIcon.svg';
import javascriptIcon from '/icons/javascriptIcon.svg';
import typescriptIcon from '/icons/typescriptIcon.svg';
import mongodbIcon from '/icons/mongodbIcon.svg';
import expressIcon from '/icons/expressIcon.svg';
import reactIcon from '/icons/reactIcon.svg';
import nodejsIcon from '/icons/nodejsIcon.svg';
import tailwindIcon from '/icons/tailwindIcon.svg';
import bootstrapIcon from '/icons/bootstrapIcon.svg';
import postgresqlIcon from '/icons/postgresqlIcon.svg';
import gitIcon from '/icons/gitIcon.svg';
import vueIcon from '/icons/vueIcon.svg';

///////////////////////////////////
// Portfolio Projects Thumbnails //
//////////////////////////////////
import forSureHiredThumbnail from '/images/forSureHiredThumbnail.png';
import fitFusionThumbnail from '/images/fitFusionThumbnail.png';
import yokaiSlayerThumbnail from '/images/yokaiSlayerThumbnail.png';
import vanLifeThumbnail from '/images/vanLifeThumbnail.png';
import patriciaPortfolioThumbnail from '/images/patriciaPortfolioThumbnail.png';

export const skillsData = [
  { icon: htmlIcon, text: 'HTML' },
  { icon: cssIcon, text: 'CSS' },
  { icon: javascriptIcon, text: 'JavaScript' },
  { icon: typescriptIcon, text: 'TypeScript' },
  { icon: mongodbIcon, text: 'MongoDB' },
  { icon: expressIcon, text: 'Express' },
  { icon: reactIcon, text: 'React' },
  { icon: vueIcon, text: 'Vue JS' },
  { icon: tailwindIcon, text: 'TailwindCSS' },
  { icon: bootstrapIcon, text: 'Bootstrap' },
  { icon: postgresqlIcon, text: 'PostgreSQL' },
  { icon: gitIcon, text: 'Git' },
];

export const projectsData = [
  // {
  //   thumbnail: forSureHiredThumbnail,
  //   techUsed: 'React, React Router, NodeJS, Express, MongoDB',
  //   description:
  //     'An all-in-one solution for job seekers aiming to streamline their job search process. Our platform offers tools to efficiently manage job applications such as a Kanban Style Board, user authentication, and AI generated quizzes to prepare for interviews.',
  //   name: 'forSure Hired',
  //   link: 'https://forsure-hired.netlify.app/',
  // },
  {
    thumbnail: fitFusionThumbnail,
    techUsed: 'React, React Router',
    description:
      'A comprehensive web application designed to be your ultimate companion on your fitness journey. Includes features such as an anatomy page, showcasing exercises based on the muscle group clicked, a BMI calculator, and a Macro Nutrient Calculator.',
    name: 'FitFusion',
    link: 'https://fit-fusion-site.vercel.app/',
  },
  {
    thumbnail: yokaiSlayerThumbnail,
    techUsed: 'JavaScript, HTML, CSS',
    description:
      'A 2D platformer game where you must defeat multiple enemies (Yokai) until you reach the final boss. Considered many different situations such as sprite sheets for animations, collision logic, attack logic, movement mechanics, and win/lose conditions.',
    name: 'Yokai Slayer',
    link: 'https://yokaislayer.netlify.app/',
  },
  {
    thumbnail: vanLifeThumbnail,
    techUsed: 'React, React Router, Mirage JS',
    description:
      'A Front End Application where users can view a wide variety of travel vans to rent and log in to their account to view a dashboard displaying their hosted vans, income, and reviews.',
    name: 'Van Life',
    link: 'https://van-life-application.netlify.app/',
  },
  {
    thumbnail: patriciaPortfolioThumbnail,
    techUsed: 'JavaScript, HTML, CSS',
    description:
      'A portfolio website made for a family friend who is a 3D Renderer and Animation Specialist. The site showcases her projects and allows users to book a call to discuss her services.',
    name: 'Patricia Portfolio',
    link: 'https://patriciaportfoliosite.netlify.app/',
  },
  {
    thumbnail: patriciaPortfolioThumbnail,
    techUsed: 'React, React Router, Styled Components',
    description:
      'Simulate fantasy basketball matchups between your favorite NBA All-Stars!',
    name: 'NBA Simulator',
    link: 'https://patriciaportfoliosite.netlify.app/',
  },
];

export const handleLinkClick = (label) => {
  ReactGA.event({
    category: 'Navigation',
    action: `Clicked Portfolio Project Link For: ${label}`,
    label: label,
    value: 1,
  });
};
