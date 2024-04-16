import {motion} from "framer-motion"

const TeamCard = ({member}) => {
    return (
      <motion.div 
      className="h-96 w-80 relative  flex flex-col gap-4 justify-between items-center rounded-lg overflow-hidden pb-4">
        <motion.div 
        className="h-full w-full rounded-lg">
          <img src={member.image} alt=""  className="block w-full h-72 object-cover rounded-3xl saturate-0 hover:saturate-100 shadow-lg"/>
        </motion.div> 
        <div>
          <h1 className="font-semibold text-2xl">{member.name}</h1>
        </div>
        <div className="text-accent/60 text-lg">
          {member.profession}
        </div>
      </motion.div>
    )
  }

export default TeamCard;  