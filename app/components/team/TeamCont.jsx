import ProfileCard from "./ProfileCard"
import teamData from './teamData.json'

const TeamCont = () => {
  return (
    <div className="md:mx-24 flex flex-col gap-16 justify-center items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
          <div className="lead">
          <ProfileCard name={teamData[0].name} title={teamData[0].title}/>
          </div>
          <div className="non-lead flex flex-wrap gap-10 justify-center">
          {teamData.slice(1).map((member, index) => (
            <ProfileCard key={index} name={member.name} title={member.title}/>
          ))}
          </div>
      </div>
    </div>
  )
}

export default TeamCont