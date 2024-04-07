// import AbstractImg from "../assets/abstract.gif"
import { motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCube, faVideo, faBrain, faCode , faLanguage, faFileAudio, faDatabase, faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./Blob.css";
import Contact from "../components/Contact";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import { fadeInAnimationVariants } from "./anim";
import { cardAnimationVaritent } from "./anim";
import Carousel from "../components/Carousel";




export default function Home() {


  const productsData = [
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    },
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    },
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    },{
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    },
    {
      image : 'https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg',
      name : 'Beauty brand , e-commerece'
    }
  ]
  const services = [
    {
      title: 'Graphics Design',
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      description: 'Graphics design involves creating visual content to communicate messages. It includes various elements such as typography, illustration, and photography to convey ideas effectively.'
    },
    {
      title: '3D Modeling/Animation',
      icon: <FontAwesomeIcon icon={faCube} />,
      description: '3D modeling is the process of creating three-dimensional representations of objects. Animation involves bringing these models to life by simulating movement and interaction.'
    },
    {
      title: 'Video Editing',
      icon: <FontAwesomeIcon icon={faVideo} />,
      description: 'Video editing is the manipulation and arrangement of video shots to create a new work. It involves cutting, trimming, adding effects, and other post-production tasks.'
    },
    {
      title: 'AI',
      icon: <FontAwesomeIcon icon={faBrain} />,
      description: 'Artificial Intelligence (AI) involves creating systems that can perform tasks that normally require human intelligence. This includes problem-solving, understanding natural language, and recognizing patterns.'
    },
    {
      title: 'Web Development',
      icon: <FontAwesomeIcon icon={faCode} />,
      description: 'Web development encompasses building and maintaining websites and web applications. It involves various technologies such as HTML, CSS, JavaScript, and frameworks like React or Angular.'
    },  {
      title: "Translations",
      description: "Efficient and accurate translation services to bridge language barriers and reach global audiences.",
      icon: <FontAwesomeIcon icon={faLanguage} /> // Entire Font Awesome icon element
    },
    {
      title: "Transcription",
      description: "Transform audio and video content into text format with precision and speed.",
      icon: <FontAwesomeIcon icon={faFileAudio} /> // Entire Font Awesome icon element
    },
    {
      title: "Data Collection",
      description: "Gather, organize, and curate data from various sources to fuel insights and decision-making.",
      icon: <FontAwesomeIcon icon={faDatabase} /> // Entire Font Awesome icon element
    },
    {
      title: "Data Annotation",
      description: "Enhance machine learning algorithms by labeling and annotating data with accuracy and consistency.",
      icon: <FontAwesomeIcon icon={faPuzzlePiece} /> // Entire Font Awesome icon element
    }
  ];
  return (
    <div className="overflow-hidden  relative">
      {/* HERO SEC */}
      <Hero />

      {/* ABOUT SEC */}
     <About />

    <Serives services={services} />

      {/* PROJECT SEC */}
      <Projects productsData={productsData}  />
    
    {/* CONTACT SEC */}
    <Contact />

  
    </div>
   

  );
}

export const Hero = () => {
  return (
    <motion.div 
    className="h-[100vh] pb-20 pt-6 lg:py-0 mx-auto relative flex flex-col items-center justify-center ">
      <div className="blob z-0"> 
      </div>
      {/* <div className="blur z-10">

      </div> */}
      {/* <img src={AbstractImg} alt="cube" className="absolute hidden lg:block"/> */}
      {/* <img src={AbstractImg} alt="cube" className="w-[400px] h-[200px] lg:hidden mr-2 opactiy-0" /> */}
      <motion.h1 
      initial={{y: 40 , opacity : 0}}
      animate={{y : 0 , opacity : 1}}
      transition={{duration : 1 , delay: 0.3}}
      className="z-10 lg:text-5xl text-2xl min-w-0 font-semibold text-center text-accent lg:mb-28">
        <motion.span className="block lg:inline">Visual.</motion.span>
        <motion.span className="block lg:inline">Branding.</motion.span>
        <motion.span className="block lg:inline">Digital.</motion.span>
      </motion.h1>
      <motion.button 
       initial={{y: 40 , opacity : 0}}
       animate={{y : 0 , opacity : 1}}
       transition={{duration : 1 , delay: 0.35}}
      className=" lg:hidden bg-accent text-white p-4 w-1/2 mt-4 rounded-full z-20">
      <Link to='/contact' className="">
        Get Quote
      </Link>
      </motion.button>
      <Link to='/projects' className="z-20">
      <motion.button 
       initial={{y: 40 , opacity : 0}}
       animate={{y : 0 , opacity : 1}}
       transition={{duration : 1 , delay: 0.4}}
      className="lg:hidden text-lg mt-4 border-b border-accent text-accent">
        See Projects
      </motion.button>
      </Link>
    </motion.div>
  )
}


export const About = () => {

  const arrStr = ["A" , "creative " , "agency" , " with " , "solid " , "expertise" , "in" , "Visuals" ,  "& Branding"]
  return (
    <motion.div
    className=" h-screen continer mx-auto text-center h-3/4 flex flex-col items-center justify-center gap-20 py-20">
      <h1 className="text-3xl text-gray-600">Who we are</h1>
      <p className="mt-4 lg:text-3xl text-2xl font-semibold mx-10 flex justify-center flex-wrap gap-2 text-center">

       {
       arrStr.map((str , index) => (
         <motion.p 
         variants={fadeInAnimationVariants}
         initial="initial"
         whileInView="animate"
         custom={index}
         key={index}
         className=""
         >
          {str + " "} 
         </motion.p>
       ))
       }
      </p>
      <Link to='/about'>
      <button className="border border-accent p-4 rounded-full hover:bg-accent hover:text-white">
        Learn More
      </button>
      </Link>
    </motion.div>
  )
}

export const Projects = ({productsData}) => {
  

  return (
    <div 
    className="lg:screen container mx-auto px-4 py-10 ">
    <h1 className="text-center text-4xl font-semibold mb-10">Top Projects</h1>
    {/* <div className="flex gap-20 justify-center flex-wrap">
   
  </div> */}
    <Carousel arr={productsData} />
  </div>
  )
}

export const Serives = ({services}) => {
 return (
  <div 
  className="container mx-auto px-4 py-10">
    <h1 className="text-center text-4xl font-semibold">What do we Offer</h1>
    <div className="flex gap-20 justify-center flex-wrap mt-10 py-10"> 
      {
        services.map((item ,index) => (
          <ServiceCard cardAnimationVaritent={cardAnimationVaritent} index={index} item={item} key={index} />
        ))
      }
  </div>
  </div>
 )
}