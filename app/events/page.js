import EventCard from "../components/event/EventCard"
 
const Events = () => {
  return (
    <div className="p-6 mb-28" >
      <h1 className='text-center text-3xl md:text-5xl text-gray-800 font-semibold pb-16 font-custom'>RECENT EVENTS</h1>
      <div className="ccontainer">
        <div className="cardContainer ">
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
      </div>
    </div>
  )
}

export default Events



