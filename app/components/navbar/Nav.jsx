// import React from 'react'
// import { motion } from 'framer-motion';
// import { menuSlide } from './anim'

// const Nav = () => {
//   return (
//     <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" 
//     className={`bg-[#1f1f1f] absolute top-[89px] right-0 w-full pt-6 pb-12 -z-20 flex justify-center`}
//     style={{ height: 'calc(100vh - 80px)' }}>
//         <nav className="flex flex-col justify-evenly text-center text-white items-center text-[40px] font-[300px] h-full w-full mx-10">
//             <a className='a-nav-sm' href='/'>Home</a>
//             <a className='a-nav-sm' href='/events'>Events</a>
//             <a className='a-nav-sm' href='/team'>Our Team</a>
//         </nav>
//     </motion.div>
//   )
// }

// export default Nav


import React from 'react'

const Nav = ({active}) => {
  return (
    <div
    className={`bg-[#1f1f1f] absolute overflow-hidden right-0 w-full flex justify-center trans5 top-[92px] ${!active? 'h-0': 'h-screen-minus-80'}`}>
        <nav className="flex flex-col justify-evenly text-center text-white items-center text-[40px] font-[300px] h-full w-full mx-10">
            <a className='a-nav-sm' href='/'>Home</a>
            <a className='a-nav-sm' href='/events'>Events</a>
            <a className='a-nav-sm' href='/team'>Our Team</a>
        </nav>
    </div>
  )
}

export default Nav