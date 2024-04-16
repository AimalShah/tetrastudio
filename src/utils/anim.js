export const fadeInAnimationVariants = {
    initial : {
      y: 50,
      opacity : 0,
    } , 
    animate : (index) => ({
      y:0 ,
      opacity : 1 ,
      transition : {
        duration : 0.5,
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
export const  paragraphAnimation = {
  initial : {
    y : 100
  } , 
  animate : () =>  ({
    y : 0, 
    transition : {
      duration : 4,
      ease : "linear",
      type : "tween"
    }
  }),
}
