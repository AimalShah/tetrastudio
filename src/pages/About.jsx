import {motion , useScroll , useTransform} from "framer-motion";
import Contact from "../components/Contact";
import HasanDP from "../assets/hasan.jpeg"
import RazaDP from "../assets/raza.jpeg"
import AimalDP from "../assets/aimal.jpeg"
import PlaceholderImg from "../assets/placeholder.jpg"


const TeamCard = ({member}) => {
  return (
    <motion.div 
    className="h-96 w-80 relative  flex flex-col gap-4 justify-between items-center rounded-lg overflow-hidden pb-4">
      <motion.div 
      className="h-full w-full rounded-lg">
        <img src={member.image} alt=""  className="block w-full h-72 object-cover rounded-3xl saturate-0 hover:saturate-100"/>
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

export default function About() {
  
  const members = [
    {
      name : "Syed Hasan Ahmad",
      profession : "Senior 3d Artist / Project Head",
      image : HasanDP
    },
    {
      name : "Raza Husain",
      profession : "3d Artist",
      image : RazaDP
    },
    {
      name : "Aimal Shah",
      profession : "Software Developer",
      image : AimalDP
    },
    {
      name : "Khan Zaadi",
      profession : "3d Animator",
      image : PlaceholderImg
    },
    {
      name : "Salahuddin",
      profession : "Graphic Designer",
      image : "https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name : "Talha Athar",
      profession : "Video Editor",
      image : "https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name : "Muhammad Tawab",
      profession : "3d Artist",
      image : "https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

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
          
          className=" lg:text-5xl text-xl px-20 text-center font-medium lg:leading-[70px]">
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
        className="w-1/2 lg:text-3xl  font-medium text-xl lg:leading-[40px] px-2 lg:px-0 text-center">
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
            <TeamCard member={member} key={index} />
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
