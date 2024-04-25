import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

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
      <h2 className="text-3xl lg:text-4xl font-bold text-center leading-normal">
        I Know that <span className="text-primary">Good Design</span><br />
        meansss <span className="text-primary">Good Business</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="w-48 flex flex-col items-start justify-start m-8 first:mt-0"
            key={about.title + index}
            style={{ minWidth: '190px' }}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} className="w-full h-42 rounded-lg object-cover" />
            <h2 className="text-xl font-bold mt-5">{about.title}</h2>
            <p className="text-base mt-2.5">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
