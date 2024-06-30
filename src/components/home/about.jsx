 import {motion} from "framer-motion"
import { fadeInAnimationVariants } from "../../utils/anim";
import { Link } from "react-router-dom";

 const About = () => {
    const arrStr = [
      "A",
      "creative ",
      "agency",
      " with ",
      "solid ",
      "expertise",
      "in",
      "Visuals",
      "& Branding",
    ];
    return (
      <motion.div className="continer mx-auto text-center h-3/4 flex flex-col items-center justify-start gap-20 py-20">
        <h1 className="text-3xl text-gray-600">Who we are</h1>
        <p className="mt-4 lg:text-3xl text-2xl font-semibold mx-10 flex justify-center flex-wrap gap-2 text-center">
          {arrStr.map((str, index) => (
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={index}
              viewport={{ once: true }}
              className=""
            >
              {str + " "}
            </motion.p>
          ))}
        </p>
        <Link to="/about">
          <button className="border border-accent p-4 rounded-full hover:bg-accent hover:text-white">
            Learn More
          </button>
        </Link>
      </motion.div>
    );
  };
 
  export default About;