import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaTwitter, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4" // space-y-4 adds vertical spacing
>
  <p>Skilled software engineer with a focus on front-end and full-stack development, bringing hands-on experience in building user-centered web applications.</p>

  <p><b>Highlights:</b></p>

  <p><b>Internship Experience:</b> Improved UX at RankBook as a Frontend Developer Intern, using HTML, CSS, JavaScript, and React.</p>

  <p><b>Technical Expertise:</b> Built full-stack applications, including a MERN stack CRUD project with real-time updates for seamless user experience.</p>

  <p><b>Dynamic Portfolio:</b> Developed a responsive portfolio with React, Three.js, and Framer Motion, showcasing interactive animations and 3D models.</p>

  <p><b>Collaborative Skills:</b> Demonstrated strong teamwork and agile development experience, contributing effectively within cross-functional teams.</p>
</motion.div>

      {/* <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      
      
      Download Resume
      <a className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex justify-center items-center w-50 h-50'
        href="/resume.pdf" // Link to your resume in the public directory
        download
        aria-label="Download Resume"
        style={{
          borderRadius: '8px', // Rounded corners
          gap: '0.5rem', // Space between icon and text
        }}
      >
        <FaDownload size={20} />
        <span>Download Resume</span>
      </a>
    </div> */}


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
