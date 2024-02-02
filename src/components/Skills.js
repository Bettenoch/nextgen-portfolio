import React from 'react'
import { motion } from 'framer-motion'

const Lang =({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{ x:x, y:y, transition: {duration:1.5} }}
    viewport={{once: true}}
    >
    {name}

    </motion.div>
  )

}
const Skills = ({name, }) => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>MY Skills</h2>
        <div className='w-full  h-screen lg:h-[80vh] sm:h-[80vh] xs:h-[50vh]  relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm dark:bg-circularDark'>
           <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
           whileHover={{scale:1.05}}
           >
            WEB
           </motion.div>

           <Lang name='HTML' x='-25vw' y='-2vw'/>
           <Lang name='CSS' x='-5vw' y='-10vw'/>
           <Lang name='JavaScript' x='20vw' y='6vw'/>
           <Lang name='ReactJs' x='8vw' y='12vw'/>
           <Lang name='NextJs' x='-20vw' y='-15vw'/>
           <Lang name='GatsbyJs' x='15vw' y='-12vw'/>
           <Lang name='Web Design' x='32vw' y='-5vw'/>
           <Lang name='Figma' x='0vw' y='-20vw'/>
           <Lang name='Firebase' x='-25vw' y='18vw'/>
           <Lang name='Tailwind CSS' x='18vw' y='18vw'/>
        </div>
        
    </>
  )
}

export default Skills