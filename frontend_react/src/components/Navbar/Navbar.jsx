import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { styles } from '../../styles';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLinkClick = (item) => {
    setToggle(false);
    navigate(`#${item}`, { replace: true }); // Use navigate to scroll to the section
  };

  return (
    <nav className={`${styles.paddingX} fixed z-10 w-full bg-white/25 backdrop-blur-md border border-white/18 p-4 flex justify-between items-center`}>
      <div className="flex items-center justify-start">
        <img src={images.logo1} alt="logo" className="w-20 h-5 md:w-40 md:h-10" />
      </div>
      <ul className="hidden md:flex md:flex-1 justify-center items-center list-none">
        {['home', 'about', 'work', 'skills'].map((item) => (
          <li key={`link-${item}`} 
              className="mx-4 cursor-pointer flex flex-col items-center group"
              onClick={() => handleLinkClick(item)}>
            <div className="w-1 h-1 rounded-full bg-transparent mb-1"></div>
            <a href={`#${item}`} 
               className="uppercase text-black font-bold no-underline hover:text-secondary transition-colors duration-300 ease-in-out group-hover:scale-105">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative md:hidden">
        <HiMenuAlt4 className="w-9 h-9 text-secondary bg-secondary rounded-full flex justify-center items-center" onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-50 w-4/5 h-full flex justify-end items-end flex-col bg-cover bg-repeat p-4 shadow-md"
            style={{ backgroundImage: 'url("../../assets/bgWhite.png")' }}
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className="w-9 h-9 text-secondary m-4" onClick={() => setToggle(false)} />
            <ul className="list-none m-0 p-0 w-full h-full flex flex-col justify-start items-start">
              {['home', 'about', 'work', 'skills'].map((item) => (
                <li key={item} 
                    className="m-4 group"
                    onClick={() => handleLinkClick(item)}>
                  <a href={`#${item}`} 
                     className="uppercase text-gray-500 text-lg no-underline font-medium hover:text-secondary transition-colors duration-300 ease-in-out group-hover:scale-105">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
