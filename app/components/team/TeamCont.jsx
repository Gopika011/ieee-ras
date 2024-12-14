import ProfileCard from "./ProfileCard"

const TeamCont = () => {
  return (
    <div className="md:mx-24 flex flex-col gap-16 justify-center items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
          <div className="lead">
          <ProfileCard/>
          </div>
          <div className="non-lead flex flex-wrap gap-10 justify-center">
          <ProfileCard/>
          <ProfileCard/>
          <ProfileCard/>
          <ProfileCard/>
          </div>
      </div>
    </div>
  )
}

export default TeamCont