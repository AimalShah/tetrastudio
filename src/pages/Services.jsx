import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";



export default function Services() {




  return (
    <div className="">
      <motion.div 
        initial={{y: 40 , opacity : 0}}
        animate={{y : 0 , opacity : 1}}
        transition={{duration : 1 , delay: 0.4}}
      className="min-h-screen container mx-auto text-center flex flex-col justify-center items-center mt-10 gap-10">
         <motion.div 
      className="w-full text-center text-xl font-semibold text-accent/50 mt-10 py-10">
        <h1>Services</h1>
      </motion.div>
        <div className="w-full flex justify-center">
          <p className=" lg:text-4xl text-xl font-semibold w-1/2">
            Branding, visual concept & digital designs, we've got everything
            covered.
          </p>
        </div>
      </motion.div>

      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>

        <motion.div 
        initial={{translateX : -120 , filter : 'blur(10px)'}}
        whileInView={{translateX : 0 , filter : 'blur(0px)', transition :{
            duration : 0.6 ,
            delay : 0.02
        }}}
        className='flex flex-col-reverse lg:flex-row lg:gap-40  gap-20 w-3/4 justify-center py-10  p-2 my-8'>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='lg:text-3xl text-2xl font-semibold p-3 bg-[#F5F5F7] rounded-full border'>Graphics Design</h1>
                <p className='mt-8 w-full'>Graphics design involves creating visual content to communicate messages. It includes various elements such as typography, illustration, and photography to convey ideas effectively.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full '
                >
                  <Link className="block" to="/services/1">
                  View more
                  </Link>
                </button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src="https://i.pinimg.com/736x/7f/32/0a/7f320aad80ace1060a8f59165449c438.jpg" alt=""  className='w-full rounded-lg aspect-video'/>
            </div>
        </motion.div>

        <motion.div 
         initial={{translateX : 120 , filter : 'blur(10px)' }}
         whileInView={{translateX : 0 , filter : 'blur(0px)', transition :{
             duration : 0.5 ,
             delay : 0.02
         }}}
        className='flex flex-col lg:flex-row lg:gap-40 gap-20 w-3/4 justify-center  m my-8 py-10'>
            <div className='w-full flex items-center justify-center'>
                <img src="https://3dstudio.co/wp-content/uploads/2022/01/what-is-3d-modeling.jpg" alt=""  className='w-full rounded-lg aspect-video'/>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='lg:text-3xl text-2xl font-semibold bg-[#F5F5F7] rounded-full border p-3'>3D Modeling/Animation</h1>
                <p className='mt-8 w-full'>3D modeling is the process of creating three-dimensional representations of objects. Animation involves bringing these models to life by simulating movement and interaction.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full aspect-video'
                ><Link className="block" to="/services/2">
                View more
                </Link></button>
            </div>
        </motion.div>


        <motion.div 
         initial={{translateX : -120 , filter : 'blur(10px)'}}
         whileInView={{translateX : 0 ,filter : 'blur(0px)', transition :{
             duration : 0.5 ,
             delay : 0.02
         }}}
        className='flex flex-col-reverse lg:flex-row lg:gap-40  gap-20 w-3/4 justify-center py-10  p-2 my-8'>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='lg:text-3xl font-semibold bg-[#F5F5F7] rounded-full border p-3 text-2xl'>Video Editing</h1>
                <p className='mt-8 w-full'>Video editing is the manipulation and arrangement of video shots to create a new work. It involves cutting, trimming, adding effects, and other post-production tasks.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full aspect-video'
                ><Link className="block" to="/services/3">
                View more
                </Link></button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src="https://media.wired.com/photos/623be23576c011e23c84e9e3/1:1/w_1800,h_1800,c_limit/Windows-11-Video-Editor-Clipchamp-Gear.jpg" alt=""  className='w-full rounded-lg aspect-video'/>
            </div>
        </motion.div>

        <motion.div 
         initial={{translateX : 120 , filter : 'blur(10px)'}}
         whileInView={{translateX : 0 ,filter : 'blur(0px)', transition :{
             duration : 0.5 ,
             delay : 0.02
         }}}
        className='flex flex-col lg:flex-row lg:gap-40 gap-20 w-3/4 justify-center  my-8 py-10'>
            <div className='w-full flex items-center justify-center'>
                <img src="https://www.eweek.com/wp-content/uploads/2023/06/ew-what-is-ai-as-a-service.png" alt=""  className='w-full rounded-lg aspect-video'/>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='lg:text-3xl text-2xl font-semibold bg-[#F5F5F7] rounded-full border p-3'>Artificial Intelligence</h1>
                <p className='mt-8 w-full'>Artificial Intelligence (AI) involves creating systems that can perform tasks that normally require human intelligence. This includes problem-solving, understanding natural language, and recognizing patterns.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full aspect-video'
                ><Link className="block" to="/services/4">
                View more
                </Link></button>
            </div>
        </motion.div>

        <motion.div 
         initial={{translateX : -120 , filter : 'blur(10px)'}}
         whileInView={{translateX : 0 ,filter : 'blur(0px)', transition :{
             duration : 0.5 ,
             delay : 0.02
         }}}
        className='flex flex-col-reverse lg:flex-row lg:gap-40  gap-20 w-3/4 justify-center py-10  p-2 my-8'>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='lg:text-3xl font-semibold bg-[#F5F5F7] rounded-full border p-3 text-2xl'>Web Development</h1>
                <p className='mt-8 w-full'>Web development encompasses building and maintaining websites and web applications. It involves various technologies such as HTML, CSS, JavaScript, and frameworks like React or Angular.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full'
                ><Link className="block" to="/services/5">
                View more
                </Link></button>
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg" alt=""  className='w-full rounded-lg aspect-video'/>
            </div>
        </motion.div>

        </div>
      </div>
      <Contact />
    </div>
  );
}
