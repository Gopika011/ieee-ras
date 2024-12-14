"use client"
import Image from "next/image"
import logo from "@/app/assets/ras logo.png"
import { useEffect, useState } from "react"
import styles from './style.module.scss'
import Nav from "./Nav"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 backdrop-blur-sm z-20 trans font-poppins text-black/85
      ${scrolled ? 'bg-black/50 text-white' : 'bg-transparent'}`} >
      <div className="py-[26px]">
        <div className="container px-6 lg:px-20">
            <div className="flex items-center justify-between">
              <Link href='/'><Image src={logo} alt='ras logo' width={100} height={100}/></Link>
              <nav className="gap-10 hidden md:flex items-center">
                  <a href='/' className="a-nav">Home</a>
                  <a href='/events' className="a-nav">Events</a>
                  <a href='/team' className="a-nav">Our Team</a>
              </nav>
              <div className="md:hidden text-center w-10 h-10 items-center flex justify-center" >
                <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
                
              </div>
                
              {/* <AnimatePresence mode="wait">
                {isActive && <Nav/>}
              </AnimatePresence> */}
              <Nav active={isActive}/>

            </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar