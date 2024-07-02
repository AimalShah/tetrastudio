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
   <div className="space-y-16 mt-20">
      <h1 className="text-center text-4xl font-semibold">What do we Offer</h1>
        <div className="flex flex-wrap justify-center gap-4">
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
  