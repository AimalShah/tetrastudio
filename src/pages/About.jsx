import {motion} from "framer-motion";
import Contact from "../components/Contact";
import { members } from "../Data/teamData";
import TeamCard from "../components/TeamCard";



export default function About() {
  
  

  return (
    <div className="my-10 ">
       <motion.div 
        initial={{y: 40 , opacity : 0}}
        animate={{y : 0 , opacity : 1}}
        transition={{duration : 1 , delay: 0.4}}
      className="mb-40 text-center flex flex-col justify-center items-center mt-10 gap-10">
         <motion.div 
      className="w-full text-center text-xl font-semibold text-accent/50 mt-10 py-10">
        <h1 className="text-center w-full">About us</h1>
      </motion.div>
        <div className="w-full flex justify-center">
          <p 
          
          className=" lg:text-4xl text-xl px-20 text-center font-medium lg:leading-[50px] lg:w-1/2">
          We help you get more exposure digitally by serving you the best way possible 
          </p>
        </div>
      </motion.div>
      
      <div className="min-h-[50vh] container mx-auto flex flex-col items-center mb-6">
        <motion.h1 
         initial={{y : 100}}
         whileInView={{y : 0 , transition : {duration : 1 , delay : 0.2}}}
         viewport={{once : true}}
        className="w-full font-semibold text-accent/50 lg:text-2xl mb-10 text-xl px-2 text-center" >Unleash Creativity with Tetra Studio</motion.h1>
        <motion.p 
       initial={{y : 100}}
       whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.3}}}
       viewport={{once : true}}
        className="lg:w-1/2 w-3/4 lg:text-3xl  font-medium text-xl lg:leading-[40px] px-2 lg:px-0 text-center">
        Designing and building digital products is what we love to do, and we are awesome at it. We bet on success in every project we acce
        </motion.p>
      </div>

    
      <div className=" container mx-auto  flex gap-8 flex-col">
        <div>
          <h1 className="text-center text-2xl font-semibold">Team Members</h1>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">

        {
          members.map((member , index) => (
            <div key={index} 
            className={`${index === 4  ? "" : ""}`}
            >
            <TeamCard member={member} />
            </div>
          ))
        }
        </div>
      </div>

      <div className="my-40">
      <Contact />
      </div>
    </div>
  )
}
