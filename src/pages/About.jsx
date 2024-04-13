import {motion , useScroll , useTransform} from "framer-motion";
import Contact from "../components/Contact";
import { useRef } from "react";

export default function About() {
  const targetRef = useRef(null)
  const targetRef1 = useRef(null)
  const {scrollYProgress} = useScroll({
    target : {targetRef , targetRef1}
  })

  const y = useTransform(scrollYProgress , [0,1.2] , ["1%" , "50%"])
  const yMinus = useTransform(scrollYProgress , [0,1.2],  ["1%" , "-50%"])
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
        {/* <motion.div 
        initial={{y : 100}}
        whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.1}}}
        viewport={{once : true}}
        className="px-4">
        <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="desing" 
        className="lg:h-[550px] lg:w-full object-cover mb-40 rounded-lg shadow-lg shadow-indigo-500/50"
        />
        </motion.div> */}
        <motion.h1 
         initial={{y : 100}}
         whileInView={{y : 0 , transition : {duration : 1 , delay : 0.2}}}
         viewport={{once : true}}
        className="w-full font-semibold text-accent/50 lg:text-2xl mb-10 text-xl px-2" >Unleash Creativity with Tetra Studio</motion.h1>
        <motion.p 
       initial={{y : 100}}
       whileInView={{y : 0 , transition : {duration : 1 ,  delay : 0.3}}}
       viewport={{once : true}}
        className="w-full lg:text-4xl font-medium text-xl lg:leading-[70px] px-2 lg:px-0">
        Embark on a voyage of boundless creativity with Tetra Studio, where imagination knows no limits. Founded in 2021, we stand as pioneers in the digital realm, offering a kaleidoscope of innovative services to bring your visions to life.
        </motion.p>
      </div>

      <div ref={targetRef} className="relative h-[800vh] lg:flex hidden gap-20 justify-center py-14 ">

        < motion.div className="sticky flex flex-col items-center h-screen w-64 top-36 gap-40 ">
          <div className="bg-white text-black text-xl p-4 mt-2  font-bold">
            Software Developer
          </div>
          <motion.div 
          style={{y}}
          className="w-72 h-60 bg-slate-950 rounded-2xl shadow-lg shadow-indigo-500/50 absolute scale-x-50">
            <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="w-full h-full object-cover rounded-2xl"/>
          </motion.div>
          <div className=" text-xl mt-10 font-bold">
            Aimal Shah
          </div>

        </motion.div>

        < motion.div className="sticky flex flex-col items-center h-screen w-64 top-36 gap-36 ">
          <div className="bg-white text-black text-xl p-4 mt-2 font-bold">
            Senior 3d Artist
          </div>
          <motion.div 
          style={{y : yMinus}}
          className="w-72 h-60 bg-slate-950 rounded-2xl shadow-lg shadow-indigo-500/50 absolute top-20">
            <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="w-full h-full object-cover rounded-2xl"/>
          </motion.div>
          <div className=" text-xl mt-10 font-bold">
            Syed Hassan Ahmad
          </div>

        </motion.div>
       
        < motion.div className="sticky flex flex-col items-center h-screen w-64 top-36 gap-40 ">
          <div className="bg-white text-black text-xl p-4 mt-2  font-bold">
            3d Artist
          </div>
          <motion.div 
          style={{y}}
          className="w-72 h-60  bg-slate-950 rounded-full shadow-lg shadow-indigo-500/50 absolute">
             <img src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="w-full h-full object-cover rounded-2xl"/>
          </motion.div>
          <div className=" text-xl mt-10 font-bold">
            Raza Husain
          </div>

        </motion.div>

      </div>


      <div className="my-40">
      <Contact />
      </div>
    </div>
  )
}
