import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

// ...existing code...

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

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {icon && (
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          )}
          <h3 className="text-[20px] font-bold text-center bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div ref={headingRef}>
        <p className={`${styles.sectionSubText} bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-[#915EFF] via-[#60A5FA] to-[#34D399] bg-clip-text text-transparent`}>Overview</h2>
      </div>

      <p ref={paragraphRef} className="mt-4 text-[17px] max-w-3xl leading-[30px] desc-paragraph decorated">
  I am a versatile Software Engineer with a primary focus on app development and a passion for solving real-world problems through technology. While mobile development is my core strength, I don’t confine myself to labels like “Frontend” or “Full stack.” I fully embrace my role as a Software Engineer, someone who learns whatever is necessary, dives into any layer of the stack, and delivers solutions that make an impact.

  I thrive on learning new tools, adapting to diverse challenges, and building scalable, user-centric applications. With a strong foundation in both technical skills and product thinking, I bring curiosity, ownership, and flexibility to every project. I’m eager to grow within a dynamic engineering team where innovation, autonomy, and continuous improvement are part of the culture.
      </p>

      <div className="mt-6">
        <a
          href={`${import.meta.env.BASE_URL}HashirCV.pdf.pdf`}
          target='_blank'
          rel='noopener noreferrer'
          download
          className='inline-block btn-gradient px-5 py-2 text-[16px] font-medium'
        >
          Download CV
        </a>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <div className="w-full glass rounded-[20px] p-[1px]">
            <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
