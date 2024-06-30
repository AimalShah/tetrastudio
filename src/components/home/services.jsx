import {motion , useTransform , useScroll} from "framer-motion"
import ServiceCard from "../ServiceCard";
import { useRef } from "react";

const Serives = ({ services }) => {

    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress , [0 , 1]  , ["1%", "-95%"])
    return (
      <div ref={targetRef} className="container relative lg:h-[300vh] mx-auto px-4 py-10 space-y-8">
        <h1 className="text-center text-4xl font-semibold">What do we Offer</h1>
        <div 
        className="hidden sticky top-20 h-[60vh] lg:flex items-center overflow-x-hidden">
        <motion.div 
        style={{x}}
        className="flex gap-4">
          {services.map((item, index) => (
            <ServiceCard
            index={index}
            item={item}
            key={index}
            />
          ))}
        </motion.div>
        </div>
        <div className="lg:hidden flex flex-wrap justify-center gap-4">
          {
             services.map((item, index) => (
              <ServiceCard
              index={index}
              item={item}
              key={index}
              />
            ))
          }
        </div>
      </div>
    );
  };

 export default Serives; 
  