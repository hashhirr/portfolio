import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain'
          />
        </div>
      }
    >
      <div className='rounded-xl border border-white/5 hover:border-white/10 transition-colors duration-300 p-4 -m-4'>
        <div>
          <h3 className='text-[24px] font-bold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent'>
            {experience.title}
          </h3>
          <p
            className='text-[16px] font-semibold bg-gradient-to-r from-[#C4B5FD] via-[#93C5FD] to-[#6EE7B7] bg-clip-text text-transparent opacity-90'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4' />

        <div className='relative pl-4'>
          <span className='absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#915EFF] via-[#60A5FA] to-[#34D399] opacity-60' />
          <ul className='list-disc list-outside pl-5 space-y-2 leading-7 list-gradient transition-colors duration-300'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="experience-section py-10 px-4 md:px-10">
      <div className="text-center mb-8">
        <p className="text-lg font-semibold bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">What I have done so far</p>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">Work Experience</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={`experience-${index}`}
            className="glass rounded-2xl p-8 border border-[#60A5FA]/30 hover:border-[#915EFF]/60 transition duration-300 shadow-lg hover:shadow-xl flex flex-col gap-3 bg-gradient-to-br from-[#232347] via-[#232347] to-[#232347]/80"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#915EFF] via-[#60A5FA] to-[#34D399] shadow-lg">
                <img src={experience.icon} alt={experience.company_name} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">{experience.title}</h3>
                <p className="text-[15px] font-semibold bg-gradient-to-r from-[#C4B5FD] via-[#93C5FD] to-[#6EE7B7] bg-clip-text text-transparent opacity-90">{experience.company_name}</p>
                <span className="text-xs text-secondary">{experience.date}</span>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-[16px] text-secondary">
              {experience.points.map((point, idx) => (
                <li key={`experience-point-${idx}`}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
