import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { styles } from '../../styles';



const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <section className={`relative shrink-0 w-full h-auto mx-auto ${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex items-start justify-between`}>
      {/* Container for the header */}
      <div className='app__header flex'>
        {/* Using Framer Motion for animation */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mt-5 gap-3 mb-20"
        >
          {/* Left side content */}
          <div className='flex flex-col gap-3 md:gap-5'>
          <h1 className={`${styles.heroHeadText} "text-black-100"}`}>Hello, I am <span className="text-[#67a0ec]">Andy.</span></h1>
            {/* Social media links */}
            <div className='flex gap-5 md:gap-7 justify-start items-center'>
              <a href='https://github.com/andyllerena' target='__blank'>
                <img src={images.github} alt='GitHub' className='w-7 md:w-10 hover:scale-105' />
              </a>
              <a href='https://www.linkedin.com/in/andy-llerena-93044129a/' target='__blank'>
                <img src={images.LinkedIn} alt='LinkedIn' className='w-7 md:w-10 hover:scale-105' />
              </a>
              <a href='mailto:cdtaayushgupta@gmail.com' target='__blank'>
                <img src={images.gmail} alt='Gmail' className='w-7 md:w-10 hover:scale-105' />
              </a>
            </div>
          </div>
          <img src={images.programGraphic} alt="programer_bg" />
        </motion.div>
      </div>
    </section>
  );
}

export default Header;









