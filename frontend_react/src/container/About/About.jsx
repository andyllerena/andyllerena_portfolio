import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import {styles} from '../../styles'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
    <div className={` ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center justify-between`}>
    <h2 className={`${styles.sectionHeadText} "text-black-100"`}>About <span className="text-[#67a0ec]">Me</span>
      </h2>
      {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="w-auto flex flex-col items-start justify-start m-8 first:mt "
            key={about.title + index}
            style={{ minWidth: '190px' }}
          >
            <h2 className="text-xl font-bold mt-5 max-w-5xl  leading-[30px] text-[35px] mb-2">{about.title}</h2>
            <p className="text-[20px] mt-2.5 mb-10">{about.description}</p>
          </motion.div>
        ))}
    </div>
      
    </>
  );
};

export default About;
