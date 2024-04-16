import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ cardAnimationVaritent, index, item }) {
  const arr = [1,2,3,4,5]
  return (
    <motion.div
      variants={cardAnimationVaritent}
      initial="initial"
      whileInView="animate"
      custom={index}
      className="h-full w-full bg-white flex flex-col p-2 rounded-lg shadow-md"
    >
      <img src={item.image} alt="" className="w-full rounded-lg pointer-events-none object-cover" />
      <div>
        <h1 className="font-semibold mt-4 w-full text-accent text-sm">{item.name}</h1>
        <Link to="/projects/1231">
          <button className="hover:bg-accent px-4 py-2 rounded-full mt-2 hover:text-white font-semibold border border-accent/20 text-xs">
            Learn More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
