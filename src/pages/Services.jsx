import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function Services() {


  return (
    <div>
      <motion.div 
      initial={{y: 40 , opacity : 0}}
      animate={{y : 0 , opacity : 1}}
      transition={{duration : 1 , delay: 0.3}}
      className="w-full text-center text-xl font-semibold text-accent/50 mt-10 py-10">
        <h1>Services</h1>
      </motion.div>

      <motion.div 
        initial={{y: 40 , opacity : 0}}
        animate={{y : 0 , opacity : 1}}
        transition={{duration : 1 , delay: 0.4}}
      className="container mx-auto text-center flex flex-col items-center mt-10 gap-10">
        <div className="w-full flex justify-center">
          <p className=" lg:text-4xl text-xl font-semibold w-1/2">
            Branding, visual concept & digital designs, we've got everything
            covered.
          </p>
        </div>
        <h1 className="text-5xl animate-bounce mt-10 mb-16" >👇</h1>
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
                <h1 className='text-3xl font-semibold p-3 bg-[#F5F5F7] rounded-full border'>Logo Design</h1>
                <p className='mt-8 w-full'>Craft a unique and memorable visual identity for your brand with custom logo designs tailored to your business.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full'
                >View more</button>
            </div>
            <div className='w-full'>
                <img src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg" alt=""  className='w-full rounded-lg'/>
            </div>
        </motion.div>

        <motion.div 
         initial={{translateX : 120 , filter : 'blur(10px)' }}
         whileInView={{translateX : 0 , filter : 'blur(0px)', transition :{
             duration : 0.5 ,
             delay : 0.02
         }}}
        className='flex flex-col lg:flex-row lg:gap-40 gap-20 w-3/4 justify-center  m my-8 py-10'>
            <div className='w-full'>
                <img src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg" alt=""  className='w-full rounded-lg'/>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-3xl font-semibold bg-[#F5F5F7] rounded-full border p-3'>Illustration</h1>
                <p className='mt-8 w-full'>Create captivating illustrations that communicate ideas, stories, or concepts visually, adding personality to your projects.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full'
                >View more</button>
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
                <h1 className='text-3xl font-semibold bg-[#F5F5F7] rounded-full border p-3'>Vector Graphics</h1>
                <p className='mt-8 w-full'>Produce scalable vector graphics (SVG) that can be resized without losing quality, perfect for logos, icons, and more.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full'
                >View more</button>
            </div>
            <div className='w-full'>
                <img src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg" alt=""  className='w-full rounded-lg'/>
            </div>
        </motion.div>

        <motion.div 
         initial={{translateX : 120 , filter : 'blur(10px)'}}
         whileInView={{translateX : 0 ,filter : 'blur(0px)', transition :{
             duration : 0.5 ,
             delay : 0.02
         }}}
        className='flex flex-col lg:flex-row lg:gap-40 gap-20 w-3/4 justify-center  m my-8 py-10'>
            <div className='w-full'>
                <img src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg" alt=""  className='w-full rounded-lg'/>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-3xl font-semibold bg-[#F5F5F7] rounded-full border p-3'>Print Design</h1>
                <p className='mt-8 w-full'>Design visually appealing print materials such as flyers, brochures, posters, and business cards to leave a lasting impression.</p>
                <button
                className='mt-8 p-2 border border-accent hover:bg-accent hover:text-white rounded-full'
                >View more</button>
            </div>
        </motion.div>

        </div>
      </div>
      <Contact />
    </div>
  );
}
