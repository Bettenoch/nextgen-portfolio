import React, {useEffect, useRef} from 'react';
import {motion, useScroll} from 'framer-motion';
import LiIcons from './LiIcons';

const Info = ({ type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcons reference ={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg' >
                    {type}
                </h3>
                <span className='capitalize font-medium text-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}
const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef.current,
      offset: ['start end', 'center start'],
    });
  
    useEffect(() => {
      // Your side effects here
    }, [scrollYProgress]); // Include dependencies if needed

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
        <div ref= {containerRef} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

          
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9  top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
            >

            </motion.div>
            <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
               <Info
                type= "Remote Full Stack Web Development Program, Full Time	"
                time="2017-2022"
                place="www.google.com"
                info= "Mountain View, CARelevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                
                
                />

                <Info
                type= "Software Engineer"
                time="2017-2022"
                place="www.google.com"
                info= "Mountain View, CARelevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                />

                <Info
                type= "Software Engineer"
                time="2017-2022"
                place="www.google.com"
                info= "Mountain View, CARelevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."

                />
                
            </ul>
        </div>
    </div>
  )
}

export default Education