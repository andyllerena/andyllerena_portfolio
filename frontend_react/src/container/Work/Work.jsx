import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Creative <span className="text-[#67a0ec]">Portfolio</span> Section</h2>

      <div className="flex flex-wrap justify-center items-center my-16">
        {['Full-Stack', 'React JS', 'Python', 'UI/UX', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`p-2 md:p-4 rounded-lg font-bold cursor-pointer transition duration-250 m-2 
              ${activeFilter === item ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filterWork.map((work, index) => (
          <div className="w-64 md:w-[470px] flex flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition duration-300 hover:shadow-xl" key={index}>
            <div className="relative w-full h-56 md:h-96">
              <img src={urlFor(work.imgUrl)} alt={work.name} className="w-full h-full rounded-lg object-cover" />
              <motion.div
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="absolute inset-0 w-full h-full bg-black bg-opacity-50 rounded-lg opacity-0 transition duration-300 flex justify-center items-center"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white bg-opacity-70 flex justify-center items-center hover:scale-110 transition duration-300 mr-4">
                  <AiFillEye className="text-black text-2xl" />
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white bg-opacity-70 flex justify-center items-center hover:scale-110 transition duration-300">
                  <AiFillGithub className="text-black text-2xl" />
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col mt-4">
              <h4 className="text-xl font-bold">{work.title}</h4>
              <p className="mt-2 text-sm">{work.description}</p>
              <div className="absolute -top-6 px-4 py-2 rounded-xl bg-white">
                <p>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
