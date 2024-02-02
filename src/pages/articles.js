import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/smooth scrolling in reactjs.png'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/create modal component in react using react portals.png'
import article4 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article5 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import article6 from '../../public/images/articles/What is higher order component in React.jpg'
import article7 from '../../public/images/articles/What is Redux with easy explanation.png'


const FramerImage = motion(Image);

const HoverImage = ({ title, img, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0)
  const imgRef = useRef(null);

  function handleMouse (e) {
    imgRef.current.style.display = 'inline-block'
    x.set(e.pageX)
    y.set(-10)
  }
  function handleMouseLeave (e){
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }
  return (
      <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
        <FramerImage 
          style={{ x:x, y:y}}
          ref={imgRef} 
          src={img} 
          alt={title} 
          initial ={{opacity:0}}
          whileInView={{opacity:1, transition:{duration:0.2}}}
          className=' z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
      </Link>  
  )
}
const Article = ({ img, title, date, link}) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:'easeInOut'}}}
    viewport={{once:true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex sm:flex-col items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4'>
      <HoverImage title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 xs:text-sm sm:self-start'>{date}</span>
    </motion.li>
  )
}
const FeaturedArt = ({ img, title, time, summary, link}) => {
 return (
  <li className=' relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%]  h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'/>
    <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
        />
    </Link>
    <Link href= {link} target='_blank'>
      <h2 className='capitalize text-2xl xs:text-lg font-bold my-2 hover:underline mt-2'> {title}</h2>
    </Link>
    <p className='text-sm mb-2'>{summary}</p>
    <span className='text-primary dark:text-primaryDark font-semibold'> {time}</span>
  </li>
 )
}
const articles = () => {
  return (
    
    <>
        <Head>
            <title> BettEnock | Articles Page</title>
            <meta name='description' content='Web development road map'/> 
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-32 sm:pt-32 md:pt-48 lg:pt-52'>
                <AnimatedText text='Words can change the world!!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-15'>
                  
                    <FeaturedArt 
                      title= 'Build A Custom Pagination Component In Reactjs From Scratch'
                      summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                      Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'

                      time='9 min read'
                      link='/'
                      img={article1}
                    />

                  
                    <FeaturedArt 
                      title= 'Build A Custom Pagination Component In Reactjs From Scratch'
                      summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                      Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'

                      time='9 min read'
                      link='/'
                      img={article2}
                    />  
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-24'>All Articles</h2>
                <ul>
                  <Article
                  title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                  date='April 2023'
                  link='/'
                  img={article3}
                  />
                   <Article
                  title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                  date='April 2023'
                  link='/'
                  img={article4}
                  />
                   <Article
                  title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                  date='April 2023'
                  link='/'
                  img={article5}
                  />
                   <Article
                  title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                  date='April 2023'
                  link='/'
                  img={article6}
                  />
                   <Article
                  title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                  date='April 2023'
                  link='/'
                  img={article7}
                  />
                   <Article
                  title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                  date='April 2023'
                  link='/'
                  img={article4}
                  />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles