import { useEffect } from "react"
import Routers from "./Router"
import Lenis from '@studio-freight/lenis'



function App() {

useEffect(() => {
    const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

window.history.scrollRestoration = 'manual'

requestAnimationFrame(raf)
  } , [])
 

  return (
    <div>
      <Routers />
    </div>
    
  )
}

export default App
