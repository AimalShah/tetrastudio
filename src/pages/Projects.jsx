import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { productsData } from "../Data/Projects";
import {motion , AnimatePresence} from "framer-motion"
     
export default function Projects() {
  const [activeCategorie , setActiveCategorie] = useState("All")
  const [data, setData] = useState(productsData)
  
  const selectActive  = (e) => {
    setActiveCategorie(e.target.id)
  }

  useEffect( () => {
    const filtered = productsData.filter((item) => item.categorie === activeCategorie)
    console.log(filtered)
    setData(filtered)
  }, [activeCategorie])
 

  const categories = ["All" , "Graphic Design" , "3d animations" , "Video Editing" , "Ai" , "Web Dev"]
  return (
    <div className=" mt-[18vh]">
      <div className="flex justify-center flex-col items-center gap-8">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {
          categories.map((categorie , index) => (
            <button 
            className="text-sm min-w-20 p-2 mx-2 border border-accent rounded-full" 
            key={index}
            id= {categorie}
            onClick={selectActive}
            style={{
              backgroundColor : activeCategorie === categorie ? "black" : "white",
              color : activeCategorie === categorie ? "white" : ""
            }}
            >
                {categorie}
            </button> 
          ))
        }
        </div>
      </div>
      <motion.div 
      layout
      className="container mx-auto py-20 flex flex-wrap items-center justify-center gap-8"
      >
        <AnimatePresence>

          {
            data[0].projects.map((item , index) => (
              <motion.div 
              initial={{opacity : 0 , y : 50}}
              animate={{opacity : 1 , y : 0}}
              exit={{opacity : 0}}
              layout 
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 }
              }}
              key={index} className="h-62 w-60 flex">
            <ProjectCard index={index} item={item} />
            </motion.div>
           ))
          }
        </AnimatePresence>
      </motion.div>
    </div>  
  )
}
