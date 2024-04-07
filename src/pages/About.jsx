import {motion} from "framer-motion";
import Contact from "../components/Contact";
import { paragraphAnimation } from "./anim";

export default function About() {
  return (
    <div className="my-10 ">
       <motion.div 
        initial={{y: 40 , opacity : 0}}
        animate={{y : 0 , opacity : 1}}
        transition={{duration : 1 , delay: 0.4}}
      className="min-h-screen text-center flex flex-col justify-center items-center mt-10 gap-10">
         <motion.div 
      className="w-full text-center text-xl font-semibold text-accent/50 mt-10 py-10">
        <h1 className="text-center w-full">About us</h1>
      </motion.div>
        <div className="w-full flex justify-center">
          <p className=" lg:text-5xl text-xl px-20 text-center font-medium">
          We launch digital products in the best way possible 
          </p>
        </div>
      </motion.div>
      
      <div className="min-h-screen container mx-auto">
        <motion.div 
        initial={{y : 100}}
        whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.1}}}
        viewport={{once : true}}
        className="px-4">
        <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desing" 
        className="lg:h-[550px] lg:w-full object-cover mb-40 rounded-lg shadow-lg shadow-indigo-500/50"
        />
        </motion.div>
        <motion.h1 
         initial={{y : 100}}
         whileInView={{y : 0 , transition : {duration : 1 , delay : 0.2}}}
         viewport={{once : true}}
        className="w-full font-semibold text-accent/50 lg:text-2xl mb-10 text-xl px-2" >Unleash Creativity with Tetra Studio</motion.h1>
        <motion.p 
       initial={{y : 100}}
       whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.3}}}
       viewport={{once : true}}
        className="w-full lg:text-5xl font-medium text-xl lg:leading-[70px] px-2 lg:px-0">
        Embark on a voyage of boundless creativity with Tetra Studio, where imagination knows no limits. Founded in 2021, we stand as pioneers in the digital realm, offering a kaleidoscope of innovative services to bring your visions to life.
        </motion.p>
      </div>
      <div className="container mx-auto mt-40">
        <div className="flex flex-col lg:flex-row w-full justify-center gap-40 px-4">
       <motion.div 
       variants={paragraphAnimation}
       initial={{y : 100}}
       whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.1}}}
       viewport={{once : true}}
       className="flex items-center ">
       <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desing" 
        className="lg:h-[550px] lg:w-[550px] w-full object-cover rounded-lg shadow-lg shadow-indigo-500/50"/>
       </motion.div>
       <motion.div
     initial={{y : 100}}
     whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.2}}}
     viewport={{once : true}}
       >
       <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desing" 
        className="lg:h-[550px] lg:w-[550px] w-full object-cover mb-40 rounded-lg shadow-lg shadow-indigo-500/50"/>
       </motion.div>
      </div>
      <motion.h1 
     initial={{y : 100}}
     whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.3}}}
     viewport={{once : true}}
      className="w-full font-semibold text-accent/50 lg:text-2xl text-xl px-2 mb-10">Crafting Digital Masterpieces</motion.h1>
        <motion.p 
       initial={{y : 100}}
       whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.35}}}
       viewport={{once : true}}
        className="w-full lg:text-5xl font-medium text-xl lg:leading-[70px] px-2 lg:px-0">
        Step into a world where pixels dance and ideas take shape. Our team of seasoned experts specializes in crafting digital masterpieces that captivate, inspire, and leave a lasting impression. From mesmerizing CGI works to breathtaking graphic design, we infuse every project with unparalleled creativity and finesse.
        </motion.p>
      </div>

      <div className="container mx-auto mt-40">
      <motion.img 
      initial={{y : 100}}
      whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.1}}}
      viewport={{once : true}}
      src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desing" 
        className="h-[550px] w-full object-cover mb-40 rounded-lg shadow-lg shadow-indigo-500/50"/>
      <motion.h1 
     initial={{y : 100}}
     whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.2}}}
     viewport={{once : true}}
      className="w-full font-semibold text-accent/50 lg:text-2xl text-xl px-2 mb-10">Your Trusted Partner in Digital Transformation</motion.h1>
        <motion.p 
       initial={{y : 100}}
       whileInView={{y : 0 , transition : {duration : 1   ,  delay : 0.3}}}
       viewport={{once : true}}
        className="w-full lg:text-5xl font-medium text-xl lg:leading-[70px] px-2 lg:px-0" >
        In a world of constant change, trust is paramount. At Tetra Studio, we are more than just service providers – we are your partners in digital transformation. With a relentless commitment to excellence and a passion for innovation, we stand by your side, turning your dreams into reality, one pixel at a time.
        </motion.p>
      </div>
      <div className="my-40">
      <Contact />
      </div>
    </div>
  )
}
