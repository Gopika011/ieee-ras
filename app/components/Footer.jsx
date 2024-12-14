import Image from "next/image"
import logo from "@/app/assets/ras logo.png"
import fb from "@/app/assets/facebook.svg"
import git from "@/app/assets/github.svg"
import insta from "@/app/assets/instagram.svg"
import link from "@/app/assets/link.svg"
import x from "@/app/assets/x.svg"


const Footer = () => {
  return (
    <footer className="p-4 bg-[#1f1f1f] text-white/80 text-sm text-center py-10">
      <div className="container">
        <div className="inline-flex">
        <Image src={logo} alt='ras' width={100} height={100}/>
        </div>
        
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 text-xl">
          <a href='/' className="a-foot">Home</a>
          <a href='/events' className="a-foot">Events</a>
          <a href='/team' className="a-foot">Our Team</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <a className='a-social' href='https://ieeesbmits.in/'><Image src={fb} alt="social" width={25} className="filter invert opacity-85"/></a>
          <a className='a-social' href='https://ieeesbmits.in/'><Image src={insta} alt="social" width={25} className="filter invert opacity-85"/></a>
          <a className='a-social' href='https://ieeesbmits.in/'><Image src={x} alt="social" width={25} className="filter invert opacity-85"/></a>
          <a className='a-social' href='https://ieeesbmits.in/'><Image src={link} alt="social" width={25} className="filter invert opacity-85"/></a>
          <a className='a-social' href='https://ieeesbmits.in/'><Image src={git} alt="social" width={25} className="filter invert opacity-85"/></a>
        </div>

        <p className="mt-6">Copyright &copy; {new Date().getFullYear()} IEEE Student Branch MITS</p>
      </div>
    </footer>
  )
}

export default Footer