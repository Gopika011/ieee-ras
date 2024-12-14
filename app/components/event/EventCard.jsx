import './styles.css'
import Image from "next/image"
import devv from '@/app/assets/devv.jpg'

const EventCard = ({title,date}) => {
  return (
    <article className="cardArticle relative rounded-3xl overflow-hidden group">
        <Image src={devv}  alt='image' className="cardImage"/>

        <div className="rounded-3xl absolute flex flex-col gap-5 justify-center items-center bg-[#1f1f1f] text-white p-2 top-[-10rem] right-[-10rem] group-hover:top-0 group-hover:right-0 w-full h-full  transform group-hover:scale-100 scale-0  trans">
            <span className="cardDesc">{date}</span>
            <h2 className="font-semibold text-2xl md:text-3xl">{title}</h2>
            <a href='#' className="text-[#9b0935] font-medium hover:underline hover:underline-offset-4">Read More</a>

            <div className='bg-white absolute top-0 right-0 w-14 h-14 md:w-16 md:h-16 rounded-bl-2xl'>
              <div className='bg-white absolute -left-5 w-5 h-5 '>
                <div className='bg-[#1f1f1f] w-5 h-5 rounded-tr-2xl'></div>
              </div>
              <div className='bg-white absolute -bottom-5 right-0 w-5 h-5 '>
                <div className='bg-[#1f1f1f] w-5 h-5 rounded-tr-2xl'></div>
              </div>

              <div className='absolute inset-0 flex justify-center items-center'>
                <svg viewBox="0 0 39 46" className="-rotate-[135deg] origin-center size-10"  xmlns="http://www.w3.org/2000/svg"><path id="styles_cards-arrow__ahw_5" d="M37.7302 20.0385C37.6386 20.1301 37.5299 20.2029 37.4102 20.2525C37.2905 20.3021 37.1621 20.3277 37.0326 20.3277C36.903 20.3277 36.7747 20.3021 36.655 20.2525C36.5353 20.2029 36.4265 20.1301 36.3349 20.0385L20.27 3.97354L20.27 44.9777C20.27 45.2392 20.1661 45.49 19.9812 45.6749C19.7963 45.8598 19.5455 45.9637 19.284 45.9637C19.0225 45.9637 18.7717 45.8598 18.5868 45.6749C18.4018 45.49 18.298 45.2392 18.298 44.9777L18.298 3.97354L2.23303 20.0385C2.14141 20.1301 2.03265 20.2028 1.91296 20.2523C1.79326 20.3019 1.66497 20.3274 1.53541 20.3274C1.40585 20.3274 1.27756 20.3019 1.15786 20.2523C1.03816 20.2028 0.929403 20.1301 0.83779 20.0385C0.746178 19.9469 0.673507 19.8381 0.623927 19.7184C0.574346 19.5987 0.548828 19.4704 0.548828 19.3409C0.548828 19.2113 0.574346 19.083 0.623927 18.9633C0.673507 18.8436 0.746178 18.7348 0.83779 18.6432L18.5864 0.894658C18.6779 0.802981 18.7867 0.730253 18.9064 0.680631C19.0261 0.63101 19.1544 0.605469 19.284 0.605469C19.4136 0.605469 19.5419 0.63101 19.6616 0.680631C19.7813 0.730253 19.89 0.802981 19.9816 0.894658L37.7302 18.6432C37.8219 18.7348 37.8946 18.8436 37.9442 18.9633C37.9938 19.083 38.0194 19.2113 38.0194 19.3409C38.0194 19.4704 37.9938 19.5987 37.9442 19.7184C37.8946 19.8381 37.8219 19.9469 37.7302 20.0385Z" fill="#1f1f1f"></path></svg>
              </div>
              
            </div>

            
            
        </div>
    </article>
  )
}

export default EventCard