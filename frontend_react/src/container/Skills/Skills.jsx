import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-5">My <span className="text-[#67a0ec]">Tech Skills</span> </h2>

      <div className="flex flex-wrap justify-center items-center mx-auto my-12 w-4/5">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
            className="m-4 flex flex-col items-center justify-center p-2 transition-all duration-350 ease-in-out"
            key={skill.name}
          >
            <div
              className={`w-20 h-20 md:w-36 md:h-36 flex justify-center items-center rounded-full bg-[#333333] bg-opacity-35 hover:shadow-2xl`}
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={urlFor(skill.icon)} alt={skill.name} className="w-12 h-12 md:w-20 md:h-20 hover:animate-spin" />
            </div>
            <p className="mt-2 text-sm md:text-base font-bold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
