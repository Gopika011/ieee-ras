import './styles.css'
import Image from "next/image"
import devv from '@/app/assets/devv.jpg'

const EventCard = () => {
  return (
    <article className="cardArticle">
        <Image src={devv}  alt='image' className="cardImage"/>
        <div className="cardData">
            <span className="cardDesc">31-August-2024</span>
            <h2 className="cardTitle">Dev Summit '24</h2>
            <a href='#' className="cardBtn">Read More</a>
        </div>
    </article>
  )
}

export default EventCard