
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import Footer from "./components/Footer";
import SubServices from "./pages/SubServices";

function ScrollToTop() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  } , [pathname]);

  return null;
}

function Routers() {

  return (
    <div className="overflow-x-hidden">
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<SubServices />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<SingleProject />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Routers;
