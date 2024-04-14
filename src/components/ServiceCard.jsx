import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function ServiceCard({cardAnimationVaritent , index , item , hidden}) {
  const display = hidden === "true" ? "none" : "block"
  return (
    <motion.div
    variants={cardAnimationVaritent}
    initial="initial"
    whileInView="animate"
    custom={index}
    viewport={{ once: true }}
    className="size-80 flex flex-col items-center justify-between bg-white p-2 rounded-lg shadow-md "
    >
      <span className=" w-fit p-4 rounded-lg border border-accent text-accent">{item.icon}</span>
      <h2 className="my-2 text-xl font-bold text-accent text-center">{item.title}</h2>
      <p className="text-sm text-center text-accent ">{item.description}</p>
      <Link to='/services' className="w-full">
      <button 
      style={{
        display : display
      }}
      className="border border-accent hover:text-white hover:bg-accent w-full h-10 rounded-full mt-2 text-accent  font-semibold">
          Learn More
      </button>
      </Link>
    </motion.div>
  )
}
