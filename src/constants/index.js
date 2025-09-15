
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  flood1,
  flood2,
  rider,
} from '../assets'


// Import company logos separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "projects",
    title: "Top Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend & API Integrator",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: aws,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "Version Control (Git/GitHub)",
    icon: git,
  },
  {
    title: "Database (MongoDB, MySQL)",
    icon: mysql,
  },
];

const technologies = [
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "ThunderBird Technologies",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Sep 2023 – Present",
    points: [
      "Lead a team of interns in developing a next-generation social media application inspired by Instagram, Facebook, and Snapchat named Mistify. Responsible for complete front-end architecture using React Native, JavaScript, TypeScript, Kotlin, and Swift.",
      "Engineered custom native camera modules in Swift (iOS) and Kotlin (Android), addressing key functional requirements and demonstrating a hands-on approach to solving complex technical challenges.",
      "Expanded skill set to backend: Hasura, AWS S3, NestJS, Rest and GraphQL APIs. Full-stack capability for backend infrastructure.",
      "Continuously seek out new technologies and methodologies to push boundaries in social media tech and deliver impactful results.",
      "Mentor and guide interns, ensuring hands-on experience while upholding high development standards.",
    ],
  },
];

const projects = [
  {
    name: "Mistify",
    description:
      "Next-generation social media app inspired by Instagram, Facebook, and Snapchat. Led front-end architecture and custom native camera modules.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "full-stack", color: "green-text-gradient" },
      { name: "social-media", color: "pink-text-gradient" },
    ],
    image: github, // Replace with actual image if available
    source_code_link: "https://github.com/hashirr/mistify",
  },
  {
    name: "Hospital Management System",
    description:
      "Innovative iOS app designed to revolutionize the health care experience for patients, doctors, and medical staff.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: github, // Replace with actual image if available
    source_code_link: "https://github.com/hashirr/hospital-management-system",
  },
];

export { services, technologies, experiences, projects };
