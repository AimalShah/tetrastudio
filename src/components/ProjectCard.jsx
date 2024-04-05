import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ cardAnimationVaritent, index, item }) {
  return (
    <motion.div
      variants={cardAnimationVaritent}
      initial="initial"
      whileInView="animate"
      custom={index}
      className="h-full w-full bg-[#F5F5F7] flex flex-col p-2 rounded-lg border"
    >
      <img src={item.image} alt="" className="w-full rounded-lg" />
      <div>
        <h1 className="font-semibold mt-4 w-full text-accent">{item.name}</h1>
        <Link to="/projects/1231">
          <button className="hover:bg-accent px-4 h-10 rounded-full mt-2 hover:text-white font-semibold border border-accent/20">
            Learn More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
