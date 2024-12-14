import dev from '@/app/assets/devv.jpg'
import Image from 'next/image'

const Event = () => {
  return (
    <div className="w-60 h-48 md:w-80 md:h-48 border-none overflow-hidden px-2">
      <Image src={dev} alt="Event Image" className='object-contain'/>
    </div>
  )
}

export default Event
