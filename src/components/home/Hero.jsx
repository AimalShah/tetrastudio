import {motion} from "framer-motion"
import "../../utils/Blob.css"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <motion.div className="h-[80vh] pb-20 pt-6 lg:py-0 mx-auto relative flex flex-col items-center justify-center lg:mt-40">
        <div className="blob z-0"></div>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="z-10 lg:text-5xl text-2xl min-w-0 font-semibold text-center text-accent lg:mb-28"
        >
          <motion.span className="block lg:inline">Visual.</motion.span>
          <motion.span className="block lg:inline">Branding.</motion.span>
          <motion.span className="block lg:inline">Digital.</motion.span> <br />
          <motion.span className="block lg:inline lg:text-2xl text-xl">
            Serving Friendly
          </motion.span>
        </motion.h1>
        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className=" lg:hidden bg-accent text-white p-4 w-1/2 mt-4 rounded-full z-20"
        >
          <Link to="/contact" className="">
            Get Quote
          </Link>
        </motion.button>
        <Link to="/projects" className="z-20">
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:hidden text-lg mt-4 border-b border-accent text-accent"
          >
            See Projects
          </motion.button>
        </Link>
      </motion.div>
    );
  };

  export default Hero;