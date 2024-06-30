import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence , useScroll , useMotionValueEvent} from "framer-motion";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import LogoImg from "../assets/Logo.svg"



export function MobileNavMenu({ navLinks, handleClick }) {
  return (
    <AnimatePresence>
      <motion.div
        className="lg:hidden w-screen h-[90vh] flex flex-col gap-10 fixed  bg-white top-18 left-0 z-50 pt-2 "
        initial={{ clipPath: "circle(0.4% at 100% 0)" }}
        animate={{ clipPath: " circle(140.7% at 99% 0)" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center w-full">
          {navLinks.map((item) => (
            <h2
              key={item.Link}
              className="mt-6 text-4xl font-semibold text-gray-500"
            >
              <Link to={item.Link} onClick={handleClick}>
                {item.Page}
              </Link>
            </h2>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to='/contact' onClick={handleClick}>
          <button className="bg-accent px-4 py-4 w-80 rounded-full text-white font-semibold">
            Get Quote
          </button>
          </Link>
        </div>
        <div className="mt-2">
          <Socials size={40}/>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function DesktopNavMenu({ navLinks, handleClick }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="hidden lg:flex w-screen h-[100vh] gap-40 fixed bg-white top-30 left-0 z-10 pt-20 justify-center shadow-md"
        initial={{ clipPath: "circle(0.4% at 100% 46%)" }}
        animate={{ clipPath: "circle(70.7% at 50% 50%)" }}
        exit={{clipPath: "circle(0.4% at 100% 46%)"}}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col justify-start ">
          <h1 className="text-xs">Get in touch</h1>
          <a href="mailto:info@tetrastudio.net"><p className="text-md mt-2">info@tetrastudio.net</p></a>
          <div className="mt-12">
            <h1 className="text-sm">Socials</h1>
            <h2 className="text-md font-semibold mt-2 text-gray-500">
              <a href="https://www.instagram.com/tetrastudiopk/" className="block">
              Instagram
              </a>
            </h2>
            <h2 className="text-md font-semibold mt-2 text-gray-500">
              <a href="https://www.facebook.com/tetrastudiopk" className="block">
              Facebook
              </a>
            </h2>
            <h2 className="text-md font-semibold mt-2 text-gray-500">
              <a href="https://www.youtube.com/@tetrastudiopk" className="block">
              Youtube
              </a>
              </h2>
            <h2 className="text-md font-semibold mt-2 text-gray-500">
              <a href="https://www.linkedin.com/company/tetrastudiopk/" className="block">
              LinkedIn
              </a>
            </h2>
          </div>
        </div>

        <div>
          <h1 className="text-xs">Menu</h1>
          {navLinks.map((item) => (
            <h2
              key={item.Link}
              className="mt-6 text-4xl font-semibold text-gray-500"
            >
              <Link to={item.Link} onClick={handleClick}>
                {item.Page}
              </Link>
            </h2>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Navbar() {

  const [hidden , setHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const navLinks = [
    {
      Page: "Home",
      Link: "/",
    },
    {
      Page: "Services",
      Link: "/services",
    },
    {
      Page: "Projects",
      Link: "/projects",
    },
    {
      Page: "Contact",
      Link: "/contact",
    },
    {
      Page: "About Us",
      Link: "/about",
    },
  ];

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const bg = isActive ? "white" : "transparent"
  const {scrollY} = useScroll()

  useMotionValueEvent(scrollY , "change" , (latest) => {
    const previous = scrollY.getPrevious()

    if(latest > previous && latest > 50){
      setHidden(true)
    } else {
      setHidden(false)
    }

  })


  return (
    <motion.div 
    variants={{
      visible : {y :0},
      hidden:{y : "-100%"}
    }}
    animate = {hidden ? "hidden" : "visible"}
    transition={{duration : 0.3}} 
    style={{
      backgroundColor : bg
    }}
    className="fixed w-full top-0 z-50 px-4">

      <div className="flex justify-between items-center px-[5%]">
        <Link to='/'>
        <div className="text-4xl font-bold">
          <img src={LogoImg} alt="logo" className="size-20" />
        </div>
        </Link>
        <div className="z-20">
          <button
            className="size-[45px] lg:size-[60px] bg-accent rounded-full flex  items-center justify-center cursor-pointer z-20"
            onClick={handleClick}
          >
            {isActive ? (
              <FontAwesomeIcon icon={faXmark} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-white" />
            )}
          </button>
          {isActive && (
            <DesktopNavMenu navLinks={navLinks} handleClick={handleClick} />
          )}
          {isActive && (
            <MobileNavMenu navLinks={navLinks} handleClick={handleClick} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
