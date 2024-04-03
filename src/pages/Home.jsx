import Socials from "../components/Socials";
import AbstractImg from "../assets/abstract.gif"
import Spline from '@splinetool/react-spline';
import { motion, stagger } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPalette, faVectorSquare, faPrint } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export  function Cube() {
  return (
    <Spline scene="https://prod.spline.design/eFkinuFRMxlnfh0w/scene.splinecode" />
  );
}


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
      name: 'Logo Design',
      icon: <FontAwesomeIcon icon={faPencilAlt} />,
      description: 'Craft a unique and memorable visual identity for your brand with custom logo designs tailored to your business.'
    },
    {
      name: 'Illustration',
      icon: <FontAwesomeIcon icon={faPalette} />,
      description: 'Create captivating illustrations that communicate ideas, stories, or concepts visually, adding personality to your projects.'
    },
    {
      name: 'Vector Graphics',
      icon: <FontAwesomeIcon icon={faVectorSquare} />,
      description: 'Produce scalable vector graphics (SVG) that can be resized without losing quality, perfect for logos, icons, and more.'
    },
    {
      name: 'Print Design',
      icon: <FontAwesomeIcon icon={faPrint} />,
      description: 'Design visually appealing print materials such as flyers, brochures, posters, and business cards to leave a lasting impression.'
    },
    // Add more services as needed
  ];

  return (
    <div className="overflow-hidden mt-10 relative">
      {/* HERO SEC */}
      <Hero />

      {/* ABOUT SEC */}
     <About />
    <Serives services={services} />

      {/* PROJECT SEC */}
      <Projects productsData={productsData}  />
    
    {/* CONTACT SEC */}
    <Contact />

    {/* // FOOTER SEC */}
    <Footer />
    </div>
   

  );
}

export const Hero = () => {
  return (
    <motion.div 
    initial={{y: 40 , opacity : 0}}
    animate={{y : 0 , opacity : 1}}
    transition={{duration : 1 , delay: 0.5}}
    className="h-Screen pb-20 pt-6 lg:py-48 container mx-auto relative flex flex-col items-center justify-center bg-white">
      <img src={AbstractImg} alt="cube" className="absolute hidden lg:block"/>
      <img src={AbstractImg} alt="cube" className="w-[400px] h-[200px] lg:hidden mr-2" />
      <motion.h1 
      className=" z-10 lg:text-5xl text-2xl min-w-0 font-semibold text-center text-accent lg:mb-28">
        <motion.span className="block lg:inline">Visual.</motion.span>
        <motion.span className="block lg:inline">Branding.</motion.span>
        <motion.span className="block lg:inline">Digital.</motion.span>
      </motion.h1>
      <button className=" lg:hidden bg-accent text-white p-4 w-1/2 mt-4 rounded-full">
      <Link to='/contact' className="">
        Get Quote
      </Link>
      </button>
      <Link to='/projects'>
      <button className=" lg:hidden text-lg mt-4 border-b border-accent">
        See Projects
      </button>
      </Link>
    </motion.div>
  )
}

export const Footer = () => {
  return (
    <div className="container mx-auto my-6">
    <div className="text-center text-lg font-semibold ">
      <span className="p-2 border-b-2 border-gray-600">
      info@tetrastudio.com
      </span>
      <h1 className="text-xs mt-4">privacy policy</h1>
    <div className="mt-4">
      <Socials/>
    </div>
    </div>
  </div>
  )
}

export const About = () => {
  return (
    <motion.div
    initial={{translateY : 40 , scale : 0.8}}
    whileInView={{translateY :0 , scale : 1 , transition : {
      duration : 1,
      delay : 0.01
    }}}
    className="continer mx-auto text-center h-3/4 flex flex-col items-center gap-10 py-20">
      <h1 className="text-3xl text-gray-600">Who are we</h1>
      <p className="mt-4 lg:text-3xl text-2xl font-semibold mx-10">
        A creative agency with solid expertise in <br/> Grapihcs & 3d design.
      </p>
      <Link to='/about'>
      <button className="border border-accent p-4 rounded-full hover:bg-accent hover:text-white">
        Learn More
      </button>
      </Link>
    </motion.div>
  )
}

export const Projects = ({productsData , staggerItems}) => {
  


  return (
    <div 
    className="container mx-auto px-4 py-10">
    <h1 className="text-center text-4xl font-semibold">Top Projects</h1>
    <div className="flex gap-20 justify-center flex-wrap">
    {
      productsData.map((item) => (
        <motion.div 
        initial={{translateX : -100 , opacity : 0}}
        whileInView={{translateX :0 , opacity : 1 ,  transition : {
          duration : 1,
          delay : 0.2
        }}}
        key={item.name} className="size-80 bg-slate-900 mt-6 flex flex-col p-2 rounded-lg">
            <img src={item.image} alt="" className="w-full rounded-lg"/>
            <div>
             <h1 className="text-white font-semibold mt-4">{item.name}</h1>
             <Link to='/projects/1231'>
             <button className="bg-[#3169BE] w-full h-10 rounded-lg mt-2 text-white font-semibold">
              Learn More
             </button>
             </Link>
            </div>
          </motion.div>
      ))
    }
  </div>
  </div>
  )
}

export const Contact = () => {
  return (
    <div>
    <h1 className="text-4xl font-semibold text-center mb-6 mt-10">Contact</h1>
    <div className="flex justify-center p-4">
      <button className="hover:bg-accent hover:text-white border-2 border-accent px-8 py-4 rounded-full lg:size-80 w-3/4">
      <Link to='/contact'>
        <span className="hidden lg:block text-sm"> click to</span>
        Get In Touch
      </Link>
      </button>
    </div>
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
      services.map((item) => (
        <motion.div
        initial={{translateX : -100  , opacity : 0}}
        whileInView={{translateX :0 , opacity : 1 , transition : {
          duration : 1,
          delay : 0.2,
        }}}
        key={item.name}
        className="size-80 flex flex-col items-center justify-between bg-slate-900 text-white p-2 rounded-lg"
        >
          <span className="bg-[#3169BE] w-fit p-4 rounded-lg">{item.icon}</span>
          <h2 className="my-2 text-xl font-bold">{item.name}</h2>
          <p className="text-sm text-center">{item.description}</p>
          <Link to='/services' className="w-full">
          <button className="bg-[#3169BE] w-full h-10 rounded-lg mt-2 text-white font-semibold">
              Learn More
          </button>
          </Link>
        </motion.div>
      ))
    }
  </div>
  </div>
 )
}