import { useEffect } from "react"
import Routers from "./Router"
import Lenis from '@studio-freight/lenis'



function App() {

useEffect(() => {
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  } , [])
 

  return (
    <div>
      <Routers />
    </div>
    
  )
}

export default App
