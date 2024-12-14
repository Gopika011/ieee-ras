import dev from '@/app/assets/devv.jpg'
import Image from 'next/image'

const Event = () => {
  return (
    <div className="w-80 h-48 bg-[#242424] overflow-hidden border-none">
      <Image src={dev} alt="Event Image" className='object-contain'/>
    </div>
  )
}

export default Event
