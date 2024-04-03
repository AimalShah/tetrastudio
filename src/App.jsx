import { useRef } from "react"
import Routers from "./Router"

function App() {
  const containerRef = useRef(null)

  return (
    <div data-scroll-container ref={containerRef}>
      <Routers />
    </div>
  )
}

export default App
