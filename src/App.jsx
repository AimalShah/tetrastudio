import Routers from "./Router"
import { ReactLenis} from '@studio-freight/react-lenis'


function App() {

 

  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 4, smoothTouch: true }}>
      <Routers />
    </ReactLenis>
  )
}

export default App
