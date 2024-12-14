import Image from "next/image"
import avatar from '@/app/assets/bat.jpg'
import mail from '@/app/assets/mail.svg'

const ProfileCard = ({name, title}) => {
  return (
    <div className="flex flex-col justify-center items-center  hover:scale-105 trans5 group">
        <div className="h-[210px] w-[210px] md:h-52 md:w-52 rounded-full overflow-hidden relative ">
          <Image src={avatar} alt="avatar" className="object-cover rounded-full"/>
          <div className="absolute rounded-full inset-0 scale-0 bg-black/60 transform trans5 group-hover:scale-100 z-10 flex items-center justify-center">
            <a href='mailto:karthiku@ieee.org'><Image src={mail} alt="social" width={30} className="filter invert transform active:scale-75 trans"/></a>
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h1>
        <h2 className="text-sm md:text-md font-medium text-gray-600">{title}</h2>
    </div>
  )
}

export default ProfileCard