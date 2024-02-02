import React from 'react'
import { CircularText } from './icon'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed md:absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto sm:right-0'>
        <div className='w-48 md:w-24 xs: w-16 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-lime-100"} />
            <Link href='/contact' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 bg-dark  text-light dark:bg-light dark:text-dark shadow-md border border-solid border-dark hover:dark:text-lime-200 w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:border-dark hover:dark:border-lime-300 md:w-12 md:h-12 md:text-[10px]'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe