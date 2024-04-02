import { useState } from 'react'
import LogoImage from '../assets/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { Link} from 'react-router-dom'

export function MobileNavMenu ({navLinks , handleClick}) {

return (
  <motion.div
  className='lg:hidden w-screen h-[90vh] flex flex-col gap-10 fixed bg-white top-20 left-0 z-10 pt-2  '
  initial={{ clipPath : 'circle(0.4% at 100% 0)'}}
  animate={{clipPath : ' circle(140.7% at 99% 0)'}}
  transition={{duration : 0.4}}
  >
    <div className='flex flex-col items-center w-full'>
      {
        navLinks.map((item) => (
          <h2 
          key={item.Link}
          className='mt-6 text-4xl font-semibold text-gray-500'
          >
          <Link to={item.Link} onClick={handleClick}>{item.Page}</Link>
          </h2>
        ))
      }
    </div>
    <div className='text-center mt-4'>
      <button className='bg-primary px-4 py-4 w-80 rounded-full text-white font-semibold'>
        Get Quote
      </button>
    </div>
    <div className='flex items-center justify-center gap-6'>
      <FontAwesomeIcon icon={faSquareInstagram}  className='size-10 text-gray-600'/>
      <FontAwesomeIcon icon={faSquareFacebook}  className='size-10 text-gray-600'/>
      <FontAwesomeIcon icon={faSquareTwitter}  className='size-10 text-gray-600'/>
      <FontAwesomeIcon icon={faTiktok}  className='size-10 text-gray-600'/>
    </div>

  </motion.div>
)

}

export function DesktopNavMenu ({navLinks , handleClick}) {
  return (
  <motion.div
  className='hidden lg:flex w-screen h-[90vh] gap-40 fixed bg-white top-30 left-0 z-10 pt-20 justify-center shadow-md'
  initial={{  clipPath : 'circle(0.4% at 100% 46%)'}}
  animate={{  clipPath : 'circle(70.7% at 50% 50%)'}}
  transition={{duration : 0.4}}
  >
    <div className='flex flex-col justify-start '>
      <h1 className='text-xs'>Get in touch</h1>
      <p className='text-md mt-2'>info@tetrastudio.com</p>

      <div className='mt-12'>
      <h1 className='text-sm'>Socials</h1>
      <h2 className='text-md font-semibold mt-2 text-gray-500'>Instagram</h2>
      <h2 className='text-md font-semibold mt-2 text-gray-500'>Facebook</h2>
      <h2 className='text-md font-semibold mt-2 text-gray-500'>Tiktok</h2>
      <h2 className='text-md font-semibold mt-2 text-gray-500'>twitter</h2>
      </div>
    </div>

    <div>
    <h1 className='text-xs'>Menu</h1>
    {
      navLinks.map((item) => (
        <h2 
        key={item.Link}
        className='mt-6 text-4xl font-semibold text-gray-500'
        >
        <Link to={item.Link} onClick={handleClick}>{item.Page}</Link>
        </h2>
      ))
    }
    </div>
  </motion.div> 
  )
}


function Navbar() {
  const navLinks = [
    {
      Page  : "Home",
      Link : "/"
    } ,
    {
      Page  : "Services",
      Link : "/services"
    },
    {
      Page  : "About US",
      Link : "about"
    },
    {
      Page  : "Projects",
      Link : "/projects"
    },
    {
      Page : "Contact",
      Link : "/contact"
    }
  ]
  
  const handleClick = () => {
    setIsActive(!isActive)
  }
  const [isActive , setIsActive] = useState(false);

  return (
    <div className="overflow-hidden sticky top-0 bg-white">
      <div className="container mx-auto px-2 flex justify-between items-center">
        <div>
            <img src={LogoImage} alt="Logo" className='size-20' />
        </div>
        <div className='z-20'>
            <button 
            className='size-[45px] lg:size-[60px] bg-primary rounded-full flex items-center justify-center cursor-pointer z-20'
            onClick={handleClick}
            >
               {
                isActive ? <FontAwesomeIcon icon={faXmark} className='text-white' /> :
                <FontAwesomeIcon icon={faBars}  className='text-white'/>
               } 
            </button>
            {isActive && <DesktopNavMenu navLinks={navLinks} handleClick={handleClick} />}
            {isActive && <MobileNavMenu navLinks={navLinks} handleClick={handleClick}/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
