import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  nodejs,
  aws,
  git,
  github,
  tailwind,
  mongodb,
  express,
  mobile,
  backend,
  creator,
} from "../assets";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const categories = [
  {
    title: "🚀 Core Development Skills",
    items: [
      "Mobile app development",
      "Cross-platform development",
      "Android & iOS development",
      "App architecture and state management",
    ],
  },
  {
    title: "🎨 Front-End Development",
    items: [
      "HTML, CSS, JavaScript",
      "Responsive design",
      "UI implementation",
      "(Familiar with component-based development)",
    ],
  },
  {
    title: "🗄️ Backend & Databases",
    items: [
      "Familiar with Node.js and Express.js",
      "Basic experience with MongoDB and Firebase",
      "REST API integration",
      "Data handling and authentication (introductory level)",
    ],
  },
  {
    title: "📋 Project & Team Skills",
    items: [
      "Project planning and management",
      "Version control (Git, GitHub)",
      "Agile/Scrum workflow",
      "Client communication and team collaboration",
    ],
  },
  {
    title: "⚡ Professional Strengths",
    items: [
      "Problem-solving",
      "Quick learner",
      "Adaptability",
      "Time management",
      "Attention to detail",
    ],
  },
];

const CategoryCard = ({ category, index }) => {
  const ref = useRef(null);
  useGsap(
    ref,
    {
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    },
    index * 0.1
  );

  // Ensure leading emoji remains visible beside gradient title
  const firstSpaceIndex = category.title.indexOf(" ");
  const leadingIcon = firstSpaceIndex > 0 ? category.title.slice(0, firstSpaceIndex) : "";
  const titleText = firstSpaceIndex > 0 ? category.title.slice(firstSpaceIndex + 1) : category.title;

  return (
    <div ref={ref} className="w-full bg-tertiary/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/10 transition duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <div className="flex items-start gap-2 mb-4">
        {leadingIcon && <span className="text-[22px] leading-none select-none">{leadingIcon}</span>}
        <h3 className="text-[20px] font-bold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">{titleText}</h3>
      </div>
      <div className="relative pl-4">
        <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#915EFF] via-[#60A5FA] to-[#34D399] opacity-60" />
        <ul className="list-disc list-outside pl-5 space-y-2 leading-7 list-gradient text-secondary text-[15px]">
          {category.items.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => (
  <section className="skills-section py-10 px-4 md:px-10">
    <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Tech Stack & Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Skill cards with icons and gradient backgrounds */}
      {[
        { name: "HTML5", icon: html },
        { name: "CSS3", icon: css },
        { name: "JavaScript", icon: javascript },
        { name: "TypeScript", icon: typescript },
        { name: "React", icon: reactjs },
        { name: "Redux", icon: redux },
        { name: "NestJs", icon: backend },
        { name: "React Native", icon: mobile },
        { name: "Xcode", icon: creator },
        { name: "Android Studio", icon: mobile },
        { name: "Native Modules", icon: backend },
        { name: "Git", icon: git },
        { name: "Github", icon: github },
        { name: "Jira/Linear", icon: creator },
        { name: "Hasura", icon: backend },
        { name: "AWS S3 Bucket", icon: aws },
        { name: "State Management: Zustand, Redux", icon: redux },
        { name: "GraphQL / Rest APIs", icon: backend },
        { name: "Firebase: Cloud Messaging, Authentication, Analytics", icon: backend },
        { name: "Google Cloud Console", icon: aws },
        { name: "App Publishing: Google Play Store, App Store", icon: mobile },
      ].map((skill, idx) => (
        <div
          key={skill.name}
          className="glass rounded-2xl p-6 border border-[#60A5FA]/30 hover:border-[#915EFF]/60 transition duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#232347] via-[#232347] to-[#232347]/80"
        >
          <div className="mb-3 select-none">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain mx-auto" />
          </div>
          <span className="font-semibold text-lg bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default SectionWrapper(Skills, "skills", { compact: true });


