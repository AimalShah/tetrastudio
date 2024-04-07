import {motion , useMotionValue , animate} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ProjectCard from "./ProjectCard"
import useMeasure from "react-use-measure"


export default function Carousel({arr}) {

    let [ref , {width}] = useMeasure()
    const carousel = useRef()
    const xValue = useMotionValue(0)

    
    useEffect(() => {
        let finalPos = -width / 2 - 8
        animate(xValue , [0 , finalPos] , {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType : "loop",
            repeatDelay: 0,
        }).stop;
    } , [xValue , width])
  return (
    <motion.div ref={ref} className="mx-[1%]  overflow-hidden p-4 border-accent border rounded-md mt-10">
        <motion.div 
        drag="x"
        dragConstraints={{right : 0 , left : -width}}
        style={{x : xValue}}
        className="flex">
            {
               [...arr , ...arr].map((item , index) => (
                    <motion.div 
                    className="min-w-80 px-4 cursor-grabbing" key={index}>
                        <ProjectCard index={index} item={item} key={index}/>
                    </motion.div>
                ))
            }
        </motion.div>
      
    </motion.div>
  )
}
