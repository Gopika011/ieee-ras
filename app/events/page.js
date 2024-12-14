import EventCard from "../components/event/EventCard"
import eventsData from '@/app/components/event/eventsData.json'

const Events = () => {
  return (
    <div className="p-6 mb-28" >
      <h1 className='text-center text-3xl md:text-5xl text-gray-800 font-semibold pb-16 font-custom'>RECENT EVENTS</h1>
      <div className="ccontainer">
        <div className="cardContainer ">
          {eventsData.map((member,index) =>(
            <EventCard key={index} title={member.title} date={member.date}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events



