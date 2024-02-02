import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/components/icon'
import doctorapp from '../../public/images/projects/doctorapp.jpg'
import weatherAPP from '../../public/images/projects/weatherchart.PNG'
import fintech from '../../public/images/projects/Fintech Transact.PNG'
import ecommerce from '../../public/images/projects/ecommerce app.PNG'
import food from '../../public/images/projects/Food App.jpg'
import movies from '../../public/images/projects/Go Movies.PNG'
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, tech}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%]  h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto '
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>

            <div className='w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                   <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 text-sm text-dark dark:text-light sm:text-sm'>{summary}</p>
                <ul className='flex gap-2 text-xs text-slate-400'>
                    <li>{tech}</li>
                </ul>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                    <GithubIcon />
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 sm:px-4 sm:text-base rounded-lg bg-dark dark:bg-light dark:text-dark text-light  p-2 px-6 text-lg font-semibold'>
                        Visit Project
                    </Link>
                </div>

            </div>

          
        </article>
    )
}
const Project = ({ title, type, summary, tech, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative'>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto max-h-48'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            <p className='my-2 text-sm text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                   <h2 className='my-2 w-full text-left text-3xl lg:text-2xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 text-xs text-slate-400 flex items-center justify-between'>
                    {tech}
                </div>
                <div className=' w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
                        Visit 
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                   
                </div>

            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
     <Head>
            <title> BettEnock | Projeects Page</title>
            <meta name='description' content='Web development road map'/>
            
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-32 sm:pt-32 md:pt-48 lg:pt-52'>
            <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject 
                    title='Doctor Booking App'
                    img={doctorapp}
                    summary='   Developed a comprehensive Doctor-Patient Appointment System, utilizing a full-stack approach with Ruby on Rails for the backend and React.js for the frontend. 
                    This project seamlessly manages appointments, allowing patients to schedule and reschedule appointments based on real-time availability. 
                    The backend employs Rails to handle data storage, authentication, and API interactions, while the frontend, built with React.js, 
                    delivers a responsive and intuitive user interface for both patients and healthcare providers.'
                    link='https://jade-rabanadas-479b96.netlify.app/'
                    github='https://github.com/Bettenoch/medical-appointments-front-end'
                    type='Featured Project'
                    tech='React, PostgreSQL, Ruby on Rails,Tailwind CSS, Vite'
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='Weather Metrics App'
                    img={weatherAPP}
                    summary=' Created a dynamic Weather Application employing Ruby on Rails for the backend and React.js/React-Redux for the frontend.
                     This project seamlessly integrates weather data from external APIs, providing users with real-time weather information in an interactive and user-friendly interface.
                     Users can explore current weather conditions, forecasts, and customize location-based preferences.'
                    link='https://todays-pandemic-status-app.onrender.com/'
                    github='https://github.com/Bettenoch/Metrics-Application'
                    type='Pair-Programming'
                    tech='React, React-Redux'
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='TVMAZE API'
                    img={movies}
                    summary='Created a dynamic web application that seamlessly integrates with the TVMaze API, offering users a two-fold experience with a captivating homepage and interactive commenter popup windows. 
                    The homepage provides an engaging interface for users to explore and discover detailed information about movies and TV series, enhanced by dynamic search functionalities. 
                    '
                    link='https://graciano1997.github.io/js_moduleII_capstone/dist/'
                    github='https://github.com/Bettenoch/js_moduleII_capstone'
                    type='Solo Project'
                    tech='React, React-Redux'
                    />
                </div>
                <div className='col-span-12 '>
                <FeaturedProject 
                    title='Fintech Transact'
                    img={fintech}
                    summary='   Developed a powerful budget management application using Ruby on Rails for the backend and React for the frontend, providing users with a seamless platform to take control of their finances. 
                    The app enables users to effortlessly manage their budget, categorize expenses, and track spending patterns.'
                    link='https://github.com/Bettenoch/fintech_transact'
                    github='https://fintechtransact.onrender.com/'
                    type='Solo Project'
                    tech='React, React-Redux, Ruby on Rails, React-Bootstrap, PostgreSQL'
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='Food Recipe Application'
                    img={food}
                    summary='Crafted a delightful Food Recipe Application by seamlessly integrating Ruby on Rails for the backend and React for the frontend. 
                    This application offers users an immersive culinary experience, allowing them to explore a diverse range of recipes with ease.
                    Users can search, save favorite recipes, and follow step-by-step cooking instructions.  '
                    link='https://github.com/Bettenoch/Recipe-app'
                    github='https://github.com/Bettenoch/Recipe-app'
                    type='Featured Project'
                    tech='React, React-Redux, Ruby on Rails, Tailwind CSS, PostgreSQL'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='Crypto Screener Application'
                    img={ecommerce}
                    summary='Leveraged Djangos powerful framework to manage backend functionalities such as user authentication, database management, and order processing.
                     Implemented React-Redux on the frontend to create a dynamic and responsive user interface.
                     ensuring a secure and engaging online shopping experience for users.'
                    link='https://github.com/Bettenoch/frontend'
                    github='https://github.com/Bettenoch/frontend'
                    type='Featured Project'
                    tech='React, React-Redux, Django, Bootstrap, PostgreSQL'
                    />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects