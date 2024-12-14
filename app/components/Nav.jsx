import React from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim'

const Nav = () => {
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" 
    className={`bg-[#242424] absolute top-20 right-0 pl-20 py-36 w-full -z-20`}
    style={{ height: 'calc(100vh - 80px)' }}>
        <nav className="gap-6 flex flex-col text-white text-4xl font-[300px]">
            <a href='/'>Home</a>
            <a href='/events'>Events</a>
            <a href='/team'>Our Team</a>
        </nav>
    </motion.div>
  )
}

export default Nav