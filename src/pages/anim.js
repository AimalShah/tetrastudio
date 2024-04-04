export const fadeInAnimationVariants = {
    initial : {
      opacity : 0,
       y: 100
    } , 
    animate : (index) => ({
      opacity : 1 ,
        y:0 ,
      transition : {
        delay : 0.04 * index ,
        type : "tween"
      }
    }),
  }
 export const cardAnimationVaritent = {
    initial : {
      opacity : 0,
       x: -100
    } , 
    animate : (index) => ({
      opacity : 1 ,
      x : 0,
      transition : {
        delay : 0.1 * index ,
        ease : "linear"
      }
    }),
  } 