import {motion , useMotionValue , animate,  useTransform} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ProjectCard from "./ProjectCard"


export default function Carousel({arr}) {

    const [width , setWidth] = useState()
    const carousel = useRef()
    const xValue = useMotionValue(0)

    
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        animate(xValue , [0 , -width*5] , {
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType : "loop",
            repeatDelay: 0,
        }).stop;
    } , [xValue , width])
  return (
    <motion.div ref={carousel} className="mx-[1%]  overflow-hidden p-4 border-accent border rounded-md mt-10">
        <motion.div 
        drag="x"
        dragConstraints={{right : 0 , left : -width}}
        style={{x : xValue}}
        className="flex">
            {
               arr.map((item , index) => (
                    <motion.div 
                    className="min-w-80 px-4" key={index}>
                        <ProjectCard index={index} item={item} key={index}/>
                    </motion.div>
                ))
            }
        </motion.div>
      
    </motion.div>
  )
}
