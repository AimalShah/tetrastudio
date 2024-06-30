import  { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713464238868-666e916225af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const fakeTestimonials = [
  "Outstanding creativity and professionalism! The design agency brought our vision to life with precision and flair. Our brand identity is now captivating and cohesive, thanks to their innovative designs. Highly recommend! - Sarah T., CEO of TechNova Solutions",
  "Incredible attention to detail and a keen eye for aesthetics! The design agency exceeded our expectations in every aspect. From logo design to website development, they demonstrated expertise and dedication. Our business has seen a significant boost in engagement since collaborating with them. - Michael P., Marketing Director at BrightWave Enterprises",
  "Working with the design agency was a game-changer for us! Their ability to translate our ideas into visually stunning concepts was impressive. The team's professionalism and responsiveness made the entire process seamless. We're thrilled with the results and look forward to future collaborations! - Emily L., Founder of LunaBloom Cosmetics",
  "Top-notch design services that elevate brands to new heights! The design agency's strategic approach and creative solutions transformed our brand identity. Their designs not only captivate our target audience but also set us apart from the competition. A truly remarkable team to work with! - David W., Director of Marketing at Summit Solutions",
  "Exceptional talent and exceptional results! The design agency understood our brand ethos from the get-go and delivered designs that perfectly encapsulated our values. Their ability to blend creativity with functionality is commendable. Working with them was a pleasure, and we're thrilled with the outcome! - Jessica R., Co-founder of GreenGrove Wellness",
  "Simply phenomenal! The design agency's commitment to excellence is unmatched. They took our outdated branding and gave it a modern, sleek makeover that resonates with our target audience. The entire process was smooth, and the final deliverables exceeded our expectations. Highly recommend their services! - Alex H., Operations Manager at BlueSky Ventures",
  "Simply phenomenal! The design agency's commitment to excellence is unmatched. They took our outdated branding and gave it a modern, sleek makeover that resonates with our target audience. The entire process was smooth, and the final deliverables exceeded our expectations. Highly recommend their services! - Alex H., Operations Manager at BlueSky Ventures"

];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="lg:h-[70vh] h-[92vh] container mx-auto relative overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="lg:h-[68vh] h-[80vh] container shrink-0 flex object-cover lg:p-0 px-2 border-2 border-black "
          > 
          <div className="relative w-full flex justify-center flex-col lg:gap-20 gap-8 lg:items-start items-center p-8">
            <div className="flex justify-center absolute lg:bottom-[94%] bottom-[98%] left-1/2 transform -translate-x-1/2 px-4 bg-[#F1F1F1] w-fit rounded-full">
              <div className="lg:block hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
            </div>

            <div className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"/></svg>
            </div>
            </div>
            <div className="lg:text-2xl lg:text-center text-lg text-center font-semibold lg:mt-10" >
              <span className="text-5xl font-semibold font-Garamond"> &quot; </span>  {fakeTestimonials[idx]} <span className="  text-4xl font-semibold font-Garamond">  &quot; </span>
            </div>
            <div className="text-center w-full"> 
             client Name - Compnay Name
            </div>
          </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-900" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};



export default SwipeCarousel;