import Socials from "../components/Socials";
import AbstractImg from "../assets/abstract.gif"
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

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
    }
  ]
  return (
    <div className="overflow-hidden mt-10 relative">
      {/* HERO SEC */}
      <motion.div 
      initial={{y: 40 , opacity : 0}}
      animate={{y : 0 , opacity : 1}}
      transition={{duration : 0.8}}
      className="h-3/4 py-20 lg:py-48 container mx-auto relative flex flex-col items-center justify-center h-full bg-white">

        <div className="absolute top-40 w-screen h-screen">
        
        </div>

        {/* MObile */}
        <img src={AbstractImg} alt="cube" className="size-100 lg:hidden" />
        <motion.h1 
        className=" z-10 lg:text-5xl text-2xl min-w-0 font-semibold text-center text-accent lg:mb-28 mb-4">
          <motion.span className="block lg:inline">Visual.</motion.span>
          <motion.span className="block lg:inline">Branding.</motion.span>
          <motion.span className="block lg:inline">Digital.</motion.span>
        </motion.h1>
        <button className=" lg:hidden bg-accent text-white p-4 w-1/2 mt-4 rounded-full">
          Get Quote
        </button>
        <button className=" lg:hidden text-lg mt-4 border-b border-accent">
          See Projects
        </button>
      </motion.div>

      {/* ABOUT SEC */}
      <div className="continer mx-auto text-center h-screen flex flex-col items-center gap-20 py-20">
        <h1 className="text-3xl text-gray-600">Who are we</h1>
        <p className="mt-4 text-3xl  font-semibold mx-10">
          A creative agency with solid expertise in <br/> Grapihcs & 3d design.
        </p>
        <button className="border border-accent p-4 rounded-full hover:bg-accent hover:text-white">
          Learn More
        </button>
      </div>

      {/* PROJECT SEC */}
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-semibold">Top Projects</h1>
      <div className="flex gap-20 justify-center flex-wrap">
      {
        productsData.map((item) => (
          <div key={item.name} className="size-80 bg-slate-900 mt-6 flex flex-col p-2 rounded-lg">
              <img src={item.image} alt="" className="w-full rounded-lg"/>
              <div>
               <h1 className="text-white font-semibold mt-4">{item.name}</h1>
               <button className="bg-[#3169BE] w-full h-10 rounded-lg mt-2 text-white font-semibold">
                Learn More
               </button>
              </div>
            </div>
        ))
      }
    </div>
    </div>
    
    {/* CONTACT SEC */}
    <div>
      <h1 className="text-4xl font-semibold text-center mb-6">Contact</h1>
      <div className="flex justify-center p-4">
        <button className="hover:bg-accent hover:text-white border-2 border-accent px-8 py-4 rounded-full lg:size-80 w-3/4">
          <span className="hidden lg:block text-sm"> click to</span>
          Get In Touch
        </button>
      </div>
    </div>
    {/* // FOOTER SEC */}
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
    </div>

   

  );
}
