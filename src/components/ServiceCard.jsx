import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function ServiceCard({cardAnimationVaritent , index , item}) {
  return (
    <motion.div
    variants={cardAnimationVaritent}
    initial="initial"
    whileInView="animate"
    custom={index}
    className="size-80 flex flex-col items-center justify-between bg-[#F5F5F7] text-white p-2 rounded-lg border border-accent/20"
    >
      <span className=" w-fit p-4 rounded-lg bg-accent">{item.icon}</span>
      <h2 className="my-2 text-xl font-bold text-accent text-center">{item.title}</h2>
      <p className="text-sm text-center text-accent text-center">{item.description}</p>
      <Link to='/services' className="w-full">
      <button className="bg-accent w-full h-10 rounded-full mt-2 text-white font-semibold">
          Learn More
      </button>
      </Link>
    </motion.div>
  )
}
