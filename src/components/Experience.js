import React, {useEffect, useRef} from 'react';
import {motion, useScroll} from 'framer-motion';
import LiIcons from './LiIcons';

const Info = ({position, company, companyLink, time, address, work}) => {
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
                    {position}&nbsp; 
                    <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a> 
                </h3>
                <span className='capitalize font-medium text-medium pb-4 text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full mt-2 xs:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}
const Experience = () => {
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-2xl md:mb-16'>Experience</h2>
        <div ref= {containerRef} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>

          
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9  top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
            >

            </motion.div>
            <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
               <Info
                position= "Full-stack web developer & Mentor"
                company="MICROVERSE"
                companyLink="https://www.microverse.org/about-us"
                time="2023 February-Present"
                address= "San Francisco, California "
                work="Acquired expertise in intermediate and advanced aspects of full-stack development, encompassing Rails, React Git, and data structures & algorithms challenges. 
                Successfully executed multiple full-stack projects through both independent work and collaborative pair-programming efforts.
                " 
                
                />
                 <Info
                position= "GIS Analyst Intern"
                company="BOMET-COUNTY GIS & MAPPING"
                companyLink="https://www.microverse.org/about-us"
                time="2021 June-2021 September"
                address= "Mountain View, CA"
                work="Assisted the GIS department in migrating from paper-work cadastral forms to digital formats. This enabled the department to install modern GIS software such as QGIS, ArcGISARCGIS & MATPLOT and serve more than 50 clients daily.
                Participated in the digital mapping and analysis of the planned expansion of Sotik Town, which won the award as the best priority county project plan.
                Mentored junior interns from other colleges to adopt modern GIS and Mapping frameworks.
                Coordinated 8 Interns during fieldwork mapping and measurement sessions.
                " 
                
                />
                 <Info
                position= "Survey Assistant"
                company="Self-Employed"
                companyLink="https://www.microverse.org/about-us"
                time="2022 June-2022 November"
                address= "Mountain View, CA"
                work="Worked on a team responsible for conducting surveys using RTK and drone mapping around Bomet.
                Participated in solving boundary disputes and conducting safe searches for parcels before procurement for clients" 
                
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience