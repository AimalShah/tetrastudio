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
  }, []);

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
            className="lg:h-[58vh] h-[80vh] container shrink-0 rounded-xl flex object-cover  shadow-lg bg-accent/40  lg:p-0 px-2"
          > 
          <div className=" w-full flex  flex-col justify-between gap-2 lg:items-start items-center py-4 ps-8">
            <div className="">
              <img src="https://utfs.io/f/9c2c324e-1d6a-4b69-8e48-2855b8e79001-1myz47.jpeg"
              className="lg:size-20  size-20 rounded-full border-2 border-black"
              alt="" />
            </div>
            <div className="lg:w-3/4 lg:text-lg lg:text-start text-xl text-center font-semibold font-Garamond" >
              <span className=" text-5xl font-bold"> &quot; </span>  {fakeTestimonials[idx]} <span className="  text-4xl font-bold">  &quot; </span>
            </div>
            <div>
             client Name - Compnay Name
            </div>
          </div>
          <div 
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full rounded-xl hidden lg:block"
          ></div>
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

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default SwipeCarousel;